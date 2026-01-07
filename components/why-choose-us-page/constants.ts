import type { WhyChooseUsPageConfig } from "./types";

export const defaultWhyChooseUsPageConfig: WhyChooseUsPageConfig = {
  label: "WHY CHOOSE US",
  heading: "Why Choose Us",
  features: [
    {
      id: "expert-employees",
      title: "Expert Employees",
      description:
        "Our team comprises highly skilled professionals with extensive experience in freight and logistics, ensuring smooth and efficient operations.",
      keyPoints: [
        "Certified Drivers with Safety Focus",
        "Skilled Loaders for Precision Handling",
        "Expert Logistics Planners",
        "Dedicated Customer Support Specialists",
      ],
      imageSrc: "/images/service.png",
      imageAlt: "Expert Employee",
    },
    {
      id: "modern-technology",
      title: "Modern Technology",
      description:
        "We utilize advanced logistics technology to streamline operations, reduce transit time, and provide real-time updates.",
      keyPoints: [
        "24/7 GPS Tracking",
        "AI-Driven Route Optimization",
        "Automated Inventory Systems",
        "Cloud-Based Customer Dashboards",
      ],
      imageSrc: "/images/service.png",
      imageAlt: "Modern Technology",
    },
    {
      id: "global-operation",
      title: "Global Operation",
      description:
        "Our global network allows us to serve diverse markets with reliable, cross-border logistics solutions.",
      keyPoints: [
        "Strong International Partnerships",
        "Access to Major Ports and Airports",
        "Multimodal Freight Solutions",
        "Customs and Compliance Expertise",
      ],
      imageSrc: "/images/service.png",
      imageAlt: "Global Operation",
    },
    {
      id: "warehouse-facility",
      title: "Warehouse Facility",
      description:
        "We offer modern warehousing services with secure storage, efficient handling, and customized logistics solutions.",
      keyPoints: [
        "Temperature-Controlled Facilities",
        "Real-Time Inventory Management",
        "Flexible Storage Capacity",
        "Strategic Locations",
      ],
      imageSrc: "/images/service.png",
      imageAlt: "Warehouse Facility",
    },
    {
      id: "priority-transportation",
      title: "Priority Transportation",
      description:
        "Our priority transportation services are designed to meet your time-sensitive shipping needs with speed and reliability.",
      keyPoints: [
        "Dedicated Expedited Shipping",
        "Critical Cargo Management",
        "Guaranteed Delivery Times",
        "24/7 Monitoring & Support",
      ],
      imageSrc: "/images/service.png",
      imageAlt: "Priority Transportation",
    },
  ],
};

