import { cn } from "@/lib/utils";
import { MissionContent } from "./mission-content";
import { MissionVisual } from "./mission-visual";
import type { MissionSectionConfig } from "./types";
import { defaultMissionSectionConfig } from "./constants";

interface MissionSectionProps {
  config?: Partial<MissionSectionConfig>;
  className?: string;
}

export function MissionSection({
  config: userConfig,
  className,
}: MissionSectionProps) {
  const config: MissionSectionConfig = {
    ...defaultMissionSectionConfig,
    ...userConfig,
    serviceDetails:
      userConfig?.serviceDetails ?? defaultMissionSectionConfig.serviceDetails,
    visual: userConfig?.visual ?? defaultMissionSectionConfig.visual,
  };

  return (
    <section className={cn("bg-background py-12 lg:py-16 xl:py-20", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side: Content */}
          <div>
            <MissionContent config={config} />
          </div>

          {/* Right Side: Visual */}
          <div className="relative min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
            <MissionVisual
              imageSrc={config.visual.imageSrc}
              imageAlt={config.visual.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { MissionContent } from "./mission-content";
export { MissionVisual } from "./mission-visual";
export type { MissionSectionConfig } from "./types";
export { defaultMissionSectionConfig } from "./constants";

