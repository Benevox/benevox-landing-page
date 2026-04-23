import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const FeatureCard = ({ title, description, icon: Icon, color, bgColor }: FeatureCardProps) => (
  <div className="group relative rounded-xl border border-border p-8 hover:border-brand-green/50 transition-colors">
    <div className={`p-3 rounded-lg ${bgColor} w-fit mb-6`}>
      <Icon className={`h-6 w-6 ${color}`} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);
