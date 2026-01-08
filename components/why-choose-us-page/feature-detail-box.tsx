import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WhyChooseUsFeature } from "./types";

interface FeatureDetailBoxProps {
  feature: WhyChooseUsFeature;
  className?: string;
}

export function FeatureDetailBox({
  feature,
  className,
}: FeatureDetailBoxProps) {
  return (
    <div
      className={cn(
        "bg-header-orange text-header-text-on-dark p-4 sm:p-5 lg:p-8 xl:p-10 rounded-lg shadow-2xl relative",
        className
      )}
    >
      {/* Title */}
      <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 leading-relaxed pr-16 sm:pr-20 lg:pr-28 xl:pr-32">
        {feature.description}
      </p>

      {/* Key Points */}
      <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 pr-16 sm:pr-20 lg:pr-28 xl:pr-32">
        {feature.keyPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-2 sm:gap-2.5">
            <div className="flex-shrink-0 w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-header-orange-dark flex items-center justify-center mt-0.5">
              <Check className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-header-text-on-dark" />
            </div>
            <span className="text-sm sm:text-base lg:text-lg leading-snug">{point}</span>
          </div>
        ))}
      </div>

      {/* Embedded Image */}
      {/* {feature.imageSrc && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={feature.imageSrc}
            alt={feature.imageAlt || feature.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, (max-width: 1280px) 144px, 176px"
          />
        </div>
      )} */}
    </div>
  );
}

