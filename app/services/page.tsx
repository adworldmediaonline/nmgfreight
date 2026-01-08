import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Services } from "@/components/services";
import { CtaSection } from "@/components/cta-section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Services",
          breadcrumb: {
            home: "HOME",
            current: "SERVICES",
          },
        }}
      />
      <main className="flex-1">
        <Services />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
