import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 32px 40px", textAlign: "center", position: "relative", zIndex: 1 }}>
    {/* Badge */}
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 9,
      background: "hsl(142 55% 45% / 0.1)", borderRadius: 999,
      padding: "9px 18px", marginBottom: 36,
    }}>
      <span className="bvx-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(142 55% 45%)" }} />
      <span style={{ font: "600 13px/1 Inter", color: "hsl(142 45% 36%)" }}>Now onboarding new clients</span>
    </div>

    {/* Headline */}
    <h1 style={{
      font: "800 clamp(38px,5.5vw,70px)/1.12 Inter",
      letterSpacing: "-0.03em", margin: "0 0 26px",
    }}>
      Ship your product with a team that feels like{" "}
      <br />
      <span style={{
        fontFamily: "'Newsreader', serif", fontStyle: "italic",
        fontWeight: 600, color: "hsl(142 45% 38%)",
      }}>
        your own.
      </span>
    </h1>

    {/* Sub */}
    <p style={{
      font: "400 19px/1.65 Inter", color: "hsl(var(--home-muted))",
      maxWidth: 600, margin: "0 auto 40px",
    }}>
      We plug in real engineers, designers, and product managers. Working software ships in weeks. Not months.
    </p>

    {/* CTAs */}
    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
      <a
        className="bvx-btn-primary"
        href="https://calendar.app.google/VT6CAYhjffCPbTfv5"
        target="_blank" rel="noopener noreferrer"
        style={{
          background: "hsl(142 50% 40%)", color: "#fff",
          font: "700 16px/1 Inter", padding: "17px 34px",
          borderRadius: 999, transition: "all .2s ease", whiteSpace: "nowrap",
        }}
      >
        Talk to us
      </a>
      <a
        className="bvx-btn-outline"
        href="#how-it-works"
        style={{
          border: "1.5px solid hsl(var(--home-border))", color: "hsl(var(--home-fg))",
          font: "700 16px/1 Inter", padding: "17px 34px",
          borderRadius: 999, transition: "all .2s ease", whiteSpace: "nowrap",
        }}
      >
        See how it works
      </a>
    </div>

    {/* Hero image */}
    <div style={{
      borderRadius: 28, overflow: "hidden",
      boxShadow: "0 30px 60px hsl(30 10% 5% / 0.18)",
      maxWidth: 920, margin: "0 auto",
    }}>
      <img
        src={heroBg}
        alt="Team collaborating"
        style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
      />
    </div>
  </div>
);
