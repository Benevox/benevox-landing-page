import { Toaster } from "@/components/atoms/ui/toaster";
import { Toaster as Sonner } from "@/components/atoms/ui/sonner";
import { TooltipProvider } from "@/components/atoms/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FloatingWhatsApp from "./components/molecules/FloatingWhatsApp";
import { AuthProvider } from "./app/AuthProvider";
import { ProtectedRoute } from "./app/ProtectedRoute";
import LoginPage from "./app/LoginPage";
import AppHome from "./app/AppHome";
import AppEntry from "./app/AppEntry";
import Contact from "./pages/Contact";
import ToolPage from "./app/ToolPage";
import Analytics from "./components/Analytics";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Models from "./pages/Models";
import OpsAndSecurity from "./pages/OpsAndSecurity";
import Partners from "./pages/Partners";
import CaseStudy from "./pages/CaseStudy";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import LaunchPad from "./pages/LaunchPad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
      <BrowserRouter>
        <Analytics />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/models" element={<Models />} />
          <Route path="/ops-and-security" element={<OpsAndSecurity />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/accelerator" element={<Navigate to="/partners" replace />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/app/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/app" element={<AppEntry />} />
            <Route path="/app/tools" element={<AppHome />} />
            <Route path="/app/:slug" element={<ToolPage />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/launchpad" element={<LaunchPad />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
