import { ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MissionSectionConfig } from "./types";

interface MissionContentProps {
  config: MissionSectionConfig;
  className?: string;
}

export function MissionContent({ config, className }: MissionContentProps) {
  return (
    <div className={cn("space-y-6 lg:space-y-8", className)}>
      {/* Label */}
      <div>
        <span className="inline-block bg-header-orange text-header-text-on-dark rounded-lg px-4 py-2 lg:px-6 lg:py-2.5 text-sm lg:text-base font-bold uppercase tracking-wide">
          {config.label}
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-header-teal leading-tight">
        {config.heading.split(" ").map((word, index, words) => {
          // Split "Driving the Future of Smart Transportation"
          // to show "Driving the Future of Smart" on first line
          // and "Transportation" on second line
          if (index === words.length - 1) {
            return (
              <span key={index}>
                <br />
                {word}
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {config.description}
      </p>

      {/* Service Details */}
      <div className="space-y-3 lg:space-y-4">
        {config.serviceDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-start gap-3 text-base lg:text-lg font-bold text-header-teal"
          >
            <ChevronsRight className="h-5 w-5 lg:h-6 lg:w-6 flex-shrink-0 mt-0.5" />
            <span>{detail.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

