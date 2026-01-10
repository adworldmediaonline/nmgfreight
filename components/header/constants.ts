import type { HeaderConfig } from "./types";

export const defaultHeaderConfig: HeaderConfig = {
  navigationItems: [
    { label: "Home", href: "/", active: true },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Get A Quote", href: "/get-a-quote" },
  ],
  contactInfo: {
    email: "info@nmgfreight.com",
    address: "3519 MATAPAN CRES VANCOUVER BC V5M 4A9 CANADA",
    phone: "+1 3313286900",
  },
  socialLinks: [
    {
      name: "facebook",
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ],
  logo: {
    brandName: "NMG FREIGHT",
    href: "/",
    imageSrc: "/nmg-freight.png",
  },
};

