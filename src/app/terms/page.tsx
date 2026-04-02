import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | aaaaa - Edinburgh Outdoor Services",
  description: "Terms of service for aaaaa outdoor services. Read our terms and conditions for using our services.",
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
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none font-body text-dark/80">
            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                1. Services
              </h2>
              <p className="mb-4">
                aaaaa provides outdoor services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pressure washing (driveways, patios, decking, walls)</li>
                <li>Garden maintenance (lawn cutting, hedge trimming, weeding)</li>
                <li>Outdoor clearance (garden waste removal, overgrowth clearing)</li>
                <li>Commercial outdoor services</li>
              </ul>
              <p className="mt-4">
                We serve the Edinburgh area, covering postcodes EH1 to EH30.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                2. Quotes and Pricing
              </h2>
              <p className="mb-4">
                All quotes are provided free of charge and without obligation. Quotes are valid
                for 30 days from the date of issue unless otherwise stated.
              </p>
              <p className="mb-4">
                Prices quoted are based on the information provided and may be subject to
                adjustment if the actual scope of work differs from what was described.
              </p>
              <p>
                We reserve the right to adjust pricing if access issues, weather conditions,
                or other unforeseen circumstances affect the work required.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                3. Bookings and Cancellations
              </h2>
              <p className="mb-4">
                Bookings are confirmed upon acceptance of our quote. We aim to provide flexible
                scheduling to accommodate your needs.
              </p>
              <p className="mb-4">
                If you need to cancel or reschedule, please provide at least 24 hours notice.
                Cancellations with less than 24 hours notice may incur a cancellation fee.
              </p>
              <p>
                We reserve the right to reschedule work due to adverse weather conditions or
                other circumstances beyond our control.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                4. Payment
              </h2>
              <p className="mb-4">
                Payment terms will be agreed upon booking confirmation. For most residential
                services, payment is due upon completion of the work.
              </p>
              <p>
                For larger projects or commercial contracts, we may require a deposit or
                agree alternative payment schedules.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                5. Liability
              </h2>
              <p className="mb-4">
                We carry appropriate public liability insurance for all work undertaken.
              </p>
              <p className="mb-4">
                While we take great care in all our work, we cannot be held responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-existing damage or defects not visible before work commenced</li>
                <li>Damage caused by third parties</li>
                <li>Normal wear and weathering after services are completed</li>
                <li>Any issues arising from customer-supplied materials or instructions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                6. Customer Responsibilities
              </h2>
              <p className="mb-4">
                Customers are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring safe access to the work area</li>
                <li>Removing or securing valuables and delicate items</li>
                <li>Informing us of any hazards or special considerations</li>
                <li>Ensuring parking is available for our vehicles</li>
                <li>Providing access to water and electricity where required</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                7. Satisfaction Guarantee
              </h2>
              <p>
                We take pride in our work and aim for complete customer satisfaction. If you
                are not happy with any aspect of our service, please contact us within 48 hours
                of completion so we can address your concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                8. Contact
              </h2>
              <p>
                For any questions about these terms, please contact us at{" "}
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
