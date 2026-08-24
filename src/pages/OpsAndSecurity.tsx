import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const agents = [
  {
    title: "Intake Agent",
    role: "Analysis & extraction",
    body: "Turns your vision into structured detail, so nothing gets lost in translation.",
  },
  {
    title: "Scoping Agent",
    role: "Architecture & estimation",
    body: "Confirms feasibility and maps out the right stack and timeline.",
  },
  {
    title: "Risk Agent",
    role: "Dependency detection",
    body: 'Catches risks before they touch a milestone, backing our "no unverified promises" rule.',
  },
];

const security = [
  {
    title: "SOC2-compliant environments",
    body: "Every project runs in isolated, SOC2-compliant infrastructure with strict access controls by default.",
  },
  {
    title: "Your IP stays yours",
    body: "Every line of code, every asset, every document we make for your project transfers to you in full once it's done.",
  },
];

export default function OpsAndSecurity() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -100, right: -120, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(10 65% 55% / 0.12)", filter: "blur(90px)",
        }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{ font: "800 clamp(32px,5vw,52px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          How we{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(142 45% 38%)" }}>
            keep our word
          </span>
        </h1>
        <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 560, margin: "0 auto" }}>
          Disciplined delivery. Real accountability. Security that's built in, not bolted on.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        {/* Holdback */}
        <div className="reveal" style={{
          background: "hsl(38 75% 52% / 0.12)", borderRadius: 28, padding: 44,
          marginBottom: 100, display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "hsl(38 75% 52% / 0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            font: "600 20px/1 'Newsreader',serif", color: "hsl(30 60% 38%)", flexShrink: 0,
          }}>
            %
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ font: "700 24px/1.3 Inter", margin: "0 0 12px" }}>A 70/30 quality holdback</h2>
            <p style={{ font: "400 15px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 18px" }}>
              We hold back 30% of every milestone until 30 days after handover. That's the accountability built into how we get paid, and it keeps everything stable and debt-free.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Zero technical debt", "Post-launch support"].map(t => (
                <span key={t} style={{
                  background: "hsl(var(--home-card-2))", borderRadius: 999,
                  padding: "8px 16px", font: "600 12px/1 Inter",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* AI agents */}
        <div id="ai-operations" className="reveal" style={{ marginBottom: 100 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ font: "700 clamp(24px,3vw,32px)/1.25 Inter", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
              The team behind the scenes
            </h2>
            <p style={{ font: "400 15px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>
              A few AI-assisted agents that keep our production line moving.
            </p>
          </div>
          <div className="bvx-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 32 }}>
            {agents.map(a => (
              <div key={a.title} className="bvx-soft-card" style={{
                background: "hsl(var(--home-card))", borderRadius: 22, padding: 28, transition: "all .25s ease",
              }}>
                <h3 style={{ font: "700 16px/1.3 Inter", margin: "0 0 4px" }}>{a.title}</h3>
                <div style={{ font: "600 11px/1 Inter", textTransform: "uppercase", letterSpacing: "0.05em", color: "hsl(38 75% 45%)", marginBottom: 12 }}>
                  {a.role}
                </div>
                <p style={{ font: "400 13px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{a.body}</p>
              </div>
            ))}
          </div>
          <div style={{
            background: "hsl(8 65% 50% / 0.1)", borderRadius: 20, padding: 26,
            display: "flex", gap: 18, alignItems: "flex-start",
          }}>
            <div style={{ font: "700 18px/1 'Newsreader',serif", color: "hsl(8 55% 44%)" }}>!</div>
            <div>
              <h3 style={{ font: "700 14px/1 Inter", textTransform: "uppercase", letterSpacing: "0.03em", color: "hsl(8 55% 44%)", margin: "0 0 8px" }}>
                Humans always approve
              </h3>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>
                AI drafts, but every output is checked by a person before it becomes a commitment.
              </p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="reveal bvx-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 120 }}>
          {security.map(s => (
            <div key={s.title} style={{ background: "hsl(var(--home-card))", borderRadius: 22, padding: 32 }}>
              <h3 style={{ font: "700 18px/1.3 Inter", margin: "0 0 12px" }}>{s.title}</h3>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
