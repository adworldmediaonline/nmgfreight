import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function CrossDockServices() {
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
      <main className="container mx-auto px-4 py-12 lg:py-16 flex-1">
        {/* Cross-Dock Services page content */}
        <h2 className="text-3xl font-bold mb-4">Cross-Dock Services</h2>
        <p className="text-lg text-muted-foreground">
          Streamlined cross-docking solutions to reduce handling time and improve supply chain efficiency.
        </p>
      </main>
      <Footer />
    </div>
  );
}

