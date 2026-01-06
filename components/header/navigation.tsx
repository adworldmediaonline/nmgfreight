import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "./types";

interface NavigationProps {
  items: NavigationItem[];
  variant?: "desktop" | "mobile";
  onItemClick?: () => void;
  className?: string;
}

export function Navigation({
  items,
  variant = "desktop",
  onItemClick,
  className,
}: NavigationProps) {
  if (variant === "desktop") {
    return (
      <nav className={cn("hidden lg:flex items-center gap-0 flex-1 px-6", className)}>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && (
              <Separator
                orientation="vertical"
                className="h-5 bg-header-text-on-dark/20 mx-1"
              />
            )}
            <Link
              href={item.href}
              className={cn(
                "px-4 py-2 text-base font-medium transition-colors hover:text-header-orange whitespace-nowrap",
                item.active && "text-header-orange"
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className={cn("flex-1 py-2", className)}>
      {items.map((item, index) => (
        <div key={item.href}>
          <Link
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "block px-6 py-4 text-base font-medium transition-colors",
              item.active
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && <Separator className="mx-0" />}
        </div>
      ))}
    </nav>
  );
}

