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
      title: "Industry Served",
      links: [
        { label: "Frozen Food", href: "/services/frozen-food" },
        { label: "Automobile", href: "/services/automobile" },
        { label: "Industrial Freight Needs", href: "/services/industrial" },
        { label: "Retail", href: "/services/retail" },
        { label: "Packaging", href: "/services/packaging" },
      ],
    },
    {
      title: "Company Info",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Get A Quote", href: "/quote" },
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
    phone: ["(630)-544-1019", "(630)-943-2246"],
    address: "900 Paramount Pkwy, Batavia, IL 60510",
  },
  copyright: "© 2025 NMG Freight / All rights reserved",
};

