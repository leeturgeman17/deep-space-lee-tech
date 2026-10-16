-- Schedules: reminders every minute, morning briefing at 08:30 Israel time.
-- pg_cron runs in UTC, so the briefing fires at 05:30 and 06:30 UTC and the
-- function only acts on the one that is 08:xx in Israel (handles DST).
create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.unschedule(jobname) from cron.job
 where jobname in ('assistant-reminders', 'assistant-briefing');

select cron.schedule('assistant-reminders', '* * * * *', $$
  select net.http_post(
    url := 'https://rnzviymgsihucrtfbfyp.supabase.co/functions/v1/assistant/tick',
    headers := jsonb_build_object('Content-Type', 'application/json',
      'x-tick-secret', (select value from public.assistant_config where key = 'tick_secret')),
    body := '{}'::jsonb)
$$);

select cron.schedule('assistant-briefing', '30 5,6 * * *', $$
  select net.http_post(
    url := 'https://rnzviymgsihucrtfbfyp.supabase.co/functions/v1/assistant/tick?mode=briefing',
    headers := jsonb_build_object('Content-Type', 'application/json',
      'x-tick-secret', (select value from public.assistant_config where key = 'tick_secret')),
    body := '{}'::jsonb)
$$);
