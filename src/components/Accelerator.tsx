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
      "We build their digital presence (Website) and legal foundation.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Handover",
    description: "We deliver migration-ready businesses to Cloud Providers.",
    iconColor: "text-[hsl(var(--brand-red))]",
    bgColor: "bg-[hsl(var(--brand-red)/0.1)]",
  },
];

export const Accelerator = () => {
  return (
    <section id="accelerator" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[hsl(var(--brand-gold)/0.05)] to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-gold)/0.1)] border border-[hsl(var(--brand-gold)/0.3)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--brand-gold))] animate-pulse" />
              <span className="text-[hsl(var(--brand-gold))] text-sm font-semibold">
                New Program
              </span>
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Benevox{" "}
              <span className="text-gradient-accent">Startup Accelerator</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Accelerating Cloud Adoption in Africa. We prepare early-stage
              startups for cloud migration, solving the "unqualified lead"
              problem for partners.
            </p>

            <p className="text-muted-foreground mb-8">
              Perfect for Cloud Partners like AWS and Google Partner Managers
              looking for qualified, migration-ready African businesses.
            </p>

            <Button variant="gold" size="lg">
              Partner with Benevox
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right - Process Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.title}
                className="group flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-[hsl(var(--brand-gold)/0.5)] transition-all duration-300"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center`}
                  >
                    <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
