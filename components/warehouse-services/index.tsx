import Image from "next/image";
import { HeroSection } from "./hero-section";
import { HowItWorks } from "./how-it-works";
import { IndustriesServed } from "./industries-served";
import { WhyChoose } from "./why-choose";
import type { WarehouseServicesConfig } from "./types";
import { defaultWarehouseServicesConfig } from "./constants";

interface WarehouseServicesProps {
  config?: Partial<WarehouseServicesConfig>;
  className?: string;
}

export function WarehouseServices({
  config: userConfig,
  className,
}: WarehouseServicesProps) {
  const config: WarehouseServicesConfig = {
    ...defaultWarehouseServicesConfig,
    ...userConfig,
    hero: userConfig?.hero ?? defaultWarehouseServicesConfig.hero,
    howItWorks:
      userConfig?.howItWorks ?? defaultWarehouseServicesConfig.howItWorks,
    industries:
      userConfig?.industries ?? defaultWarehouseServicesConfig.industries,
    whyChoose:
      userConfig?.whyChoose ?? defaultWarehouseServicesConfig.whyChoose,
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
      <div className="relative w-full h-[300px] lg:h-[400px] xl:h-[500px]">
        <Image
          src="/images/trunc.png"
          alt="NMG Freight Warehouse"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { HeroSection } from "./hero-section";
export { HowItWorks } from "./how-it-works";
export { IndustriesServed } from "./industries-served";
export { WhyChoose } from "./why-choose";
export type { WarehouseServicesConfig } from "./types";
export { defaultWarehouseServicesConfig } from "./constants";

