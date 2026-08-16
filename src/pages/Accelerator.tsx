import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function Accelerator() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -100, right: -120, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(38 85% 58% / 0.16)", filter: "blur(90px)",
        }} />
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 9,
          background: "hsl(38 75% 52% / 0.14)", borderRadius: 999,
          padding: "9px 18px", marginBottom: 28,
        }}>
          <span className="bvx-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(38 75% 52%)" }} />
          <span style={{ font: "600 13px/1 Inter", color: "hsl(30 60% 38%)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            New program
          </span>
        </div>
        <h1 style={{ font: "800 clamp(30px,5vw,50px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          Benevox{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(38 70% 45%)" }}>
            Startup Accelerator
          </span>
        </h1>
        <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 600, margin: "0 auto 14px" }}>
          We prepare early-stage African startups for cloud migration. Partners spend less time chasing unqualified leads and more time closing ready ones.
        </p>
        <p style={{ font: "400 15px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 560, margin: "0 auto 32px" }}>
          A good fit for cloud partners like AWS and Google looking for migration-ready African businesses.
        </p>
        <a
          href="https://forms.gle/MZ1a3xMPknHJjJo7A"
          target="_blank" rel="noopener noreferrer"
          className="bvx-btn-primary"
          style={{
            display: "inline-block", background: "hsl(38 70% 45%)", color: "#fff",
            font: "700 15px/1 Inter", padding: "16px 32px", borderRadius: 999,
          }}
        >
          Partner with Benevox
        </a>
      </div>

      {/* Process */}
      <div className="reveal" style={{ maxWidth: 760, margin: "80px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <h2 style={{ textAlign: "center", font: "700 clamp(24px,3vw,32px)/1.25 Inter", letterSpacing: "-0.02em", margin: "0 0 40px" }}>
          Our process
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: "1", bg: "hsl(38 75% 52% / 0.16)", color: "hsl(30 60% 40%)", title: "Vet", body: "We find high-potential African startups ready to scale." },
            { n: "2", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)", title: "Prep", body: "We help build their website, legal foundation, social pages, and branding." },
            { n: "3", bg: "hsl(10 65% 55% / 0.14)", color: "hsl(8 55% 44%)",   title: "Handover", body: "We hand it over, or keep helping manage it going forward." },
          ].map(s => (
            <div key={s.n} className="bvx-soft-card" style={{
              display: "flex", gap: 22, background: "hsl(var(--home-card))",
              borderRadius: 22, padding: 28, transition: "all .25s ease",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                font: "600 17px/1 'Newsreader',serif", color: s.color, flexShrink: 0,
              }}>{s.n}</div>
              <div>
                <h3 style={{ font: "700 18px/1.3 Inter", margin: "0 0 6px" }}>{s.title}</h3>
                <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="reveal" style={{ maxWidth: 600, margin: "100px auto 0", padding: "0 32px 120px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ font: "600 clamp(26px,3.5vw,36px)/1.2 'Newsreader',serif", fontStyle: "italic", margin: "0 0 16px" }}>
          Ready to partner?
        </h2>
        <p style={{ font: "400 15px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 28px" }}>
          Help us get more African startups cloud-ready, and we'll connect you with the ones worth your time.
        </p>
        <a
          href="https://forms.gle/MZ1a3xMPknHJjJo7A"
          target="_blank" rel="noopener noreferrer"
          className="bvx-btn-primary"
          style={{
            display: "inline-block", background: "hsl(38 70% 45%)", color: "#fff",
            font: "700 15px/1 Inter", padding: "16px 32px", borderRadius: 999,
          }}
        >
          Start a partnership
        </a>
      </div>

      <Footer />
    </div>
  );
}
