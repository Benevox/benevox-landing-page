import { Shield, CheckCircle, Clock, Award } from "lucide-react";

const guardrails = [
  {
    title: "The Validation Rule",
    description: "Sales never promises price or timeline until the technical pod validates the scope.",
    icon: Shield,
    color: "text-blue-600"
  },
  {
    title: "Progress-Based Payouts",
    description: "Clients only pay for verified completion of scoped milestones or sprints.",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    title: "Quality Holdback",
    description: "95% of validated work is payable upon progress, with 5% held back until QA confirmation.",
    icon: Award,
    color: "text-purple-600"
  }
];

export const OperationalGuardrails = () => {
  return (
    <section id="guardrails" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
            Trust & Transparency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Operational Guardrails
          </h2>
          <p className="text-muted-foreground text-lg">
            Our non-negotiables that ensure consistent, professional delivery.
          </p>
        </div>

        {/* Guardrails Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {guardrails.map((guardrail) => {
            const IconComponent = guardrail.icon;
            return (
              <div
                key={guardrail.title}
                className="group relative rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className={`h-6 w-6 ${guardrail.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{guardrail.title}</h3>
                </div>

                <p className="text-muted-foreground">{guardrail.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Why These Guardrails Matter</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Client Protection
                </h4>
                <p className="text-muted-foreground text-sm">
                  Every commitment is technically validated before being made. No sales pressure, no unrealistic promises.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Quality Assurance
                </h4>
                <p className="text-muted-foreground text-sm">
                  Payment is tied to verified progress, ensuring work meets standards before funds are released.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Risk Mitigation
                </h4>
                <p className="text-muted-foreground text-sm">
                  Structured validation prevents scope creep and ensures predictable delivery.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Professional Standards
                </h4>
                <p className="text-muted-foreground text-sm">
                  Built for enterprise clients who demand consistency and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};