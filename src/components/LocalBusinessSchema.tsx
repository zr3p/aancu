export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "aancu",
    description: "Professional outdoor services in Edinburgh. Pressure washing, garden maintenance, outdoor clearance, and commercial services.",
    url: "https://aancu.com",
    telephone: "+44-7533-234474",
    email: "hello@aancu.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edinburgh",
      addressRegion: "Scotland",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 55.9533,
        longitude: -3.1883,
      },
      geoRadius: "30000",
    },
    serviceArea: {
      "@type": "Place",
      name: "Edinburgh EH1-EH30",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pressure Washing",
            description: "Professional pressure washing for driveways, patios, decking, and walls.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garden Maintenance",
            description: "Regular lawn cutting, hedge trimming, weeding, and garden care.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Outdoor Clearance",
            description: "Garden clearance, rubbish removal, and overgrowth management.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Services",
            description: "Commercial property maintenance including forecourts and car parks.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
