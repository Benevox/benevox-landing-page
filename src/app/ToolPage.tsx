import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { tools } from "./tools";

const API = (import.meta.env.VITE_API_URL as string | undefined) ?? "https://api.benevox.africa";

const card = { background: "hsl(var(--home-card))", borderRadius: 20, padding: 24 } as const;
const input = {
  width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: 12,
  border: "1px solid hsl(var(--home-border))", background: "transparent", color: "inherit", font: "400 14px Inter",
} as const;

export default function ToolPage() {
  const { slug } = useParams();
  const tool = tools.find(t => t.slug === slug);
  const [values, setValues] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<unknown>(null);

  if (!tool) return <Navigate to="/app" replace />;

  const set = (k: string, v: string) => setValues(prev => ({ ...prev, [k]: v }));

  async function run(e: React.FormEvent) {
    e.preventDefault();
    if (!tool) return;
    setBusy(true); setError(""); setResult(null);
    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) throw new Error("Please sign in again.");
      const res = await fetch(`${API}/api/tools/${tool.slug}/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ input: values }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? `Request failed (${res.status})`);
      setResult(body.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))", fontFamily: "Inter,sans-serif" }}>
      <header style={{ padding: "20px 32px", borderBottom: "1px solid hsl(var(--home-border))" }}>
        <Link to="/app" style={{ font: "700 16px Inter" }}>&larr; Benevox Tools</Link>
      </header>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 32px", display: "grid", gap: 24 }}>
        <div>
          <h1 style={{ font: "700 30px/1.2 Inter", margin: "0 0 8px" }}>{tool.name}</h1>
          <p style={{ color: "hsl(var(--home-muted))", margin: 0 }}>{tool.description}</p>
        </div>
        <form onSubmit={run} style={{ ...card, display: "grid", gap: 16 }}>
          {tool.fields.map(f => (
            <label key={f.key} style={{ display: "grid", gap: 6, font: "600 13px Inter" }}>
              {f.label}
              {f.options ? (
                <select required value={values[f.key] ?? ""} onChange={e => set(f.key, e.target.value)} style={input}>
                  <option value="" disabled>Choose one</option>
                  {f.options.map(o => <option key={o.value} value={o.value} style={{ color: "#000" }}>{o.label}</option>)}
                </select>
              ) : (
                <textarea required rows={5} maxLength={4000} placeholder={f.placeholder} value={values[f.key] ?? ""}
                  onChange={e => set(f.key, e.target.value)} style={{ ...input, resize: "vertical" }} />
              )}
            </label>
          ))}
          <button type="submit" disabled={busy}
            style={{ justifySelf: "start", padding: "12px 24px", borderRadius: 999, border: 0, cursor: busy ? "wait" : "pointer", font: "600 14px Inter", background: "hsl(var(--home-fg))", color: "hsl(var(--home-bg))" }}>
            {busy ? "Running..." : "Run"}
          </button>
          {error && <p role="alert" style={{ color: "hsl(0 70% 50%)", margin: 0 }}>{error}</p>}
        </form>
        {result !== null && (
          <section style={card}>
            <h2 style={{ font: "700 16px Inter", margin: "0 0 12px" }}>Result</h2>
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", font: "400 13px/1.6 ui-monospace,monospace", margin: 0 }}>
              {typeof result === "string" ? result : JSON.stringify(result, null, 2)}
            </pre>
            <p style={{ color: "hsl(var(--home-muted))", font: "400 12px Inter", margin: "12px 0 0" }}>
              AI-generated draft. Review before sending or acting on it.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
