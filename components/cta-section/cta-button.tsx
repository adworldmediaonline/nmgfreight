import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CtaButton as CtaButtonType } from "./types";

interface CtaButtonProps {
  button: CtaButtonType;
  className?: string;
}

export function CtaButton({ button, className }: CtaButtonProps) {
  return (
    <Button
      asChild
      variant="default"
      className={cn(
        "bg-header-bg-light text-foreground hover:bg-header-bg-light/90 rounded-lg px-3 py-2 lg:px-6 lg:py-4 shadow-lg text-xs lg:text-base",
        className
      )}
    >
      <Link href={button.href || `tel:${button.phoneNumber.replace(/[^0-9+]/g, "")}`}>
        <Phone className="h-4 w-4 lg:h-6 lg:w-6 mr-1.5 lg:mr-2 text-destructive flex-shrink-0" />
        <span className="font-semibold whitespace-nowrap">{button.phoneNumber}</span>
      </Link>
    </Button>
  );
}
