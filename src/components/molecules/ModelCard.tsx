import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/atoms/ui/button";

interface ModelCardProps {
  name: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const ModelCard = ({ name, subtitle, description, icon: Icon, color, bgColor }: ModelCardProps) => (
  <div className="group relative rounded-2xl border border-border p-10 hover:border-brand-green/30 transition-all duration-500 bg-card">
    <div className="flex items-center gap-4 mb-6">
      <div className={`p-3 rounded-lg ${bgColor}`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{subtitle}</span>
      </div>
    </div>

    <p className="text-muted-foreground mb-10 leading-relaxed">
      {description}
    </p>

    <Button
      variant="outline"
      className="w-full group h-auto py-4 font-bold"
      asChild
    >
      <Link to="/models" className="flex items-center justify-center gap-2">
        Learn More
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  </div>
);
