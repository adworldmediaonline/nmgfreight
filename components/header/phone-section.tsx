import { PhoneIcon } from "lucide-react";
import type { ContactInfo } from "./types";

interface PhoneSectionProps {
  contactInfo: ContactInfo;
  className?: string;
}

export function PhoneSection({ contactInfo, className }: PhoneSectionProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-header-orange flex items-center justify-center border-2 border-header-teal/30 shadow-lg">
            <PhoneIcon className="h-5 w-5 text-header-text-on-dark" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-header-text-on-dark/90 leading-tight">
            Call Us Anytime
          </span>
          <span className="text-base font-bold text-header-text-on-dark leading-tight">
            {contactInfo.phone}
          </span>
        </div>
      </div>
    </div>
  );
}

