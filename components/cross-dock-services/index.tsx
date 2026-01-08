import Image from "next/image";
import { HeroSection } from "./hero-section";
import { HowItWorks } from "./how-it-works";
import { IndustriesServed } from "./industries-served";
import { WhyChoose } from "./why-choose";
import type { CrossDockServicesConfig } from "./types";
import { defaultCrossDockServicesConfig } from "./constants";

import crossdockimg from '../../public/images/services/cross-dock.webp'
interface CrossDockServicesProps {
  config?: Partial<CrossDockServicesConfig>;
  className?: string;
}

export function CrossDockServices({
  config: userConfig,
  className,
}: CrossDockServicesProps) {
  const config: CrossDockServicesConfig = {
    ...defaultCrossDockServicesConfig,
    ...userConfig,
    hero: userConfig?.hero ?? defaultCrossDockServicesConfig.hero,
    howItWorks:
      userConfig?.howItWorks ?? defaultCrossDockServicesConfig.howItWorks,
    industries:
      userConfig?.industries ?? defaultCrossDockServicesConfig.industries,
    whyChoose:
      userConfig?.whyChoose ?? defaultCrossDockServicesConfig.whyChoose,
  };

  return (
    <div className={className}>
      {/* Hero Image */}
      <HeroImage />
      <HeroSection config={config.hero} contactBox={config.contactBox} />
      <HowItWorks config={config.howItWorks} />
      <IndustriesServed config={config.industries} />
      <WhyChoose config={config.whyChoose} />
    </div>
  );
}

function HeroImage() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden">
        <div className="relative w-full">
          <Image
            src={crossdockimg}
            alt="NMG Freight Cross-Dock Facility"
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { HeroSection } from "./hero-section";
export { HowItWorks } from "./how-it-works";
export { IndustriesServed } from "./industries-served";
export { WhyChoose } from "./why-choose";
export type { CrossDockServicesConfig } from "./types";
export { defaultCrossDockServicesConfig } from "./constants";

