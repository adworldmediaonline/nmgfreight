import { cn } from "@/lib/utils";
import type { CtaConfig } from "./types";

interface CtaContentProps {
  config: CtaConfig;
  className?: string;
}

export function CtaContent({ config, className }: CtaContentProps) {
  return (
    <div className={cn("space-y-3 lg:space-y-4 text-center lg:text-left", className)}>
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-header-text-on-dark leading-tight">
        {config.headline}
      </h2>
      <p className="text-sm lg:text-base text-header-text-on-dark/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
        {config.description}
      </p>
    </div>
  );
}
