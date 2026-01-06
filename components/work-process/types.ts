export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  image: string;
}

export interface WorkProcessConfig {
  header: {
    label: string;
    title: string;
    description: string;
  };
  steps: ProcessStep[];
}
