import type { AboutUsContentConfig } from "./types";

export const defaultAboutUsContentConfig: AboutUsContentConfig = {
  label: "EXPLORE WARRIOR TRUCKING",
  heading: "Professionally Operated",
  paragraphs: [
    {
      text: "We are a dedicated asset-based trucking company with a fleet of over 15 on-road trucks, providing dependable and timely delivery services. Whether it's regional or long-haul transportation, we ensure on-time delivery and cargo safety.",
      boldPhrases: [
        "dedicated asset-based trucking company",
        "15 on-road trucks",
        "on-time delivery",
        "cargo safety",
      ],
    },
    {
      text: "In addition to trucking services, we are also a leading freight brokerage firm, connecting shippers with the best carriers to streamline transportation and reduce costs. Our expert team and advanced logistics network guarantee efficiency in every mile we cover.",
      boldPhrases: [
        "leading freight brokerage firm",
        "expert team",
        "advanced logistics network",
      ],
    },
  ],
  teamPhoto: {
    src: "/images/service.png", // Placeholder - replace with actual team photo
    alt: "Warrior Trucking Team",
  },
};

