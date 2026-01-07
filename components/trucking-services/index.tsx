import { HeroSection } from "./hero-section";
import { HowItWorks } from "./how-it-works";
import { IndustriesServed } from "./industries-served";
import { WhyChoose } from "./why-choose";
import type { TruckingServicesConfig } from "./types";
import { defaultTruckingServicesConfig } from "./constants";

interface TruckingServicesProps {
  config?: Partial<TruckingServicesConfig>;
  className?: string;
}

export function TruckingServices({
  config: userConfig,
  className,
}: TruckingServicesProps) {
  const config: TruckingServicesConfig = {
    ...defaultTruckingServicesConfig,
    ...userConfig,
    hero: userConfig?.hero ?? defaultTruckingServicesConfig.hero,
    howItWorks:
      userConfig?.howItWorks ?? defaultTruckingServicesConfig.howItWorks,
    industries:
      userConfig?.industries ?? defaultTruckingServicesConfig.industries,
    whyChoose:
      userConfig?.whyChoose ?? defaultTruckingServicesConfig.whyChoose,
  };

  return (
    <div className={className}>
      <HeroSection config={config.hero} contactBox={config.contactBox} />
      <HowItWorks config={config.howItWorks} />
      <IndustriesServed config={config.industries} />
      <WhyChoose config={config.whyChoose} />
    </div>
  );
}

// Export sub-components for advanced composition
export { HeroSection } from "./hero-section";
export { HowItWorks } from "./how-it-works";
export { IndustriesServed } from "./industries-served";
export { WhyChoose } from "./why-choose";
export type { TruckingServicesConfig } from "./types";
export { defaultTruckingServicesConfig } from "./constants";

