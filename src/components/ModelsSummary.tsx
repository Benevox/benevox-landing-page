import { Target, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = [
  {
    name: "Fixed-Firm",
    subtitle: "Predictable",
    icon: Target,
    description: "Best for projects with absolute requirements and high predictability needs. Ideal for legacy migrations and MVP builds with locked requirements.",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  {
    name: "Agile-Flow",
    subtitle: "Fast",
    icon: Clock,
    description: "Our fastest model for rapid iteration and pay-as-you-go high-speed pivots. Perfect for early-stage startups and experimental features.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10"
  },
  {
    name: "Hybrid",
    subtitle: "Strategic",
    icon: CheckCircle,
    description: "80/20 split between long-term roadmap planning and tactical sprint execution. Best for growing products needing both direction and flexibility.",
    color: "text-amber-600",
    bgColor: "bg-amber-600/10"
  }
];

export const ModelsSummary = () => {
  return (
    <section id="models-summary" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
            Choose Your Path
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Three Engagement Models
          </h2>
          <p className="text-muted-foreground text-lg">
            Select the model that best fits your project maturity, risk profile, and timeline requirements.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model) => {
            const IconComponent = model.icon;
            return (
              <div
                key={model.name}
                className="group relative rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${model.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${model.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{model.name}</h3>
                    <span className="text-sm text-muted-foreground">{model.subtitle}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {model.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full group"
                  asChild
                >
                  <a href="/models" className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Unsure which model fits your project?
          </p>
          <Button size="xl">
            Book a Technical Scoping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};