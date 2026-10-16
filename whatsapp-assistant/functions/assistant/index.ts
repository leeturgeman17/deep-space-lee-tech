// Edge function entry point.
//   POST /assistant/webhook?token=...   Green API incoming-message webhook
//   POST /assistant/tick                 every minute from pg_cron: sends due reminders
//   POST /assistant/tick?mode=briefing   once a morning from pg_cron: daily summary
// Both tick routes require the x-tick-secret header.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "@supabase/supabase-js";
import { runAgent } from "./agent.ts";
import { parseIncoming, sendWhatsApp } from "./greenapi.ts";
import { chatIdFor, getConfig } from "./config.ts";
import { TZ, nextOccurrence } from "./time.ts";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
  auth: { persistSession: false },
});

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (req.method !== "POST") return new Response("ok");

  const cfg = await getConfig(db);

  if (url.pathname.endsWith("/webhook")) {
    if (!secretMatches(url.searchParams.get("token"), cfg.webhook_token)) {
      return new Response("forbidden", { status: 403 });
    }
    const body = await req.json().catch(() => null);
    const msg = parseIncoming(body);
    // Answer Green API at once; the model call can take a while.
    if (msg && msg.chatId === chatIdFor(cfg.lee_phone)) EdgeRuntime.waitUntil(handleIncoming(msg));
    return new Response("ok");
  }

  if (url.pathname.endsWith("/tick")) {
    if (!secretMatches(req.headers.get("x-tick-secret"), cfg.tick_secret)) {
      return new Response("forbidden", { status: 403 });
    }
    if (url.searchParams.get("mode") === "briefing") {
      // Fired twice (05:30 and 06:30 UTC); only the run at 08:xx Israel time counts. No briefing on Shabbat.
      const local = new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", weekday: "short", hour12: false }).formatToParts(new Date());
      const hour = Number(local.find((p) => p.type === "hour")!.value);
      const day = local.find((p) => p.type === "weekday")!.value;
      if (hour !== 8 || day === "Sat") return new Response("skipped");
      EdgeRuntime.waitUntil(sendBriefing(chatIdFor(cfg.lee_phone)));
      return new Response("briefing started");
    }
    const sent = await sendDueReminders(chatIdFor(cfg.lee_phone));
    return Response.json({ sent });
  }

  return new Response("not found", { status: 404 });
});

async function handleIncoming(msg: NonNullable<ReturnType<typeof parseIncoming>>) {
  const chatId = msg.chatId;
  try {
    if ("unsupported" in msg) {
      await sendWhatsApp(chatId, "כרגע אני מבין רק הודעות טקסט. אפשר לכתוב לי את זה?");
      return;
    }
    // The unique wa_message_id makes Green API retries no-ops.
    const { error } = await db.from("assistant_messages").insert({ role: "user", content: msg.text, wa_message_id: msg.idMessage });
    if (error) {
      if (error.code === "23505") return;
      throw error;
    }
    const reply = await runAgent(db, { kind: "chat", text: msg.text });
    if (!reply) return;
    await sendWhatsApp(chatId, reply);
    await db.from("assistant_messages").insert({ role: "assistant", content: reply });
  } catch (e) {
    console.error("handleIncoming failed", e);
    await sendWhatsApp(chatId, "הייתה לי תקלה בטיפול בהודעה. אפשר לשלוח שוב בעוד דקה?").catch(() => {});
  }
}

async function sendDueReminders(leeChatId: string): Promise<number> {
  const { data: due, error } = await db.rpc("assistant_claim_due_reminders");
  if (error) throw error;
  let sent = 0;
  for (const r of due ?? []) {
    const text = `⏰ תזכורת: ${r.text}`;
    try {
      await sendWhatsApp(leeChatId, text);
    } catch (e) {
      console.error("reminder send failed", r.id, e);
      await db.from("assistant_reminders").update({ status: "pending" }).eq("id", r.id);
      continue;
    }
    sent++;
    const next = nextOccurrence(new Date(r.due_at), r.recurrence, new Date());
    await db
      .from("assistant_reminders")
      .update(next ? { status: "pending", due_at: next.toISOString(), sent_at: new Date().toISOString() } : { status: "sent", sent_at: new Date().toISOString() })
      .eq("id", r.id);
    // Log it so the assistant knows what Lee is replying to ("דחה בשעה").
    await db.from("assistant_messages").insert({ role: "assistant", content: `${text} (#${r.id})` });
  }
  return sent;
}

async function sendBriefing(leeChatId: string) {
  try {
    const text = await runAgent(db, { kind: "briefing" });
    if (!text) return;
    await sendWhatsApp(leeChatId, text);
    await db.from("assistant_messages").insert({ role: "assistant", content: text });
  } catch (e) {
    console.error("briefing failed", e);
  }
}

function secretMatches(given: string | null, expected: string | undefined): boolean {
  if (!given || !expected || given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i++) diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}
