import type { QuoteTestimonialConfig } from "./types";

export const defaultQuoteTestimonialConfig: QuoteTestimonialConfig = {
  form: {
    title: "Request Quote Form",
    personalInfoLabel: "Personal Information",
    freightTypeLabel: "Freight Type",
    buttonLabel: "Get A Quote",
    phoneNumber: "+1 3313286900",
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
    title: "Trusted by Businesses Nationwide",
    description:
      "Our commitment to excellence has earned the trust of companies across various industries. Here's what our clients say about working with NMG Freight.",
    testimonials: [
      {
        id: "1",
        name: "Sarah Johnson",
        title: "Supply Chain Director",
        text: "NMG Freight has been instrumental in streamlining our logistics operations. Their attention to detail and reliable service ensures our products reach customers on time, every time. Highly professional team!",
        rating: 5,
      },
      {
        id: "2",
        name: "David Martinez",
        title: "Operations Manager",
        text: "We've been working with NMG Freight for over two years, and they consistently deliver exceptional service. Their real-time tracking and proactive communication make logistics management effortless.",
        rating: 5,
      },
      {
        id: "3",
        name: "Jennifer Thompson",
        title: "Business Owner",
        text: "The team at NMG Freight understands our business needs and provides customized solutions that work perfectly for us. Their competitive rates and reliable delivery have made them our preferred logistics partner.",
        rating: 5,
      },
    ],
  },
};
