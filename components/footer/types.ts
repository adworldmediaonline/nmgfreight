export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContactInfo {
  email: string;
  phone: string[];
  address: string;
}

export interface FooterBrand {
  brandName: string;
  missionStatement: string;
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface FooterConfig {
  brand: FooterBrand;
  columns: FooterColumn[];
  contactInfo: FooterContactInfo;
  copyright: string;
}

