export interface GetQuoteFormData {
  // Personal Information
  name: string;
  email: string;
  phone: string;

  // Shipment Information
  freightType: string;
  departureCity: string;
  destinationCity: string;

  // Goods Information
  incoterms: string;
  weight: string;
  height: string;
  width: string;
  length: string;
  serviceOption: string;
}

export interface GetQuoteConfig {
  sections: {
    personalInfo: {
      label: string;
    };
    shipmentInfo: {
      label: string;
    };
    goodsInfo: {
      label: string;
    };
  };
  freightTypeOptions: { value: string; label: string }[];
  incotermsOptions: { value: string; label: string }[];
  submitLabel: string;
}

