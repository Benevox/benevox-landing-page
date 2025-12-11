import { Users, Settings, CheckCircle, Building } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Experienced Dev Team",
    description:
      "Pre-vetted engineers with proven track records, not random freelancers.",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Settings,
    title: "Structured Process",
    description:
      "We bring the Project Manager, UI/UX designers, and QA specialists.",
    iconColor: "text-[hsl(var(--brand-gold))]",
    bgColor: "bg-[hsl(var(--brand-gold)/0.1)]",
  },
  {
    icon: CheckCircle,
    title: "First-Time Right",
    description:
      "We pride ourselves on getting it right from the start, every time.",
    iconColor: "text-[hsl(var(--brand-red))]",
    bgColor: "bg-[hsl(var(--brand-red)/0.1)]",
  },
  {
    icon: Building,
    title: "Zero Overhead",
    description: "No HR, no payroll stress. Just plug in and scale.",
    iconColor: "text-[hsl(var(--brand-brown))]",
    bgColor: "bg-[hsl(var(--brand-brown)/0.1)]",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[hsl(var(--brand-gold))] font-semibold tracking-wider uppercase text-sm">
            Our Model
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Team-as-a-Service
          </h2>
          <p className="text-muted-foreground text-lg">
            Plug into an existing, structured team rather than hiring
            freelancers. Get a complete engineering squad ready to build your
            vision.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`h-7 w-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
