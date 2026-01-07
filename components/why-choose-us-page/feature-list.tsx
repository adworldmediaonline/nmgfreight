"use client";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WhyChooseUsFeature } from "./types";

interface FeatureListProps {
  features: WhyChooseUsFeature[];
  activeFeatureId: string;
  onFeatureSelect: (featureId: string) => void;
  className?: string;
}

export function FeatureList({
  features,
  activeFeatureId,
  onFeatureSelect,
  className,
}: FeatureListProps) {
  return (
    <div className={cn("space-y-1.5 lg:space-y-2", className)}>
      {features.map((feature) => {
        const isActive = feature.id === activeFeatureId;
        return (
          <button
            key={feature.id}
            onClick={() => onFeatureSelect(feature.id)}
            className={cn(
              "w-full text-left flex items-center gap-2 lg:gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-lg transition-all duration-200",
              isActive
                ? "bg-header-orange text-header-text-on-dark"
                : "text-header-text-on-dark hover:bg-header-teal/50"
            )}
          >
            <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
            <span className="font-medium text-sm lg:text-base">{feature.title}</span>
          </button>
        );
      })}
    </div>
  );
}

