import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAuth } from "./AuthProvider";

// Owner's office. Reads go straight to Supabase (RLS: admin only). Writes go through the
// bvx-ops admin API, which re-checks the session and role and logs to audit_log.
const API = (import.meta.env.VITE_API_URL as string | undefined) ?? "https://api.benevox.africa";

type Row = Record<string, any>;
type Data = Record<string, Row[]>;
const TABLES = ["leads", "approvals", "agent_runs", "ads", "finance_entries", "asks", "competitors"] as const;
const STAGES = ["new", "intake", "scoped", "validated", "proposal", "won", "delivering", "paid", "lost"];
const TABS = ["Overview", "Needs you", "Pipeline", "Approvals", "Ads", "Finance", "Market", "Runs"] as const;
type Tab = (typeof TABS)[number];

const money = (n: unknown) => "$" + Number(n || 0).toLocaleString(undefined, { maximumFractionDigits: 0 });
const sum = (rows: Row[], f: string) => rows.reduce((a, r) => a + Number(r[f] || 0), 0);
const when = (s?: string) => (s ? new Date(s).toLocaleString() : "");

const S = {
  card: { background: "hsl(var(--home-card))", border: "1px solid hsl(var(--home-border))", borderRadius: 16, padding: 18 } as const,
  h2: { font: "600 12px Inter", textTransform: "uppercase", letterSpacing: "0.06em", color: "hsl(var(--home-muted))", margin: "0 0 12px" } as const,
  input: { padding: "8px 10px", borderRadius: 10, border: "1px solid hsl(var(--home-border))", background: "transparent", color: "inherit", font: "400 14px Inter" } as const,
  btn: { padding: "6px 12px", borderRadius: 999, border: "1px solid hsl(var(--home-border))", background: "transparent", color: "inherit", cursor: "pointer", font: "500 13px Inter" } as const,
  muted: { color: "hsl(var(--home-muted))", fontSize: 13 } as const,
  grid: (min: number) => ({ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`, gap: 14 }) as const,
};

const Kpi = ({ label, value, sub }: { label: string; value: React.ReactNode; sub?: string }) => (
  <div style={S.card}><div style={S.h2}>{label}</div><div style={{ font: "700 28px Inter" }}>{value}</div><div style={S.muted}>{sub}</div></div>
);
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span style={{ border: "1px solid hsl(var(--home-border))", borderRadius: 999, padding: "1px 8px", fontSize: 11, color: "hsl(var(--home-muted))" }}>{children}</span>
);
const Empty = ({ children }: { children: React.ReactNode }) => <div style={{ ...S.muted, padding: 18, textAlign: "center" }}>{children}</div>;
const Table = ({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) =>
  rows.length ? (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead><tr>{head.map(h => <th key={h} style={{ textAlign: "left", ...S.muted, fontWeight: 500, padding: "6px 8px" }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i} style={{ borderTop: "1px solid hsl(var(--home-border))" }}>{r.map((c, j) => <td key={j} style={{ padding: "8px", verticalAlign: "top" }}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  ) : <Empty>Nothing here yet.</Empty>;
const Bars = ({ rows }: { rows: [string, number, string?][] }) => {
  const mx = Math.max(1, ...rows.map(r => r[1]));
  return rows.length ? <>{rows.map(([l, v, t]) => (
    <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, margin: "5px 0" }}>
      <div style={{ width: 90, ...S.muted }}>{l}</div>
      <div style={{ height: 10, borderRadius: 5, background: "hsl(38 75% 52%)", width: `${Math.max(2, (v / mx) * 100)}%`, maxWidth: "60%" }} />
      <div>{t ?? v}</div>
    </div>))}</> : <Empty>No data yet.</Empty>;
};

export default function Office() {
  const { user, signOut } = useAuth();
  const [tab, setTab] = useState<Tab>((localStorage.getItem("office-tab") as Tab) || "Overview");
  const [d, setD] = useState<Data>({});
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    const out: Data = {};
    for (const t of TABLES) {
      const q = supabase.from(t).select("*").order("created_at", { ascending: false }).limit(500);
      const { data, error } = await q;
      if (error) { setErr(error.message); return; }
      out[t] = data ?? [];
    }
    setErr(""); setD(out);
  }, []);
  useEffect(() => { load(); const id = setInterval(load, 30000); return () => clearInterval(id); }, [load]);

  async function call(method: "PATCH" | "POST", path: string, body: Row) {
    const { data } = await supabase.auth.getSession();
    const res = await fetch(`${API}/api/admin/${path}`, {
      method, headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session?.access_token ?? ""}` }, body: JSON.stringify(body),
    });
    if (!res.ok) setErr((await res.json().catch(() => ({}))).error ?? `Failed (${res.status})`);
    else await load();
  }
  const patch = (t: string, id: string, b: Row) => call("PATCH", `${t}/${id}`, b);
  const create = (t: string, b: Row) => call("POST", t, b);
  const go = (t: Tab) => { setTab(t); localStorage.setItem("office-tab", t); };

  const L = d.leads ?? [], A = d.approvals ?? [], R = d.agent_runs ?? [], AD = d.ads ?? [], F = d.finance_entries ?? [], K = d.asks ?? [], C = d.competitors ?? [];
  const openAsks = K.filter(k => k.status === "open"), pending = A.filter(a => a.status === "pending");
  const fin = (k: string) => sum(F.filter(f => f.kind === k), "amount_usd");
  const won = L.filter(l => ["won", "delivering", "paid"].includes(l.stage)), active = L.filter(l => !["won", "delivering", "paid", "lost"].includes(l.stage));
  const badge = (t: Tab) => (t === "Needs you" ? openAsks.length : t === "Approvals" ? pending.length : 0);

  const formRow = (fields: [string, string, string?][], onSubmit: (v: Row) => void, label: string) => (
    <form style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }} onSubmit={e => {
      e.preventDefault(); const fd = Object.fromEntries(new FormData(e.currentTarget)) as Row; onSubmit(fd); e.currentTarget.reset();
    }}>
      {fields.map(([n, ph, type]) => <input key={n} name={n} placeholder={ph} type={type ?? "text"} step={type === "number" ? "any" : undefined} required={n === fields[0][0]} style={S.input} />)}
      <button style={S.btn}>{label}</button>
    </form>
  );

  const views: Record<Tab, React.ReactNode> = {
    Overview: (<>
      <div style={S.grid(190)}>
        <Kpi label="Open leads" value={active.length} sub={`${money(sum(active, "value_usd"))} pipeline`} />
        <Kpi label="Revenue" value={money(fin("revenue"))} sub={`costs ${money(fin("cost"))} · payouts ${money(fin("payout"))}`} />
        <Kpi label="Net" value={money(fin("revenue") - fin("cost") - fin("payout"))} sub="from entries you recorded" />
        <Kpi label="Win rate" value={L.length ? Math.round((won.length / L.length) * 100) + "%" : "n/a"} sub={`${won.length} of ${L.length} leads`} />
        <Kpi label="Needs you" value={openAsks.length + pending.length} sub={`${openAsks.length} asks · ${pending.length} approvals`} />
        <Kpi label="Ads proposed" value={AD.filter(a => a.status === "proposed").length} sub={`spend to date ${money(sum(AD, "spend_usd"))}`} />
      </div>
      <div style={{ ...S.grid(380), marginTop: 14 }}>
        <div style={S.card}><div style={S.h2}>Pipeline</div><Bars rows={STAGES.map(s => [s, L.filter(l => l.stage === s).length] as [string, number])} /></div>
        <div style={S.card}><div style={S.h2}>Waiting on you</div>
          {!openAsks.length && !pending.length ? <Empty>Nothing waiting.</Empty> : <>
            {openAsks.map(k => <div key={k.id} style={{ margin: "6px 0" }}><Pill>{k.kind}</Pill> {k.ask}</div>)}
            {pending.map(a => <div key={a.id} style={{ margin: "6px 0" }}><Pill>approve</Pill> {a.title}</div>)}</>}</div>
        <div style={S.card}><div style={S.h2}>Latest agent runs</div><Table head={["When", "Agent", "Result"]} rows={R.slice(0, 6).map(r => [when(r.started_at), r.agent, `${r.status}: ${r.summary ?? ""}`])} /></div>
      </div></>),
    "Needs you": (<>
      {formRow([["ask", "Note or request for the agents"]], v => create("asks", { kind: "guidance", ask: v.ask }), "Add")}
      <div style={S.card}><div style={S.h2}>Needs you</div><Table head={["Type", "Ask", "Why / suggestion", "Due", ""]} rows={K.map(k => [<Pill key="p">{k.kind}</Pill>, k.ask, `${k.why ?? ""} ${k.suggestion ? "Suggestion: " + k.suggestion : ""}`, k.due ?? "",
        k.status === "open" ? <button key="b" style={S.btn} onClick={() => patch("asks", k.id, { status: "done" })}>Done</button> : <Pill key="d">done</Pill>])} /></div></>),
    Pipeline: (<>
      {formRow([["name", "Contact"], ["company", "Company"], ["value_usd", "Value $", "number"], ["source", "Source"]], v => create("leads", { ...v, kind: "client", stage: "new" }), "Add lead")}
      <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(200px,1fr)", gap: 10, overflowX: "auto" }}>
        {STAGES.map(s => <div key={s} style={{ ...S.card, padding: 10, minHeight: 120 }}>
          <div style={S.h2}>{s} · {L.filter(l => l.stage === s).length}</div>
          {L.filter(l => l.stage === s).map(l => <div key={l.id} style={{ border: "1px solid hsl(var(--home-border))", borderRadius: 10, padding: 8, marginBottom: 8 }}>
            <b>{l.company || l.name}</b><div style={S.muted}>{l.name} · {l.kind} · {money(l.value_usd)}</div>
            {l.message && <div style={{ ...S.muted, marginTop: 4 }}>{String(l.message).slice(0, 120)}</div>}
            <select value={l.stage} onChange={e => patch("leads", l.id, { stage: e.target.value })} style={{ ...S.input, width: "100%", marginTop: 6, padding: 4 }}>{STAGES.map(x => <option key={x}>{x}</option>)}</select>
          </div>)}</div>)}
      </div>
      <p style={S.muted}>Rule: no price or date goes to a client until a pod validates scope.</p></>),
    Approvals: (<div style={S.card}><div style={S.h2}>Approvals (drafts only: approving marks it, you send it yourself)</div>
      {!A.length ? <Empty>No drafts yet.</Empty> : A.map(a => <div key={a.id} style={{ border: "1px solid hsl(var(--home-border))", borderRadius: 12, padding: 12, marginBottom: 10 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><Pill>{a.kind}</Pill><b>{a.title}</b><Pill>{a.status}</Pill><span style={S.muted}>{a.agent} · {when(a.created_at)}</span></div>
        <pre style={{ whiteSpace: "pre-wrap", ...S.muted, font: "12px/1.4 ui-monospace,monospace" }}>{a.body}</pre>
        {a.status === "pending" && <div style={{ display: "flex", gap: 8 }}>
          <button style={S.btn} onClick={() => patch("approvals", a.id, { status: "approved" })}>Approve</button>
          <button style={S.btn} onClick={() => patch("approvals", a.id, { status: "rejected" })}>Reject</button></div>}
      </div>)}</div>),
    Ads: (<>
      <div style={S.grid(180)}><Kpi label="Spend" value={money(sum(AD, "spend_usd"))} /><Kpi label="Clicks" value={sum(AD, "clicks")} /><Kpi label="Conversions" value={sum(AD, "conversions")} />
        <Kpi label="Cost per conversion" value={sum(AD, "conversions") ? money(sum(AD, "spend_usd") / sum(AD, "conversions")) : "n/a"} /></div>
      <div style={{ ...S.card, marginTop: 14 }}><div style={S.h2}>Campaigns and proposals (you run them in the ad console)</div>
        <Table head={["Platform", "Campaign", "Status", "Budget", "Spend", "Conv.", "Note", ""]} rows={AD.map(a => [a.platform, a.campaign, <Pill key="s">{a.status}</Pill>, money(a.budget_usd), money(a.spend_usd), a.conversions ?? 0, a.note ?? "",
          a.status === "proposed" ? <button key="b" style={S.btn} onClick={() => patch("ads", a.id, { status: "approved" })}>Approve</button> : ""])} /></div></>),
    Finance: (<>
      {formRow([["amount_usd", "Amount $", "number"], ["counterparty", "Client / vendor"], ["note", "Note"]], v => create("finance_entries", { ...v, kind: (document.getElementById("fin-kind") as HTMLSelectElement).value }), "Add entry")}
      <select id="fin-kind" style={{ ...S.input, marginBottom: 14 }}><option>revenue</option><option>cost</option><option>payout</option></select>
      <div style={S.grid(190)}><Kpi label="Revenue" value={money(fin("revenue"))} /><Kpi label="Costs" value={money(fin("cost"))} /><Kpi label="Pod payouts" value={money(fin("payout"))} sub="50% pool target" />
        <Kpi label="Holdback owed" value={money(fin("revenue") * 0.5 * 0.05)} sub="5% of pod pool until QA signs" /></div>
      <div style={{ ...S.card, marginTop: 14 }}><div style={S.h2}>Ledger</div><Table head={["Date", "Kind", "Amount", "Who", "Note"]} rows={F.map(f => [f.entry_date, <Pill key="k">{f.kind}</Pill>, money(f.amount_usd), f.counterparty ?? "", f.note ?? ""])} /></div></>),
    Market: (<div style={S.card}><div style={S.h2}>Competitors</div>
      <Table head={["Name", "Model", "Pricing", "Their edge", "Our gap to use", "Source"]} rows={C.map(c => [<b key="n">{c.name}</b>, c.model, c.pricing, c.edge, c.gap,
        /^https:\/\//.test(c.source_url ?? "") ? <a key="a" href={c.source_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>link</a> : ""])} />
      <p style={{ marginTop: 14 }}>Competitors sell people by the hour or month. Benevox sells validated outcomes: scope checked before a promise, one-week sprints, a 5% quality holdback. Lead with that.</p></div>),
    Runs: (<div style={S.card}><div style={S.h2}>Agent runs</div><Table head={["When", "Agent", "Status", "Summary", "Cost"]} rows={R.map(r => [when(r.started_at), r.agent, <Pill key="s">{r.status}</Pill>, r.summary ?? "", r.cost_usd ? "$" + r.cost_usd : ""])} /></div>),
  };

  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))", fontFamily: "Inter,sans-serif" }}>
      <header style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center", padding: "16px 28px", borderBottom: "1px solid hsl(var(--home-border))" }}>
        <Link to="/" style={{ font: "700 16px Inter" }}>Benevox <span style={{ color: "hsl(38 75% 52%)" }}>Autopilot</span> · Captain's Office</Link>
        <nav style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {TABS.map(t => <button key={t} onClick={() => go(t)} style={{ ...S.btn, border: t === tab ? "1px solid hsl(var(--home-border))" : "1px solid transparent", background: t === tab ? "hsl(var(--home-card))" : "transparent" }}>
            {t}{badge(t) ? <b style={{ marginLeft: 6, background: "hsl(38 75% 52%)", color: "#000", borderRadius: 9, padding: "0 6px", fontSize: 11 }}>{badge(t)}</b> : null}</button>)}
          <Link to="/app/tools" style={S.btn}>Tools</Link>
          <button style={S.btn} onClick={signOut}>Sign out</button>
        </nav>
      </header>
      <main style={{ maxWidth: 1300, margin: "0 auto", padding: 24 }}>
        <div style={{ ...S.muted, marginBottom: 12 }}>{user?.email}</div>
        {err && <div style={{ ...S.card, borderColor: "hsl(0 70% 50%)", marginBottom: 14 }}>{err}</div>}
        {views[tab]}
      </main>
    </div>
  );
}
