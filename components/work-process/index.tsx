import { WorkProcessHeader } from "./work-process-header";
import { ProcessStep } from "./process-step";
import { ConnectingLines } from "./connecting-lines";
import type { WorkProcessConfig } from "./types";
import { defaultWorkProcessConfig } from "./constants";
import { cn } from "@/lib/utils";

interface WorkProcessProps {
  config?: Partial<WorkProcessConfig>;
  className?: string;
}

export function WorkProcess({ config: userConfig, className }: WorkProcessProps) {
  const config: WorkProcessConfig = {
    ...defaultWorkProcessConfig,
    ...userConfig,
    header: {
      ...defaultWorkProcessConfig.header,
      ...userConfig?.header,
    },
    steps: userConfig?.steps ?? defaultWorkProcessConfig.steps,
  };

  return (
    <section className={cn("relative w-full py-12 lg:py-20 bg-background", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative">
          {/* Header - Top Left */}
          <div className="mb-12 lg:mb-16 max-w-2xl">
            <WorkProcessHeader header={config.header} />
          </div>

          {/* Steps Layout - Horizontal */}
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            {/* Connecting Lines */}
            <ConnectingLines />

            {/* Steps - Horizontal arrangement */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Step 1 - Left */}
              <div className="flex flex-col items-center lg:items-start">
                <ProcessStep step={config.steps[0]} />
              </div>

              {/* Step 2 - Center */}
              <div className="flex flex-col items-center lg:items-start">
                <ProcessStep step={config.steps[1]} />
              </div>

              {/* Step 3 - Right */}
              <div className="flex flex-col items-center lg:items-start">
                <ProcessStep step={config.steps[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { WorkProcessHeader } from "./work-process-header";
export { ProcessStep } from "./process-step";
export { ConnectingLines } from "./connecting-lines";
