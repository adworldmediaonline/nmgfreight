import { cn } from "@/lib/utils";
import type { SocialLink } from "./types";

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "desktop" | "mobile";
  className?: string;
}

export function SocialLinks({
  links,
  variant = "desktop",
  className,
}: SocialLinksProps) {
  if (variant === "desktop") {
    return (
      <div className={className}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-header-orange transition-colors text-header-text-on-dark font-semibold text-sm"
            aria-label={link.label}
          >
            {link.name === "facebook" ? "f" : link.name === "linkedin" ? "in" : link.name}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-header-orange transition-colors text-foreground font-semibold"
          aria-label={link.label}
        >
          {link.name === "facebook" ? "f" : link.name === "linkedin" ? "in" : link.name}
        </a>
      ))}
    </div>
  );
}

