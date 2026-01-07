import Image from "next/image";
import { cn } from "@/lib/utils";

interface MissionVisualProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function MissionVisual({
  imageSrc,
  imageAlt,
  className,
}: MissionVisualProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className
      )}
    >
      {/* Abstract Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light blue dashed circular outline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] border-2 border-dashed border-blue-300 rounded-full opacity-50" />

        {/* Orange circles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 lg:w-20 lg:h-20 bg-header-orange rounded-full opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-header-orange rounded-full opacity-60" />
        <div className="absolute top-1/2 right-1/3 w-8 h-8 lg:w-12 lg:h-12 bg-header-orange rounded-full opacity-60" />

        {/* Light pink diagonal striped circles */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 lg:w-24 lg:h-24 bg-pink-200 rounded-full opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 lg:w-20 lg:h-20 bg-pink-200 rounded-full opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 16px)' }} />

        {/* Dark teal triangular shapes */}
        <div className="absolute top-1/4 right-1/3">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-header-teal opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-header-teal opacity-60" />
        </div>

        {/* Light blue wavy lines */}
        <div className="absolute bottom-1/4 left-1/3 w-32 h-8 lg:w-40 lg:h-10">
          <svg
            viewBox="0 0 100 20"
            className="w-full h-full text-blue-300 opacity-50"
          >
            <path
              d="M 0 10 Q 25 0, 50 10 T 100 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Light blue outlined circle at bottom */}
        <div className="absolute bottom-1/6 left-1/2 -translate-x-1/2 w-24 h-24 lg:w-32 lg:h-32 border-2 border-blue-300 rounded-full opacity-50" />
      </div>

      {/* Circular Image */}
      <div className="relative z-10 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 280px, (max-width: 1280px) 350px, 400px"
          />
        </div>
      </div>
    </div>
  );
}

