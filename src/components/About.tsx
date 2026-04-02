"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Coverage Area",
    value: "EH1-EH30",
    description: "All across Edinburgh",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Equipment",
    value: "Pro Kit",
    description: "Commercial-grade gear",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Scheduling",
    value: "Flexible",
    description: "Book at your convenience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Pricing",
    value: "No Fuss",
    description: "Straightforward quotes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 topo-pattern opacity-30" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase">
                About aancu
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark">
                Local, reliable,{" "}
                <span className="text-primary-green">no nonsense.</span>
              </h2>
            </div>

            <div className="space-y-6 text-dark/70 font-body text-lg leading-relaxed">
              <p>
                aancu is a small Edinburgh-based outdoor services business. We keep things
                simple: show up, do excellent work, leave your space better than we found it.
              </p>
              <p>
                We use professional-grade equipment — so you get commercial results without
                paying commercial prices. No subcontractors, no surprises.
              </p>
              <p>
                Happy to do one-off jobs or regular maintenance. Just get in touch and
                we'll sort something that works for you.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center text-primary-green font-body font-medium hover:text-secondary-green transition-colors group"
            >
              Get in touch
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-4 lg:gap-6 ${isVisible ? "animate-fade-in animation-delay-400" : "opacity-0"}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary-green/10 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center mb-4 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-xs text-dark/50 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-2xl lg:text-3xl font-heading font-bold text-primary-green">
                    {stat.value}
                  </p>
                  <p className="text-sm text-dark/60 font-body">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}