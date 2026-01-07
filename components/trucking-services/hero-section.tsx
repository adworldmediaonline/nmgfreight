import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TruckingServicesConfig } from "./types";

interface HeroSectionProps {
  config: TruckingServicesConfig["hero"];
  contactBox: TruckingServicesConfig["contactBox"];
  className?: string;
}

export function HeroSection({
  config,
  contactBox,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("py-6 lg:py-8 bg-background", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-3">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-header-teal leading-tight">
              {config.title}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {config.description}
            </p>
          </div>

          {/* Right Contact Box */}
          <div className="lg:col-span-1">
            <div className="bg-header-teal rounded-xl p-6 lg:p-8 text-header-text-on-dark">
              <div className="mb-4">
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {contactBox.label}
                </span>
              </div>
              <div className="bg-white rounded-lg p-4 lg:p-6">
                <p className="text-header-orange text-sm font-semibold mb-3">
                  {contactBox.heading}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-header-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-header-text-on-dark" />
                  </div>
                  <a
                    href={`tel:${contactBox.phoneNumber.replace(/[^0-9]/g, "")}`}
                    className="text-2xl lg:text-3xl font-bold text-header-teal hover:text-header-orange transition-colors"
                  >
                    {contactBox.phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

