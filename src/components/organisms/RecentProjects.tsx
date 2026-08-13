import { Activity, Network, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/ui/button";
import { Link } from "react-router-dom";

const homepageProjects = [
  {
    title: "Bellcrest Family Clinic",
    tagline: "UI/UX Modernization & Technical SEO Engine",
    description: "Re-engineered a clinic's digital footprint to optimize patient intake and medical service discovery.",
    outcome: "Injected semantic SEO structures combined with regional directory indexing to maximize local client acquisition.",
    metric: "14-Day Delivery",
    metricLabel: "From architecture to deployment",
    tech: ["SEO Architecture", "WCAG Accessibility", "Next-Gen UI/UX"],
    icon: Activity,
    url: "https://bellcrestfamilyclinic.ca/",
    logo: "/assets/portfolio/bellcrest-logo.avif",
  },
  {
    title: "Alder Family Clinic",
    tagline: "Edge Routing & Cloud Multi-Tenancy",
    description: "Deployed a zero-downtime, multi-tenant system for disaster recovery and edge routing on limited server infrastructure.",
    outcome: "Built a Cloudflare-First Proxy architecture to decouple DNS from physical hosts and route traffic using dynamic regex rules.",
    metric: "Zero-Downtime DNS",
    metricLabel: "With instant failovers",
    tech: ["Edge Functions", "Dynamic SSL/TLS", "Regex Pattern Matching"],
    icon: Network,
    url: "https://alderfamilyclinic.ca/",
    logo: "/assets/portfolio/alder-logo.png",
  },
];

export const RecentProjects = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">
            Concrete Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-xl">
            We don't talk abstract concepts. Here is what we've actually built and delivered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto mb-16">
          {homepageProjects.map((project) => (
            <div
              key={project.title}
              className="p-8 md:p-12 rounded-3xl border border-border bg-card hover:border-brand-green/30 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              {/* Info Column */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-green/10 rounded-xl text-brand-green">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground">{project.title}</h3>
                    <p className="text-brand-green text-xs font-bold uppercase tracking-widest">{project.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Outcome focus */}
                <div className="mb-6 p-5 rounded-xl bg-brand-green/5 border border-brand-green/10">
                  <p className="text-sm font-bold text-brand-green uppercase tracking-wider mb-1">Business Outcome</p>
                  <p className="text-foreground/90 font-medium italic text-sm">"{project.outcome}"</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric Column / Call to action */}
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col justify-between h-full bg-brand-green/5 border border-brand-green/10 rounded-2xl p-6 text-center md:text-left">
                <div>
                  <span className="text-3xl font-black text-foreground block mb-1">
                    {project.metric}
                  </span>
                  <span className="text-xs text-muted-foreground block mb-6 leading-tight">
                    {project.metricLabel}
                  </span>
                </div>
                {project.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full border-brand-green/20 hover:border-brand-green/50 text-brand-green gap-2 hover:bg-brand-green/5"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    Visit Live Site
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Works CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-xl border-border" asChild>
            <Link to="/portfolio" className="inline-flex items-center gap-2">
              Explore full technical portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
