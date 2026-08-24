import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const models = [
  {
    tag: "Predictable", tagColor: "hsl(142 45% 38%)",
    title: "Fixed-Firm",
    body: "Best for projects with absolute requirements: we scope first, build second, and own the delivery risk.",
    bullets: ["Locked budget", "Defined milestones", "Scoping required"],
  },
  {
    tag: "Fast", tagColor: "hsl(30 60% 40%)",
    title: "Agile-Flow",
    body: "Our fastest model. Plug a pod into your roadmap and start shipping in weekly sprints.",
    bullets: ["Weekly sprints", "Fluid backlog", "Pay-as-you-go"],
  },
  {
    tag: "Strategic", tagColor: "hsl(8 55% 44%)",
    title: "Hybrid",
    body: "The 80/20 split. Strategic roadmap planning with tactical sprint execution for scaling products.",
    bullets: ["Roadmap ownership", "Tactical sprints", "Quarterly reviews"],
  },
];

const comparison = [
  { metric: "Flexibility",         ff: "Low, frozen scope",    af: "High, pivot-ready",     hy: "Medium, adaptive"      },
  { metric: "Cost predictability", ff: "Absolute, fixed",      af: "Variable, consumption", hy: "Blended, forecasted"   },
  { metric: "Market speed",        ff: "Standard",             af: "Maximum, sprint-led",   hy: "Balanced"              },
  { metric: "Scope changes",       ff: "High friction",        af: "Low friction",          hy: "Controlled friction"   },
  { metric: "Mgmt overhead",       ff: "Low, post-scoping",    af: "High, weekly cadence",  hy: "Medium"                },
];

export default function Models() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -100, left: -120, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(38 85% 58% / 0.14)", filter: "blur(90px)",
        }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{ font: "800 clamp(32px,5vw,52px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          Three ways to work{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(142 45% 38%)" }}>
            together
          </span>
        </h1>
        <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 560, margin: "0 auto" }}>
          Pick the one that matches your project's maturity and how much certainty you need going in. Not sure? Ask us.
        </p>
      </div>

      <div className="reveal" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div className="bvx-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginBottom: 100 }}>
          {models.map(m => (
            <div key={m.title} className="bvx-soft-card" style={{
              background: "hsl(var(--home-card))", borderRadius: 26, padding: 34, transition: "all .25s ease",
            }}>
              <div style={{ font: "700 12px/1 Inter", textTransform: "uppercase", letterSpacing: "0.05em", color: m.tagColor, marginBottom: 16 }}>
                {m.tag}
              </div>
              <h2 style={{ font: "700 22px/1.3 Inter", margin: "0 0 12px" }}>{m.title}</h2>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 20px" }}>{m.body}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, font: "500 13px/1 Inter" }}>
                {m.bullets.map(b => <div key={b}>{b}</div>)}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div style={{ maxWidth: 880, margin: "0 auto 120px" }}>
          <h3 style={{ textAlign: "center", font: "700 26px/1.2 Inter", letterSpacing: "-0.01em", margin: "0 0 32px" }}>
            How they compare
          </h3>
          <div style={{ background: "hsl(var(--home-card))", borderRadius: 24, overflow: "hidden", padding: 8 }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", font: "500 13px/1 Inter", minWidth: 560 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "16px 20px", font: "700 12px/1 Inter", color: "hsl(var(--home-muted))" }}>Metric</th>
                    <th style={{ textAlign: "left", padding: "16px 20px", font: "700 12px/1 Inter", color: "hsl(142 45% 38%)" }}>Fixed-Firm</th>
                    <th style={{ textAlign: "left", padding: "16px 20px", font: "700 12px/1 Inter", color: "hsl(30 60% 40%)" }}>Agile-Flow</th>
                    <th style={{ textAlign: "left", padding: "16px 20px", font: "700 12px/1 Inter", color: "hsl(8 55% 44%)" }}>Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(row => (
                    <tr key={row.metric} style={{ borderTop: "1px solid hsl(var(--home-border))" }}>
                      <td style={{ padding: "14px 20px", fontWeight: 700 }}>{row.metric}</td>
                      <td style={{ padding: "14px 20px", color: "hsl(var(--home-muted))" }}>{row.ff}</td>
                      <td style={{ padding: "14px 20px", color: "hsl(var(--home-muted))" }}>{row.af}</td>
                      <td style={{ padding: "14px 20px", color: "hsl(var(--home-muted))" }}>{row.hy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
