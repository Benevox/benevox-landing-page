import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ValidationRule = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-green/5 border border-brand-green/30 rounded-2xl p-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-brand-green" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  The Validation Rule
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <strong>No unverified promises. No commitment is made to a client until our technical pod verifies feasibility.</strong> This is not negotiable. It protects both your business and our reputation.
                </p>
                <p className="text-muted-foreground mb-8">
                  Every scope becomes a technical architecture decision. Every timeline is verified against risk. Every deliverable is tested before handover.
                </p>

                <Button size="lg">
                  Learn How We Validate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
