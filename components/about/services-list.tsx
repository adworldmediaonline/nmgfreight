import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "./types";

interface ServicesListProps {
  services: Service[];
  className?: string;
}

export function ServicesList({ services, className }: ServicesListProps) {
  // Split services into two columns
  const leftColumn = services.slice(0, Math.ceil(services.length / 2));
  const rightColumn = services.slice(Math.ceil(services.length / 2));

  return (
    <div
      className={cn(
        "bg-header-bg-light border-l-4 border-header-orange p-6 lg:p-8 rounded-lg shadow-sm",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumn.map((service, index) => (
            <div key={index} className="flex items-center gap-3">
              <ChevronRightIcon className="h-5 w-5 text-header-teal flex-shrink-0" />
              <span className="text-header-teal font-bold text-base lg:text-lg">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumn.map((service, index) => (
            <div key={index} className="flex items-center gap-3">
              <ChevronRightIcon className="h-5 w-5 text-header-teal flex-shrink-0" />
              <span className="text-header-teal font-bold text-base lg:text-lg">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

