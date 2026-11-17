import { BOOKING_URL, WHATSAPP_URL } from "@/lib/cta";

export const CtaSection = () => (
  <div className="reveal" style={{ maxWidth: 760, margin: "140px auto 0", padding: "0 32px 120px", textAlign: "center", position: "relative", zIndex: 1 }}>
    <h2 style={{ font: "600 clamp(28px,3.8vw,42px)/1.2 'Newsreader',serif", fontStyle: "italic", margin: "0 0 16px" }}>
      Let's scope your project.
    </h2>
    <p style={{ font: "400 16px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 30px" }}>
      Book a free 30-minute call. We'll tell you what it takes, what it costs and how fast it can ship.
    </p>
    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bvx-btn-primary"
        style={{ background: "hsl(142 50% 40%)", color: "#fff", font: "700 16px/1 Inter", padding: "17px 34px", borderRadius: 999 }}>
        Book a free call
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bvx-btn-outline"
        style={{ border: "1.5px solid hsl(var(--home-border))", color: "hsl(var(--home-fg))", font: "700 16px/1 Inter", padding: "17px 34px", borderRadius: 999 }}>
        Message us on WhatsApp
      </a>
    </div>
  </div>
);
