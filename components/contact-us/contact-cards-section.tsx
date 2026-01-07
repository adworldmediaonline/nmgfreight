import { ContactCard } from "./contact-card";
import type { ContactUsConfig } from "./types";

interface ContactCardsSectionProps {
  cards: ContactUsConfig["cards"];
  className?: string;
}

export function ContactCardsSection({
  cards,
  className,
}: ContactCardsSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

