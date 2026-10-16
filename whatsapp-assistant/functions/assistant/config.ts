// Non-credential settings live in the private assistant_config table, so they can be
// changed with SQL instead of redeploying. API keys stay in edge function secrets.

import type { SupabaseClient } from "@supabase/supabase-js";

export type Config = {
  webhook_token: string; // must appear as ?token=... on the Green API webhook URL
  tick_secret: string; // sent by pg_cron in the x-tick-secret header
  lee_phone: string; // Lee's own WhatsApp number, e.g. 972501234567
};

let cached: { at: number; value: Config } | null = null;

export async function getConfig(db: SupabaseClient): Promise<Config> {
  if (cached && Date.now() - cached.at < 60_000) return cached.value;
  const { data, error } = await db.from("assistant_config").select("key, value");
  if (error) throw error;
  const map = Object.fromEntries((data ?? []).map((r) => [r.key, r.value]));
  cached = { at: Date.now(), value: map as Config };
  return cached.value;
}

/** WhatsApp chat id, e.g. 972501234567@c.us */
export function chatIdFor(phone: string): string {
  const raw = (phone ?? "").replace(/\D/g, "");
  const intl = raw.startsWith("0") ? "972" + raw.slice(1) : raw;
  return `${intl}@c.us`;
}
