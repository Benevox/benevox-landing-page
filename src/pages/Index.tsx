import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { PlugInSystem } from "@/components/organisms/PlugInSystem";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { RecentProjects } from "@/components/organisms/RecentProjects";
import { WhyUs } from "@/components/organisms/WhyUs";
import { ValidationRule } from "@/components/organisms/ValidationRule";
import { ModelsSummary } from "@/components/organisms/ModelsSummary";
import { Footer } from "@/components/organisms/Footer";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 20000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))",
      fontFamily: "'Inter',sans-serif", minHeight: "100vh",
      position: "relative", transition: "background .3s ease, color .3s ease",
    }}>
      <Navbar />

      {/* Decorative blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="bvx-blob-1" style={{
          position: "absolute", top: -120, left: -100, width: 420, height: 420,
          borderRadius: "50%", background: "hsl(142 55% 45% / 0.16)", filter: "blur(80px)",
        }} />
        <div className="bvx-blob-2" style={{
          position: "absolute", top: 200, right: -140, width: 460, height: 460,
          borderRadius: "50%", background: "hsl(38 85% 58% / 0.16)", filter: "blur(90px)",
        }} />
      </div>

      <Hero />
      <PlugInSystem />
      <HowItWorks />
      <RecentProjects />
      <WhyUs />
      <ValidationRule />
      <ModelsSummary />
      <Footer />

      {/* LaunchPad popup */}
      {showPopup && (
        <div style={{
          position: "fixed", inset: 0, background: "hsl(30 10% 5% / 0.55)",
          backdropFilter: "blur(4px)", display: "flex", alignItems: "center",
          justifyContent: "center", zIndex: 100, padding: 24,
        }}>
          <div style={{
            background: "hsl(var(--home-card))", borderRadius: 28,
            maxWidth: 460, width: "100%", padding: 40,
            position: "relative", boxShadow: "0 30px 70px hsl(30 10% 5% / 0.35)",
          }}>
            <button
              onClick={() => setShowPopup(false)}
              aria-label="Close"
              style={{
                position: "absolute", top: 18, right: 18,
                width: 32, height: 32, borderRadius: "50%",
                border: "none", background: "hsl(var(--home-card-2))",
                color: "hsl(var(--home-fg))", fontSize: 16,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ×
            </button>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "hsl(38 75% 52% / 0.14)", borderRadius: 999,
              padding: "7px 16px", marginBottom: 22,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "hsl(38 75% 52%)" }} />
              <span style={{ font: "700 12px/1 Inter", color: "hsl(30 60% 38%)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Introducing
              </span>
            </div>
            <h2 style={{ font: "600 30px/1.2 'Newsreader',serif", fontStyle: "italic", margin: "0 0 14px" }}>
              Benevox LaunchPad
            </h2>
            <p style={{ font: "400 15px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 28px" }}>
              A free landing page and booking system for SMEs, non-tech founders, startups, professionals and consultants, designed, deployed, and hosted free for a full year. You only cover your domain and the development cost.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                to="/launchpad"
                onClick={() => setShowPopup(false)}
                style={{
                  textAlign: "center", background: "hsl(142 50% 40%)", color: "#fff",
                  font: "700 15px/1 Inter", padding: 15, borderRadius: 999,
                }}
              >
                See the LaunchPad program
              </Link>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  textAlign: "center", color: "hsl(var(--home-muted))",
                  font: "600 13px/1 Inter", cursor: "pointer",
                  padding: 6, background: "none", border: "none",
                }}
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
