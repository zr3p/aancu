"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "pressure-washing", label: "Pressure Washing" },
  { value: "garden-maintenance", label: "Garden Maintenance" },
  { value: "outdoor-clearance", label: "Outdoor Clearance" },
  { value: "commercial", label: "Commercial Services" },
  { value: "other", label: "Other" },
];

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Email obfuscation
    const emailParts = ["hello", "@", "aaaaa", ".", "com"];
    setEmail(emailParts.join(""));

    // Phone obfuscation
    const phoneParts = ["0131", " ", "123", " ", "4567"];
    setPhone(phoneParts.join(""));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);

    // Check honeypot field
    if (formData.get("website")) {
      setFormStatus("error");
      return;
    }

    // Simulate API call (replace with actual API endpoint)
    try {
      // In production, this would be:
      // await fetch('https://ipa.xxxxx.org/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(Object.fromEntries(formData)),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormStatus("error");
    }
  };

  const handleNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setNewsletterStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setNewsletterStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mb-6">
            Ready to transform your{" "}
            <span className="text-primary-green">outdoor space</span>?
          </h2>
          <p className="text-lg text-dark/70 font-body">
            Get a free, no-obligation quote for your project. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-sm">
              <h3 className="text-xl font-heading font-semibold text-dark mb-6">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body font-medium text-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-dark placeholder:text-dark/40 focus:border-primary-green transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-medium text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-dark placeholder:text-dark/40 focus:border-primary-green transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-body font-medium text-dark mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-dark focus:border-primary-green transition-colors bg-white"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-dark placeholder:text-dark/40 focus:border-primary-green transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full md:w-auto px-8 py-4 bg-primary-green text-white font-body font-medium rounded-lg hover:bg-secondary-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <p className="text-secondary-green font-body flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thank you! We'll be in touch soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-500 font-body flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-up animation-delay-400" : "opacity-0"}`}>
            {/* Contact Details */}
            <div className="bg-primary-green rounded-2xl p-8 text-white">
              <h3 className="text-xl font-heading font-semibold mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 hover:text-secondary-green transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-body">{email || "Loading..."}</span>
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-secondary-green transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-body">{phone || "Loading..."}</span>
                </a>
                <a
                  href="https://wa.me/44123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-secondary-green transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="font-body">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold text-dark mb-3">
                Stay Updated
              </h3>
              <p className="text-dark/60 font-body text-sm mb-6">
                Get tips and updates on outdoor maintenance delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletter} className="space-y-4">
                <input
                  type="email"
                  name="newsletter_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-dark placeholder:text-dark/40 focus:border-primary-green transition-colors"
                  placeholder="your@email.com"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="w-full px-6 py-3 bg-primary-green text-white font-body font-medium rounded-lg hover:bg-secondary-green transition-colors disabled:opacity-50"
                >
                  {newsletterStatus === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>
                {newsletterStatus === "success" && (
                  <p className="text-secondary-green text-sm font-body">
                    Thanks for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
