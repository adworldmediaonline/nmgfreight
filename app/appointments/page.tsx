import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Appointments } from "@/components/appointments";

export default function AppointmentsPage() {
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
      <main className="flex-1">
        <Appointments />
      </main>
      <Footer />
    </div>
  );
}

