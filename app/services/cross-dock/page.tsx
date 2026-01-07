import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { CrossDockServices } from "@/components/cross-dock-services";
import { CtaSection } from "@/components/cta-section";

export default function CrossDockServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Cross-Dock Services",
          breadcrumb: {
            home: "HOME",
            current: "CROSS-DOCK SERVICES",
          },
        }}
      />
      <main className="flex-1">
        <CrossDockServices />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

