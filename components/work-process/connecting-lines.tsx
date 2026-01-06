import { cn } from "@/lib/utils";

interface ConnectingLinesProps {
  className?: string;
}

export function ConnectingLines({ className }: ConnectingLinesProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden hidden lg:block", className)}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved line from Step 1 to Step 2 */}
        <path
          d="M 200 200 Q 400 150 600 200"
          stroke="oklch(0.68 0.24 30)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arrow on first line */}
        <path
          d="M 580 195 L 600 200 L 580 205"
          stroke="oklch(0.68 0.24 30)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Curved line from Step 2 to Step 3 */}
        <path
          d="M 600 200 Q 800 150 1000 200"
          stroke="oklch(0.68 0.24 30)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arrow on second line */}
        <path
          d="M 980 195 L 1000 200 L 980 205"
          stroke="oklch(0.68 0.24 30)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
