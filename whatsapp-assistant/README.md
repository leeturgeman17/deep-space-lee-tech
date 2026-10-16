# WhatsApp personal assistant

A WhatsApp assistant for Lee that runs on Supabase (project `rnzviymgsihucrtfbfyp`), not on a local computer.

- `functions/assistant/`: the edge function (deployed as `assistant`, JWT verification off; it checks its own tokens).
  - `/webhook?token=…`: Green API sends incoming messages here. Only messages from `lee_phone` are handled.
  - `/tick`: pg_cron calls this every minute to send due reminders. `/tick?mode=briefing` sends the morning summary at 08:30 Israel time, Sunday to Friday.
- `migrations/`: tables (memory, clients, reminders, message log, config) and the cron jobs.

Edge function secrets: `ANTHROPIC_API_KEY`, `GREEN_API_ID_INSTANCE`, `GREEN_API_TOKEN`, and optionally `GREEN_API_URL` (the instance's apiUrl).
Other settings are rows in `public.assistant_config`: `lee_phone`, `webhook_token`, `tick_secret`.
