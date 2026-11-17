import { Link } from "react-router-dom";
import { BOOKING_URL } from "@/lib/cta";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => (
  <div style={{ position: "relative", overflow: "hidden", minHeight: "80vh", display: "flex", alignItems: "center" }}>
    {/* Blurred Background */}
    <div style={{
      position: "absolute",
      inset: -40, // Negative inset to prevent blurry edges from bleeding in
      zIndex: 0,
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(20px)",
      opacity: 0.25,
    }} />
    
    {/* Gradient fade to match the site background */}
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      background: "linear-gradient(to bottom, hsl(var(--home-bg) / 0.1), hsl(var(--home-bg)))",
    }} />

    {/* Content */}
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 32px 80px", textAlign: "center", position: "relative", zIndex: 1, width: "100%" }}>
      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 9,
        background: "hsl(142 55% 45% / 0.1)", borderRadius: 999,
        padding: "9px 18px", marginBottom: 36,
      }}>
        <span className="bvx-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(142 55% 45%)" }} />
        <span style={{ font: "600 13px/1 Inter", color: "hsl(142 45% 36%)" }}>Free landing page and booking system, hosted free for a year</span>
      </div>

      {/* Headline */}
      <h1 style={{
        font: "800 clamp(38px,5.5vw,70px)/1.12 Inter",
        letterSpacing: "-0.03em", margin: "0 0 26px",
      }}>
        A working website or product in weeks, built by a team that feels like{" "}
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
        Start with LaunchPad: we design, deploy and host your site free for a year. Need more? Real engineers, designers and product managers plug in and ship in weeks, not months.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a
          className="bvx-btn-primary"
          href={BOOKING_URL}
          target="_blank" rel="noopener noreferrer"
          style={{
            background: "hsl(142 50% 40%)", color: "#fff",
            font: "700 16px/1 Inter", padding: "17px 34px",
            borderRadius: 999, transition: "all .2s ease", whiteSpace: "nowrap",
          }}
        >
          Book a free call
        </a>
        <Link
          className="bvx-btn-outline"
          to="/launchpad"
          style={{
            border: "1.5px solid hsl(var(--home-border))", color: "hsl(var(--home-fg))",
            font: "700 16px/1 Inter", padding: "17px 34px",
            borderRadius: 999, transition: "all .2s ease", whiteSpace: "nowrap",
          }}
        >
          See LaunchPad
        </Link>
      </div>
    </div>
  </div>
);
