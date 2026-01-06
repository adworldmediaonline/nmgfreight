import { cn } from "@/lib/utils";
import type { FaqConfig } from "./types";

interface FaqHeaderProps {
  header: FaqConfig["header"];
  className?: string;
}

export function FaqHeader({ header, className }: FaqHeaderProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Label */}
      <div>
        <span className="bg-header-orange text-header-text-on-dark px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block">
          {header.label}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-header-teal leading-tight">
        Do you have
        <br />
        any question?
        <br />
        Find answer
        <br />
        here
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
        {header.description}
      </p>
    </div>
  );
}
