import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | aancu - Edinburgh Outdoor Services",
  description: "Terms of service for aancu outdoor services. Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-8">
            Terms of Service
          </h1>
          <p className="text-dark/60 font-body mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-lg max-w-none font-body text-dark/80 space-y-10">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Our services</h2>
              <p>
                aancu provides outdoor cleaning, garden maintenance and clearance services in
                Edinburgh and surrounding areas. All work is agreed in advance of any visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Quotes & booking</h2>
              <p>
                All quotes are free and without obligation. A confirmed booking is an agreement
                to proceed at the quoted price. We reserve the right to adjust a quote if the
                scope of work differs significantly from what was described at enquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Payment</h2>
              <p>
                Payment is due on completion of work for residential jobs unless otherwise agreed
                in writing. Commercial clients may be invoiced on agreed terms. We accept cash,
                bank transfer, credit card and contactless. Invoices are issued promptly after each job.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Cancellations</h2>
              <p>
                We ask for at least 24 hours notice for cancellations or rescheduling. We reserve
                the right to charge a small cancellation fee for same-day cancellations where
                materials or equipment have already been arranged.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Liability</h2>
              <p>
                We take care with all work. In the unlikely event of damage caused directly by
                our negligence, we will discuss and resolve the matter in good faith. We are not
                liable for pre-existing damage, structural issues or damage caused by factors
                outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Your responsibilities</h2>
              <p>
                You agree to provide accurate information about the job and ensure safe access
                to the work area. Any hazards should be disclosed prior to work commencing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">Governing law</h2>
              <p>
                These terms are governed by the laws of Scotland. Any disputes will be subject
                to Scottish jurisdiction. Services are provided by Stane & Lea Ltd T/A aancu,
                registered in Scotland (SC879552). Registered office: Third Floor, 3 Hill Street,
                New Town, Edinburgh, EH2 3JP.
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
