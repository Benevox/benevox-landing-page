import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Zap, Eye, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ownership",
    quote: "If it's yours, it's yours.",
    description:
      "We take full responsibility for every project. Your success is our success.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    quoteColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Speed",
    quote: "Ship fast, learn fast.",
    description:
      "We move quickly without sacrificing quality. Time is your most valuable resource.",
    iconColor: "text-[hsl(var(--brand-gold))]",
    bgColor: "bg-[hsl(var(--brand-gold)/0.1)]",
    quoteColor: "text-[hsl(var(--brand-gold))]",
  },
  {
    icon: Eye,
    title: "Transparency",
    quote: "No hiding problems.",
    description:
      "Clear communication, honest updates. You always know where your project stands.",
    iconColor: "text-[hsl(var(--brand-red))]",
    bgColor: "bg-[hsl(var(--brand-red)/0.1)]",
    quoteColor: "text-[hsl(var(--brand-red))]",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[hsl(var(--brand-brown))] font-semibold tracking-wider uppercase text-sm">
              About Benevox
            </span>
            <h1 className="text-3xl md:text-6xl font-bold mt-4 mb-6">
              Building Africa's Tech Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a team of engineers, entrepreneurs, and innovators committed to solving African problems through technology and disciplined execution.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Founder */}
            <div>
              <span className="text-[hsl(var(--brand-brown))] font-semibold tracking-wider uppercase text-sm">
                Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">
                Meet Our Founder
              </h2>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--brand-gold))] flex items-center justify-center text-2xl font-bold text-background">
                    EP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Eno Peter</h3>
                    <p className="text-muted-foreground">
                      Founder & Technical Lead
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Senior DevOps Engineer, Google Community Lead, and Serial
                  Entrepreneur focused on solving African problems through
                  technology.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With years of experience building and scaling technical teams,
                  Eno founded Benevox to bridge the gap between African talent and
                  global opportunity.
                </p>
              </div>
            </div>

            {/* Right - Values */}
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">
                The Benevox Way
              </h2>

              <div className="space-y-6">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center`}
                    >
                      <value.icon className={`h-6 w-6 ${value.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{value.title}</h4>
                      <p className={`${value.quoteColor} font-medium text-sm mb-2`}>
                        "{value.quote}"
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}