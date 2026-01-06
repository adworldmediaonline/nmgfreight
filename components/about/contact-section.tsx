import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AboutConfig } from "./types";

interface ContactSectionProps {
  contact: AboutConfig["contact"];
  className?: string;
}

export function ContactSection({ contact, className }: ContactSectionProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row items-start sm:items-center gap-6", className)}>
      {/* Contact Button */}
      <Link href={contact.buttonHref}>
        <Button
          className="bg-header-teal hover:bg-header-teal/90 text-header-text-on-dark font-semibold rounded-lg px-6 py-6 flex items-center gap-3"
        >
          <span>{contact.buttonLabel}</span>
          <div className="w-6 h-6 rounded-full bg-header-text-on-dark/20 flex items-center justify-center border border-header-text-on-dark/30">
            <CheckIcon className="h-4 w-4 text-header-text-on-dark" />
          </div>
        </Button>
      </Link>

      {/* Phone Number */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-header-orange/20 flex items-center justify-center">
          <PhoneIcon className="h-5 w-5 text-header-orange" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">{contact.phoneLabel}</span>
          <span className="text-base lg:text-lg font-semibold text-foreground">
            {contact.phoneNumber}
          </span>
        </div>
      </div>
    </div>
  );
}

