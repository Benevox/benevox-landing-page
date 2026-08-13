import { Button } from "@/components/atoms/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background py-32 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              Teams-as-a-Service (TaaS)
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 animate-slide-up tracking-tighter text-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            Need world-class <br className="hidden md:block" />
            engineering teams <span className="text-brand-green">without hiring?</span>
          </h1>

          {/* Subheadline & Description */}
          <div
            className="max-w-3xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We assemble, manage, and deliver custom solutions in weeks, not months.
              Get your dedicated software production pod on a highly disciplined pipeline.
            </p>
          </div>

          {/* Dual CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto h-auto py-4 px-8 text-base font-bold flex items-center gap-2"
              asChild
            >
              <a
                href="https://calendar.app.google/VT6CAYhjffCPbTfv5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                Get a free 30-min architecture review
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-auto py-4 px-8 text-base font-bold border-brand-green/30 hover:border-brand-green text-foreground hover:bg-brand-green/5 flex items-center gap-2"
              asChild
            >
              <a
                href="https://calendar.app.google/VT6CAYhjffCPbTfv5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="h-5 w-5 text-brand-green" />
                Schedule a discovery call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decor - Minimalist Starkness */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </section>
  );
};
