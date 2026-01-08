import type { MissionSectionConfig } from "./types";

export const defaultMissionSectionConfig: MissionSectionConfig = {
  label: "Our Mission",
  heading: "Delivering Excellence in Every Shipment",
  description:
    "Our mission is to provide reliable, efficient, and cost-effective freight solutions that empower businesses to succeed. We are committed to maintaining the highest standards of service quality, safety, and customer satisfaction in everything we do.",
  serviceDetails: [
    {
      text: "Committed to on-time delivery and cargo safety",
    },
    {
      text: "Serving diverse industries with customized logistics solutions",
    },
  ],
  visual: {
    imageSrc: "/images/service.png",
    imageAlt: "NMG Freight Mission",
  },
};

