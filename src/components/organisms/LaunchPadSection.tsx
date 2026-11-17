import { Link } from "react-router-dom";

export const LaunchPadSection = () => (
  <div className="reveal" style={{ maxWidth: 1180, margin: "140px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
    <div className="bvx-soft-card" style={{ background: "hsl(var(--home-card))", borderRadius: 28, padding: "48px 40px", display: "grid", gap: 28 }}>
      <div>
        <div style={{ font: "700 12px/1 Inter", color: "hsl(142 45% 38%)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 14 }}>
          Benevox LaunchPad
        </div>
        <h2 style={{ font: "600 clamp(28px,3.4vw,40px)/1.2 'Newsreader',serif", fontStyle: "italic", margin: "0 0 14px" }}>
          Your landing page and booking system, hosted free for a year.
        </h2>
        <p style={{ font: "400 16px/1.65 Inter", color: "hsl(var(--home-muted))", margin: 0, maxWidth: 680 }}>
          Built for SMEs, non-tech founders, startups, professionals and consultants. We design it, deploy it and host it. You only pay for your domain (usually $10 to $20 a year) and a one-time development cost, scoped before we start.
        </p>
      </div>
      <div>
        <Link to="/launchpad" className="bvx-btn-primary"
          style={{ display: "inline-block", background: "hsl(142 50% 40%)", color: "#fff", font: "700 15px/1 Inter", padding: "15px 30px", borderRadius: 999 }}>
          See the LaunchPad program
        </Link>
      </div>
    </div>
  </div>
);
