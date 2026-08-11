import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { PlugInSystem } from "@/components/organisms/PlugInSystem";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { RecentProjects } from "@/components/organisms/RecentProjects";
import { WhyUs } from "@/components/organisms/WhyUs";
import { ValidationRule } from "@/components/organisms/ValidationRule";
import { ModelsSummary } from "@/components/organisms/ModelsSummary";
import { Footer } from "@/components/organisms/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlugInSystem />
      <HowItWorks />
      <RecentProjects />
      <WhyUs />
      <ValidationRule />
      <ModelsSummary />
      <Footer />
    </main>
  );
};

export default Index;
