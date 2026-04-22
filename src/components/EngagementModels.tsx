import { CheckCircle, Clock, Target } from "lucide-react";

const models = [
  {
    name: "Fully Scoped (Fixed-Firm)",
    icon: Target,
    description: "Best for projects with absolute requirements and the need for high predictability (e.g., legacy migrations).",
    features: ["Fixed price & timeline", "Complete scope upfront", "High predictability", "Legacy system expertise"],
    bestFor: "Enterprise migrations, compliance projects"
  },
  {
    name: "Per Sprint (Agile-Flow)",
    icon: Clock,
    description: "Our fastest model for rapid iteration and 'pay-as-you-go' high-speed pivots.",
    features: ["Sprint-based delivery", "Flexible scope", "Rapid iteration", "Pay-as-you-go"],
    bestFor: "MVP development, product experimentation"
  },
  {
    name: "The Hybrid Model (80/20)",
    icon: CheckCircle,
    description: "Strategic visibility via a directional roadmap combined with tactical sprint-validated execution.",
    features: ["80% roadmap planning", "20% sprint execution", "Strategic oversight", "Tactical flexibility"],
    bestFor: "Growing products, feature development"
  }
];

const comparisonData = [
  { aspect: "Flexibility", model1: "Low", model2: "High", model3: "Medium" },
  { aspect: "Cost Predictability", model1: "High", model2: "Low", model3: "Medium" },
  { aspect: "Market Speed", model1: "Medium", model2: "High", model3: "High" },
  { aspect: "Scope Changes", model1: "Difficult", model2: "Easy", model3: "Managed" },
  { aspect: "Risk Management", model1: "High", model2: "Low", model3: "Balanced" }
];

export const EngagementModels = () => {
  return (
    <section id="engagement-models" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
            Engineering-as-a-Service
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Engagement Models
          </h2>
          <p className="text-muted-foreground text-lg">
            Three value paths designed for different project needs and risk profiles.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <div
                key={model.name}
                className="group relative rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{model.name}</h3>
                </div>

                <p className="text-muted-foreground mb-6">{model.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-mono text-muted-foreground">BEST FOR</span>
                  <p className="text-sm font-medium">{model.bestFor}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Model Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-4 text-left font-semibold">Aspect</th>
                  <th className="border border-border p-4 text-center font-semibold">Fixed-Firm</th>
                  <th className="border border-border p-4 text-center font-semibold">Agile-Flow</th>
                  <th className="border border-border p-4 text-center font-semibold">Hybrid (80/20)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.aspect} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="border border-border p-4 font-medium">{row.aspect}</td>
                    <td className="border border-border p-4 text-center">{row.model1}</td>
                    <td className="border border-border p-4 text-center">{row.model2}</td>
                    <td className="border border-border p-4 text-center">{row.model3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};