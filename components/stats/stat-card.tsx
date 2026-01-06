import {
  PackageIcon,
  ClockIcon,
  GlobeIcon,
  HandshakeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatItem } from "./types";

interface StatCardProps {
  stat: StatItem;
  className?: string;
}

const iconMap = {
  package: PackageIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  handshake: HandshakeIcon,
};

export function StatCard({ stat, className }: StatCardProps) {
  const IconComponent = iconMap[stat.iconName];

  return (
    <div
      className={cn(
        "bg-header-teal/95 backdrop-blur-sm rounded-lg p-6 lg:p-8 flex flex-col items-center text-center space-y-4 shadow-lg",
        className
      )}
    >
      {/* Icon */}
      <div className="text-header-orange">
        <IconComponent className="h-8 w-8 lg:h-10 lg:w-10" />
      </div>

      {/* Value */}
      <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-header-orange">
        {stat.value}
      </div>

      {/* Label */}
      <div className="text-base lg:text-lg text-header-text-on-dark font-medium">
        {stat.label}
      </div>
    </div>
  );
}

