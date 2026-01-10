import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  brandName: string;
  href?: string;
  variant?: "mobile" | "desktop" | "menu";
  className?: string;
  imageSrc?: string;
}

export function Logo({
  brandName,
  href = "/",
  variant = "desktop",
  className,
  imageSrc,
}: LogoProps) {
  const content = (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={brandName}
          width={variant === "mobile" ? 120 : 140}
          height={variant === "mobile" ? 40 : 50}
          className="h-auto object-contain"
          priority
        />
      ) : (
        <span
          className={cn(
            "font-bold uppercase tracking-wide",
            variant === "mobile" && "text-xl !text-header-orange",
            variant === "desktop" && "text-lg text-header-text-on-dark leading-tight whitespace-nowrap",
            variant === "menu" && "text-xl text-foreground"
          )}
        >
          {brandName}
        </span>
      )}
    </div>
  );

  if (variant === "desktop") {
    return (
      <Link href={href} className="flex items-center h-full">
        <div className="hidden lg:flex h-full items-center justify-center px-5 lg:px-8">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={brandName}
              width={160}
              height={55}
              className="h-auto object-contain"
              priority
            />
          ) : (
            <div className="bg-header-orange h-full items-center justify-center px-5 lg:px-8 min-w-[120px] flex">
              <span className="text-header-text-on-dark font-bold text-lg uppercase tracking-wider whitespace-nowrap leading-tight">
                {brandName}
              </span>
            </div>
          )}
        </div>
        <div className="lg:hidden">{content}</div>
      </Link>
    );
  }

  if (href && variant !== "menu") {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

