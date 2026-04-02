import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | aancu - Edinburgh Outdoor Services",
  description: "Privacy policy for aancu outdoor services. Learn how we collect, use, and protect your personal information.",
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
            Last updated: January 2026
          </p>

          <div className="prose prose-lg max-w-none font-body text-dark/80 space-y-10">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Who we are</h2>
              <p>
                aancu is the trading name of Stane & Lea Ltd, registered in Scotland (SC879552).
                Our website is aancu.com. Contact:{" "}
                <a href="mailto:hello@aancu.com" className="text-primary-green hover:text-secondary-green transition-colors">
                  hello@aancu.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">What data we collect</h2>
              <p>
                When you submit an enquiry or subscribe, we collect your name, email address,
                and any details you provide. We do not collect payment data or sensitive personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">How we use your data</h2>
              <p>
                We use your data only to respond to your enquiry or to send occasional updates
                if you subscribe. We do not sell, rent or share your data with third parties
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Data storage</h2>
              <p>
                Enquiry and subscriber data is stored securely on our private server infrastructure.
                We retain data for up to 2 years or until you request deletion, whichever is sooner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Analytics</h2>
              <p>
                We use Umami Analytics, a privacy-friendly, cookieless tool hosted on our own server.
                It does not track individuals and does not share data with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Your rights</h2>
              <p>
                Under UK GDPR you have the right to access, correct or delete your personal data.
                Email us and we will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Cookies</h2>
              <p>
                We do not use cookies for tracking or advertising. Our analytics tool is cookieless.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-primary-green hover:text-secondary-green transition-colors font-body">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
