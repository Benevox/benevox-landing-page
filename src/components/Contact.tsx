import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

type UserType = "startup" | "enterprise" | "partner" | null;
type NeedType = "product" | "team" | "migration" | null;

export const Contact = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(null);
  const [needType, setNeedType] = useState<NeedType>(null);
  const [hasWebsite, setHasWebsite] = useState<boolean | null>(null);

  const userTypes = [
    { id: "startup", label: "Startup", icon: "🚀" },
    { id: "enterprise", label: "Enterprise", icon: "🏢" },
    { id: "partner", label: "Cloud Partner", icon: "☁️" },
  ] as const;

  const needTypes = [
    { id: "product", label: "New Product Build" },
    { id: "team", label: "Team Augmentation" },
    { id: "migration", label: "Cloud Migration" },
  ] as const;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-brand-green font-semibold tracking-wider uppercase text-sm">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
              Let's Build Together
            </h2>
            <p className="text-muted-foreground">
              Tell us about your project in 4 simple steps
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">For Individuals & Small Businesses</h3>
              <p className="text-muted-foreground mb-4">
                Have an idea but not sure where to start?
              </p>
              <Button variant="hero" size="lg">
                Free 10-minute consultation to launch your idea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-10">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-brand-green" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="p-8 rounded-2xl bg-background border border-border min-h-[300px]">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Who are you?</h3>
                <div className="grid grid-cols-3 gap-4">
                  {userTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setUserType(type.id)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        userType === type.id
                          ? "border-brand-green bg-brand-green/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="font-semibold">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">What do you need?</h3>
                <div className="space-y-3">
                  {needTypes.map((need) => (
                    <button
                      key={need.id}
                      onClick={() => setNeedType(need.id)}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-300 flex items-center justify-between ${
                        needType === need.id
                          ? "border-brand-green bg-brand-green/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <span className="font-semibold">{need.label}</span>
                      {needType === need.id && (
                        <Check className="h-5 w-5 text-brand-green" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && userType === "startup" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">
                  Do you have a website and business registration?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: true, label: "Yes, I'm ready" },
                    { value: false, label: "Not yet" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setHasWebsite(option.value)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        hasWebsite === option.value
                          ? "border-brand-green bg-brand-green/10"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <div className="font-semibold">{option.label}</div>
                    </button>
                  ))}
                </div>
                {hasWebsite === false && (
                  <p className="text-sm text-brand-gold">
                    No problem! Our Accelerator Program can help you get started.
                  </p>
                )}
              </div>
            )}

            {(step === 3 && userType !== "startup") || step === 4 ? (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Almost there!</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-4 rounded-xl bg-muted border border-border focus:border-brand-green focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-4 rounded-xl bg-muted border border-border focus:border-brand-green focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Tell us about your project (optional)"
                    rows={3}
                    className="w-full p-4 rounded-xl bg-muted border border-border focus:border-brand-green focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            ) : null}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>

              {step < 4 && !(step === 3 && userType !== "startup") ? (
                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !userType) ||
                    (step === 2 && !needType) ||
                    (step === 3 && userType === "startup" && hasWebsite === null)
                  }
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button variant="hero">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
