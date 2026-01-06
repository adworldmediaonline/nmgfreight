import { WhyChooseUsHeader } from "./why-choose-us-header";
import { FeatureItemComponent } from "./feature-item";
import { VisualSection } from "./visual-section";
import type { WhyChooseUsConfig } from "./types";
import { defaultWhyChooseUsConfig } from "./constants";

interface WhyChooseUsProps {
  config?: Partial<WhyChooseUsConfig>;
  className?: string;
}

export function WhyChooseUs({ config: userConfig, className }: WhyChooseUsProps) {
  // Merge user config with defaults
  const config: WhyChooseUsConfig = {
    ...defaultWhyChooseUsConfig,
    ...userConfig,
    header: userConfig?.header ?? defaultWhyChooseUsConfig.header,
    features: userConfig?.features ?? defaultWhyChooseUsConfig.features,
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Visual Section */}
          <div className="order-2 lg:order-1">
            <VisualSection />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8 lg:space-y-10">
            {/* Header */}
            <WhyChooseUsHeader header={config.header} />

            {/* Features List */}
            <div className="space-y-6 lg:space-y-8">
              {config.features.map((feature, index) => (
                <FeatureItemComponent key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { WhyChooseUsHeader } from "./why-choose-us-header";
export { FeatureItemComponent } from "./feature-item";
export { VisualSection } from "./visual-section";
export type { WhyChooseUsConfig, FeatureItem } from "./types";
export { defaultWhyChooseUsConfig } from "./constants";

