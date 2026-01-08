import type { ServicesConfig } from "./types";

export const defaultServicesConfig: ServicesConfig = {
  header: {
    label: "OUR SERVICES",
    title: "Comprehensive Freight & Logistics Solutions",
    description:
      "From trucking and warehousing to cross-docking, we provide end-to-end logistics services that keep your supply chain moving efficiently and cost-effectively.",
  },
  services: [
    {
      icon: "cross-dock",
      title: "Cross-Dock Services",
      description:
        "Streamlined cross-docking operations minimize handling time and storage costs. We efficiently transfer freight from inbound to outbound vehicles, reducing transit time and improving your supply chain speed.",
      image: "/images/service.png",
      href: "/services/cross-dock",
    },
    {
      icon: "warehouse",
      title: "Warehouse & Storage",
      description:
        "Secure warehousing facilities equipped with modern inventory management systems. We offer flexible storage solutions including pallet storage, racked systems, and bulk storage to accommodate various cargo types.",
      image: "/images/service.png",
      href: "/services/warehouse",
    },
    {
      icon: "trucking",
      title: "Trucking Services",
      description:
        "Nationwide trucking services with a reliable fleet of dry vans. We handle both full truckload (FTL) and less-than-truckload (LTL) shipments, ensuring timely and secure transportation across the country.",
      image: "/images/service.png",
      href: "/services/trucking",
    },
  ],
};

