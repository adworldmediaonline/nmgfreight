import { Header } from "@/components/header";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header className="sticky top-0 z-50 w-full" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to NMG Freight</h1>
        <p className="text-lg text-muted-foreground">
          Your logistics partner in Chicagoland.
        </p>
      </main>
    </div>
  );
}
