import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { TruckingServices } from "@/components/trucking-services";
import { CtaSection } from "@/components/cta-section";

export default function TruckingServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Trucking Services",
          breadcrumb: {
            home: "HOME",
            current: "TRUCKING SERVICES",
          },
        }}
      />
      <main className="flex-1">
        <TruckingServices />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

