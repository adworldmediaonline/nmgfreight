import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function Shipping() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Shipping",
          breadcrumb: {
            home: "HOME",
            current: "SHIPPING",
          },
        }}
      />
      <main className="flex-1">
        <section className="py-12 lg:py-16 xl:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                    At NMG Freight, we provide reliable and efficient shipping services nationwide. This page outlines our shipping policies, procedures, and what you can expect when working with us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Shipping Services
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We offer comprehensive shipping solutions including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Full Truckload (FTL) and Less Than Truckload (LTL) services</li>
                    <li>Expedited and standard shipping options</li>
                    <li>Nationwide coverage</li>
                    <li>Specialized handling for fragile, hazardous, or oversized cargo</li>
                    <li>Cross-docking and warehousing services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Shipping Process
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        1. Request a Quote
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Contact us with your shipping requirements, including origin, destination, cargo type, and preferred delivery date. We'll provide you with a competitive quote.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        2. Schedule Pickup
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Once you accept the quote, we'll coordinate pickup times that work best for your schedule. Our team will confirm all details before dispatch.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        3. Transportation
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Your cargo is loaded and transported safely by our experienced drivers using modern, well-maintained equipment. You can track your shipment in real-time.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        4. Delivery
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        We coordinate delivery with the recipient and provide proof of delivery documentation upon completion.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Transit Times
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Transit times vary based on distance, service type, and route. Typical transit times:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li><strong>Local/Regional:</strong> 1-2 business days</li>
                    <li><strong>Regional:</strong> 2-4 business days</li>
                    <li><strong>Long Distance:</strong> 5-7 business days</li>
                    <li><strong>Expedited:</strong> Available upon request with faster delivery options</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Packaging Requirements
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    To ensure safe transportation, please ensure your cargo is:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Properly packaged and secured</li>
                    <li>Labeled clearly with destination information</li>
                    <li>Compliant with applicable regulations</li>
                    <li>Prepared for handling and loading</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Tracking and Updates
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We provide real-time tracking for all shipments. You'll receive updates via email or SMS, and you can track your shipment status through our online portal or by contacting our customer service team.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Insurance and Claims
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    While we take every precaution to protect your cargo, we recommend maintaining adequate insurance coverage. Additional insurance options are available. In the event of damage or loss:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Report any issues immediately upon delivery</li>
                    <li>File a claim within the timeframe specified in your service agreement</li>
                    <li>Provide documentation and photos if available</li>
                    <li>Our claims team will investigate and respond promptly</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Prohibited Items
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    The following items are prohibited from shipment:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Hazardous materials without proper documentation</li>
                    <li>Illegal substances or contraband</li>
                    <li>Perishable items without proper temperature control</li>
                    <li>Items that violate local, state, or federal regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    Contact Us
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    For shipping inquiries, quotes, or support, please contact us:
                  </p>
                  <div className="mt-4 space-y-2 text-base text-muted-foreground">
                    <p>
                      <strong>Email:</strong> info@nmgfreight.com
                    </p>
                    <p>
                      <strong>Phone:</strong> (630)-544-1019
                    </p>
                    <p>
                      <strong>Address:</strong> 900 Paramount Pkwy, 60510
                    </p>
                    <p className="mt-4">
                      <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM CST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

