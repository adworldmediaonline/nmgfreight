import type { MissionSectionConfig } from "./types";

export const defaultMissionSectionConfig: MissionSectionConfig = {
  label: "Our Mission",
  heading: "Driving the Future of Smart Transportation",
  description:
    "We aim to deliver innovative, reliable, and cost-effective logistics solutions. Every mile we move is powered by technology, safety, and dedication.",
  serviceDetails: [
    {
      text: "Service area: Greater Chicago and Midwest",
    },
    {
      text: "Proudly serving retail, food, packaging, and industrial freight needs",
    },
  ],
  visual: {
    imageSrc: "/images/service.png", // Placeholder - replace with actual team image
    imageAlt: "Our Team",
  },
};

