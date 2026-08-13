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

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <span className="text-4xl font-black text-brand-green block mb-1">4+ Hours</span>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Synchronous Overlap</span>
              </div>
              <div>
                <span className="text-4xl font-black text-brand-gold block mb-1">100%</span>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">No-Waste Progress Billing</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-brand-green/20 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl inline-flex mb-4 ${prop.color}`}>
                  <prop.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </section>
  );
};
