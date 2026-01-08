import type { FaqConfig } from "./types";

export const defaultFaqConfig: FaqConfig = {
  header: {
    label: "FREQUENTLY ASKED QUESTIONS",
    title: "Common Questions About Our Services",
    description:
      "Find answers to frequently asked questions about our freight, warehousing, and logistics services. Can't find what you're looking for? Contact us directly.",
  },
  items: [
    {
      id: "services",
      question: "What types of freight services does NMG Freight provide?",
      answer:
        "NMG Freight offers comprehensive freight solutions including full truckload (FTL) and less-than-truckload (LTL) services, dry van transportation, cross-docking, and warehousing. We serve businesses across various industries with reliable nationwide coverage.",
    },
    {
      id: "deliveries",
      question: "How does NMG Freight ensure timely deliveries?",
      answer:
        "We maintain a reliable fleet, work with experienced drivers, and utilize advanced tracking technology to monitor shipments in real-time. Our operations team proactively manages routes and addresses potential delays to ensure on-time delivery.",
    },
    {
      id: "coverage",
      question: "What geographic areas do you serve?",
      answer:
        "NMG Freight provides comprehensive nationwide coverage. Our extensive network allows us to handle shipments to and from locations across the country, ensuring reliable logistics solutions for your business.",
    },
    {
      id: "support",
      question: "What customer support options are available?",
      answer:
        "Our customer service team is available during business hours to assist with quotes, tracking, and general inquiries. For urgent matters, we provide emergency contact options. You can reach us via phone, email, or through our online contact form.",
    },
  ],
};
