import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PlugInSystem } from "@/components/PlugInSystem";
import { ValidationRule } from "@/components/ValidationRule";
import { ModelsSummary } from "@/components/ModelsSummary";
import { AIOperationsLayer } from "@/components/AIOperationsLayer";
import { OperationalGuardrails } from "@/components/OperationalGuardrails";
import { Services } from "@/components/Services";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <PlugInSystem />
      <ValidationRule />
      <ModelsSummary />
      <AIOperationsLayer />
      <OperationalGuardrails />
      <Services />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
