import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TruckingServicesConfig } from "./types";

interface WhyChooseProps {
  config: TruckingServicesConfig["whyChoose"];
  className?: string;
}

export function WhyChoose({ config, className }: WhyChooseProps) {
  return (
    <section className={cn("py-6 lg:py-8 bg-background", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-4 lg:mb-6">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-header-teal mb-1">
              {config.heading}
            </h2>
            <div className="w-16 h-1 bg-header-orange mb-2" />
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {config.description}
            </p>
          </div>


          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {config.features.map((feature) => (
              <div key={feature.number} className="flex items-start gap-2 lg:gap-3">
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-header-orange flex items-center justify-center">
                  <span className="text-lg lg:text-xl font-bold text-header-text-on-dark">
                    {feature.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold text-header-teal mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

