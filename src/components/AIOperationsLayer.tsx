import { Bot, Users, Shield } from "lucide-react";

export const AIOperationsLayer = () => {
  return (
    <section id="ai-operations" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
            AI-Powered Operations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            AI-Assisted Operations Layer
          </h2>
          <p className="text-muted-foreground text-lg">
            AI agents accelerate intake, scoping, and risk analysis to ensure consistency and speed.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* AI Capabilities */}
            <div>
              <h3 className="text-2xl font-bold mb-6">AI Acceleration Areas</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Intake Processing</h4>
                    <p className="text-muted-foreground text-sm">
                      Automated requirement analysis and initial scoping to reduce response time from days to hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Analysis</h4>
                    <p className="text-muted-foreground text-sm">
                      AI-driven risk assessment and mitigation planning for technical and business uncertainties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consistency Engine</h4>
                    <p className="text-muted-foreground text-sm">
                      Standardized proposal generation and quality assurance across all engagements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Human Accountability */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Human Accountability Rule</h3>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>AI assists in drafting plans,</strong> but human experts remain the final approval authority.
                </p>

                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Accountability Framework</h4>
                      <p className="text-xs text-muted-foreground">
                        Product Managers and Engineers are solely accountable for all decisions and delivery commitments.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Our AI systems enhance human expertise, they don't replace it. Every commitment carries human accountability.
                </p>
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-8">AI-Human Collaboration Flow</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-2">AI Intake</h4>
                <p className="text-xs text-muted-foreground">Automated analysis & initial scoping</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-2">Human Review</h4>
                <p className="text-xs text-muted-foreground">Expert validation & risk assessment</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-2">AI Refinement</h4>
                <p className="text-xs text-muted-foreground">Optimized proposal generation</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-2">Human Approval</h4>
                <p className="text-xs text-muted-foreground">Final commitment & accountability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};