export const BenevoxLogo = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-black text-2xl tracking-tight">
        <span className="text-[hsl(30,59%,40%)]">B</span>
        <span className="text-[hsl(0,72%,51%)]">E</span>
        <span className="text-foreground">N</span>
        <span className="text-[hsl(45,93%,47%)]">E</span>
        <span className="text-[hsl(142,71%,45%)]">V</span>
        <span className="text-[hsl(200,60%,50%)]">O</span>
        <span className="text-[hsl(142,71%,45%)]">X</span>
      </span>
    </div>
  );
};
