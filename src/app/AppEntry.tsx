import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "./AuthProvider";
import AppHome from "./AppHome";
import Office from "./Office";

// /app shows the owner's office to admins and the customer tool list to everyone else.
// The role is read for display only. Real enforcement is RLS plus the bvx-ops admin API.
export default function AppEntry() {
  const { user } = useAuth();
  const [role, setRole] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("role").eq("id", user.id).maybeSingle().then(({ data }) => setRole(data?.role ?? null));
  }, [user]);

  if (role === undefined) return <div style={{ padding: 48 }}>Loading…</div>;
  return role === "admin" ? <Office /> : <AppHome />;
}
