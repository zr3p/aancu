"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const stackedImages = [
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    alt: "Clean driveway after pressure washing",
    tag: "Pressure Washing",
    href: "/projects/pressure-washing/",
    rotation: -6,
    zIndex: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop",
    alt: "Beautiful maintained garden",
    tag: "Garden Care",
    href: "/projects/garden-maintenance/",
    rotation: 3,
    zIndex: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&h=400&fit=crop",
    alt: "Outdoor space clearance",
    tag: "Clearance",
    href: "/projects/outdoor-clearance/",
    rotation: -2,
    zIndex: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    alt: "Commercial property exterior",
    tag: "Commercial",
    href: "/projects/commercial/",
    rotation: 5,
    zIndex: 4,
  },
];

export function HeroEnhanced() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 topo-pattern animate-topo-flow opacity-50" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob blob-1 absolute w-96 h-96 bg-secondary-green/5 -top-20 -left-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="blob blob-2 absolute w-80 h-80 bg-primary-green/5 top-1/3 -right-20"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="blob blob-3 absolute w-72 h-72 bg-secondary-green/5 -bottom-10 left-1/4"
          style={{ animationDelay: "-10s" }}
        />
      </div>

      {/* Ghost Letter "a" */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="ghost-letter font-heading text-primary-green animate-ghost-drift select-none">
          a
        </span>
      </div>

      <div className="container-max relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isLoaded ? "animate-fade-up" : "opacity-0"}`}>
            <div className="space-y-2">
              <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase">
                Edinburgh · Outdoor Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-dark leading-tight">
                Leave the{" "}
                <span className="text-primary-green">outdoors</span>
                <br />
                to us.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-dark/70 font-body max-w-lg leading-relaxed">
              From pristine pressure-washed entrances to lawn care — your home and business is ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-body font-medium rounded-lg hover:bg-secondary-green transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/20 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-green text-primary-green font-body font-medium rounded-lg hover:bg-primary-green hover:text-white transition-all duration-300"
              >
                See Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-body text-dark/70">Free quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-body text-dark/70">EH1-EH30</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-body text-dark/70">Flexible scheduling</span>
              </div>
            </div>
          </div>

          {/* Stacked Images */}
          <div
            className={`relative h-[400px] md:h-[500px] lg:h-[600px] ${
              isLoaded ? "animate-fade-in animation-delay-400" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              {stackedImages.map((image, index) => (
                <Link
                  key={image.alt}
                  href={image.href}
                  className="stacked-image absolute rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                  style={{
                    transform: `rotate(${image.rotation}deg)`,
                    zIndex: image.zIndex,
                    top: `${index * 8}%`,
                    left: `${index * 5}%`,
                    width: "85%",
                    height: "60%",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-green/60 via-transparent to-transparent" />
                  {/* Service tag */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-sm font-mono font-medium text-primary-green">
                      {image.tag}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-pulse">
        <span className="text-xs font-mono text-dark/50 uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}