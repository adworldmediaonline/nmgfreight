export interface MissionSectionConfig {
  label: string;
  heading: string;
  description: string;
  serviceDetails: {
    icon?: string;
    text: string;
  }[];
  visual: {
    imageSrc: string;
    imageAlt: string;
  };
}

