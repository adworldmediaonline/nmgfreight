import Image from "next/image";
import { cn } from "@/lib/utils";

interface CtaVisualProps {
  className?: string;
}

export function CtaVisual({ className }: CtaVisualProps) {
  return (
    <div className={cn("relative w-full h-[250px] lg:h-[300px] flex items-end", className)}>
      {/* Main image with man, boxes, and background */}
      <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
        <div className="relative w-full max-w-sm lg:max-w-md h-full">
          <Image
            src="/images/logi.png"
            alt="Logistics professional with packages"
            fill
            className="object-contain"
            priority
            style={{ objectPosition: "bottom" }}
          />
        </div>
      </div>
    </div>
  );
}
