import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderVisualProps {
  className?: string;
}

export function PageHeaderVisual({ className }: PageHeaderVisualProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="relative w-full h-full flex items-end justify-end">
        <div className="relative w-full max-w-full h-full min-h-[200px] lg:min-h-[300px] xl:min-h-[350px]">
          <Image
            src="/images/plane.png"
            alt="Transportation - Air, Sea, and Land logistics"
            fill
            className="object-contain object-right-bottom"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

