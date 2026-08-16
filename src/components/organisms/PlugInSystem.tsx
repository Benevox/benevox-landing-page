const cards = [
  {
    num: "01",
    title: "Experienced teams",
    body: "Real talent plugged straight into your roadmap. No onboarding overhead, no ramp-up time.",
    bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)",
  },
  {
    num: "02",
    title: "A structured process",
    body: "Clear steps that keep every build consistent, transparent, and easy to follow.",
    bg: "hsl(38 75% 52% / 0.16)", color: "hsl(30 60% 40%)",
  },
  {
    num: "03",
    title: "Reliable delivery",
    body: "Steady progress from kickoff to handover. We ship fast and hand over clean.",
    bg: "hsl(10 65% 55% / 0.14)", color: "hsl(8 55% 44%)",
  },
];

export const PlugInSystem = () => (
  <div className="reveal" style={{ maxWidth: 1180, margin: "140px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
      <h2 style={{ font: "700 clamp(28px,3.2vw,40px)/1.2 Inter", letterSpacing: "-0.02em", margin: "0 0 14px" }}>
        Everything you need, already assembled
      </h2>
      <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>
        No management overhead. Just the capability you need.
      </p>
    </div>

    <div className="bvx-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
      {cards.map(c => (
        <div key={c.num} className="bvx-soft-card" style={{
          background: "hsl(var(--home-card))", borderRadius: 24,
          padding: 36, transition: "all .25s ease",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: c.bg, display: "flex", alignItems: "center", justifyContent: "center",
            font: "600 20px/1 'Newsreader',serif", color: c.color, marginBottom: 22,
          }}>
            {c.num}
          </div>
          <h3 style={{ font: "700 19px/1.3 Inter", margin: "0 0 10px" }}>{c.title}</h3>
          <p style={{ font: "400 15px/1.65 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{c.body}</p>
        </div>
      ))}
    </div>
  </div>
);
