import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamPhotoProps {
  src: string;
  alt: string;
  className?: string;
}

export function TeamPhoto({ src, alt, className }: TeamPhotoProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative w-full h-[250px] lg:h-[300px] xl:h-[350px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}

