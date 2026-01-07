import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactCard as ContactCardType } from "./types";

interface ContactCardProps {
  card: ContactCardType;
  className?: string;
}

const iconMap = {
  mail: Mail,
  phone: Phone,
  location: MapPin,
};

export function ContactCard({ card, className }: ContactCardProps) {
  const IconComponent = iconMap[card.icon];

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <Image
          src={card.imageSrc}
          alt={card.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 flex-1 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-header-orange rounded-lg flex items-center justify-center">
            <IconComponent className="h-6 w-6 lg:h-7 lg:w-7 text-header-text-on-dark" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
          {card.title}
        </h3>

        {/* Details */}
        <div className="space-y-1">
          {Array.isArray(card.details) ? (
            card.details.map((detail, index) => (
              <p
                key={index}
                className="text-base lg:text-lg text-muted-foreground"
              >
                {detail}
              </p>
            ))
          ) : (
            <p className="text-base lg:text-lg text-muted-foreground">
              {card.details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

