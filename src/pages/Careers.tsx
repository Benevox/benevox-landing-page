import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const roles = [
  {
    title: "Backend Engineer",
    body: "Build scalable APIs and system logic for growth. You'll leave with a deployed, production-grade API in your portfolio.",
    tags: ["Node.js", "Python", "AWS"],
  },
  {
    title: "Frontend Engineer",
    body: "Create pixel-perfect, responsive components. You'll leave with a fully implemented feature set in your portfolio.",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Product Manager",
    body: "Draft PRDs and growth reports backed by real data and user insight.",
    tags: ["Agile", "Data Analysis", "User Research"],
  },
  {
    title: "Sales & Business Dev",
    body: "Build qualified lead pipelines and master real CRM tools.",
    tags: ["CRM", "Lead Gen", "Negotiation"],
  },
];

export default function Careers() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -100, left: -120, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(142 55% 45% / 0.14)", filter: "blur(90px)",
        }} />
      </div>

      {/* Header */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px 40px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{ font: "800 clamp(32px,5vw,52px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          Real work on{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(142 45% 38%)" }}>
            real products
          </span>
        </h1>
        <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 560, margin: "0 auto 36px" }}>
          No simulations, no toy projects. What you build here goes live and real people use it.
        </p>
        {/* Team photo slot */}
        <div style={{
          width: "100%", maxWidth: 820, height: 260, margin: "0 auto",
          borderRadius: 24, background: "hsl(142 55% 45% / 0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "hsl(142 45% 38%)", font: "600 14px/1 Inter",
        }}>
          Team / workspace photo
        </div>
      </div>

      {/* Roles grid */}
      <div className="reveal bvx-grid-2" style={{
        maxWidth: 1000, margin: "80px auto 0", padding: "0 32px",
        position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22,
      }}>
        {roles.map(r => (
          <div key={r.title} className="bvx-soft-card" style={{
            background: "hsl(var(--home-card))", borderRadius: 24, padding: 30,
            display: "flex", flexDirection: "column", transition: "all .25s ease",
          }}>
            <h2 style={{ font: "700 19px/1.3 Inter", margin: "0 0 10px" }}>{r.title}</h2>
            <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 18px", flex: 1 }}>{r.body}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {r.tags.map(t => (
                <span key={t} style={{
                  background: "hsl(var(--home-card-2))", borderRadius: 999,
                  padding: "6px 14px", font: "600 12px/1 Inter",
                }}>{t}</span>
              ))}
            </div>
            <a
              href="https://forms.gle/skdDG4U8EgNwHXvB9"
              target="_blank" rel="noopener noreferrer"
              className="bvx-apply"
              style={{
                textAlign: "center", border: "1.5px solid hsl(var(--home-border))",
                font: "700 13px/1 Inter", padding: 13, borderRadius: 999,
                transition: "all .2s ease", color: "hsl(var(--home-fg))",
              }}
            >
              Apply now
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="reveal" style={{ maxWidth: 600, margin: "100px auto 0", padding: "0 32px 120px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ font: "600 clamp(26px,3.5vw,36px)/1.2 'Newsreader',serif", fontStyle: "italic", margin: "0 0 16px" }}>
          Ready to build real products?
        </h2>
        <p style={{ font: "400 15px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 28px" }}>
          Come do work that shows up in someone's bottom line, not just your portfolio.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://forms.gle/skdDG4U8EgNwHXvB9"
            target="_blank" rel="noopener noreferrer"
            className="bvx-btn-primary"
            style={{
              background: "hsl(142 50% 40%)", color: "#fff",
              font: "700 15px/1 Inter", padding: "16px 32px", borderRadius: 999,
            }}
          >
            Apply for internship
          </a>
          <a
            href="https://forms.gle/xBQkpDVTeBL2YrTS9"
            target="_blank" rel="noopener noreferrer"
            style={{
              border: "1.5px solid hsl(var(--home-border))", color: "hsl(var(--home-fg))",
              font: "700 15px/1 Inter", padding: "16px 32px", borderRadius: 999,
            }}
          >
            Book a technical scoping
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
