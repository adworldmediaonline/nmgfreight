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
      details: ["(630)-544-1019", "(630)-943-2246"],
    },
    {
      id: "location",
      title: "Visit Our Office",
      icon: "location",
      details: "900 Paramount Pkwy, 60510",
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

