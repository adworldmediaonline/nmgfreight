import type { ServicesConfig } from "./types";

export const defaultServicesConfig: ServicesConfig = {
  header: {
    label: "OUR SERVICES",
    title: "Wide Variety of Logistics Services",
    description:
      "Explore a wide range of freight, logistics, and warehousing solutions tailored to meet your business needs, ensuring reliable and on-time deliveries.",
  },
  services: [
    {
      icon: "cross-dock",
      title: "Cross-Dock Services",
      description:
        "Our cross-dock services handle fast inbound and outbound transfers with minimal storage time, reducing costs and improving efficiency.",
      image: "/images/service.png",
      href: "/services/cross-dock",
    },
    {
      icon: "warehouse",
      title: "Warehouse & Storage",
      description:
        "We offer secure short- and long-term storage with pallet, racked, and bulk storage options to meet your inventory needs.",
      image: "/images/service.png",
      href: "/services/warehouse",
    },
    {
      icon: "trucking",
      title: "Trucking Services",
      description:
        "Our trucking services include full truckload and local deliveries using modern fleet ensuring timely and safe transportation.",
      image: "/images/service.png",
      href: "/services/trucking",
    },
  ],
};

