import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const included = [
  {
    n: "1", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)",
    title: "A designed landing page",
    body: "A clean, mobile-friendly site that tells your story and builds trust fast.",
  },
  {
    n: "2", bg: "hsl(38 75% 52% / 0.16)", color: "hsl(30 60% 40%)",
    title: "A working booking system",
    body: "Clients or patients can book you directly, no back-and-forth emails.",
  },
  {
    n: "3", bg: "hsl(10 65% 55% / 0.14)", color: "hsl(8 55% 44%)",
    title: "Free hosting, for a year",
    body: "We deploy and host it on our infrastructure, free for your first 12 months.",
  },
];

const whoFor = [
  "Small & medium businesses", "Non-tech founders", "Early-stage startups", "Professionals", "Consultants",
];

const steps = [
  { n: "1", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)", title: "Apply",             body: "Tell us about your business in a short call." },
  { n: "2", bg: "hsl(38 75% 52% / 0.16)",  color: "hsl(30 60% 40%)",  title: "We scope it",       body: "A clear plan and cost, confirmed before we start." },
  { n: "3", bg: "hsl(10 65% 55% / 0.14)",  color: "hsl(8 55% 44%)",   title: "We build & launch", body: "Live and taking bookings, usually within two weeks." },
  { n: "4", bg: "hsl(142 55% 45% / 0.14)", color: "hsl(142 45% 38%)", title: "You focus on your business", body: "We host it, free, for your first year." },
];

const faqs = [
  { q: "What happens after the free year of hosting?", a: "You can renew hosting with us at a low annual rate, or take your site elsewhere; it's yours." },
  { q: "I don't have a domain yet. Is that a problem?", a: "Not at all. We'll help you pick and register one as part of the process." },
  { q: "How much does the development cost?", a: "It depends on scope. We'll walk you through a clear quote before anything is committed." },
];

export default function LaunchPad() {
  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh", position: "relative",
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{ position: "absolute", top: -100, right: -120, width: 420, height: 420, borderRadius: "50%", background: "hsl(38 85% 58% / 0.16)", filter: "blur(90px)" }} />
        <div className="bvx-blob-2" style={{ position: "absolute", top: 500, left: -140, width: 420, height: 420, borderRadius: "50%", background: "hsl(142 55% 45% / 0.14)", filter: "blur(90px)" }} />
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "96px 32px 56px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "hsl(38 75% 52% / 0.14)", borderRadius: 999, padding: "9px 18px", marginBottom: 32 }}>
          <span className="bvx-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "hsl(38 75% 52%)" }} />
          <span style={{ font: "600 13px/1 Inter", color: "hsl(30 60% 38%)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Benevox LaunchPad</span>
        </div>
        <h1 style={{ font: "800 clamp(34px,5vw,58px)/1.15 Inter", letterSpacing: "-0.03em", margin: "0 0 22px" }}>
          A free landing page.<br />A real{" "}
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: "italic", fontWeight: 600, color: "hsl(142 45% 38%)" }}>booking system.</span>
          {" "}All yours.
        </h1>
        <p style={{ font: "400 18px/1.65 Inter", color: "hsl(var(--home-muted))", maxWidth: 620, margin: "0 auto 36px" }}>
          Built for SMEs, non-tech founders, startups, professionals and consultants. We design it, deploy it, and host it free for a full year. You just cover your domain and the development cost.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://calendar.app.google/VT6CAYhjffCPbTfv5" target="_blank" rel="noopener noreferrer"
            className="bvx-btn-primary"
            style={{ background: "hsl(142 50% 40%)", color: "#fff", font: "700 16px/1 Inter", padding: "17px 34px", borderRadius: 999, whiteSpace: "nowrap" }}>
            Apply for LaunchPad
          </a>
          <a href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bvx-btn-outline"
            style={{ border: "1.5px solid hsl(var(--home-border))", color: "hsl(var(--home-fg))", font: "700 16px/1 Inter", padding: "17px 34px", borderRadius: 999, whiteSpace: "nowrap", cursor: "pointer" }}>
            How it works
          </a>
        </div>
      </div>

      {/* Included */}
      <div className="reveal" style={{ maxWidth: 1100, margin: "80px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
          <h2 style={{ font: "700 clamp(26px,3vw,36px)/1.2 Inter", letterSpacing: "-0.02em", margin: "0 0 14px" }}>What's included, on us</h2>
          <p style={{ font: "400 16px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>Everything it takes to get a real, working online presence, no strings attached.</p>
        </div>
        <div className="bvx-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {included.map(c => (
            <div key={c.n} className="bvx-soft-card" style={{ background: "hsl(var(--home-card))", borderRadius: 22, padding: 30, transition: "all .25s ease" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", font: "600 16px/1 'Newsreader',serif", color: c.color, marginBottom: 18 }}>{c.n}</div>
              <h3 style={{ font: "700 17px/1.3 Inter", margin: "0 0 8px" }}>{c.title}</h3>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cost */}
      <div className="reveal" style={{ maxWidth: 800, margin: "100px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div style={{ background: "hsl(38 75% 52% / 0.12)", borderRadius: 28, padding: 44, textAlign: "center" }}>
          <h2 style={{ font: "600 26px/1.3 'Newsreader',serif", fontStyle: "italic", margin: "0 0 20px" }}>The only two things you pay for</h2>
          <div className="bvx-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, textAlign: "left", maxWidth: 560, margin: "0 auto" }}>
            <div>
              <div style={{ font: "700 13px/1 Inter", textTransform: "uppercase", letterSpacing: "0.04em", color: "hsl(30 60% 38%)", marginBottom: 8 }}>Your domain</div>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>A small yearly fee for yourname.com, usually $10 to $20.</p>
            </div>
            <div>
              <div style={{ font: "700 13px/1 Inter", textTransform: "uppercase", letterSpacing: "0.04em", color: "hsl(30 60% 38%)", marginBottom: 8 }}>The build itself</div>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>A one-time development cost, scoped to your project before we start.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div className="reveal" style={{ maxWidth: 1100, margin: "100px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
          <h2 style={{ font: "700 clamp(26px,3vw,36px)/1.2 Inter", letterSpacing: "-0.02em", margin: 0 }}>Who this is for</h2>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          {whoFor.map(w => (
            <span key={w} style={{ background: "hsl(var(--home-card))", padding: "14px 24px", borderRadius: 999, font: "600 14px/1 Inter" }}>{w}</span>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="reveal" style={{ maxWidth: 900, margin: "100px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
          <h2 style={{ font: "700 clamp(26px,3vw,36px)/1.2 Inter", letterSpacing: "-0.02em", margin: 0 }}>How it works</h2>
        </div>
        <div className="bvx-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {steps.map(s => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", font: "600 18px/1 'Newsreader',serif", margin: "0 auto 16px" }}>{s.n}</div>
              <h4 style={{ font: "700 15px/1.3 Inter", margin: "0 0 6px" }}>{s.title}</h4>
              <p style={{ font: "400 13px/1.5 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="reveal" style={{ maxWidth: 760, margin: "100px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <h2 style={{ textAlign: "center", font: "700 clamp(24px,3vw,32px)/1.2 Inter", letterSpacing: "-0.02em", margin: "0 0 36px" }}>
          A few common questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map(f => (
            <div key={f.q} style={{ background: "hsl(var(--home-card))", borderRadius: 18, padding: 24 }}>
              <h4 style={{ font: "700 15px/1.3 Inter", margin: "0 0 8px" }}>{f.q}</h4>
              <p style={{ font: "400 14px/1.6 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="reveal" style={{ maxWidth: 700, margin: "100px auto 0", padding: "0 32px 120px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ font: "600 clamp(28px,4vw,40px)/1.2 'Newsreader',serif", fontStyle: "italic", margin: "0 0 18px" }}>
          Let's get you online.
        </h2>
        <p style={{ font: "400 16px/1.6 Inter", color: "hsl(var(--home-muted))", margin: "0 0 32px" }}>
          Spots for this round of LaunchPad are limited. Apply for a free 30-minute scoping call.
        </p>
        <a href="https://calendar.app.google/VT6CAYhjffCPbTfv5" target="_blank" rel="noopener noreferrer"
          className="bvx-btn-primary"
          style={{ display: "inline-block", background: "hsl(142 50% 40%)", color: "#fff", font: "700 17px/1 Inter", padding: "19px 40px", borderRadius: 999, whiteSpace: "nowrap" }}>
          Apply for LaunchPad
        </a>
      </div>

      <Footer />
    </div>
  );
}
