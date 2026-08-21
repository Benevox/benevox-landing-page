import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function About() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      {/* Blob */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -100, right: -120, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(30 60% 45% / 0.12)", filter: "blur(90px)",
        }} />
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{ font: "800 clamp(32px,5vw,52px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          Building Africa's{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(142 45% 38%)" }}>
            tech future
          </span>
        </h1>
        <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 560, margin: "0 auto" }}>
          We're engineers and entrepreneurs who got tired of watching good African businesses lose to bad software. So we fixed that.
        </p>
      </div>

      {/* Content */}
      <div className="reveal bvx-about-grid" style={{
        maxWidth: 1080, margin: "0 auto", padding: "0 32px 120px",
        position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56,
      }}>
        {/* Founder */}
        <div>
          <h2 style={{ font: "700 clamp(22px,3vw,28px)/1.3 Inter", letterSpacing: "-0.02em", margin: "0 0 24px" }}>
            Meet our founder
          </h2>
          <div style={{ background: "hsl(var(--home-card))", borderRadius: 24, padding: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", flexShrink: 0, overflow: "hidden",
                background: "hsl(142 55% 45% / 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                font: "700 22px/1 'Newsreader',serif", color: "hsl(142 45% 38%)",
              }}>
                PE
              </div>
              <div>
                <h3 style={{ font: "700 18px/1.3 Inter", margin: 0 }}>Peter Eno</h3>
                <p style={{ font: "500 13px/1 Inter", color: "hsl(var(--home-muted))", margin: "6px 0 0" }}>
                  Founder
                </p>
              </div>
            </div>
            <p style={{ font: "400 14px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 14px" }}>
              Senior Solutions Architect, DevOps Lead, and serial entrepreneur focused on guiding SMBs and enterprise clients through cloud transformations and digital restructuring.
            </p>
            <p style={{ font: "400 14px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 20px" }}>
              An AWS Certified DevOps Professional and Google Developer Alumni, Peter established Benevox to provide flexible, high-impact technical solutions across Africa—bridging the gap between high-level architectural strategy and hands-on infrastructure delivery.
            </p>
            <div>
              <a
                href="https://linkedin.com/in/enopetero/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  font: "600 13px/1 Inter", color: "hsl(142 45% 38%)",
                  textDecoration: "none"
                }}
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 style={{ font: "700 clamp(22px,3vw,28px)/1.3 Inter", letterSpacing: "-0.02em", margin: "0 0 24px" }}>
            The Benevox way
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { letter: "O", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)", title: "Ownership", tagline: "If it's yours, it's yours.", body: "We take full responsibility for every project. Your success is our success." },
              { letter: "S", bg: "hsl(38 75% 52% / 0.16)",  color: "hsl(30 60% 40%)",  title: "Speed",     tagline: "Ship fast, learn fast.",   body: "We move quickly without sacrificing quality. Time is your most valuable resource." },
              { letter: "T", bg: "hsl(10 65% 55% / 0.14)",  color: "hsl(8 55% 44%)",   title: "Transparency", tagline: "No hiding problems.",  body: "Clear communication, honest updates. You always know where your project stands." },
            ].map(v => (
              <div key={v.letter} className="bvx-soft-card" style={{
                display: "flex", gap: 20, background: "hsl(var(--home-card))",
                borderRadius: 20, padding: 24, transition: "all .25s ease",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", background: v.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  font: "600 15px/1 'Newsreader',serif", color: v.color, flexShrink: 0,
                }}>
                  {v.letter}
                </div>
                <div>
                  <h4 style={{ font: "700 16px/1.3 Inter", margin: "0 0 4px" }}>{v.title}</h4>
                  <p style={{ font: "600 13px/1 Inter", fontStyle: "italic", color: v.color, margin: "0 0 8px" }}>{v.tagline}</p>
                  <p style={{ font: "400 13px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) { .bvx-about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}