import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Shield, Lock, Bot, UserCheck, Scale } from "lucide-react";

const OpsAndSecurity = () => {
  const agents = [
    {
      name: "Intake Agent",
      role: "Analysis & Requirement Extraction",
      description: "Parses client vision into structured data, ensuring zero loss of intent between business and engineering.",
      icon: Bot,
    },
    {
      name: "Scoping Agent",
      role: "Architecture & Estimation",
      description: "Verifies technical feasibility and maps requirements to the optimal technology stack and delivery timeline.",
      icon: Bot,
    },
    {
      name: "Risk Agent",
      role: "Dependency & Bottleneck Detection",
      description: "Monitors engineering flow to detect risks before they impact milestones. The primary safeguard for 'No Unverified Promises'.",
      icon: Bot,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            The Machine Specs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            High-discipline delivery through automated pipelines and radical accountability.
          </p>
        </div>

        {/* 95/5 Quality Holdback */}
        <div className="max-w-4xl mx-auto mb-32 p-12 rounded-2xl border border-brand-green/20 bg-brand-green/5">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
              <Scale className="h-10 w-10 text-brand-green" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">95/5 Quality Holdback</h2>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                Our team payout logic is built on accountability. We hold back 5% of the total milestone payout until 30 days post-handover to ensure zero technical debt and absolute stability.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-brand-green/10 rounded-lg text-brand-green font-bold text-sm">ZERO DEBT</div>
                <div className="px-4 py-2 bg-brand-green/10 rounded-lg text-brand-green font-bold text-sm">POST-SHIPPING SUPPORT</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Operations Layer */}
        <div id="ai-operations" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">AI Operations Layer</h2>
            <p className="text-xl text-muted-foreground">The machine's internal agents that drive the production line.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {agents.map((agent) => (
              <div key={agent.name} className="p-8 rounded-2xl border border-border bg-card hover:border-brand-gold/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
                  <agent.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">{agent.role}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          {/* Human Accountability Rule */}
          <div className="max-w-3xl mx-auto mt-16 p-8 rounded-xl border border-brand-red/20 bg-brand-red/5 flex items-start gap-6">
            <UserCheck className="h-8 w-8 text-brand-red flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-brand-red mb-2 uppercase tracking-wide">The Human Accountability Rule</h3>
              <p className="text-muted-foreground">
                AI drafts, humans approve. Every automated output from the machine is verified by a human expert. No AI agent has the final authority on architectural commitments.
              </p>
            </div>
          </div>
        </div>

        {/* Security & IP */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32">
          <div className="p-10 rounded-2xl border border-border">
            <Shield className="h-10 w-10 text-brand-green mb-6" />
            <h3 className="text-2xl font-bold mb-4">SOC2-Compliant Environments</h3>
            <p className="text-muted-foreground leading-relaxed">
              All development occurs in isolated, SOC2-compliant cloud environments. We implement strict access controls and zero-trust networking as standard.
            </p>
          </div>
          <div className="p-10 rounded-2xl border border-border">
            <Lock className="h-10 w-10 text-brand-gold mb-6" />
            <h3 className="text-2xl font-bold mb-4">IP Protection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strict legal and technical safeguards ensure that all IP generated during your project is transferred fully to you upon milestone completion.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OpsAndSecurity;
