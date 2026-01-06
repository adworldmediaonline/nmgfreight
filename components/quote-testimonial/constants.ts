import type { QuoteTestimonialConfig } from "./types";

export const defaultQuoteTestimonialConfig: QuoteTestimonialConfig = {
  form: {
    title: "Request Quote Form",
    personalInfoLabel: "Personal Information",
    freightTypeLabel: "Freight Type",
    buttonLabel: "Get A Quote",
    phoneNumber: "(630)-544-1019",
    supportText: "The Support Centre Is Available 24/7",
    incotermsOptions: [
      { value: "exw", label: "EXW - Ex Works" },
      { value: "fob", label: "FOB - Free On Board" },
      { value: "cif", label: "CIF - Cost, Insurance and Freight" },
      { value: "ddp", label: "DDP - Delivered Duty Paid" },
    ],
    loadOptions: [
      { value: "ltl", label: "LTL - Less Than Truckload" },
      { value: "ftl", label: "FTL - Full Truckload" },
      { value: "partial", label: "Partial Load" },
    ],
  },
  testimonial: {
    label: "TESTIMONIAL",
    title: "What our clients say about our service",
    description:
      "We take pride in delivering exceptional service and reliable transportation solutions. Here's what our satisfied customers have to say about their experience with Warrior Trucking.",
    testimonials: [
      {
        id: "1",
        name: "Emily W.",
        title: "Customer",
        text: "Safe and secure transportation! We trust them for all our freight and logistics needs. Their handling of cargo is top-notch, ensuring our goods arrive in perfect condition every time.",
        rating: 5,
      },
      {
        id: "2",
        name: "Rachel Ballinger",
        title: "CEO, Bizzbreak Inc.",
        text: "Reliable and efficient service! Our shipments always arrive on time, and the real-time tracking keeps us informed at every step. Warrior Trucking has truly made our logistics hassle-free.",
        rating: 5,
      },
      {
        id: "3",
        name: "Michael Chen",
        title: "Operations Manager",
        text: "Outstanding customer service and competitive pricing. They've become our go-to logistics partner for all our shipping needs. Highly recommended!",
        rating: 5,
      },
    ],
  },
};
