import { ExternalLink } from "lucide-react";

const projects = [
  {
    client: "NigComSat",
    type: "Government / Agri-Tech",
    project: "DashCom",
    description:
      "An IoT dashboard for analyzing agricultural sensor data, enabling data-driven agriculture nationwide.",
    impact: "Enabled data-driven agriculture nationwide",
    accentColor: "bg-primary",
    dotColor: "bg-primary",
  },
  {
    client: "Mabi",
    type: "Media / Streaming",
    project: "Video Platform",
    description:
      "A full video encoding engine and streaming backend with Netflix-style architecture.",
    impact: "Full streaming platform capabilities",
    accentColor: "bg-[hsl(var(--brand-red))]",
    dotColor: "bg-[hsl(var(--brand-red))]",
  },
  {
    client: "Storipod",
    type: "Social / Tech",
    project: "Team-as-a-Service",
    description:
      "Provided engineering talent and product structure, scaling their workforce.",
    impact: "Scaled without hiring stress",
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

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Companies We've Worked With
          </h2>
          <p className="text-muted-foreground text-lg">
            From government agencies to fast-growing startups, we deliver
            results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.client}
              className="group relative rounded-2xl bg-background border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
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
  );
};
