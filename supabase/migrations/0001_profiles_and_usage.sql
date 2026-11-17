-- Profiles: one row per auth user. Role gates internal vs external tools.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'customer' check (role in ('customer', 'internal', 'admin')),
  created_at timestamptz not null default now()
);

-- Usage log: one row per tool run, used for per-user limits and billing later.
create table public.tool_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  tool_slug text not null,
  input_tokens integer,
  output_tokens integer,
  created_at timestamptz not null default now()
);
create index tool_runs_user_created_idx on public.tool_runs (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.tool_runs enable row level security;

-- Users can read their own profile. Role changes are made server-side only.
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

-- Users can read their own runs. Inserts come from server functions (service role).
create policy "tool_runs_select_own" on public.tool_runs
  for select using (auth.uid() = user_id);

-- Create a profile automatically on signup.
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
