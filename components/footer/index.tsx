import { BrandBox } from "./brand-box";
import { FooterLinks } from "./footer-links";
import { ContactBar } from "./contact-bar";
import type { FooterConfig } from "./types";
import { defaultFooterConfig } from "./constants";

interface FooterProps {
  config?: Partial<FooterConfig>;
  className?: string;
}

export function Footer({ config: userConfig, className }: FooterProps) {
  // Merge user config with defaults
  const config: FooterConfig = {
    ...defaultFooterConfig,
    ...userConfig,
    brand: userConfig?.brand ?? defaultFooterConfig.brand,
    columns: userConfig?.columns ?? defaultFooterConfig.columns,
    contactInfo: userConfig?.contactInfo ?? defaultFooterConfig.contactInfo,
    copyright: userConfig?.copyright ?? defaultFooterConfig.copyright,
  };

  return (
    <footer className={className}>
      {/* Upper Section - Content Columns */}
      <div className="bg-header-teal">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Leftmost Column - Brand Box */}
            <div className="lg:col-span-1">
              <BrandBox brand={config.brand} />
            </div>

            {/* Right Columns - Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {config.columns.map((column, index) => (
                <FooterLinks key={index} column={column} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Contact Bar */}
      <ContactBar
        contactInfo={config.contactInfo}
        copyright={config.copyright}
      />
    </footer>
  );
}

// Export sub-components for advanced composition
export { BrandBox } from "./brand-box";
export { FooterLinks } from "./footer-links";
export { ContactBar } from "./contact-bar";
export type {
  FooterConfig,
  FooterBrand,
  FooterColumn,
  FooterLink,
  FooterContactInfo,
} from "./types";
export { defaultFooterConfig } from "./constants";

