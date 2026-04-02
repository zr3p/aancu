import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | aaaaa - Edinburgh Outdoor Services",
  description: "Privacy policy for aaaaa outdoor services. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-8">
            Privacy Policy
          </h1>
          <p className="text-dark/60 font-body mb-12">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none font-body text-dark/80">
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                When you use our services or contact us, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact details (email, phone number)</li>
                <li>Address and property details for service delivery</li>
                <li>Service preferences and requirements</li>
                <li>Communication history with our team</li>
                <li>Website usage data (via analytics)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our outdoor services</li>
                <li>Communicate with you about your enquiries and bookings</li>
                <li>Send you quotes and service-related updates</li>
                <li>Process payments and manage accounts</li>
                <li>Analyse website usage to improve our services</li>
                <li>Send marketing communications (only with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                3. Data Protection
              </h2>
              <p className="mb-4">
                We take the security of your data seriously. We implement appropriate technical
                and organisational measures to protect your personal information against unauthorised
                access, alteration, disclosure, or destruction.
              </p>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third
                parties without your consent, except where necessary to provide our services or
                as required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                4. Cookies and Analytics
              </h2>
              <p className="mb-4">
                We use privacy-focused analytics (Umami) to understand how visitors use our website.
                This service does not use cookies and does not collect personally identifiable information.
              </p>
              <p>
                We may use essential cookies to ensure the proper functioning of our website.
                These cookies do not track you across other websites.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4">
                Under data protection law, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or how we handle your data,
                please contact us at{" "}
                <a
                  href="mailto:hello@aaaaa.com"
                  className="text-primary-green hover:text-secondary-green transition-colors"
                >
                  hello@aaaaa.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
