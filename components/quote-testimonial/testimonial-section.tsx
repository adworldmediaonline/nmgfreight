"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { QuoteTestimonialConfig } from "./types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface TestimonialSectionProps {
  config: QuoteTestimonialConfig["testimonial"];
  className?: string;
}

export function TestimonialSection({ config, className }: TestimonialSectionProps) {

  return (
    <div className={cn("relative", className)}>
      <div className="relative z-10">
        {/* Label */}
        <div className="mb-4">
          <span className="bg-header-orange text-header-text-on-dark px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block">
            {config.label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-header-text-on-dark mb-4">
          {config.title}
        </h2>

        {/* Description */}
        <p className="text-base lg:text-lg text-header-text-on-dark/90 mb-8 leading-relaxed">
          {config.description}
        </p>

        {/* Testimonial Swiper */}
        <div className="mb-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {config.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-header-teal/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 border-2 border-header-text-on-dark/20 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4">
                    <Quote className="h-12 w-12 text-header-orange opacity-50" />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-header-orange overflow-hidden bg-header-text-on-dark/20 flex items-center justify-center">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-header-text-on-dark text-xl font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <p className="text-base lg:text-lg text-header-text-on-dark leading-relaxed">
                        {testimonial.text}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-header-text-on-dark/80">Rating:</span>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-header-orange text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="text-right lg:text-left">
                        <p className="font-semibold text-header-text-on-dark">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-header-text-on-dark/80">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="testimonial-prev text-header-text-on-dark hover:bg-header-text-on-dark/10 rounded-lg px-4 py-2 flex items-center gap-2 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Prev</span>
          </button>

          <div className="h-px w-12 bg-header-text-on-dark/30" />

          <button
            type="button"
            className="testimonial-next text-header-text-on-dark hover:bg-header-text-on-dark/10 rounded-lg px-4 py-2 flex items-center gap-2 transition-colors"
            aria-label="Next testimonial"
          >
            <span>Next</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
