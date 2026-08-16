import { Link } from "react-router-dom";

const models = [
  {
    tag: "Predictable", tagColor: "hsl(142 45% 38%)",
    title: "Fixed-Firm",
    body: "Best for absolute requirements, like legacy migrations or locked-scope MVPs.",
  },
  {
    tag: "Fast", tagColor: "hsl(30 60% 40%)",
    title: "Agile-Flow",
    body: "Our default: one-week cycles, pay-as-you-go, built for high-speed pivots.",
  },
  {
    tag: "Strategic", tagColor: "hsl(8 55% 44%)",
    title: "Hybrid",
    body: "An 80/20 split of roadmap visibility and committed sprint execution.",
  },
];

export const ModelsSummary = () => (
  <div style={{ maxWidth: 1180, margin: "140px auto 0", padding: "0 32px 140px", position: "relative", zIndex: 1 }} className="reveal">
    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
      <h2 style={{ font: "700 clamp(28px,3.2vw,40px)/1.2 Inter", letterSpacing: "-0.02em", margin: "0 0 14px" }}>
        Pick the path that fits
      </h2>
      <p style={{ font: "400 16px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>
        Pick what matches your project's shape and pace, or ask us which one fits.
      </p>
    </div>

    <div className="bvx-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginBottom: 48 }}>
      {models.map(m => (
        <div key={m.title} className="bvx-soft-card" style={{
          background: "hsl(var(--home-card))", borderRadius: 24,
          padding: 32, transition: "all .25s ease",
        }}>
          <div style={{ font: "700 12px/1 Inter", textTransform: "uppercase", letterSpacing: "0.05em", color: m.tagColor, marginBottom: 14 }}>
            {m.tag}
          </div>
          <h3 style={{ font: "700 21px/1.3 Inter", margin: "0 0 10px" }}>{m.title}</h3>
          <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 18px" }}>{m.body}</p>
          <Link to="/models" style={{ color: m.tagColor, font: "700 14px/1 Inter" }}>Learn more</Link>
        </div>
      ))}
    </div>

    <div style={{ textAlign: "center" }}>
      <a
        className="bvx-btn-primary"
        href="https://calendar.app.google/VT6CAYhjffCPbTfv5"
        target="_blank" rel="noopener noreferrer"
        style={{
          display: "inline-block", background: "hsl(142 50% 40%)", color: "#fff",
          font: "700 17px/1 Inter", padding: "19px 40px",
          borderRadius: 999, transition: "all .2s ease", whiteSpace: "nowrap",
        }}
      >
        Talk to us
      </a>
    </div>
  </div>
);
