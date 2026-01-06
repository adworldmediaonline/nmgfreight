import { QuoteForm } from "./quote-form";
import { TestimonialSection } from "./testimonial-section";
import type { QuoteTestimonialConfig } from "./types";
import { defaultQuoteTestimonialConfig } from "./constants";
import { cn } from "@/lib/utils";

interface QuoteTestimonialProps {
  config?: Partial<QuoteTestimonialConfig>;
  className?: string;
}

export function QuoteTestimonial({ config: userConfig, className }: QuoteTestimonialProps) {
  const config: QuoteTestimonialConfig = {
    ...defaultQuoteTestimonialConfig,
    ...userConfig,
    form: {
      ...defaultQuoteTestimonialConfig.form,
      ...userConfig?.form,
    },
    testimonial: {
      ...defaultQuoteTestimonialConfig.testimonial,
      ...userConfig?.testimonial,
      testimonials: userConfig?.testimonial?.testimonials ?? defaultQuoteTestimonialConfig.testimonial.testimonials,
    },
  };

  return (
    <section className={cn("relative w-full py-12 lg:py-20 bg-background", className)}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative">
          {/* Background Section - Teal background covering full width */}
          <div className="absolute inset-0 bg-header-teal rounded-2xl lg:rounded-3xl" />

          {/* Content Container */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-8">
            {/* Left Side - Quote Form (Overlay on teal background) */}
            <div className="relative z-20">
              <QuoteForm config={config.form} />
            </div>

            {/* Right Side - Testimonial */}
            <div className="relative z-10">
              <TestimonialSection config={config.testimonial} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { QuoteForm } from "./quote-form";
export { TestimonialSection } from "./testimonial-section";
