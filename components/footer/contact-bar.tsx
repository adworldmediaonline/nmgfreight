"use client";

import { MailIcon, PhoneIcon, MapPinIcon, ArrowUpIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { FooterContactInfo } from "./types";

interface ContactBarProps {
  contactInfo: FooterContactInfo;
  copyright: string;
  className?: string;
}

export function ContactBar({
  contactInfo,
  copyright,
  className,
}: ContactBarProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`bg-header-teal border-t border-header-text-on-dark/10 ${className}`}>
      <div className="container mx-auto px-4 py-4 lg:py-6">
        {/* Contact Information Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6 mb-4">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base">
            {/* Email */}
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-header-orange" />
              <span className="text-header-text-on-dark font-semibold">
                E-MAIL US:
              </span>
              <span className="text-header-text-on-dark">{contactInfo.email}</span>
            </div>

            <Separator
              orientation="vertical"
              className="hidden lg:block h-4 bg-header-text-on-dark/20"
            />

            {/* Phone */}
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-header-orange" />
              <span className="text-header-text-on-dark font-semibold">
                SUPPORT 24/7:
              </span>
              {contactInfo.phone.map((phone, index) => {
                const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;
                return (
                  <span key={index}>
                    <a
                      href={phoneHref}
                      className="text-header-text-on-dark hover:text-header-orange transition-colors"
                    >
                      {phone}
                    </a>
                    {index < contactInfo.phone.length - 1 && ", "}
                  </span>
                );
              })}
            </div>

            <Separator
              orientation="vertical"
              className="hidden lg:block h-4 bg-header-text-on-dark/20"
            />

            {/* Address */}
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-header-orange" />
              <span className="text-header-text-on-dark font-semibold">
                Location:
              </span>
              <span className="text-header-text-on-dark">{contactInfo.address}</span>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="bg-header-text-on-dark/10 hover:bg-header-text-on-dark/20 text-header-text-on-dark w-10 h-10 lg:w-12 lg:h-12 rounded-md"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between pt-4 border-t border-header-text-on-dark/10">
          <p className="text-header-text-on-dark text-xs lg:text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </div>
  );
}

