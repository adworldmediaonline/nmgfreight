import { cn } from "@/lib/utils";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import type { HeroConfig } from "./types";
import { defaultHeroConfig } from "./constants";

interface HeroProps {
  config?: Partial<HeroConfig>;
  className?: string;
}

export function Hero({ config: userConfig, className }: HeroProps) {
  // Merge user config with defaults
  const config: HeroConfig = {
    ...defaultHeroConfig,
    ...userConfig,
    brandLabel: userConfig?.brandLabel ?? defaultHeroConfig.brandLabel,
    headline: userConfig?.headline ?? defaultHeroConfig.headline,
    description: userConfig?.description ?? defaultHeroConfig.description,
    ctaButton: userConfig?.ctaButton ?? defaultHeroConfig.ctaButton,
  };

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <HeroBackground />
      <HeroContent config={config} />
    </section>
  );
}

// Export sub-components for advanced composition
export { HeroBackground } from "./hero-background";
export { HeroContent } from "./hero-content";
export type { HeroConfig } from "./types";
export { defaultHeroConfig } from "./constants";

