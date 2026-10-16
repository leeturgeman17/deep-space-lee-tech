-- WhatsApp personal assistant: memory, clients, reminders, conversation log.
-- All tables are server-only (RLS on, no policies): only the edge functions,
-- which use the service role key, can read or write them.

create table if not exists public.assistant_memory (
  id bigint generated always as identity primary key,
  fact text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.assistant_clients (
  id bigint generated always as identity primary key,
  name text not null unique,
  phone text,
  status text not null default 'active',          -- active | lead | paused | done
  notes text not null default '',
  next_action text,
  next_action_at timestamptz,
  last_contact_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.assistant_reminders (
  id bigint generated always as identity primary key,
  text text not null,
  due_at timestamptz not null,
  recurrence text not null default 'none'
    check (recurrence in ('none', 'daily', 'weekdays', 'weekly', 'monthly')),
  client_id bigint references public.assistant_clients(id) on delete set null,
  status text not null default 'pending'
    check (status in ('pending', 'sending', 'sent', 'cancelled')),
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists assistant_reminders_due_idx
  on public.assistant_reminders (due_at) where status = 'pending';

create table if not exists public.assistant_messages (
  id bigint generated always as identity primary key,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  wa_message_id text unique,                        -- dedupes webhook retries
  created_at timestamptz not null default now()
);

alter table public.assistant_memory    enable row level security;
alter table public.assistant_clients   enable row level security;
alter table public.assistant_reminders enable row level security;
alter table public.assistant_messages  enable row level security;

-- Atomically claim due reminders so overlapping ticks never double-send.
create or replace function public.assistant_claim_due_reminders()
returns setof public.assistant_reminders
language sql
security definer
set search_path = public
as $$
  update public.assistant_reminders r
     set status = 'sending'
   where r.id in (
     select id from public.assistant_reminders
      where status = 'pending' and due_at <= now()
      order by due_at
      limit 20
      for update skip locked
   )
  returning r.*;
$$;
revoke all on function public.assistant_claim_due_reminders() from public, anon, authenticated;

-- Settings that are not API credentials. Secrets are random per install.
create table if not exists public.assistant_config (
  key text primary key,
  value text not null
);
alter table public.assistant_config enable row level security;
insert into public.assistant_config (key, value) values
  ('webhook_token', encode(extensions.gen_random_bytes(24), 'hex')),
  ('tick_secret',   encode(extensions.gen_random_bytes(24), 'hex')),
  ('lee_phone',     '')
on conflict (key) do nothing;
