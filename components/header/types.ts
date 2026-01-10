export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface ContactInfo {
  email: string;
  address: string;
  phone: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface HeaderConfig {
  navigationItems: NavigationItem[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  logo: {
    brandName: string;
    href?: string;
    imageSrc?: string;
  };
}

