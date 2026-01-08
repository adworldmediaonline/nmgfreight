import type { WorkProcessConfig } from "./types";

export const defaultWorkProcessConfig: WorkProcessConfig = {
  header: {
    label: "OUR WORK PROCESS",
    title: "Streamlined Logistics from Start to Finish",
    description:
      "Our proven process ensures efficient, reliable, and cost-effective freight solutions. From initial consultation to final delivery, we handle every step with precision and care.",
  },
  steps: [
    {
      number: 1,
      title: "Consultation & Planning",
      description:
        "We begin by understanding your specific shipping requirements, timelines, and budget. Our team analyzes your needs and recommends the most efficient logistics solution tailored to your business.",
      image: "/images/process/consultation.webp",
    },
    {
      number: 2,
      title: "Coordination & Execution",
      description:
        "Once approved, we coordinate pickup, assign the appropriate equipment, and begin transportation. Real-time tracking keeps you updated throughout the journey, ensuring complete visibility.",
      image: "/images/process/coordination.webp",
    },
    {
      number: 3,
      title: "Delivery & Follow-Up",
      description:
        "We ensure safe and timely delivery to your destination. After completion, we follow up to confirm satisfaction and gather feedback to continuously improve our services.",
      image: "/images/process/delivery.webp",
    },
  ],
};
