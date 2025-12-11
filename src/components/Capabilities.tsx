import { Globe, Database, Video, Cloud } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web & Mobile",
    tech: ["React", "Vue", "Next.js", "React Native"],
    description: "Pixel-perfect UI implementation with modern frameworks.",
    gradient: "from-brand-green to-emerald-600",
  },
  {
    icon: Database,
    title: "IoT & Data",
    tech: ["Sensor Dashboards", "Real-time Analytics", "Agricultural Metrics"],
    description: "Real-time data platforms and intelligent IoT systems.",
    gradient: "from-brand-gold to-amber-600",
  },
  {
    icon: Video,
    title: "Video Engineering",
    tech: ["720p/1080p Encoding", "Streaming Pipelines", "CDN Integration"],
    description: "Netflix-grade encoding engines and streaming infrastructure.",
    gradient: "from-brand-red to-rose-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tech: ["AWS", "GCP", "Infrastructure", "Cost Optimization"],
    description: "Scalable infrastructure, migrations, and cloud excellence.",
    gradient: "from-sky-500 to-blue-600",
  },
];

export const Capabilities = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-green font-semibold tracking-wider uppercase text-sm">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Technical Capabilities
          </h2>
          <p className="text-muted-foreground text-lg">
            From web apps to IoT systems, we've got the expertise to bring your
            vision to life.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border p-8 hover:border-transparent transition-all duration-500"
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center`}
                  >
                    <cap.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{cap.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{cap.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {cap.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
