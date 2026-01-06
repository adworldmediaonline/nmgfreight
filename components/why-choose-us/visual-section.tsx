import Image from "next/image";
import { cn } from "@/lib/utils";

interface VisualSectionProps {
  className?: string;
}

export function VisualSection({ className }: VisualSectionProps) {
  return (
    <div className={cn("relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden", className)}>
      {/* Circular Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-8">
        <div className="relative w-full max-w-md lg:max-w-2xl aspect-square animate-float">
          <Image
            src="/images/plane.png"
            alt="Logistics transportation - Air, Sea, and Land"
            fill
            className="object-cover rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

