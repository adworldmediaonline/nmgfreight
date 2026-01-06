import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CtaSection } from "@/components/cta-section";
import { WorkProcess } from "@/components/work-process";
import { QuoteTestimonial } from "@/components/quote-testimonial";
import { Faq } from "@/components/faq";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <WorkProcess />
      <CtaSection />
      <QuoteTestimonial />
      <Faq />

      <Footer />
    </div>
  );
}
