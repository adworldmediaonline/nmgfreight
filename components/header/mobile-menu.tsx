"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { SocialLinks } from "./social-links";
import { Separator } from "@/components/ui/separator";
import type { HeaderConfig } from "./types";

interface MobileMenuProps {
  config: HeaderConfig;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export function MobileMenu({
  config,
  isOpen,
  onOpenChange,
  trigger,
}: MobileMenuProps) {
  const defaultTrigger = (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden text-header-text-on-dark hover:bg-header-text-on-dark/10 w-10 h-10"
      aria-label="Open menu"
    >
      <MenuIcon className="h-6 w-6" />
    </Button>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{trigger || defaultTrigger}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px] p-0"
        showCloseButton={true}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="p-6 border-b">
            <Logo
              brandName={config.logo.brandName}
              variant="menu"
              imageSrc={config.logo.imageSrc}
            />
          </div>

          {/* Navigation Links */}
          <Navigation
            items={config.navigationItems}
            variant="mobile"
            onItemClick={() => onOpenChange(false)}
          />

          {/* Contact Info Footer */}
          <div className="border-t p-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Contact Info
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href={`tel:${config.contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span>{config.contactInfo.phone}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{config.contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4" />
                  <span>{config.contactInfo.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Social Media Links
              </h3>
              <SocialLinks links={config.socialLinks} variant="mobile" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

