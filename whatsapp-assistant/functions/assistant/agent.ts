// The assistant's "brain": builds context from the database and runs a Claude tool loop.

import Anthropic from "@anthropic-ai/sdk";
import type { SupabaseClient } from "@supabase/supabase-js";
import { TOOLS, runTool } from "./tools.ts";
import { formatIsrael, isoIsrael } from "./time.ts";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY
const MODEL = "claude-opus-5-5";
const HISTORY_LIMIT = 30;
const MAX_STEPS = 10;

// Stable instructions first so they stay in the prompt cache; live data goes in a second block.
const SYSTEM = `את/ה העוזר/ת האישי/ת של לי, בעל/ת עסק לשיווק דיגיטלי ובניית מערכות (Deep Space Lee Tech). את/ה מדבר/ת עם לי בוואטסאפ, ורק עם לי.

התפקיד שלך:
- לעזור ללי לא לשכוח שום דבר: תזכורות, מעקב אחרי לקוחות ולידים, ומשימות פתוחות.
- להבין לבד מה לי מתכוון/ת גם כשההודעה קצרה או לא מדויקת, לפי מה שאת/ה כבר יודע/ת עליו/ה ועל הלקוחות. לשאול רק כשבאמת אי אפשר לנחש בסבירות גבוהה.
- לזכור: כשלי מספר/ת משהו קבוע על עצמו/ה, על העסק או על דרך העבודה - לשמור עם remember. כשלי מספר/ת משהו על לקוח - לעדכן עם upsert_client.

תזכורות:
- כל הזמנים הם שעון ישראל. "מחר" = היום הבא בשעון ישראל. "בבוקר" = 09:00, "בצהריים" = 13:00, "אחר הצהריים" = 16:00, "בערב" = 20:00, אלא אם לי למד/ה אותך אחרת.
- אחרי שקבעת תזכורת, אשר/י במשפט אחד: מה, ומתי (יום, תאריך ושעה).
- טקסט התזכורת הוא ההודעה שלי יקבל/תקבל בזמן הזה. כתוב/כתבי אותו כך שיהיה ברור מה לעשות ולמה, עם ההקשר הרלוונטי על הלקוח.

סגנון:
- עברית, קצר, ישיר, כמו הודעת וואטסאפ. בלי כותרות ובלי Markdown. אפשר רשימה קצרה עם מקפים.
- לפנות ללי באותו מין דקדוקי שלי משתמש/ת בו כשהוא/היא מדבר/ת על עצמו/ה. עד שזה ברור, לנסח בצורה ניטרלית.
- לא להמציא עובדות על לקוחות. אם אין מידע - להגיד.`;

type Mode = { kind: "chat"; text: string } | { kind: "briefing" };

export async function runAgent(db: SupabaseClient, mode: Mode): Promise<string> {
  const [memory, clients, reminders, history] = await Promise.all([
    db.from("assistant_memory").select("id, fact").order("id"),
    db
      .from("assistant_clients")
      .select("name, status, next_action, next_action_at, last_contact_at")
      .neq("status", "done")
      .order("name"),
    db.from("assistant_reminders").select("id, text, due_at, recurrence").eq("status", "pending").order("due_at").limit(30),
    mode.kind === "chat"
      ? db.from("assistant_messages").select("role, content").order("id", { ascending: false }).limit(HISTORY_LIMIT)
      : Promise.resolve({ data: [] as { role: string; content: string }[] }),
  ]);

  const now = new Date();
  const live = [
    `עכשיו: ${formatIsrael(now)} (${isoIsrael(now)})`,
    `\nמה שאת/ה יודע/ת על לי (id: עובדה):\n${(memory.data ?? []).map((m) => `${m.id}: ${m.fact}`).join("\n") || "(עדיין כלום)"}`,
    `\nלקוחות פעילים:\n${
      (clients.data ?? [])
        .map((c) =>
          [
            `- ${c.name} [${c.status}]`,
            c.next_action ? `הבא: ${c.next_action}${c.next_action_at ? ` (${formatIsrael(new Date(c.next_action_at))})` : ""}` : "",
            c.last_contact_at ? `קשר אחרון: ${formatIsrael(new Date(c.last_contact_at))}` : "",
          ]
            .filter(Boolean)
            .join(" | ")
        )
        .join("\n") || "(אין עדיין)"
    }`,
    `\nתזכורות פתוחות:\n${
      (reminders.data ?? [])
        .map((r) => `- #${r.id} ${formatIsrael(new Date(r.due_at))}${r.recurrence !== "none" ? ` (${r.recurrence})` : ""}: ${r.text}`)
        .join("\n") || "(אין)"
    }`,
  ].join("\n");

  const messages: Anthropic.Beta.BetaMessageParam[] = (history.data ?? [])
    .slice()
    .reverse()
    .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
  while (messages.length && messages[0].role !== "user") messages.shift();

  if (mode.kind === "chat") {
    messages.push({ role: "user", content: mode.text });
  } else {
    messages.push({
      role: "user",
      content:
        "[הודעה אוטומטית - סיכום בוקר] כתוב/כתבי ללי הודעת בוקר קצרה: מה מתוכנן היום (תזכורות ופעולות הבאות של לקוחות), לקוחות שלא היה איתם קשר הרבה זמן ושכדאי לחזור אליהם, ודבר אחד שהכי חשוב לעשות היום. אם אין כלום משמעותי - הודעה של שורה אחת.",
    });
  }

  const system: Anthropic.Beta.BetaTextBlockParam[] = [
    { type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } },
    { type: "text", text: live },
  ];

  for (let step = 0; step < MAX_STEPS; step++) {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "medium" },
      system,
      tools: TOOLS,
      messages,
    });

    if (response.stop_reason === "refusal") {
      return "לא הצלחתי לטפל בבקשה הזאת. אפשר לנסח אחרת?";
    }

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "pause_turn") continue;

    const toolUses = response.content.filter((b): b is Anthropic.Beta.BetaToolUseBlock => b.type === "tool_use");
    if (response.stop_reason !== "tool_use" || toolUses.length === 0) {
      return response.content
        .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();
    }

    const results: Anthropic.Beta.BetaToolResultBlockParam[] = [];
    for (const t of toolUses) {
      let out: string;
      try {
        out = await runTool(db, t.name, t.input);
      } catch (e) {
        out = JSON.stringify({ ok: false, error: String(e) });
      }
      results.push({ type: "tool_result", tool_use_id: t.id, content: out, is_error: out.startsWith('{"ok":false') });
    }
    messages.push({ role: "user", content: results });
  }
  return "משהו נתקע אצלי באמצע. אפשר לנסות שוב?";
}
