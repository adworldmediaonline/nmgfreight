import { cn } from "@/lib/utils";
import type { AboutConfig } from "./types";

interface AboutHeaderProps {
  header: AboutConfig["header"];
  className?: string;
}

export function AboutHeader({ header, className }: AboutHeaderProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Orange Pill Button */}
      <div>
        <span className="bg-header-orange text-header-text-on-dark px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block">
          {header.label}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-header-teal leading-tight">
        {header.headline}
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {header.description}
      </p>
    </div>
  );
}

