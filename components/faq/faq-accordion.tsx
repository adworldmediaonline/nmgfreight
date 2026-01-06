"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "./types";

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full space-y-3", className)}
      defaultValue={items[0]?.id}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-none"
        >
          <AccordionTrigger className="group/faq-trigger bg-muted hover:bg-muted/80 data-[state=open]:bg-header-teal data-[state=open]:text-header-text-on-dark text-header-teal rounded-xl px-6 py-4 data-[state=open]:rounded-b-none transition-colors [&_[data-slot=accordion-trigger-icon]]:hidden">
            <span className="text-left font-semibold text-base lg:text-lg pr-4 flex-1">
              {item.question}
            </span>
            <div className="flex-shrink-0 ml-4">
              {/* Collapsed state - Orange plus icon in gray circle */}
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-data-[state=open]/faq-trigger:hidden">
                <Plus className="h-4 w-4 text-header-orange" />
              </div>
              {/* Expanded state - White minus icon in teal circle */}
              <div className="w-8 h-8 rounded-full bg-header-teal flex items-center justify-center hidden group-data-[state=open]/faq-trigger:flex">
                <Minus className="h-4 w-4 text-header-text-on-dark" />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-muted/50 rounded-b-xl px-6 py-4 text-muted-foreground text-sm lg:text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
