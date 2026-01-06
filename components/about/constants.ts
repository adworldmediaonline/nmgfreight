import type { AboutConfig } from "./types";

export const defaultAboutConfig: AboutConfig = {
  header: {
    label: "ABOUT NMG FREIGHT",
    headline: "We'll keep your items damage free",
    description:
      "With over 20 years of experience, NMG Freight is a dedicated asset-based trucking company committed to providing customized transportation and logistics services. Our modern fleet and expert team ensure timely and secure deliveries across multiple regions.",
  },
  services: [
    { label: "Intermodal Shipping" },
    { label: "Freeze product Shipping" },
    { label: "Hot Shot Trucking" },
    { label: "Container Freight" },
    { label: "International Shipping" },
    { label: "Flatbed Shipping" },
  ],
  contact: {
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
    phoneLabel: "Have Questions?",
    phoneNumber: "(630)-544-1019",
  },
  stats: {
    experience: {
      years: "20",
      label: "Years of Experience",
    },
    operations: {
      count: "10",
      label: "Country Operation",
    },
  },
};

