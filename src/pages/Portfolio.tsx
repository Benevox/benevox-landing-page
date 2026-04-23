import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    client: "NigComSat",
    type: "Government / Agri-Tech",
    project: "DashCom",
    description:
      "IoT-enabled dashboard for nationwide data-driven agriculture, processing real-time sensor data from agricultural installations across the country.",
    impact: "Nationwide agricultural data platform",
    accentColor: "bg-primary",
    dotColor: "bg-primary",
  },
  {
    client: "Mabi",
    type: "Media / Streaming",
    project: "Video Platform",
    description:
      "Full video encoding engine capable of Netflix-style backend processing and smooth streaming, handling complex video workflows at scale.",
    impact: "Enterprise-grade streaming infrastructure",
    accentColor: "bg-[hsl(var(--brand-red))]",
    dotColor: "bg-[hsl(var(--brand-red))]",
  },
  {
    client: "Storipod",
    type: "Social / Tech",
    project: "Engineering Squads",
    description:
      "Engineering Squads model for scaling existing workforces without stress, providing structured development teams and product processes.",
    impact: "Seamless workforce scaling",
    accentColor: "bg-[hsl(var(--brand-gold))]",
    dotColor: "bg-[hsl(var(--brand-gold))]",
  },
  {
    client: "Vontech",
    type: "Cloud Consulting",
    project: "Digital Identity",
    description:
      "Corporate website and complete digital identity transformation.",
    impact: "Elevated brand presence",
    accentColor: "bg-[hsl(var(--brand-brown))]",
    dotColor: "bg-[hsl(var(--brand-brown))]",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
              Our Works
            </span>
            <h1 className="text-3xl md:text-6xl font-bold mt-4 mb-6">
              Technical Impact at Scale
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions built for enterprise challenges and national infrastructure. Each project represents our commitment to delivering measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.client}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                {/* Header */}
                <div className={`h-2 ${project.accentColor}`} />

                <div className="p-8">
                  {/* Client Info */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.client}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {project.type}
                      </span>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Project */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      PROJECT
                    </span>
                    <p className="text-lg font-semibold text-foreground">
                      {project.project}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className={`w-2 h-2 rounded-full ${project.dotColor}`} />
                    <span className="text-sm font-medium">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}