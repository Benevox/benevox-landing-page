import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Database, Cpu, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "NigComSat",
      tagline: "IoT DashCom & Analytics",
      description: "A nationwide satellite-enabled IoT dashboard for monitoring remote assets and infrastructure health.",
      impact: "30% Efficiency Increase",
      outcome: "Enabled nationwide data-driven agriculture and infrastructure monitoring via satellite telematics.",
      tech: ["React", "PostgreSQL", "IoT Gateway", "Satellite API"],
      icon: Database,
    },
    {
      title: "Mabi",
      tagline: "Video Encoding Engine",
      description: "High-performance video processing and encoding pipeline for smooth, adaptive bitrate streaming at scale.",
      impact: "30% Efficiency Increase",
      outcome: "Implemented a full Netflix-style video encoding engine for smooth streaming under low-bandwidth conditions.",
      tech: ["C++", "FFmpeg", "AWS Elemental", "Node.js"],
      icon: Cpu,
    },
    {
      title: "Storipod",
      tagline: "Engineering Squads",
      description: "Scalable team augmentation for rapid feature development and platform stabilization.",
      impact: "30% Efficiency Increase",
      outcome: "Scaled internal workforces without management stress through our precision-plugged engineering pods.",
      tech: ["Next.js", "GraphQL", "Python", "Kubernetes"],
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            Our Works
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Case studies of precision engineering and technical impact.
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto mb-32">
          {projects.map((project) => (
            <div key={project.title} className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-brand-green/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row">
                <div className="p-10 lg:p-16 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-brand-green/10">
                      <project.icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black">{project.title}</h2>
                      <p className="text-brand-green font-bold text-sm uppercase tracking-widest">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-10 p-6 rounded-xl bg-brand-green/5 border border-brand-green/10">
                    <h3 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">Technical Impact</h3>
                    <p className="text-2xl font-black mb-2">{project.impact}</p>
                    <p className="text-foreground/80 italic">"{project.outcome}"</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-[40%] bg-muted/30 border-l border-border flex items-center justify-center p-12 relative overflow-hidden">
                   <project.icon className="w-64 h-64 text-foreground/5 absolute -right-16 -bottom-16" />
                   <div className="relative z-10 text-center">
                     <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Confidentiality: Tier 1</p>
                     <p className="text-muted-foreground text-sm max-w-[200px]">Technical architecture details available under NDA for scoping sessions.</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
