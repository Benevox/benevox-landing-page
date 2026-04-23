import { Button } from "@/components/atoms/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background py-32 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-brand-green">
              High-Discipline Software Production
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 animate-slide-up tracking-tighter"
            style={{ animationDelay: "0.1s" }}
          >
            Your Product, <br className="hidden md:block" />
            <span className="text-brand-green">Our Team.</span>
          </h1>

          {/* Subheadline & Tagline */}
          <div
            className="max-w-3xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              We Build, Ship, and Handover.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              World-class software delivery through a high-discipline production machine—without the management overhead.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="xl" className="text-lg px-10 py-8 h-auto font-bold">
              Book a Technical Scoping
              <ArrowRight className="ml-2 h-6 w-6" />
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
