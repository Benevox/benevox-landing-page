import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Bot, Users, Lock, BarChart3, ArrowRight } from "lucide-react";

export default function OpsAndSecurity() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
              Trust & Transparency
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Operations & Security
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Built on transparent operational guardrails and high-discipline execution processes. No surprises, no excuses.
            </p>
          </div>
        </div>
      </section>

      {/* Closed-Loop Validation System */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Closed-Loop Validation System</h2>
              <p className="text-muted-foreground text-lg">
                Sales never promises price or timeline until the technical pod validates the scope.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">No Unvalidated Ideas</h3>
                      <p className="text-muted-foreground text-sm">
                        Technical feasibility is verified before any sales commitment is made.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Verified Scope</h3>
                      <p className="text-muted-foreground text-sm">
                        Every commitment includes a locked scope and realistic timeline based on technical validation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Human Accountability</h3>
                      <p className="text-muted-foreground text-sm">
                        Technical PMs and engineers are accountable for all delivery commitments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold mb-8">Validation Process</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Requirements Analysis</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Technical team reviews all requirements for completeness and clarity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Feasibility Check</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Engineering team assesses technical feasibility and risk factors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Estimate & Risk Report</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Detailed scope, timeline, and risk mitigation plan created.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Sales Commitment</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Only after validation do we commit to price and timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Holdback System */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Progress-Based Payouts & Quality Holdback</h2>
              <p className="text-muted-foreground text-lg">
                95% payable on verified progress, 5% held until QA confirms excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Progress-Based Payouts
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Clients pay only for verified completion</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    Each completed milestone or sprint is verified before payment is released. No invoicing for incomplete work.
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Lock className="h-6 w-6 text-amber-600" />
                  Quality Holdback
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">95% on completion</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[95%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">5% held for QA verification</span>
                      <span className="text-sm text-muted-foreground">5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full w-[5%]" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    Final 5% is released only after QA engineer confirms the work meets quality standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="font-bold mb-4">Why This Matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>For you:</strong> Pay only for complete, verified work. No partial deliverables.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>For us:</strong> Incentivizes quality and on-time delivery. QA is never rushed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>For everyone:</strong> Prevents scope creep and ensures predictable cash flow.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Operations Layer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Operations Layer</h2>
              <p className="text-muted-foreground text-lg">
                AI accelerates intake, scoping, and risk analysis. Humans approve everything.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Intake Processing</h3>
                    <p className="text-muted-foreground text-sm">
                      Converts messy client briefs into structured pre-scopes and task-linked milestones in hours, not days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Risk Analysis</h3>
                    <p className="text-muted-foreground text-sm">
                      Identifies dependencies, estimates scope impact of "small updates", and flags high-risk areas automatically.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Consistency Engine</h3>
                    <p className="text-muted-foreground text-sm">
                      Ensures all proposals, estimates, and delivery status reports follow standardized formats and logic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  Human Accountability Rule
                </h3>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>AI drafts and accelerates,</strong> but humans remain the final approval authority.
                  </p>

                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Accountability Framework</h4>
                        <p className="text-xs text-muted-foreground">
                          Product Managers and Engineers are <strong>solely accountable</strong> for all decisions and delivery commitments. AI is a tool, not a decision maker.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Every commitment carries human accountability. Our people stand behind every scope estimate and timeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-center mb-8">AI-Human Collaboration Flow</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">AI Intake</h4>
                  <p className="text-xs text-muted-foreground">Structured analysis & pre-scoping</p>
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

      {/* Security & Compliance */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
              <p className="text-muted-foreground text-lg">
                Enterprise-grade standards for all projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  SOC2 Compliance
                </h3>
                <p className="text-muted-foreground text-sm">
                  All engineering environments are SOC2-compliant, ensuring security, availability, and integrity of systems.
                </p>
              </div>

              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  Data Protection
                </h3>
                <p className="text-muted-foreground text-sm">
                  Encrypted data storage, secure transmission, and strict access control. Your data is treated as gold.
                </p>
              </div>

              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  IP Ownership
                </h3>
                <p className="text-muted-foreground text-sm">
                  Clear IP ownership agreements. Your code and designs are yours to own or license as negotiated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work with a Production Machine?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Understand our process and see how we deliver consistent, high-quality software.
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