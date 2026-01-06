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
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold mb-4">Welcome to NMG Freight</h1>
        <p className="text-lg text-muted-foreground">
          Your logistics partner in Chicagoland.
        </p>
      </main>
      <Footer />
    </div>
  );
}
