import { Toaster } from "@/components/atoms/ui/toaster";
import { Toaster as Sonner } from "@/components/atoms/ui/sonner";
import { TooltipProvider } from "@/components/atoms/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Models from "./pages/Models";
import OpsAndSecurity from "./pages/OpsAndSecurity";
import Accelerator from "./pages/Accelerator";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/models" element={<Models />} />
          <Route path="/ops-and-security" element={<OpsAndSecurity />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/accelerator" element={<Accelerator />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
