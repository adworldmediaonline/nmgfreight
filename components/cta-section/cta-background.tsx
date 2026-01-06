import { cn } from "@/lib/utils";

interface CtaBackgroundProps {
  className?: string;
}

export function CtaBackground({ className }: CtaBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden rounded-2xl", className)}>
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        {/* Orange background (left/bottom) */}
        <div className="absolute inset-0 bg-header-orange" />

        {/* Teal background (upper right diagonal) */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-header-teal"
          style={{
            clipPath: "polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Orange rectangular element (far left) */}
        <div className="absolute left-0 bottom-0 w-16 lg:w-24 h-full bg-header-orange-dark" />
      </div>
    </div>
  );
}
