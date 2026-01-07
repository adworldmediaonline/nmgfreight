import Image from "next/image";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "./breadcrumb";
import type { PageHeaderConfig } from "./types";

interface PageHeaderProps {
  config: PageHeaderConfig;
  className?: string;
}

export function PageHeader({ config, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-header-teal text-header-text-on-dark overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/small-banner.png"
          alt="Transportation and logistics background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-header-teal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="py-12 lg:py-16 xl:py-20">
          <div className="max-w-2xl flex flex-col justify-center space-y-6 lg:space-y-8">
            {/* Breadcrumb */}
            <Breadcrumb breadcrumb={config.breadcrumb} />

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {config.title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { Breadcrumb } from "./breadcrumb";
export type { PageHeaderConfig } from "./types";

