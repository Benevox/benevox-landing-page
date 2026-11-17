import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { CtaSection } from "@/components/organisms/CtaSection";
import { caseStudies } from "@/lib/caseStudies";
import NotFound from "./NotFound";

const Section = ({ title, body }: { title: string; body?: string }) =>
  body ? (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ font: "700 20px/1.3 Inter", margin: "0 0 10px" }}>{title}</h2>
      <p style={{ font: "400 16px/1.7 Inter", color: "hsl(var(--home-muted))", margin: 0 }}>{body}</p>
    </div>
  ) : null;

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = caseStudies.find(c => c.slug === slug);
  if (!cs) return <NotFound />;

  return (
    <div style={{ background: "hsl(var(--home-bg))", color: "hsl(var(--home-fg))", fontFamily: "'Inter',sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "96px 32px 0" }}>
        <Link to="/portfolio" style={{ color: "hsl(142 45% 38%)", font: "700 14px/1 Inter" }}>← All work</Link>
        <div style={{ font: "700 12px/1 Inter", color: "hsl(142 45% 38%)", textTransform: "uppercase", letterSpacing: "0.04em", margin: "28px 0 12px" }}>
          {cs.client}
        </div>
        <h1 style={{ font: "800 clamp(30px,4.5vw,46px)/1.2 Inter", letterSpacing: "-0.03em", margin: "0 0 16px" }}>{cs.title}</h1>
        <p style={{ font: "400 18px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 12px" }}>{cs.summary}</p>
        <div style={{ font: "700 16px/1 Inter", margin: "0 0 40px" }}>{cs.stat}</div>
        <Section title="The challenge" body={cs.challenge} />
        <Section title="What we built" body={cs.solution} />
        <Section title="The result" body={cs.result} />
        {cs.quote && (
          <blockquote style={{ borderLeft: "3px solid hsl(142 50% 40%)", margin: "0 0 32px", padding: "4px 0 4px 20px", font: "italic 500 18px/1.6 'Newsreader',serif" }}>
            “{cs.quote.text}”
            <footer style={{ font: "600 13px/1 Inter", color: "hsl(var(--home-muted))", marginTop: 10 }}>{cs.quote.by}</footer>
          </blockquote>
        )}
        {cs.link && (
          <a href={cs.link} target="_blank" rel="noopener noreferrer" style={{ color: "hsl(142 45% 38%)", font: "700 15px/1 Inter" }}>
            Visit the live site →
          </a>
        )}
      </div>
      <CtaSection />
      <Footer />
    </div>
  );
}
