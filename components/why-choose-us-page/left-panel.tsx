import { cn } from "@/lib/utils";
import { FeatureList } from "./feature-list";
import type { WhyChooseUsPageConfig, WhyChooseUsFeature } from "./types";

interface LeftPanelProps {
  config: WhyChooseUsPageConfig;
  activeFeatureId: string;
  onFeatureSelect: (featureId: string) => void;
  className?: string;
}

export function LeftPanel({
  config,
  activeFeatureId,
  onFeatureSelect,
  className,
}: LeftPanelProps) {
  return (
    <div
      className={cn(
        "relative bg-header-teal text-header-text-on-dark flex flex-col lg:flex-1",
        className
      )}
    >
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-20 h-20 lg:w-32 lg:h-32 opacity-20">
        {/* Orange circular outline */}
        <div className="absolute top-0 left-0 w-16 h-16 lg:w-24 lg:h-24 border-2 border-header-orange rounded-full" />
        {/* White dots pattern */}
        <div className="absolute top-2 left-2 lg:top-4 lg:left-4 grid grid-cols-4 gap-1 lg:gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-header-text-on-dark rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-4 sm:p-6 lg:p-10 xl:p-12 pb-6 sm:pb-8 lg:pb-10 xl:pb-12">
        {/* Label */}
        <div className="mb-3 lg:mb-6">
          <span className="inline-block bg-muted/30 text-header-text-on-dark px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-xs lg:text-sm font-semibold uppercase tracking-wide">
            {config.label}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 lg:mb-8">
          {config.heading}
        </h2>

        {/* Feature List */}
        <div className="flex-1 flex flex-col justify-center">
          <FeatureList
            features={config.features}
            activeFeatureId={activeFeatureId}
            onFeatureSelect={onFeatureSelect}
          />
        </div>
      </div>
    </div>
  );
}

