import { TruckIcon, UsersIcon, PackageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "./types";

interface FeatureItemProps {
  feature: FeatureItem;
  className?: string;
}

const iconMap = {
  trucking: TruckIcon,
  brokerage: UsersIcon,
  logistics: PackageIcon,
};

export function FeatureItemComponent({ feature, className }: FeatureItemProps) {
  const IconComponent = iconMap[feature.icon];

  return (
    <div className={cn("flex gap-4 lg:gap-6", className)}>
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-header-teal bg-header-bg-light flex items-center justify-center">
          <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-header-teal" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg lg:text-xl font-bold text-header-teal mb-2">
          {feature.title}
        </h3>
        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

