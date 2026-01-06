import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HeroConfig } from "./types";

interface HeroContentProps {
  config: HeroConfig;
  className?: string;
}

export function HeroContent({ config, className }: HeroContentProps) {
  return (
    <div className={cn("relative z-10 w-full", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="min-h-[600px] lg:min-h-[700px] flex flex-col justify-center py-12 lg:py-20">
          {/* Brand Label - Dark Teal Oval with Dots */}
          <div className="flex items-center justify-center mb-8 lg:mb-10">
            <div className="bg-header-teal/90 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-3 border border-header-text-on-dark/10">
              <div className="w-1.5 h-1.5 rounded-full bg-header-text-on-dark" />
              <span className="text-header-text-on-dark text-base lg:text-lg font-medium uppercase tracking-wider">
                {config.brandLabel}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-header-text-on-dark" />
            </div>
          </div>

          {/* Main Headline - Centered, Large White Text */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-header-text-on-dark mb-8 lg:mb-10 text-center leading-tight max-w-5xl mx-auto">
            {config.headline}
          </h1>

          {/* Description - Center Aligned */}
          <div className="max-w-4xl mx-auto mb-10 lg:mb-12">
            <p className="text-lg lg:text-xl xl:text-2xl text-header-text-on-dark/95 text-center leading-relaxed">
              {config.description}
            </p>
          </div>

          {/* CTA Button - Centered */}
          <div className="flex items-center justify-center">
            <Link href={config.ctaButton.href}>
              <Button
                size="lg"
                className="bg-header-orange hover:bg-header-orange-dark text-header-text-on-dark font-semibold rounded-lg px-8 lg:px-10 py-6 lg:py-7 text-base lg:text-lg flex items-center gap-3 shadow-lg"
              >
                <span>{config.ctaButton.label}</span>
                <div className="w-7 h-7 rounded bg-header-text-on-dark/10 flex items-center justify-center border border-header-text-on-dark/20">
                  <CheckIcon className="h-4 w-4 text-header-text-on-dark" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
