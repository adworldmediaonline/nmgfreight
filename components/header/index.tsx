"use client";

import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Logo } from "./logo";
import { ContactBar } from "./contact-bar";
import { Navigation } from "./navigation";
import { PhoneSection } from "./phone-section";
import { MobileMenu } from "./mobile-menu";
import type { HeaderConfig } from "./types";
import { defaultHeaderConfig } from "./constants";

interface HeaderProps {
  config?: Partial<HeaderConfig>;
  className?: string;
}

export function Header({ config: userConfig, className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = React.useState(false);

  // Merge user config with defaults
  const config: HeaderConfig = {
    ...defaultHeaderConfig,
    ...userConfig,
    navigationItems: userConfig?.navigationItems ?? defaultHeaderConfig.navigationItems,
    contactInfo: userConfig?.contactInfo ?? defaultHeaderConfig.contactInfo,
    socialLinks: userConfig?.socialLinks ?? defaultHeaderConfig.socialLinks,
    logo: userConfig?.logo ?? defaultHeaderConfig.logo,
  };

  return (
    <header className={className}>
      {/* Top Contact Bar - Desktop Only */}
      <ContactBar
        contactInfo={config.contactInfo}
        socialLinks={config.socialLinks}
        className="hidden lg:block bg-header-teal text-header-text-on-dark"
      />

      {/* Main Navigation Bar */}
      <div className="bg-header-teal text-header-text-on-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <Logo
              brandName={config.logo.brandName}
              href={config.logo.href}
              imageSrc={config.logo.imageSrc}
            />

            {/* Desktop Navigation Links */}
            <Navigation items={config.navigationItems} />

            {/* Right Side: Phone Info & Mobile Menu */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Phone Section - Desktop Only */}
              <PhoneSection
                contactInfo={config.contactInfo}
                className="hidden lg:flex"
              />

              {/* Desktop Separator */}
              <Separator
                orientation="vertical"
                className="hidden lg:block h-10 bg-header-text-on-dark/20 mx-2"
              />

              {/* Mobile Menu */}
              <MobileMenu
                config={config}
                isOpen={isMobileMenuOpen}
                onOpenChange={setIsMobileMenuOpen}
              />

              {/* Desktop Hamburger Menu */}
              <MobileMenu
                config={config}
                isOpen={isDesktopMenuOpen}
                onOpenChange={setIsDesktopMenuOpen}
                trigger={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden xl:flex text-header-text-on-dark hover:bg-header-text-on-dark/10 w-10 h-10 bg-header-orange/20"
                    aria-label="More options"
                  >
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Export sub-components for advanced composition
export { Logo } from "./logo";
export { ContactBar } from "./contact-bar";
export { Navigation } from "./navigation";
export { PhoneSection } from "./phone-section";
export { SocialLinks } from "./social-links";
export { MobileMenu } from "./mobile-menu";
export type { HeaderConfig, NavigationItem, ContactInfo, SocialLink } from "./types";
export { defaultHeaderConfig } from "./constants";

