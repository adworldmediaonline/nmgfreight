import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WarehouseServicesConfig } from "./types";

interface IndustriesServedProps {
  config: WarehouseServicesConfig["industries"];
  className?: string;
}

export function IndustriesServed({
  config,
  className,
}: IndustriesServedProps) {
  return (
    <section className={cn("py-6 lg:py-8 bg-background", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-header-teal mb-1">
            {config.heading}
          </h2>
          <div className="w-16 h-1 bg-header-orange mb-4" />

          <div className="space-y-2 lg:space-y-3">
            {config.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-header-orange flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 lg:w-4 lg:h-4 text-header-text-on-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base lg:text-lg font-semibold text-foreground mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {item.description}
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

