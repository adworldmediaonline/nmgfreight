import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function TruckingServices() {
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
      <main className="container mx-auto px-4 py-12 lg:py-16 flex-1">
        {/* Trucking Services page content */}
        <h2 className="text-3xl font-bold mb-4">Professional Trucking Services</h2>
        <p className="text-lg text-muted-foreground">
          Our comprehensive trucking services ensure reliable and efficient transportation solutions for your freight needs.
        </p>
      </main>
      <Footer />
    </div>
  );
}

