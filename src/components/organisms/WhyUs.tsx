import { Shield, Zap, DollarSign, Globe } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Unmatched Speed",
    description: "Launch your dedicated pod in under 7 days. High-discipline execution cycles mean scoping, designing, building, and delivering in weeks, not months.",
    color: "text-brand-green bg-brand-green/10",
  },
  {
    icon: Shield,
    title: "Quality Safeguards",
    description: "Governed by our strict 'Validation Rule'. No promise is ever made to you until technical experts verify architectural feasibility. Plus, a 95/5 progress-based QA lock.",
    color: "text-brand-gold bg-brand-gold/10",
  },
  {
    icon: Globe,
    title: "Seamless Timezone Alignment",
    description: "Our core talent base in Africa overlaps with EU/UK and Eastern US timezones, bringing highly skilled communication and synchronous work schedules to your team.",
    color: "text-brand-red bg-brand-red/10",
  },
  {
    icon: DollarSign,
    title: "Zero Management Waste",
    description: "No recruitment friction, no onboarding overhead, and no payroll complications. Pay for delivered progress, not hours logged, with complete cash-flow predictability.",
    color: "text-brand-green bg-brand-green/10",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Why Us Section */}
        <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Text/Benefits */}
          <div className="lg:col-span-5">
            <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">
              The Benevox Edge
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Why Forward-Thinking Companies Choose Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We eliminate the friction of scaling dev teams. By deploying standardized, pre-vetted pods under a rigorous operating system, we deliver product outcomes without the traditional recruitment headache.
            </p>

    {/* Why us split */}
    <div className="bvx-why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, marginBottom: 120, alignItems: "center" }}>
      <div>
        <h2 style={{ font: "700 clamp(26px,3vw,36px)/1.25 Inter", letterSpacing: "-0.02em", margin: "0 0 18px" }}>
          Why people choose to work with us
        </h2>
        <p style={{ font: "400 16px/1.65 Inter", color: "hsl(var(--home-muted))", margin: "0 0 28px" }}>
          We take the friction out of scaling a team with real people, pre-vetted and ready, without the recruiting headache.
        </p>
        <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
          <div>
            <div style={{ font: "700 30px/1 'Newsreader',serif", color: "hsl(142 45% 38%)" }}>4+ hrs</div>
            <div style={{ font: "600 12px/1.4 Inter", color: "hsl(var(--home-muted))", marginTop: 8 }}>Overlap with your day</div>
          </div>
          <div>
            <div style={{ font: "700 30px/1 'Newsreader',serif", color: "hsl(30 60% 40%)" }}>100%</div>
            <div style={{ font: "600 12px/1.4 Inter", color: "hsl(var(--home-muted))", marginTop: 8 }}>Pay for progress made</div>
          </div>
        </div>
      </div>

      </div>
    </div>

      </div>

    <style>{`
      @media (max-width: 768px) {
        .bvx-why-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </div>
    </section>
);
};
