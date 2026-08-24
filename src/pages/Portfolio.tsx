import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const projects = [
  {
    id: "nigcomsat",
    label: "NigComSat",
    labelColor: "hsl(142 45% 38%)",
    title: "A nationwide dashboard for satellite-enabled monitoring",
    body: "An IoT dashboard tracking remote assets and infrastructure health across the country.",
    stat: "30% efficiency increase",
    tags: ["React", "IoT Gateway"],
    imgSrc: "",
    imgBg: "hsl(142 55% 45% / 0.15)",
  },
  {
    id: "bellcrest",
    label: "Bellcrest Family Clinic",
    labelColor: "hsl(30 60% 40%)",
    title: "A digital front door patients actually enjoy using",
    body: "A UI/UX overhaul and technical SEO engine to improve patient intake and discovery.",
    stat: "Delivered in 14 days",
    tags: ["SEO", "Accessibility"],
    url: "https://bellcrestfamilyclinic.ca/",
    imgSrc: "/assets/portfolio/bellcrest-hero.jpg",
    imgBg: "hsl(38 75% 52% / 0.15)",
  },
  {
    id: "alder",
    label: "Alder Family Clinic",
    labelColor: "hsl(8 55% 44%)",
    title: "A site that never goes down, even under pressure",
    body: "Zero-downtime, multi-region infrastructure with instant failover on constrained hosting.",
    stat: "Zero downtime, always on",
    tags: ["Edge Routing", "SSL/TLS"],
    url: "https://alderfamilyclinic.ca/",
    imgSrc: "/assets/portfolio/alder-hero.jpg",
    imgBg: "hsl(8 55% 44% / 0.12)",
  },
  {
    id: "vgclinic",
    label: "VG Clinic",
    labelColor: "hsl(142 45% 38%)",
    title: "A warm brand refresh with booking built in",
    body: "A full identity refresh and modern, mobile-responsive site for a family medicine clinic.",
    stat: "Delivered in 14 days",
    tags: ["Brand Identity", "Booking System"],
    url: "https://vgclinic.net/",
    imgSrc: "",
    imgBg: "hsl(142 55% 45% / 0.12)",
  },
];

export default function Portfolio() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -100, right: -120, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(142 55% 45% / 0.14)", filter: "blur(90px)",
        }} />
      </div>

      {/* Page header */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h1 style={{ font: "800 clamp(34px,5vw,54px)/1.15 Inter", letterSpacing: "-0.03em", margin: "0 0 20px" }}>
          Our{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(142 45% 38%)" }}>
            works
          </span>
        </h1>
        <p style={{ font: "400 17px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 560, margin: "0 auto" }}>
          Real problems, solved for real businesses. Here's the proof.
        </p>
      </div>

      {/* Portfolio grid */}
      <div className="reveal bvx-grid-2" style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 32px 120px",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        position: "relative", zIndex: 1,
      }}>
        {projects.map(p => (
          <div key={p.id} className="bvx-soft-card" style={{
            background: "hsl(var(--home-card))", borderRadius: 26,
            overflow: "hidden", transition: "all .25s ease",
            display: "flex", flexDirection: "column",
          }}>
            {/* Image */}
            <div style={{ width: "100%", height: 300, background: p.imgBg, overflow: "hidden", flexShrink: 0 }}>
              {p.imgSrc && (
                <img src={p.imgSrc} alt={p.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              )}
            </div>
            {/* Content */}
            <div style={{ padding: 32, display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ font: "700 12px/1 Inter", textTransform: "uppercase", letterSpacing: "0.04em", color: p.labelColor, marginBottom: 10 }}>
                {p.label}
              </div>
              <h2 style={{ font: "700 20px/1.35 Inter", margin: "0 0 10px" }}>{p.title}</h2>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 20px", flex: 1 }}>{p.body}</p>
              <div style={{ font: "700 15px/1 Inter", marginBottom: 16 }}>{p.stat}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      background: "hsl(var(--home-card-2))", borderRadius: 999,
                      padding: "6px 14px", font: "600 12px/1 Inter", color: "hsl(var(--home-muted))",
                    }}>{t}</span>
                  ))}
                </div>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ color: p.labelColor, font: "700 13px/1 Inter" }}>
                    Visit website →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
