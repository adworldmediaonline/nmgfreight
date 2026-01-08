import type { AboutConfig } from "./types";

export const defaultAboutConfig: AboutConfig = {
  header: {
    label: "ABOUT NMG FREIGHT",
    headline: "Your Trusted Partner for Freight Excellence",
    description:
      "NMG Freight delivers comprehensive logistics solutions with precision and care. Our experienced team handles every shipment with attention to detail, ensuring your cargo arrives safely and on time. We combine industry expertise with modern technology to provide seamless transportation and warehousing services.",
  },
  services: [
    { label: "Full Truckload Services" },
    { label: "Less Than Truckload (LTL)" },
    { label: "Dry Van Transportation" },
    { label: "Temperature-Controlled Shipping" },
    { label: "Expedited Delivery" },
    { label: "Dedicated Fleet Solutions" },
  ],
  contact: {
    buttonLabel: "Contact Us",
    buttonHref: "/contact-us",
    phoneLabel: "Have Questions?",
    phoneNumber: "(630)-544-1019",
  },
  stats: {
    experience: {
      years: "15+",
      label: "Years of Excellence",
    },
    operations: {
      count: "50+",
      label: "Locations Served",
    },
  },
};

