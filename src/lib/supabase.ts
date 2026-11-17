import { createClient } from "@supabase/supabase-js";

// Public project URL and anon key. The anon key is safe in the browser ONLY because
// every table has Row Level Security enabled (see supabase/migrations).
// Never put the service_role key in this repo or in any VITE_ variable.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigured = Boolean(url && anonKey);

export const supabase = createClient(
  url ?? "https://placeholder.supabase.co",
  anonKey ?? "placeholder",
);
