import { Link } from "react-router-dom";

const projects = [
  {
    id: "bellcrest",
    label: "Bellcrest Family Clinic",
    labelColor: "hsl(142 45% 38%)",
    title: "A digital front door patients actually enjoy using",
    body: "Re-engineered a clinic's website to make booking and discovery effortless.",
    stat: "Delivered in 14 days",
    /* Replace src with real image later */
    imgSrc: "/assets/portfolio/bellcrest-hero.jpg",
    imgAlt: "Bellcrest clinic website",
    imgBg: "hsl(142 55% 45% / 0.15)",
  },
  {
    id: "alder",
    label: "Alder Family Clinic",
    labelColor: "hsl(30 60% 40%)",
    title: "A site that never goes down, even under pressure",
    body: "Built resilient, multi-region infrastructure with instant failover.",
    stat: "Zero downtime, always on",
    imgSrc: "/assets/portfolio/alder-hero.jpg",
    imgAlt: "Alder clinic website",
    imgBg: "hsl(38 75% 52% / 0.15)",
  },
];

export const RecentProjects = () => (
  <div className="reveal" style={{ maxWidth: 1180, margin: "140px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, flexWrap: "wrap", gap: 16 }}>
      <h2 style={{ font: "700 clamp(28px,3.2vw,40px)/1.2 Inter", letterSpacing: "-0.02em", margin: 0 }}>
        Recent projects
      </h2>
      <Link to="/portfolio" style={{ color: "hsl(142 45% 38%)", font: "700 15px/1 Inter", display: "flex", alignItems: "center", gap: 6 }}>
        See the full story →
      </Link>
    </div>

    <div className="bvx-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      {projects.map(p => (
        <div key={p.id} className="bvx-soft-card" style={{
          background: "hsl(var(--home-card))", borderRadius: 24,
          overflow: "hidden", transition: "all .25s ease",
        }}>
          {/* Image slot */}
          <div style={{
            width: "100%", height: 200,
            background: p.imgBg,
            overflow: "hidden",
          }}>
            <img
              src={p.imgSrc}
              alt={p.imgAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <div style={{ padding: 28 }}>
            <div style={{ font: "700 12px/1 Inter", color: p.labelColor, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>
              {p.label}
            </div>
            <h3 style={{ font: "700 20px/1.35 Inter", margin: "0 0 10px" }}>{p.title}</h3>
            <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 16px" }}>{p.body}</p>
            <div style={{ font: "700 15px/1 Inter" }}>{p.stat}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
