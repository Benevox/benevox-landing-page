import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Africa's Premier Tech Team
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Your Product, Our Team.
            <br />
            <span className="text-gradient-primary">
              We Build, Ship, and Handover.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            World-class software delivery through a high-discipline production machine—without the management overhead.
            <br />
            <span className="text-foreground font-medium">
              A plug-in system for experienced dev teams, structured product processes, and reliable delivery pipelines.
            </span>
          </p>

          {/* Validation System */}
          <div className="bg-muted/50 rounded-lg p-6 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.25s" }}>
            <p className="text-sm text-muted-foreground">
              <strong>Closed-loop validation system:</strong> No commitment is made to a client until the technical team has verified feasibility.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Request a Technical Scoping
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "15+", label: "Enterprise Clients" },
              { value: "99%", label: "On-Time Delivery" },
              { value: "24/7", label: "Support Coverage" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-green">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-brand-green animate-pulse" />
        </div>
      </div>
    </section>
  );
};
