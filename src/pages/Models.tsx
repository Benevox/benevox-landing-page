import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Clock, CheckCircle, ArrowRight } from "lucide-react";

const models = [
  {
    name: "Fixed-Firm (Predictable)",
    icon: Target,
    description: "Best for projects with absolute requirements and high predictability needs.",
    features: [
      "Fixed price & timeline",
      "Complete scope upfront",
      "Locked requirements",
      "High predictability",
      "Change control process"
    ],
    bestFor: "Legacy migrations, compliance projects, MVP builds with locked requirements",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10"
  },
  {
    name: "Per-Sprint (Agile-Flow)",
    icon: Clock,
    description: "Our fastest model for rapid iteration and pay-as-you-go high-speed pivots.",
    features: [
      "Sprint-based delivery (1 week)",
      "Flexible scope per sprint",
      "Rapid iteration cycles",
      "Pay-as-you-go pricing",
      "Weekly re-prioritization"
    ],
    bestFor: "Early-stage startups, MVP development, product experimentation, rapid pivots",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10"
  },
  {
    name: "Hybrid (80/20 Strategic)",
    icon: CheckCircle,
    description: "Strategic visibility via a directional roadmap combined with tactical sprint execution.",
    features: [
      "80% roadmap planning",
      "20% sprint flexibility",
      "Strategic oversight",
      "Tactical execution",
      "Quarterly re-planning"
    ],
    bestFor: "Growing products, feature development, products needing both direction and flexibility",
    color: "text-amber-600",
    bgColor: "bg-amber-600/10"
  }
];

const comparisonData = [
  { aspect: "Flexibility", model1: "Low", model2: "High", model3: "Medium" },
  { aspect: "Cost Predictability", model1: "High", model2: "Low", model3: "Medium" },
  { aspect: "Market Speed", model1: "Medium", model2: "High", model3: "High" },
  { aspect: "Scope Changes", model1: "Difficult", model2: "Easy", model3: "Managed" },
  { aspect: "Risk Management", model1: "High", model2: "Low", model3: "Balanced" },
  { aspect: "Best Suited For", model1: "Mature Requirements", model2: "Experimentation", model3: "Growth Products" }
];

export default function Models() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
              Engineering-as-a-Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Engagement Models
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Three value paths designed for different project maturity levels and risk profiles. Choose the model that aligns with your business goals and technical requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Models */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Model Details</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                      <h3 className="text-xl font-bold">{model.name}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6">{model.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {model.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <span className="text-xs font-mono text-muted-foreground">BEST FOR</span>
                      <p className="text-sm font-medium text-muted-foreground">{model.bestFor}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Model Comparison</h2>
            
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border-b border-border px-6 py-4 text-left font-semibold">Aspect</th>
                    <th className="border-b border-border px-6 py-4 text-center font-semibold">Fixed-Firm</th>
                    <th className="border-b border-border px-6 py-4 text-center font-semibold">Agile-Flow</th>
                    <th className="border-b border-border px-6 py-4 text-center font-semibold">Hybrid (80/20)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.aspect} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="border-b border-border px-6 py-4 font-medium text-left">{row.aspect}</td>
                      <td className="border-b border-border px-6 py-4 text-center text-muted-foreground">{row.model1}</td>
                      <td className="border-b border-border px-6 py-4 text-center text-muted-foreground">{row.model2}</td>
                      <td className="border-b border-border px-6 py-4 text-center text-muted-foreground">{row.model3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Validation System */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Validation System</h2>
            
            <div className="bg-card rounded-2xl border border-border p-8 mb-12">
              <h3 className="text-xl font-bold mb-6">Closed-Loop Process</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Client Brief</h4>
                    <p className="text-muted-foreground">You describe your project, requirements, and desired outcomes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Validation</h4>
                    <p className="text-muted-foreground">Our technical pod verifies feasibility, estimates scope, and identifies risks.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Commitment</h4>
                    <p className="text-muted-foreground">Only after validation does sales commit to price, timeline, and delivery scope.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Execution</h4>
                    <p className="text-muted-foreground">The delivery pod executes within the validated scope, with progress-based payouts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
              <p className="text-lg text-muted-foreground">
                <strong>The Key Principle:</strong> No commitment is made to a client until the technical team has verified feasibility. This protects both your business and our reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Book a technical scoping session with our team. We'll analyze your project and recommend the best engagement model.
            </p>

            <Button size="xl">
              Book a Technical Scoping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}