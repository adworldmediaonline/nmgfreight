import { MailIcon, MapPinIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "./social-links";
import type { ContactInfo, SocialLink } from "./types";

interface ContactBarProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  className?: string;
}

export function ContactBar({
  contactInfo,
  socialLinks,
  className,
}: ContactBarProps) {
  return (
    <div className={className}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5 text-sm">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-header-orange" />
              <span>{contactInfo.email}</span>
            </div>
            <Separator orientation="vertical" className="h-4 bg-header-text-on-dark/20" />
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-header-orange" />
              <span>{contactInfo.address}</span>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <SocialLinks
            links={socialLinks}
            variant="desktop"
            className="flex items-center gap-4"
          />
        </div>
      </div>
    </div>
  );
}

