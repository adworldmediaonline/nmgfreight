import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ContactUs } from "@/components/contact-us";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Contact Us",
          breadcrumb: {
            home: "HOME",
            current: "CONTACT US",
          },
        }}
      />
      <main className="flex-1">
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

