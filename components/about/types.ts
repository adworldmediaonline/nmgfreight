export interface Service {
  label: string;
}

export interface AboutConfig {
  header: {
    label: string;
    headline: string;
    description: string;
  };
  services: Service[];
  contact: {
    buttonLabel: string;
    buttonHref: string;
    phoneLabel: string;
    phoneNumber: string;
  };
  stats: {
    experience: {
      years: string;
      label: string;
    };
    operations: {
      count: string;
      label: string;
    };
  };
}

