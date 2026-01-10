import type { ContactUsConfig } from "./types";

export const defaultContactUsConfig: ContactUsConfig = {
  cards: [
    {
      id: "email",
      title: "Send Us Mail",
      icon: "mail",
      details: "info@nmgfreight.com",
    },
    {
      id: "phone",
      title: "Call Us Anytime",
      icon: "phone",
      details: ["+1 3313286900"],
    },
    {
      id: "location",
      title: "Visit Our Office",
      icon: "location",
      details: "3519 MATAPAN CRES VANCOUVER BC V5M 4A9 CANADA",
    },
  ],
  form: {
    title: "Drop Us A Line",
    description: [
      "For any inquiries, questions, or partnership opportunities, please feel free to reach out to us.",
      "We are here to address your freight transportation and logistics needs.",
    ],
    submitLabel: "Submit",
  },
};

