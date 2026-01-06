import { ServicesHeader } from "./services-header";
import { ServiceCard } from "./service-card";
import type { ServicesConfig } from "./types";
import { defaultServicesConfig } from "./constants";

interface ServicesProps {
  config?: Partial<ServicesConfig>;
  className?: string;
}

export function Services({ config: userConfig, className }: ServicesProps) {
  // Merge user config with defaults
  const config: ServicesConfig = {
    ...defaultServicesConfig,
    ...userConfig,
    header: userConfig?.header ?? defaultServicesConfig.header,
    services: userConfig?.services ?? defaultServicesConfig.services,
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        {/* Header */}
        <ServicesHeader header={config.header} />

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {config.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { ServicesHeader } from "./services-header";
export { ServiceCard } from "./service-card";
export type { ServicesConfig, Service } from "./types";
export { defaultServicesConfig } from "./constants";

