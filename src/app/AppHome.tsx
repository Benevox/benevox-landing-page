import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { tools } from "./tools";

export default function AppHome() {
  const { user, signOut } = useAuth();
  return (
    <div style={{ minHeight: "100vh", background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))", fontFamily: "Inter,sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", borderBottom: "1px solid hsl(var(--home-border))" }}>
        <Link to="/" style={{ font: "700 16px Inter" }}>Benevox Tools</Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center", font: "500 14px Inter" }}>
          <span style={{ color: "hsl(var(--home-muted))" }}>{user?.email}</span>
          <button onClick={signOut} style={{ background: "none", border: "1px solid hsl(var(--home-border))", borderRadius: 999, padding: "8px 16px", color: "inherit", cursor: "pointer" }}>
            Sign out
          </button>
        </div>
      </header>
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 32px" }}>
        <h1 style={{ font: "700 30px/1.2 Inter", margin: "0 0 28px" }}>Your tools</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
          {tools.map(t => (
            <Link key={t.slug} to={`/app/${t.slug}`} style={{ display: "block", background: "hsl(var(--home-card))", borderRadius: 20, padding: 24 }}>
              <div style={{ font: "700 12px Inter", textTransform: "uppercase", letterSpacing: "0.04em", color: "hsl(142 45% 38%)", marginBottom: 8 }}>
                {t.audience} · {t.status}
              </div>
              <h2 style={{ font: "700 20px/1.3 Inter", margin: "0 0 8px" }}>{t.name}</h2>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{t.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
