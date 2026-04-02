"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Pressure Washing",
    description: "Transform your outdoor surfaces with our professional pressure washing service. Driveways, patios, decking, and walls restored to their former glory.",
    features: ["Driveways", "Patios", "Decking", "Walls"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path fill="currentColor" d="M56 8H8a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zM16 48a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm16-8H20v-4h12v4zm16 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm8-20H8V16h48v12z"/>
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 100 100" className="service-watermark">
        <path fill="#2F4B3D" d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 70c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30z"/>
        <path fill="#2F4B3D" d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"/>
        <circle fill="#2F4B3D" cx="50" cy="50" r="8"/>
      </svg>
    ),
  },
  {
    title: "Garden Maintenance",
    description: "Keep your garden looking pristine with regular maintenance. From lawn cutting to hedge trimming, we handle it all with professional care.",
    features: ["Lawn Cutting", "Hedges", "Weeding", "Borders"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path fill="currentColor" d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 42c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z"/>
        <path fill="currentColor" d="M32 20c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 100 100" className="service-watermark">
        <path fill="#2F4B3D" d="M50 5C30 5 15 20 15 35c0 10 5 18 15 25v30c0 3 2 5 5 5h30c3 0 5-2 5-5V60c10-7 15-15 15-25 0-15-15-30-35-30z"/>
        <ellipse fill="#5A9F5F" cx="50" cy="35" rx="20" ry="15"/>
        <rect fill="#5A9F5F" x="45" y="45" width="10" height="40"/>
      </svg>
    ),
  },
  {
    title: "Outdoor Clearance",
    description: "Reclaim your outdoor space with our comprehensive clearance service. We handle everything from garden waste to complete overgrowth removal.",
    features: ["Clearance", "Rubbish Removal", "Overgrowth", "Green Waste"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path fill="currentColor" d="M52 12H12c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4zm-4 32H16V20h32v24z"/>
        <path fill="currentColor" d="M24 28h16v4H24zm0 8h12v4H24z"/>
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 100 100" className="service-watermark">
        <path fill="#2F4B3D" d="M80 30H60V20c0-5.5-4.5-10-10-10s-10 4.5-10 10v10H20c-5.5 0-10 4.5-10 10v45c0 5.5 4.5 10 10 10h60c5.5 0 10-4.5 10-10V40c0-5.5-4.5-10-10-10zM45 20c0-2.8 2.2-5 5-5s5 2.2 5 5v10H45V20z"/>
        <path fill="#5A9F5F" d="M35 55l10 10 20-20-5-5-15 15-5-5z"/>
      </svg>
    ),
  },
  {
    title: "Commercial",
    description: "Professional outdoor maintenance for businesses. We keep forecourts, car parks, and commercial properties looking their best year-round.",
    features: ["Forecourts", "Car Parks", "Buildings", "Grounds"],
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path fill="currentColor" d="M52 8H12c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm-4 44H16V16h32v36z"/>
        <path fill="currentColor" d="M24 24h6v6h-6zm10 0h6v6h-6zm-10 12h6v6h-6zm10 0h6v6h-6z"/>
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 100 100" className="service-watermark">
        <path fill="#2F4B3D" d="M85 85H15V35L50 10l35 25z"/>
        <rect fill="#5A9F5F" x="35" y="50" width="30" height="35"/>
        <rect fill="white" x="25" y="40" width="15" height="15"/>
        <rect fill="white" x="60" y="40" width="15" height="15"/>
      </svg>
    ),
  },
];

export function Services() {
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
      id="services"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mb-6">
            Our Services
          </h2>
          <p className="text-lg text-dark/70 font-body">
            From driveways to gardens, we provide comprehensive outdoor services
            for residential and commercial properties across Edinburgh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-primary-green/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Watermark SVG */}
              {service.watermark}

              {/* Icon */}
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-heading font-semibold text-dark mb-4 group-hover:text-primary-green transition-colors">
                {service.title}
              </h3>
              <p className="text-dark/70 font-body mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-block px-3 py-1.5 bg-primary-green/10 text-primary-green text-sm font-mono rounded-lg group-hover:bg-primary-green group-hover:text-white transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
