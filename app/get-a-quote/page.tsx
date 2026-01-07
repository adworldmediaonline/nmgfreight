import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { GetQuote } from "@/components/get-quote";
import { CtaSection } from "@/components/cta-section";

export default function GetAQuote() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Get A Quote",
          breadcrumb: {
            home: "HOME",
            current: "GET A QUOTE",
          },
        }}
      />
      <main className="flex-1">
        <GetQuote />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

