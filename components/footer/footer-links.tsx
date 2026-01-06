import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import type { FooterColumn } from "./types";

interface FooterLinksProps {
  column: FooterColumn;
  className?: string;
}

export function FooterLinks({ column, className }: FooterLinksProps) {
  return (
    <div className={className}>
      <h3 className="text-header-text-on-dark font-semibold text-base lg:text-lg mb-4">
        {column.title}
      </h3>
      <ul className="space-y-3">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center gap-2 text-header-text-on-dark/90 hover:text-header-orange transition-colors text-sm lg:text-base group"
            >
              <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

