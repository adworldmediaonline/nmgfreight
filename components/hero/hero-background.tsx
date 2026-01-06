import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Dark Teal Background - Same as header with very subtle difference */}
      <div className="absolute inset-0 bg-hero-teal" />
    </div>
  );
}
