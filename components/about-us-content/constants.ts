import type { AboutUsContentConfig } from "./types";

export const defaultAboutUsContentConfig: AboutUsContentConfig = {
  label: "ABOUT NMG FREIGHT",
  heading: "Your Trusted Logistics Partner",
  paragraphs: [
    {
      text: "NMG Freight is a professional freight and logistics company committed to delivering exceptional transportation and warehousing solutions. With years of industry experience, we have built a reputation for reliability, efficiency, and customer-focused service that keeps supply chains moving smoothly.",
      boldPhrases: [
        "professional freight and logistics company",
        "years of industry experience",
        "reliability, efficiency",
        "customer-focused service",
      ],
    },
    {
      text: "Our comprehensive services include trucking, warehousing, and cross-docking operations designed to meet diverse business needs. We combine modern technology with experienced professionals to ensure every shipment is handled with precision and care, from pickup to final delivery.",
      boldPhrases: [
        "comprehensive services",
        "modern technology",
        "experienced professionals",
        "precision and care",
      ],
    },
  ],
  teamPhoto: {
    src: "/images/service.png",
    alt: "NMG Freight Team",
  },
};

