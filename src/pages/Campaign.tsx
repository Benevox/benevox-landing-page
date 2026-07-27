import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Button } from "@/components/atoms/ui/button";
import { Check } from "lucide-react";

const Campaign = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-tight md:text-nowrap">
            Websites That Bring Patients
            <br />
            to Your Practice.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We build modern, secure, patient-friendly websites for medical
            centers across Nigeria. No complexity. No delays. Just results.
          </p>
        </div>
      </section>

      {/* Here Is What You Get */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here Is What You Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Design",
                description:
                  "We handle everything Design, Development, Security, Compliance. You focus on your patients. We handle the tech",
              },
              {
                title: "Quick Bookings",
                description:
                  "A website that brings in new patients, A website that let's patients users book appointments 24 hours a day, 7 days a week. A website that looks professional and builds trust before patients even walk through your door",
              },
              {
                title: "Global Visibilty",
                description:
                  "Search Engine Optimization ready setup. Google finds you. Patients find you. Visibility from day one.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We deliver your website in 14 days. No excuses. No delays.
          </p>

          <div className="space-y-8">
            {[
              {
                phase: "Phase One",
                title: "Branding and Design. (Day 1-4)",
                description:
                  "We create your brand identity, Logos, Colors, Fonts. We design exactly how your website will look before we build anything. You approve for it. We move forward",
              },
              {
                phase: "Phase Two",
                title: "Build and Staging",
                description:
                  "We bring your design to live. We add your services, appointment forms and patient content. We make sure it works perfectly on phones, tablets, and computers. You see it. You test it. You approve of it.",
              },
              {
                phase: "Phase Three",
                title: "Launch and Optimization",
                description:
                  "We take your website live. We optimize it so patients in your area can find you on Google. We deliver all your brand assets in one folder. Your website is live. Patients can find you. Book appointments. Trust your practice",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-xl font-bold text-brand-green">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-2">
                    <h3 className="text-xl font-bold mb-2">{item.phase}:</h3>
                    <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Payment Options */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Flexible Payment Options
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We know every medical center has a different budget. You pay as we
            deliver. You approve each stage before we move forward
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Milestone 1",
                price: "40% down payment",
                features: [
                  "Branding and Design",
                  "New identity, Logos, Colors, Fonts",
                  "Project design mockups",
                  "Content gathering",
                ],
                amount: "You approve the design. We move to the next stage",
              },
              {
                title: "Milestone 2",
                price: "40% down payment",
                features: [
                  "Build and staging",
                  "Private staging link",
                  "Verify build in real time",
                  "Test on phone, tablet and computer",
                ],
                amount: "You review it, You approve it. We move to launch",
              },
              {
                title: "Milestone 3",
                price: "20% down payment",
                features: [
                  "Launch and Optimization",
                  "Test users do live testing",
                  "Training and handover",
                  "Post launch support",
                ],
                amount: "Website is live, Patients find you, Book appointments",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t border-border pt-4 text-nowrap">
                  {plan.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fast Delivery",
                description: "We deliver in 14 days. No delays. No excuses",
              },
              {
                title: "Global Visibility",
                description:
                  "We build websites that bring in patients, not just websites that look good",
              },
              {
                title: "Dedicated Support",
                description:
                  "We handle everything. Ypu never have to chase developers or manage project chaos",
              },
              {
                title: "Flexible Plan",
                description:
                  "We offer flexible payment options. You pay as we deliver",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us build a website that brings patients to your practice.
          </p>
          <Button
            asChild
            className="bg-[#0EA900] hover:bg-[#0EA900]/90 text-white rounded-2xl text-base font-medium transition-all duration-300 h-auto py-3 px-10"
          >
            <a
              href="https://forms.gle/xBQkpDVTeBL2YrTS9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free consultation today
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Campaign;
