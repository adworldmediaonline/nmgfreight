import Image from "next/image";
import { cn } from "@/lib/utils";
import { FeatureDetailBox } from "./feature-detail-box";
import type { WhyChooseUsFeature } from "./types";

interface RightPanelProps {
  activeFeature: WhyChooseUsFeature;
  className?: string;
}

export function RightPanel({ activeFeature, className }: RightPanelProps) {
  return (
    <div className={cn("relative w-full lg:flex-1 lg:flex lg:flex-col", className)}>
      {/* Background Image Container - Minimal height on mobile */}
      <div className="relative w-full h-[120px] sm:h-[150px] lg:flex-1 lg:h-auto">
        <Image
          src="/images/small-banner.png"
          alt="Transportation background - Airplane and cargo ship"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Orange Overlay Box - Aggressive overlap on mobile */}
      <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-auto lg:w-[90%] xl:w-[85%] px-4 pb-4 lg:px-6 lg:pb-6 -mt-16 sm:-mt-20 lg:mt-0">
        <FeatureDetailBox feature={activeFeature} />
      </div>
    </div>
  );
}

