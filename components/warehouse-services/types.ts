export interface WarehouseServicesConfig {
  hero: {
    title: string;
    description: string;
  };
  contactBox: {
    label: string;
    heading: string;
    phoneNumber: string;
  };
  howItWorks: {
    heading: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  industries: {
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  whyChoose: {
    heading: string;
    description: string;
    features: {
      number: number;
      title: string;
      description: string;
    }[];
  };
}

