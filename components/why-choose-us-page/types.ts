export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface WhyChooseUsPageConfig {
  label: string;
  heading: string;
  features: WhyChooseUsFeature[];
}

