export interface Service {
  icon: "cross-dock" | "warehouse" | "trucking";
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ServicesConfig {
  header: {
    label: string;
    title: string;
    description: string;
  };
  services: Service[];
}

