import {
  FileSearch,
  Users,
  TrendingUp,
  ShieldCheck,
  ExternalLink,
  Settings
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Scoping & Architecture Review",
    description: "We map your technical roadmap and verify feasibility upfront. No unvalidated promises.",
    icon: FileSearch,
    color: "text-brand-green border-brand-green/30 bg-brand-green/5",
  },
  {
    number: "02",
    title: "Pod Assembly",
    description: "We configure a dedicated team—Product Manager, Designer, Engineers, QA—customized to your goals.",
    icon: Users,
    color: "text-brand-gold border-brand-gold/30 bg-brand-gold/5",
  },
  {
    number: "03",
    title: "Weekly Agile Sprints",
    description: "We build in high-speed, one-week cycles with absolute transparency and pay-as-you-go control.",
    icon: TrendingUp,
    color: "text-brand-red border-brand-red/30 bg-brand-red/5",
  },
  {
    number: "04",
    title: "Continuous QA & Validation",
    description: "Our QA engineers rigorously verify every single feature before release. Excellence is non-negotiable.",
    icon: ShieldCheck,
    color: "text-brand-green border-brand-green/30 bg-brand-green/5",
  },
  {
    number: "05",
    title: "Clean Handover",
    description: "We deliver smooth, well-documented code, clean databases, and scalable infrastructure to your team.",
    icon: ExternalLink,
    color: "text-brand-gold border-brand-gold/30 bg-brand-gold/5",
  },
  {
    number: "06",
    title: "Ongoing Management & Scale",
    description: "Optional: We can continue running, maintaining, and scaling your systems post-launch.",
    icon: Settings,
    color: "text-brand-red border-brand-red/30 bg-brand-red/5",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">
            The Delivery Blueprint
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            A high-discipline, structured software production process in plain English.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl border border-border bg-card hover:border-brand-green/20 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl border ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-4xl font-black text-muted-foreground/20 group-hover:text-brand-green/20 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
