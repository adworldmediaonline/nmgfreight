import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { WarehouseServices } from "@/components/warehouse-services";
import { CtaSection } from "@/components/cta-section";

export default function WarehouseStorage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Warehouse & Storage",
          breadcrumb: {
            home: "HOME",
            current: "WAREHOUSE & STORAGE",
          },
        }}
      />
      <main className="flex-1">
        <WarehouseServices />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

