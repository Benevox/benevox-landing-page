import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, FileCode, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Vet",
    description: "We find high-potential African startups ready to scale.",
    iconColor: "text-[hsl(var(--brand-gold))]",
    bgColor: "bg-[hsl(var(--brand-gold)/0.1)]",
  },
  {
    step: "02",
    icon: FileCode,
    title: "Prep",
    description:
      "We don't just build their website and legal foundation, we help build their social media pages and branding.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Handover",
    description: "We then either hand them over or help them manage it.",
    iconColor: "text-[hsl(var(--brand-red))]",
    bgColor: "bg-[hsl(var(--brand-red)/0.1)]",
  },
];

export default function Accelerator() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[hsl(var(--brand-gold)/0.05)] to-transparent blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-gold)/0.1)] border border-[hsl(var(--brand-gold)/0.3)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--brand-gold))] animate-pulse" />
              <span className="text-[hsl(var(--brand-gold))] text-sm font-semibold">
                New Program
              </span>
            </span>

            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Benevox{" "}
              <span className="text-gradient-accent">Startup Accelerator</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Accelerating Cloud Adoption in Africa. We prepare early-stage
              startups for cloud migration, solving the "unqualified lead"
              problem for partners.
            </p>

            <p className="text-muted-foreground mb-10">
              Perfect for Cloud Partners like AWS and Google Partner Managers
              looking for qualified, migration-ready African businesses.
            </p>

            <Button variant="gold" size="xl">
              Partner with Benevox
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>

            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="group flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-[hsl(var(--brand-gold)/0.5)] transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-xl ${step.bgColor} flex items-center justify-center`}
                    >
                      <step.icon className={`h-7 w-7 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-lg font-mono font-bold text-muted-foreground">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Partner?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join us in accelerating cloud adoption across Africa. Let's connect qualified startups with the right cloud partners.
            </p>

            <Button variant="gold" size="xl">
              Start a Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}