import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProcessStep as ProcessStepType } from "./types";

interface ProcessStepProps {
  step: ProcessStepType;
  className?: string;
}

export function ProcessStep({ step, className }: ProcessStepProps) {
  return (
    <div className={cn("relative space-y-4 max-w-sm w-full", className)}>
      {/* Image with decorative pattern */}
      <div className="relative">
        {/* Decorative dotted square pattern */}
        <div className="absolute -top-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 border-2 border-dashed border-header-orange/40 opacity-60 -z-10" />

        {/* Image */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
            priority={step.number === 1}
          />
        </div>
      </div>

      {/* Number Circle - Below Image */}
      <div className="flex justify-center lg:justify-start">
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-header-orange rounded-full flex items-center justify-center shadow-lg">
          <span className="text-header-text-on-dark text-xl lg:text-2xl font-bold">
            {step.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 text-center lg:text-left">
        <h3 className="text-xl lg:text-2xl font-bold text-header-teal">
          {step.title}
        </h3>
        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
