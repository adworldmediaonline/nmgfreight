import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function Appointments() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Appointments",
          breadcrumb: {
            home: "HOME",
            current: "APPOINTMENTS",
          },
        }}
      />
      <main className="container mx-auto px-4 py-12 lg:py-16 flex-1">
        {/* Page content will go here */}
      </main>
      <Footer />
    </div>
  );
}

