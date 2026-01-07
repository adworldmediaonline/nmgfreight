import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PageHeaderConfig } from "./types";

interface BreadcrumbProps {
  breadcrumb: PageHeaderConfig["breadcrumb"];
  className?: string;
}

export function Breadcrumb({ breadcrumb, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center gap-2 text-sm lg:text-base", className)} aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-header-text-on-dark hover:text-header-orange transition-colors duration-200"
      >
        {breadcrumb.home}
      </Link>
      <span className="text-header-text-on-dark"> &gt; </span>
      <span className="text-header-orange font-semibold">
        {breadcrumb.current}
      </span>
    </nav>
  );
}

