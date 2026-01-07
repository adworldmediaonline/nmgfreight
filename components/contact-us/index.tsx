import { ContactCardsSection } from "./contact-cards-section";
import { ContactForm } from "./contact-form";
import type { ContactUsConfig } from "./types";
import { defaultContactUsConfig } from "./constants";

interface ContactUsProps {
  config?: Partial<ContactUsConfig>;
  className?: string;
}

export function ContactUs({
  config: userConfig,
  className,
}: ContactUsProps) {
  const config: ContactUsConfig = {
    ...defaultContactUsConfig,
    ...userConfig,
    cards: userConfig?.cards ?? defaultContactUsConfig.cards,
    form: userConfig?.form ?? defaultContactUsConfig.form,
  };

  return (
    <div className={className}>
      {/* Contact Cards Section */}
      <ContactCardsSection cards={config.cards} />

      {/* Contact Form Section */}
      <section className="py-12 lg:py-16 xl:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <ContactForm config={config.form} />
          </div>
        </div>
      </section>
    </div>
  );
}

// Export sub-components for advanced composition
export { ContactCardsSection } from "./contact-cards-section";
export { ContactCard } from "./contact-card";
export { ContactForm } from "./contact-form";
export type { ContactUsConfig, ContactFormData } from "./types";
export type { ContactCard as ContactCardType } from "./types";
export { defaultContactUsConfig } from "./constants";

