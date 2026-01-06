import type { FaqConfig } from "./types";

export const defaultFaqConfig: FaqConfig = {
  header: {
    label: "FREQUENTLY ASKED QUESTIONS",
    title: "Do you have any question? Find answer here",
    description:
      "Got questions? We've got answers! Explore our FAQs to learn more about our services, delivery process, and support.",
  },
  items: [
    {
      id: "services",
      question: "What services does Warrior Trucking offer?",
      answer:
        "We specialize in freight transportation, logistics solutions, and supply chain management, including intermodal, flatbed, and container freight.",
    },
    {
      id: "deliveries",
      question: "How do you ensure on-time deliveries?",
      answer:
        "We use advanced tracking systems, maintain a reliable fleet, and work with experienced drivers to ensure timely deliveries. Our real-time monitoring allows us to proactively address any potential delays.",
    },
    {
      id: "brokerage",
      question: "Do you provide freight brokerage services?",
      answer:
        "Yes, we offer comprehensive freight brokerage services, connecting shippers with reliable carriers to optimize your logistics operations and reduce costs.",
    },
    {
      id: "support",
      question: "Is customer support available 24/7?",
      answer:
        "Absolutely! Our customer support team is available 24/7 to assist you with any questions, concerns, or urgent shipping needs. You can reach us via phone, email, or our online chat.",
    },
  ],
};
