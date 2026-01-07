import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

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
      <main className="container mx-auto px-4 py-12 lg:py-16 flex-1">
        {/* Warehouse & Storage page content */}
        <h2 className="text-3xl font-bold mb-4">Warehouse & Storage Solutions</h2>
        <p className="text-lg text-muted-foreground">
          Secure and efficient warehousing and storage facilities to meet your inventory management needs.
        </p>
      </main>
      <Footer />
    </div>
  );
}

