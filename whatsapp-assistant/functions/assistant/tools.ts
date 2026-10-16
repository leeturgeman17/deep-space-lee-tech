// The assistant's tools: reminders, clients and long-term memory, all in Postgres.

import type Anthropic from "@anthropic-ai/sdk";
import type { SupabaseClient } from "@supabase/supabase-js";
import { formatIsrael } from "./time.ts";

type Tool = Anthropic.Beta.BetaTool;

const obj = (properties: Record<string, unknown>, required: string[] = []) => ({
  type: "object" as const,
  properties,
  required,
  additionalProperties: false,
});

export const TOOLS: Tool[] = [
  {
    name: "create_reminder",
    description:
      "Schedule a WhatsApp reminder to Lee. due_at must be an ISO-8601 timestamp WITH the Israel offset (e.g. 2026-10-18T09:00:00+03:00). Write `text` as the exact message Lee should receive at that time, in Hebrew, with enough context to act on it.",
    input_schema: obj(
      {
        text: { type: "string" },
        due_at: { type: "string" },
        recurrence: { type: "string", enum: ["none", "daily", "weekdays", "weekly", "monthly"] },
        client_name: { type: "string", description: "Existing client name this reminder is about, if any." },
      },
      ["text", "due_at", "recurrence"],
    ),
  },
  {
    name: "list_reminders",
    description: "List Lee's pending reminders (soonest first).",
    input_schema: obj({}),
  },
  {
    name: "update_reminder",
    description: "Change the text, time or recurrence of a pending reminder.",
    input_schema: obj(
      {
        id: { type: "integer" },
        text: { type: "string" },
        due_at: { type: "string" },
        recurrence: { type: "string", enum: ["none", "daily", "weekdays", "weekly", "monthly"] },
      },
      ["id"],
    ),
  },
  {
    name: "cancel_reminder",
    description: "Cancel a pending reminder.",
    input_schema: obj({ id: { type: "integer" } }, ["id"]),
  },
  {
    name: "upsert_client",
    description:
      "Create or update a client by name. Use it whenever Lee tells you something about a client: notes_append adds a dated line to the client's notes (never rewrite old notes).",
    input_schema: obj(
      {
        name: { type: "string" },
        phone: { type: "string" },
        status: { type: "string", enum: ["lead", "active", "paused", "done"] },
        notes_append: { type: "string" },
        next_action: { type: "string" },
        next_action_at: { type: "string", description: "ISO-8601 with Israel offset" },
        last_contact_at: { type: "string", description: "ISO-8601 with Israel offset; set when Lee says they spoke with them" },
      },
      ["name"],
    ),
  },
  {
    name: "get_client",
    description: "Full details and notes of one client (fuzzy name match).",
    input_schema: obj({ name: { type: "string" } }, ["name"]),
  },
  {
    name: "remember",
    description:
      "Save a lasting fact about Lee, Lee's business, preferences or way of working, so you know it in future conversations. One short fact per call.",
    input_schema: obj({ fact: { type: "string" } }, ["fact"]),
  },
  {
    name: "forget",
    description: "Delete a saved fact that is wrong or outdated (by its id from the memory list).",
    input_schema: obj({ id: { type: "integer" } }, ["id"]),
  },
];

export async function runTool(db: SupabaseClient, name: string, input: any): Promise<string> {
  switch (name) {
    case "create_reminder": {
      const due = parseDate(input.due_at);
      if (!due) return err("due_at is not a valid ISO-8601 timestamp");
      if (due.getTime() < Date.now() - 60_000) return err("due_at is in the past");
      const clientId = input.client_name ? await findClientId(db, input.client_name) : null;
      const { data, error } = await db
        .from("assistant_reminders")
        .insert({ text: input.text, due_at: due.toISOString(), recurrence: input.recurrence ?? "none", client_id: clientId })
        .select("id")
        .single();
      if (error) return err(error.message);
      return ok({ id: data.id, scheduled_for: formatIsrael(due), recurrence: input.recurrence });
    }
    case "list_reminders": {
      const { data, error } = await db
        .from("assistant_reminders")
        .select("id, text, due_at, recurrence")
        .eq("status", "pending")
        .order("due_at")
        .limit(50);
      if (error) return err(error.message);
      return ok(data.map((r) => ({ ...r, due_at: formatIsrael(new Date(r.due_at)) })));
    }
    case "update_reminder": {
      const patch: Record<string, unknown> = {};
      if (input.text) patch.text = input.text;
      if (input.recurrence) patch.recurrence = input.recurrence;
      if (input.due_at) {
        const due = parseDate(input.due_at);
        if (!due) return err("due_at is not a valid ISO-8601 timestamp");
        patch.due_at = due.toISOString();
      }
      const { data, error } = await db
        .from("assistant_reminders")
        .update(patch)
        .eq("id", input.id)
        .eq("status", "pending")
        .select("id");
      if (error) return err(error.message);
      return data.length ? ok({ updated: input.id }) : err("no pending reminder with that id");
    }
    case "cancel_reminder": {
      const { data, error } = await db
        .from("assistant_reminders")
        .update({ status: "cancelled" })
        .eq("id", input.id)
        .eq("status", "pending")
        .select("id");
      if (error) return err(error.message);
      return data.length ? ok({ cancelled: input.id }) : err("no pending reminder with that id");
    }
    case "upsert_client": {
      const { data: existing } = await db.from("assistant_clients").select("*").ilike("name", input.name).maybeSingle();
      const row: Record<string, unknown> = { name: existing?.name ?? input.name, updated_at: new Date().toISOString() };
      for (const k of ["phone", "status", "next_action"]) if (input[k] !== undefined) row[k] = input[k];
      for (const k of ["next_action_at", "last_contact_at"]) {
        if (input[k] !== undefined) {
          const d = parseDate(input[k]);
          if (!d) return err(`${k} is not a valid ISO-8601 timestamp`);
          row[k] = d.toISOString();
        }
      }
      if (input.notes_append) {
        const line = `[${formatIsrael(new Date())}] ${input.notes_append}`;
        row.notes = existing?.notes ? `${existing.notes}\n${line}` : line;
      }
      const { error } = await db.from("assistant_clients").upsert(row, { onConflict: "name" });
      if (error) return err(error.message);
      return ok({ saved: row.name, created: !existing });
    }
    case "get_client": {
      const { data, error } = await db.from("assistant_clients").select("*").ilike("name", `%${input.name}%`).limit(3);
      if (error) return err(error.message);
      if (!data.length) return err("no client matches that name");
      return ok(data);
    }
    case "remember": {
      const { data, error } = await db.from("assistant_memory").insert({ fact: input.fact }).select("id").single();
      if (error) return err(error.message);
      return ok({ saved: data.id });
    }
    case "forget": {
      const { error } = await db.from("assistant_memory").delete().eq("id", input.id);
      if (error) return err(error.message);
      return ok({ deleted: input.id });
    }
    default:
      return err(`unknown tool ${name}`);
  }
}

async function findClientId(db: SupabaseClient, name: string): Promise<number | null> {
  const { data } = await db.from("assistant_clients").select("id").ilike("name", `%${name}%`).limit(1);
  return data?.[0]?.id ?? null;
}

function parseDate(s: unknown): Date | null {
  if (typeof s !== "string") return null;
  // Require an explicit offset so a bare "09:00" is never silently read as UTC.
  if (!/(Z|[+-]\d{2}:?\d{2})$/.test(s)) return null;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

const ok = (v: unknown) => JSON.stringify({ ok: true, result: v });
const err = (m: string) => JSON.stringify({ ok: false, error: m });
