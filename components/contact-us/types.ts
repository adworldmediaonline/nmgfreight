export interface ContactCard {
  id: string;
  title: string;
  icon: "mail" | "phone" | "location";
  details: string | string[];
  imageSrc: string;
  imageAlt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}

export interface ContactUsConfig {
  cards: ContactCard[];
  form: {
    title: string;
    description: string[];
    submitLabel: string;
  };
}

