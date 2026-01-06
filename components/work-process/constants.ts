import type { WorkProcessConfig } from "./types";

export const defaultWorkProcessConfig: WorkProcessConfig = {
  header: {
    label: "OUR WORK PROCESS",
    title: "We always follow the best ways of logistics",
    description:
      "At Warrior Trucking, we ensure efficient, cost-effective, and secure deliveries with a seamless, expert-driven process.",
  },
  steps: [
    {
      number: 1,
      title: "Step 1: Plan & Optimize",
      description:
        "We assess your shipping needs, design tailored logistics solutions, and optimize routes for maximum efficiency.",
      image: "/images/service.png",
    },
    {
      number: 2,
      title: "Step 2: Execute & Monitor",
      description:
        "Our dedicated fleet and freight brokerage network ensure seamless transportation, while real-time tracking keeps you informed.",
      image: "/images/service.png",
    },
    {
      number: 3,
      title: "Step 3: Deliver & Support",
      description:
        "We guarantee safe, on-time deliveries with 24/7 customer support, ensuring smooth operations and customer satisfaction.",
      image: "/images/service.png",
    },
  ],
};
