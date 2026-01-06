import { cn } from "@/lib/utils";
import type { WhyChooseUsConfig } from "./types";

interface WhyChooseUsHeaderProps {
  header: WhyChooseUsConfig["header"];
  className?: string;
}

export function WhyChooseUsHeader({ header, className }: WhyChooseUsHeaderProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Orange Pill Button */}
      <div>
        <span className="bg-header-orange text-header-text-on-dark px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block">
          {header.label}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-header-teal leading-tight">
        {header.title}
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {header.description}
      </p>
    </div>
  );
}

