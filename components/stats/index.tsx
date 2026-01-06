import { StatCard } from "./stat-card";
import type { StatsConfig } from "./types";
import { defaultStatsConfig } from "./constants";

interface StatsProps {
  config?: Partial<StatsConfig>;
  className?: string;
}

export function Stats({ config: userConfig, className }: StatsProps) {
  // Merge user config with defaults
  const config: StatsConfig = {
    ...defaultStatsConfig,
    ...userConfig,
    items: userConfig?.items ?? defaultStatsConfig.items,
  };

  return (
    <section className={`relative py-12 lg:py-20 overflow-hidden ${className}`}>
      {/* Background with blurred effect */}
      <div className="absolute inset-0 bg-hero-teal">
        {/* Optional: Add subtle pattern or gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero-teal via-hero-teal to-header-teal opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {config.items.map((item, index) => (
            <StatCard key={index} stat={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { StatCard } from "./stat-card";
export type { StatsConfig, StatItem } from "./types";
export { defaultStatsConfig } from "./constants";

