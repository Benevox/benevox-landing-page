import { FeatureCard } from "@/components/molecules/FeatureCard";
import { Users, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Teams",
    description: "Elite tech talent plugged into your roadmap. No onboarding overhead.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
  {
    icon: ShieldCheck,
    title: "Structured Processes",
    description: "Disciplined SOPs that ensure consistency, quality, and transparency.",
    color: "text-brand-gold",
    bgColor: "bg-brand-gold/10",
  },
  {
    icon: Zap,
    title: "Reliable Pipelines",
    description: "Automated delivery from code to handover. Ship fast, handover clean.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
];

export const PlugInSystem = () => {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Scannable */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">
            The Plug-In System
          </h2>
          <p className="text-muted-foreground text-xl">
            Capability without management overhead.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
