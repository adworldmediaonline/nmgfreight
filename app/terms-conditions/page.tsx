import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Terms & Conditions",
          breadcrumb: {
            home: "HOME",
            current: "TERMS & CONDITIONS",
          },
        }}
      />
      <main className="flex-1">
        <section className="py-12 lg:py-16 xl:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Last Updated: January 2025
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                    Please read these Terms and Conditions carefully before using NMG Freight's services. By accessing or using our services, you agree to be bound by these Terms and Conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    By accessing and using NMG Freight's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    2. Services Description
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    NMG Freight provides freight transportation, warehousing, logistics, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    You agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Provide accurate and complete information when using our services</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for any illegal or unauthorized purpose</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    4. Payment Terms
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    Payment terms are as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>All fees are due according to the terms specified in your service agreement</li>
                    <li>Late payments may result in additional fees or service suspension</li>
                    <li>We reserve the right to change our pricing with reasonable notice</li>
                    <li>Refunds are subject to our refund policy as outlined in your service agreement</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    5. Liability and Limitations
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    NMG Freight's liability is limited as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>We are not liable for delays caused by circumstances beyond our control</li>
                    <li>Our liability for loss or damage is limited as per applicable transportation laws</li>
                    <li>We are not responsible for indirect, incidental, or consequential damages</li>
                    <li>All claims must be filed within the timeframes specified in your service agreement</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    6. Insurance and Cargo Protection
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    While we take all reasonable precautions to protect your cargo, we recommend that you maintain adequate insurance coverage for your shipments. Additional insurance options may be available upon request.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    7. Intellectual Property
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    All content, trademarks, logos, and intellectual property on our website are the property of NMG Freight or our licensors. You may not use, reproduce, or distribute any content without our prior written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    8. Termination
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    9. Governing Law
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    These Terms and Conditions shall be governed by and construed in accordance with applicable local laws, without regard to conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms and Conditions at any time. We will notify users of any material changes by posting the new Terms and Conditions on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    11. Contact Information
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us:
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

