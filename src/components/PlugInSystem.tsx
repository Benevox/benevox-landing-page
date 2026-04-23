import { Users, Cog, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Experienced Teams",
    description: "Elite tech talent plugged into your roadmap. No onboarding overhead.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
  {
    icon: Cog,
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
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-green font-semibold tracking-wider uppercase text-sm">
            The Plug-In System
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Plug In Capability, Not Management
          </h2>
          <p className="text-muted-foreground text-lg">
            Three core capabilities that power world-class delivery without the overhead.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-background border border-border p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className={`p-4 rounded-lg ${feature.bgColor} w-fit mb-6`}>
                  <IconComponent className={`h-7 w-7 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
