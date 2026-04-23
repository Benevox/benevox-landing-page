import logoImage from "@/assets/benevox-logo.png";

export const BenevoxLogo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Benevox Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
