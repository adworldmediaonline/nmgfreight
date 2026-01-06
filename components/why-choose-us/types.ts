export interface FeatureItem {
  icon: "trucking" | "brokerage" | "logistics";
  title: string;
  description: string;
}

export interface WhyChooseUsConfig {
  header: {
    label: string;
    title: string;
    description: string;
  };
  features: FeatureItem[];
}

