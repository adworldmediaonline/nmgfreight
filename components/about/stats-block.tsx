import { cn } from "@/lib/utils";
import type { AboutConfig } from "./types";

interface StatsBlockProps {
  stats: AboutConfig["stats"];
  className?: string;
}

export function StatsBlock({ stats, className }: StatsBlockProps) {
  return (
    <div
      className={cn(
        "bg-header-orange p-8 lg:p-12 rounded-lg text-header-text-on-dark",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Experience */}
        <div className="flex flex-col">
          <span className="text-5xl lg:text-6xl xl:text-7xl font-bold">
            {stats.experience.years}
          </span>
          <span className="text-base lg:text-lg mt-2">{stats.experience.label}</span>
        </div>

        {/* Separator */}
        <div className="hidden lg:block w-px h-16 bg-header-text-on-dark/20" />

        {/* Operations */}
        <div className="flex flex-col">
          <span className="text-5xl lg:text-6xl xl:text-7xl font-bold">
            {stats.operations.count}
          </span>
          <span className="text-base lg:text-lg mt-2">{stats.operations.label}</span>
        </div>
      </div>
    </div>
  );
}

