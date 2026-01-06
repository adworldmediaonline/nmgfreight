import Link from "next/link";
import { Logo } from "@/components/header/logo";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FooterBrand } from "./types";

interface BrandBoxProps {
  brand: FooterBrand;
  className?: string;
}

export function BrandBox({ brand, className }: BrandBoxProps) {
  return (
    <div
      className={cn(
        "bg-header-orange p-6 lg:p-8 flex flex-col gap-6 h-full",
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Logo brandName={brand.brandName} variant="menu" />
      </div>

      {/* Mission Statement */}
      <p className="text-header-text-on-dark text-sm lg:text-base leading-relaxed">
        {brand.missionStatement}
      </p>

      {/* CTA Button */}
      <Link href={brand.ctaButton.href} className="mt-auto">
        <Button
          className="w-full bg-header-text-on-dark text-header-orange hover:bg-header-text-on-dark/90 font-semibold rounded-md flex items-center justify-center gap-2 py-3"
        >
          <span>{brand.ctaButton.label}</span>
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
            <CheckIcon className="h-3 w-3 text-header-text-on-dark" />
          </div>
        </Button>
      </Link>
    </div>
  );
}

