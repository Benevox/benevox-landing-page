import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/atoms/ui/table";
import { Check, Target, Clock, CheckCircle } from "lucide-react";

const Models = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            Engineering-as-a-Service
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Three precision-engineered engagement models designed to fit your project's maturity and risk profile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {/* Fixed-Firm */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-brand-green" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Fixed-Firm</h2>
            <p className="text-brand-green font-semibold mb-4 text-sm uppercase tracking-widest">Predictable</p>
            <p className="text-muted-foreground mb-6">
              Best for projects with absolute requirements. We own the delivery risk by scoping first and building second.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-green" /> Locked Budget</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-green" /> Defined Milestones</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-green" /> Scoping Required</li>
            </ul>
          </div>

          {/* Agile-Flow */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-brand-gold" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Agile-Flow</h2>
            <p className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-widest">Fast</p>
            <p className="text-muted-foreground mb-6">
              Our fastest model for rapid iteration. Plug a pod into your roadmap and start shipping in weekly sprints.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-gold" /> Weekly Sprints</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-gold" /> Fluid Backlog</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-gold" /> Pay-as-you-go</li>
            </ul>
          </div>

          {/* Hybrid */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6">
              <CheckCircle className="h-6 w-6 text-brand-red" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Hybrid</h2>
            <p className="text-brand-red font-semibold mb-4 text-sm uppercase tracking-widest">Strategic</p>
            <p className="text-muted-foreground mb-6">
              The 80/20 split. Strategic roadmap planning with tactical sprint execution for scaling products.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-red" /> Roadmap Ownership</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-red" /> Tactical Sprints</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-red" /> Quarterly Reviews</li>
            </ul>
          </div>
        </div>

        {/* Comparative Analysis Table */}
        <div className="max-w-5xl mx-auto mb-32">
          <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-tight">
            Comparative Analysis
          </h3>
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[200px]">Metric</TableHead>
                  <TableHead>Fixed-Firm</TableHead>
                  <TableHead>Agile-Flow</TableHead>
                  <TableHead>Hybrid</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold">Flexibility</TableCell>
                  <TableCell>Low (Frozen Scope)</TableCell>
                  <TableCell>High (Pivot-ready)</TableCell>
                  <TableCell>Medium (Adaptive)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Cost Predictability</TableCell>
                  <TableCell>Absolute (Fixed)</TableCell>
                  <TableCell>Variable (Consumption)</TableCell>
                  <TableCell>Blended (Forecasted)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Market Speed</TableCell>
                  <TableCell>Standard (Pre-planned)</TableCell>
                  <TableCell>Maximum (Sprint-led)</TableCell>
                  <TableCell>Balanced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Risk Ownership</TableCell>
                  <TableCell>High (By Benevox)</TableCell>
                  <TableCell>Low (Shared per sprint)</TableCell>
                  <TableCell>Shared (Balanced)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Scope Changes</TableCell>
                  <TableCell>High Friction</TableCell>
                  <TableCell>Low Friction</TableCell>
                  <TableCell>Controlled Friction</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">Management Overhead</TableCell>
                  <TableCell>Low (Post-scoping)</TableCell>
                  <TableCell>High (Weekly Cadence)</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Models;
