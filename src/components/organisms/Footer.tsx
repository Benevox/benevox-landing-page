import { Link } from "react-router-dom";
import benevoxLogo from "@/assets/benevox-logo.png";

const resources = [
  { label: "Engagement models",   href: "/models"           },
  { label: "How we work",         href: "/ops-and-security" },
  { label: "Our work",            href: "/portfolio"        },
  { label: "Accelerator",         href: "/accelerator"      },
  { label: "LaunchPad",           href: "/launchpad"        },
];
const company = [
  { label: "Careers",             href: "/careers"          },
  { label: "Security & compliance", href: "/ops-and-security" },
  { label: "About us",            href: "/about"            },
];

export const Footer = () => (
  <footer style={{
    background: "hsl(var(--home-bg))",
    borderTop: "1px solid hsl(var(--home-border))",
    color: "hsl(var(--home-fg))",
  }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 32px" }}>

      {/* Grid */}
      <div className="bvx-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

        {/* Brand */}
        <div>
          <img src={benevoxLogo} alt="Benevox" style={{ height: 26, width: "auto", objectFit: "contain", marginBottom: 18 }} />
          <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", maxWidth: 320, margin: "0 0 20px" }}>
            Your product, our team. We build it, ship it, and hand it over, backed by Africa's best tech talent.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "in", href: "https://www.linkedin.com/in/benevox-africa-274054409" },
              { label: "ig", href: "https://www.instagram.com/benevoxhq?igsh=emN5cTl2aXV4OHlt" },
              { label: "fb", href: "https://web.facebook.com/profile.php?id=61590308837951" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="bvx-social"
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "hsl(var(--home-card-2))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  font: "700 12px/1 Inter", color: "hsl(var(--home-muted))",
                  transition: "all .2s ease",
                }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <div style={{ font: "700 12px/1 Inter", color: "hsl(var(--home-muted))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 18 }}>
            Resources
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {resources.map(r => (
              <Link key={r.href} to={r.href} className="bvx-flink"
                style={{ color: "hsl(var(--home-muted))", font: "500 14px/1 Inter", transition: "color .2s, padding-left .2s" }}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <div style={{ font: "700 12px/1 Inter", color: "hsl(var(--home-muted))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 18 }}>
            Company
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {company.map(c => (
              <Link key={c.href} to={c.href} className="bvx-flink"
                style={{ color: "hsl(var(--home-muted))", font: "500 14px/1 Inter", transition: "color .2s, padding-left .2s" }}>
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ font: "700 12px/1 Inter", color: "hsl(var(--home-muted))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 18 }}>
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="mailto:info@benevox.africa" className="bvx-flink"
              style={{ color: "hsl(var(--home-muted))", font: "500 14px/1 Inter", transition: "color .2s, padding-left .2s" }}>
              info@benevox.africa
            </a>
            <a href="tel:+2348106714878" className="bvx-flink"
              style={{ color: "hsl(var(--home-muted))", font: "500 14px/1 Inter", transition: "color .2s, padding-left .2s" }}>
              Call us
            </a>
            <span style={{ font: "500 14px/1 Inter", color: "hsl(var(--home-muted))" }}>Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        paddingTop: 24, borderTop: "1px solid hsl(var(--home-border))",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12,
      }}>
        <div style={{ font: "500 13px/1 Inter", color: "hsl(var(--home-muted))" }}>
          © 2026 Benevox Technologies Ltd. RC 9240456
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" className="bvx-flink" style={{ font: "500 13px/1 Inter", color: "hsl(var(--home-muted))" }}>Privacy Policy</a>
          <a href="#" className="bvx-flink" style={{ font: "500 13px/1 Inter", color: "hsl(var(--home-muted))" }}>Terms of Service</a>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .bvx-footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 480px) {
        .bvx-footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);
