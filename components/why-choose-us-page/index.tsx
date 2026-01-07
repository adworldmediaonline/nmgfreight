"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LeftPanel } from "./left-panel";
import { RightPanel } from "./right-panel";
import type { WhyChooseUsPageConfig } from "./types";
import { defaultWhyChooseUsPageConfig } from "./constants";

interface WhyChooseUsPageProps {
  config?: Partial<WhyChooseUsPageConfig>;
  className?: string;
}

export function WhyChooseUsPage({
  config: userConfig,
  className,
}: WhyChooseUsPageProps) {
  const config: WhyChooseUsPageConfig = {
    ...defaultWhyChooseUsPageConfig,
    ...userConfig,
    features: userConfig?.features ?? defaultWhyChooseUsPageConfig.features,
  };

  const [activeFeatureId, setActiveFeatureId] = useState(
    config.features[0]?.id || ""
  );

  const activeFeature =
    config.features.find((f) => f.id === activeFeatureId) || config.features[0];

  return (
    <section className={cn("relative w-full", className)}>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Left Panel */}
        <LeftPanel
          config={config}
          activeFeatureId={activeFeatureId}
          onFeatureSelect={setActiveFeatureId}
        />

        {/* Right Panel */}
        <RightPanel activeFeature={activeFeature} />
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { LeftPanel } from "./left-panel";
export { RightPanel } from "./right-panel";
export { FeatureList } from "./feature-list";
export { FeatureDetailBox } from "./feature-detail-box";
export type { WhyChooseUsPageConfig, WhyChooseUsFeature } from "./types";
export { defaultWhyChooseUsPageConfig } from "./constants";

