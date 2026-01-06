import { cn } from "@/lib/utils";
import type { ServicesConfig } from "./types";

interface ServicesHeaderProps {
  header: ServicesConfig["header"];
  className?: string;
}

export function ServicesHeader({ header, className }: ServicesHeaderProps) {
  return (
    <div className={cn("text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16", className)}>
      {/* Orange Pill Button */}
      <div>
        <span className="bg-header-orange text-header-text-on-dark px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block">
          {header.label}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
        {header.title}
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {header.description}
      </p>
    </div>
  );
}

