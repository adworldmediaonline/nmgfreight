import { cn } from "@/lib/utils";
import { MapPin, Plane } from "lucide-react";

interface WorldMapVisualProps {
  className?: string;
}

export function WorldMapVisual({ className }: WorldMapVisualProps) {
  return (
    <div className={cn("relative w-full h-full opacity-30", className)}>
      {/* Simplified world map outline */}
      <svg
        className="w-full h-full"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* World map outline (simplified) */}
        <path
          d="M 50 150 Q 100 100 150 120 Q 200 140 250 130 Q 300 120 350 150"
          stroke="oklch(0.556 0 0)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Location pins */}
        <circle cx="100" cy="120" r="4" fill="oklch(0.5 0.2 150)" />
        <circle cx="200" cy="130" r="4" fill="oklch(0.5 0.2 150)" />
        <circle cx="300" cy="125" r="4" fill="oklch(0.5 0.2 150)" />

        {/* Dotted connecting line */}
        <path
          d="M 100 120 Q 150 125 200 130 Q 250 128 300 125"
          stroke="oklch(0.5 0.2 150)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Airplane icon */}
        <g transform="translate(300, 100)">
          <Plane className="w-6 h-6 text-green-600" />
        </g>
      </svg>
    </div>
  );
}
