const miniCards = [
  { title: "Unmatched speed",   body: "Your pod is live in under 7 days.",              color: "hsl(142 45% 38%)" },
  { title: "Quality you trust", body: "A holdback tied to QA sign-off.",                color: "hsl(30 60% 40%)"  },
  { title: "Real-time overlap", body: "Working hours that meet yours halfway.",          color: "hsl(8 55% 44%)"   },
  { title: "No wasted spend",   body: "You pay for progress, not hours logged.",         color: "hsl(142 45% 38%)" },
];

const testimonials = [
  {
    quote: "Benevox solved our team-scaling issues overnight. A complete pod within a week, and the weekly rhythm kept everyone aligned.",
    name: "Marc Dupond",
    role: "VP Engineering, European Logistics Platform",
  },
  {
    quote: "As a founder, I couldn't risk vague timelines. Their process meant we knew exactly what was feasible before spending a dime.",
    name: "Elena Rostov",
    role: "Co-Founder & CTO, FinTech Accelerator App",
  },
];

export const WhyUs = () => (
  <div className="reveal" style={{ maxWidth: 1180, margin: "140px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>

    {/* Why us split */}
    <div className="bvx-why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, marginBottom: 120, alignItems: "center" }}>
      <div>
        <h2 style={{ font: "700 clamp(26px,3vw,36px)/1.25 Inter", letterSpacing: "-0.02em", margin: "0 0 18px" }}>
          Why people choose to work with us
        </h2>
        <p style={{ font: "400 16px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 28px" }}>
          We take the friction out of scaling a team with real people, pre-vetted and ready, without the recruiting headache.
        </p>
        <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
          <div>
            <div style={{ font: "700 30px/1 'Newsreader',serif", color: "hsl(142 45% 38%)" }}>4+ hrs</div>
            <div style={{ font: "600 12px/1.4 Inter", color: "hsl(var(--home-muted))", marginTop: 8 }}>Overlap with your day</div>
          </div>
          <div>
            <div style={{ font: "700 30px/1 'Newsreader',serif", color: "hsl(30 60% 40%)" }}>100%</div>
            <div style={{ font: "600 12px/1.4 Inter", color: "hsl(var(--home-muted))", marginTop: 8 }}>Pay for progress made</div>
          </div>
        </div>
      </div>

      <div className="bvx-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {miniCards.map(c => (
          <div key={c.title} style={{ background: "hsl(var(--home-card))", borderRadius: 20, padding: 24 }}>
            <h4 style={{ font: "700 15px/1.3 Inter", margin: "0 0 8px", color: c.color }}>{c.title}</h4>
            <p style={{ font: "400 13px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Testimonials */}
    <div style={{ maxWidth: 840, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <h2 style={{ font: "700 clamp(24px,3vw,32px)/1.25 Inter", letterSpacing: "-0.02em", margin: 0 }}>
          What our clients say
        </h2>
      </div>
      <div className="bvx-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        {testimonials.map(t => (
          <div key={t.name} style={{ background: "hsl(var(--home-card))", borderRadius: 24, padding: 32 }}>
            <div style={{ font: "600 40px/1 'Newsreader',serif", color: "hsl(38 75% 55%)", marginBottom: 6 }}>"</div>
            <p style={{ font: "400 15px/1.65 Inter", color: "hsl(var(--home-fg))", margin: "0 0 20px" }}>{t.quote}</p>
            <div style={{ font: "700 14px/1 Inter" }}>{t.name}</div>
            <div style={{ font: "500 13px/1 Inter", color: "hsl(var(--home-muted))", marginTop: 5 }}>{t.role}</div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .bvx-why-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </div>
);
