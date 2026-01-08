import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header className="sticky top-0 z-50 w-full" />
      <PageHeader
        config={{
          title: "Privacy Policy",
          breadcrumb: {
            home: "HOME",
            current: "PRIVACY POLICY",
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
                    At NMG Freight, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Business information and shipping details</li>
                    <li>Payment information and billing details</li>
                    <li>Communications and correspondence with us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    3. Information Sharing and Disclosure
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>With service providers who assist us in operating our business</li>
                    <li>To comply with legal obligations or protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    5. Your Rights
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate or incomplete data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Request restriction of processing your personal information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    6. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    7. Changes to This Privacy Policy
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-header-teal mb-4">
                    8. Contact Us
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
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

