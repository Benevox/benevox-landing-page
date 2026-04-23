import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/ui/button";

export const ValidationRule = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-8 md:p-16 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-brand-green" />
                </div>
              </div>

              <div className="flex-1">
                <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">
                  Operational Guardrail
                </span>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                  The Validation Rule
                </h2>
                <p className="text-2xl md:text-3xl text-foreground mb-8 leading-tight font-medium">
                  No unverified promises. No commitment is made until our technical pod verifies feasibility.
                </p>
                <p className="text-lg text-muted-foreground mb-10">
                  Every scope is an architecture decision. Every timeline is verified. Every deliverable is tested.
                </p>

                <Button size="xl" className="h-auto py-5 px-10 text-xl font-bold" asChild>
                  <a href="/ops-and-security">
                    Book a Technical Scoping
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
