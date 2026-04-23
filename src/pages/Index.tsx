import { Navbar } from "@/components/organisms/Navbar";
import { Hero } from "@/components/organisms/Hero";
import { PlugInSystem } from "@/components/organisms/PlugInSystem";
import { ValidationRule } from "@/components/organisms/ValidationRule";
import { ModelsSummary } from "@/components/organisms/ModelsSummary";
import { Footer } from "@/components/organisms/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlugInSystem />
      <ValidationRule />
      <ModelsSummary />
      <Footer />
    </main>
  );
};

export default Index;
