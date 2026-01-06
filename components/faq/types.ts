export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqConfig {
  header: {
    label: string;
    title: string;
    description: string;
  };
  items: FaqItem[];
}
