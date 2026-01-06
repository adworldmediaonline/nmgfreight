export interface Testimonial {
  id: string;
  name: string;
  title: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  incoterms: string;
  load: string;
}

export interface QuoteTestimonialConfig {
  form: {
    title: string;
    personalInfoLabel: string;
    freightTypeLabel: string;
    buttonLabel: string;
    phoneNumber: string;
    supportText: string;
    incotermsOptions: Array<{ value: string; label: string }>;
    loadOptions: Array<{ value: string; label: string }>;
  };
  testimonial: {
    label: string;
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
}
