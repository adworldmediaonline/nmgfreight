import type { ContactUsConfig } from "./types";

export const defaultContactUsConfig: ContactUsConfig = {
  cards: [
    {
      id: "email",
      title: "Send Us Mail",
      icon: "mail",
      details: "info@nmgfreight.com",
      imageSrc: "/images/service.png",
      imageAlt: "Send us mail",
    },
    {
      id: "phone",
      title: "Call Us Anytime",
      icon: "phone",
      details: ["(630)-544-1019", "(630)-943-2246"],
      imageSrc: "/images/service.png",
      imageAlt: "Call us anytime",
    },
    {
      id: "location",
      title: "Visit Our Office",
      icon: "location",
      details: "900 Paramount Pkwy, 60510",
      imageSrc: "/images/service.png",
      imageAlt: "Visit our office",
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

