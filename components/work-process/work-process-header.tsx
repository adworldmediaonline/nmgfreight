import { cn } from "@/lib/utils";
import type { WorkProcessConfig } from "./types";

interface WorkProcessHeaderProps {
  header: WorkProcessConfig["header"];
  className?: string;
}

export function WorkProcessHeader({ header, className }: WorkProcessHeaderProps) {
  return (
    <div className={cn("space-y-4 lg:space-y-6", className)}>
      <div className="inline-block">
        <span className="bg-header-teal text-header-text-on-dark px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
          {header.label}
        </span>
      </div>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
        {header.title}
      </h2>
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {header.description}
      </p>
    </div>
  );
}
