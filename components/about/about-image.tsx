import Image from "next/image";
import { cn } from "@/lib/utils";

interface AboutImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AboutImage({ src, alt, className }: AboutImageProps) {
  return (
    <div className={cn("relative w-full h-full rounded-lg overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-cover rounded-lg"
        priority
      />
    </div>
  );
}

