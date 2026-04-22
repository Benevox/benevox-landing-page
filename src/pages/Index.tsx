import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ModelsSummary } from "@/components/ModelsSummary";
import { EngagementModels } from "@/components/EngagementModels";
import { AIOperationsLayer } from "@/components/AIOperationsLayer";
import { OperationalGuardrails } from "@/components/OperationalGuardrails";
import { Services } from "@/components/Services";
import { Capabilities } from "@/components/Capabilities";
import { Accelerator } from "@/components/Accelerator";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ModelsSummary />
      <EngagementModels />
      <AIOperationsLayer />
      <OperationalGuardrails />
      <Services />
      <Capabilities />
      <Accelerator />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
