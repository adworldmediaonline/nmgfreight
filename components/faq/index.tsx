import { FaqHeader } from "./faq-header";
import { FaqAccordion } from "./faq-accordion";
import { FaqBackground } from "./faq-background";
import type { FaqConfig } from "./types";
import { defaultFaqConfig } from "./constants";
import { cn } from "@/lib/utils";

interface FaqProps {
  config?: Partial<FaqConfig>;
  className?: string;
}

export function Faq({ config: userConfig, className }: FaqProps) {
  const config: FaqConfig = {
    ...defaultFaqConfig,
    ...userConfig,
    header: {
      ...defaultFaqConfig.header,
      ...userConfig?.header,
    },
    items: userConfig?.items ?? defaultFaqConfig.items,
  };

  return (
    <section className={cn("relative w-full py-12 lg:py-20 bg-background", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Background Pattern */}
          <FaqBackground />

          {/* Left Column - FAQ Header (1/3 width) */}
          <div className="relative z-10 lg:col-span-1">
            <FaqHeader header={config.header} />
          </div>

          {/* Right Column - FAQ Accordion (2/3 width) */}
          <div className="relative z-10 lg:col-span-2">
            <FaqAccordion items={config.items} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { FaqHeader } from "./faq-header";
export { FaqAccordion } from "./faq-accordion";
export { FaqBackground } from "./faq-background";
