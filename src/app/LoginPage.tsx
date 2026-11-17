import { FormEvent, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { useAuth } from "./AuthProvider";

export default function LoginPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/app";
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to={from} replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const { error } =
      mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email, password,
            options: { emailRedirectTo: `${window.location.origin}/app` },
          });
    setBusy(false);
    if (error) return setMsg(error.message);
    if (mode === "signup") return setMsg("Check your email to confirm your account.");
    navigate(from, { replace: true });
  };

  const input = {
    width: "100%", padding: "14px 16px", borderRadius: 12, marginBottom: 12,
    border: "1px solid hsl(var(--home-border))", background: "hsl(var(--home-card))",
    color: "hsl(var(--home-fg))", font: "400 15px Inter",
  } as const;

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))", fontFamily: "Inter,sans-serif", padding: 24 }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 380 }}>
        <h1 style={{ font: "700 28px/1.2 Inter", margin: "0 0 20px" }}>
          {mode === "signin" ? "Sign in" : "Create your account"}
        </h1>
        {!supabaseConfigured && (
          <p style={{ color: "hsl(8 55% 44%)", font: "500 14px/1.5 Inter" }}>
            Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
          </p>
        )}
        <input style={input} type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
        <input style={input} type="password" required minLength={8} placeholder="Password (8+ characters)" value={password} onChange={e => setPassword(e.target.value)} autoComplete={mode === "signin" ? "current-password" : "new-password"} />
        <button disabled={busy || !supabaseConfigured} type="submit"
          style={{ width: "100%", padding: 15, borderRadius: 999, border: "none", background: "hsl(142 50% 40%)", color: "#fff", font: "700 15px Inter", cursor: "pointer" }}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
        </button>
        {msg && <p style={{ font: "500 14px/1.5 Inter", marginTop: 14 }}>{msg}</p>}
        <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          style={{ marginTop: 18, background: "none", border: "none", color: "hsl(142 45% 38%)", font: "600 14px Inter", cursor: "pointer" }}>
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
      </form>
    </div>
  );
}
