import type { FooterConfig } from "./types";

export const defaultFooterConfig: FooterConfig = {
  brand: {
    brandName: "NMG FREIGHT",
    missionStatement:
      "NMG Freight delivers reliable freight, logistics, and warehousing solutions, ensuring seamless operations and customer satisfaction.",
    ctaButton: {
      label: "Get the best rate",
      href: "/quote",
    },
  },
  columns: [
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Shipping", href: "/shipping" },
      ],
    },
    {
      title: "Company Info",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Get A Quote", href: "/get-a-quote" },
        { label: "Appointments", href: "/appointments" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Trucking Services", href: "/services/trucking" },
        { label: "Warehouse & Storage", href: "/services/warehouse" },
        { label: "Cross-Dock Services", href: "/services/cross-dock" },
      ],
    },
  ],
  contactInfo: {
    email: "info@nmgfreight.com",
    phone: ["+1 3313286900"],
    address: "3519 MATAPAN CRES VANCOUVER BC V5M 4A9 CANADA",
  },
  copyright: "© 2025 NMG Freight / All rights reserved",
};

