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
        "bg-header-bg-light text-foreground hover:bg-header-bg-light/90 rounded-lg px-4 lg:px-6 py-3 lg:py-4 shadow-lg",
        className
      )}
    >
      <Link href={button.href || `tel:${button.phoneNumber.replace(/[^0-9+]/g, "")}`}>
        <Phone className="h-5 w-5 lg:h-6 lg:w-6 mr-2 text-destructive" />
        <span className="text-sm lg:text-base font-semibold">{button.phoneNumber}</span>
      </Link>
    </Button>
  );
}
