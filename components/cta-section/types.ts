export interface CtaButton {
  phoneNumber: string;
  href?: string;
}

export interface CtaConfig {
  headline: string;
  description: string;
  button: CtaButton;
}
