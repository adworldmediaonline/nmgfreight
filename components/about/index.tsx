import { AboutHeader } from "./about-header";
import { ServicesList } from "./services-list";
import { ContactSection } from "./contact-section";
import { StatsBlock } from "./stats-block";
import { AboutImage } from "./about-image";
import type { AboutConfig } from "./types";
import { defaultAboutConfig } from "./constants";

import aboutimg from '../../public/images/service.png'

interface AboutProps {
  config?: Partial<AboutConfig>;
  className?: string;
}

export function About({ config: userConfig, className }: AboutProps) {
  // Merge user config with defaults
  const config: AboutConfig = {
    ...defaultAboutConfig,
    ...userConfig,
    header: userConfig?.header ?? defaultAboutConfig.header,
    services: userConfig?.services ?? defaultAboutConfig.services,
    contact: userConfig?.contact ?? defaultAboutConfig.contact,
    stats: userConfig?.stats ?? defaultAboutConfig.stats,
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side */}
          <div className="space-y-8 lg:space-y-12">
            {/* Header Section */}
            <AboutHeader header={config.header} />

            {/* Services List */}
            <ServicesList services={config.services} />

            {/* Contact Section */}
            <ContactSection contact={config.contact} />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 lg:gap-8 aspect-square">
            {/* Image */}
            <AboutImage
              src={aboutimg}
              alt="NMG Freight Services"
              className="object-cover"
            />

            {/* Stats Block */}
            <StatsBlock stats={config.stats} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { AboutHeader } from "./about-header";
export { ServicesList } from "./services-list";
export { ContactSection } from "./contact-section";
export { StatsBlock } from "./stats-block";
export { AboutImage } from "./about-image";
export type { AboutConfig, Service } from "./types";
export { defaultAboutConfig } from "./constants";

