import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageIcon, Building2Icon, TruckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "./types";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const iconMap = {
  "cross-dock": PackageIcon,
  warehouse: Building2Icon,
  trucking: TruckIcon,
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <div
      className={cn(
        "bg-header-bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full h-64 lg:h-72 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-header-orange/30 bg-header-teal/10 flex items-center justify-center">
            <IconComponent className="h-8 w-8 text-header-teal" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm lg:text-base mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Read More Button */}
        <Link href={service.href}>
          <Button
            variant="outline"
            className="w-full bg-header-orange/10 hover:bg-header-orange/20 text-header-orange border-header-orange/30 rounded-lg font-semibold"
          >
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}

