import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, BarChart3, Target } from "lucide-react";

const roles = [
  {
    title: "Backend Engineer",
    icon: Code,
    description: "Build scalable APIs and microservices for enterprise clients.",
    successMetric: "By the end of this internship, you will have deployed a production API serving real users.",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    title: "Frontend Engineer",
    icon: Code,
    description: "Create responsive web applications with modern frameworks.",
    successMetric: "By the end of this internship, you will have shipped a complete user-facing feature used by enterprise clients.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Product Manager",
    icon: Users,
    description: "Drive product strategy and coordinate cross-functional teams.",
    successMetric: "By the end of this internship, you will have launched a product feature that increased user engagement metrics.",
    skills: ["Product Strategy", "Agile", "Data Analysis", "User Research"]
  },
  {
    title: "Sales & Business Development",
    icon: BarChart3,
    description: "Develop business relationships and drive revenue growth.",
    successMetric: "By the end of this internship, you will have closed a deal or generated qualified leads worth $10K+ in potential revenue.",
    skills: ["CRM", "Lead Generation", "Negotiation", "Market Research"]
  }
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[hsl(var(--brand-red))] font-semibold tracking-wider uppercase text-sm">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Real Work on Real Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              No certificates. No simulations. Work on live projects that impact real businesses and users.
              <br />
              <span className="text-foreground font-medium">
                Part of a system built to deliver consistently, fast, and professionally.
              </span>
            </p>

            <Button size="xl">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Benevox Internships?
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't believe in training programs. We believe in apprenticeship through real work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Measurable Impact</h3>
              <p className="text-muted-foreground">
                Every intern contributes to revenue-generating projects with clear success metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Integration</h3>
              <p className="text-muted-foreground">
                Work alongside senior engineers and product managers on enterprise client projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Acceleration</h3>
              <p className="text-muted-foreground">
                Build a portfolio of deployed features and data-backed achievements that employers value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Available Roles
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose your path and contribute to projects that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.title}
                  className="group relative rounded-2xl bg-background border border-border p-8 hover:border-primary/50 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{role.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Success Metric:</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                      {role.successMetric}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Real Products?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join a team where your work directly impacts business outcomes and user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl">
                Apply for Internship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Free 10-minute consultation to launch your idea
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}