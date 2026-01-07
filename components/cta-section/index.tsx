import { CtaContent } from "./cta-content";
import { CtaButton } from "./cta-button";
import { CtaBackground } from "./cta-background";
import { CtaVisual } from "./cta-visual";
import type { CtaConfig } from "./types";
import { defaultCtaConfig } from "./constants";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  config?: Partial<CtaConfig>;
  className?: string;
}

export function CtaSection({ config: userConfig, className }: CtaSectionProps) {
  const config: CtaConfig = {
    ...defaultCtaConfig,
    ...userConfig,
    button: {
      ...defaultCtaConfig.button,
      ...userConfig?.button,
    },
  };

  return (
    <section className={cn("relative w-full py-8 lg:py-12", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-header-text-on-dark/20 p-4 lg:p-6">
          {/* Background */}
          <CtaBackground />

          {/* Phone Button - Top Right - Positioned to avoid overlap */}
          <div className="absolute top-3 right-3 lg:top-6 lg:right-6 z-20">
            <CtaButton button={config.button} />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[300px] lg:min-h-[350px] pt-12 lg:pt-0">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <CtaContent config={config} />
            </div>

            {/* Right Side - Visual */}
            <div className="relative h-full flex items-end overflow-hidden">
              <CtaVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { CtaContent } from "./cta-content";
export { CtaButton } from "./cta-button";
export { CtaVisual } from "./cta-visual";
export { CtaBackground } from "./cta-background";
