import { cn } from "@/lib/utils";

interface FaqBackgroundProps {
  className?: string;
}

export function FaqBackground({ className }: FaqBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 opacity-5 pointer-events-none", className)}>
      {/* Subtle geometric pattern - world map/network grid style */}
      <svg
        className="w-full h-full"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid pattern */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Curved lines for network effect */}
        <path
          d="M 50 100 Q 150 50 250 100 T 350 100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 50 150 Q 150 120 250 150 T 350 150"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 50 200 Q 150 180 250 200 T 350 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
