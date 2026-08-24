export const ValidationRule = () => (
  <div className="reveal" style={{ maxWidth: 900, margin: "140px auto 0", padding: "0 32px", position: "relative", zIndex: 1 }}>
    <div style={{
      background: "hsl(38 75% 52% / 0.12)", borderRadius: 32,
      padding: "56px 48px", textAlign: "center",
    }}>
      <h2 style={{
        font: "600 clamp(28px,4vw,42px)/1.2 'Newsreader',serif",
        fontStyle: "italic", letterSpacing: "-0.01em", margin: "0 0 18px",
      }}>
        We don't promise what we haven't verified.
      </h2>
      <p style={{
        font: "400 16px/1.6 Inter", color: "hsl(var(--home-muted))",
        maxWidth: 520, margin: "0 auto",
      }}>
        Every scope is an architecture decision. Every timeline is checked. Every deliverable is tested before it ever reaches you.
      </p>
    </div>
  </div>
);
