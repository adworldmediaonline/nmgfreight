import type { GetQuoteConfig } from "./types";

export const defaultGetQuoteConfig: GetQuoteConfig = {
  sections: {
    personalInfo: {
      label: "Personal Information",
    },
    shipmentInfo: {
      label: "Shipment Information",
    },
    goodsInfo: {
      label: "Goods Information",
    },
  },
  freightTypeOptions: [
    { value: "ltl", label: "LTL - Less Than Truckload" },
    { value: "ftl", label: "FTL - Full Truckload" },
    { value: "partial", label: "Partial Load" },
  ],
  incotermsOptions: [
    { value: "exw", label: "EXW - Ex Works" },
    { value: "fob", label: "FOB - Free On Board" },
    { value: "cif", label: "CIF - Cost, Insurance and Freight" },
    { value: "ddp", label: "DDP - Delivered Duty Paid" },
  ],
  submitLabel: "Get A Quote",
};

