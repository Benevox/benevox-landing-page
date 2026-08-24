const steps = [
  {
    n: "1", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)",
    title: "Let's talk scope",
    body: "We map out what you need and confirm it's realistic before anything is promised.",
  },
  {
    n: "2", bg: "hsl(38 75% 52% / 0.16)", color: "hsl(30 60% 40%)",
    title: "Meet your pod",
    body: "A dedicated PM, designer, engineers, and QA, built around your goals.",
  },
  {
    n: "3", bg: "hsl(10 65% 55% / 0.14)", color: "hsl(8 55% 44%)",
    title: "Weekly momentum",
    body: "We ship in one-week sprints, so you always see real progress.",
  },
  {
    n: "4", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)",
    title: "Clean handover",
    body: "Documented, tested, and ready for your team to run with.",
    last: true,
  },
];

export const HowItWorks = () => (
  <div id="how-it-works" className="reveal" style={{ maxWidth: 900, margin: "140px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 60px" }}>
      <h2 style={{ font: "700 clamp(28px,3.2vw,40px)/1.2 Inter", letterSpacing: "-0.02em", margin: "0 0 14px" }}>
        How it works
      </h2>
      <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>
        A simple, honest process with no surprises along the way.
      </p>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {steps.map(s => (
        <div key={s.n} style={{ display: "flex", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: s.bg, color: s.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              font: "600 17px/1 'Newsreader',serif", flexShrink: 0,
            }}>
              {s.n}
            </div>
            {!s.last && (
              <div style={{ width: 2, flex: 1, background: "hsl(var(--home-border))", margin: "6px 0" }} />
            )}
          </div>
          <div style={{ paddingBottom: s.last ? 0 : 44 }}>
            <h3 style={{ font: "700 19px/1.3 Inter", margin: "0 0 8px" }}>{s.title}</h3>
            <p style={{ font: "400 15px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
