import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { AboutUsContent } from "@/components/about-us-content";
import { Stats } from "@/components/stats";
import { MissionSection } from "@/components/mission-section";
import { WhyChooseUsPage } from "@/components/why-choose-us-page";
import { WorkProcess } from "@/components/work-process";
import { TestimonialSection } from "@/components/quote-testimonial";
import { defaultQuoteTestimonialConfig } from "@/components/quote-testimonial/constants";
import { CtaSection } from "@/components/cta-section";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "About Us",
          breadcrumb: {
            home: "HOME",
            current: "ABOUT US",
          },
        }}
      />
      <main className="flex-1">
        <AboutUsContent />
        <Stats />
        <MissionSection />
        <WhyChooseUsPage />
        <WorkProcess />
        <section className="py-12 lg:py-20 bg-header-teal">
          <div className="container mx-auto px-4 lg:px-6">
            <TestimonialSection config={defaultQuoteTestimonialConfig.testimonial} />
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
