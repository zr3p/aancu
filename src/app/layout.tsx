import type { Metadata } from "next";
import { Onest, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingQR } from "@/components/FloatingQR";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

const onest = Onest({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-onest",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aancu.com"),
  title: "aancu | Edinburgh Outdoor Services - Pressure Washing, Garden Maintenance & More",
  description: "Professional outdoor services in Edinburgh. Pressure washing, garden maintenance, outdoor clearance, and commercial services. Covering EH1-EH30. Get a free quote today.",
  keywords: "pressure washing Edinburgh, garden maintenance Edinburgh, outdoor clearance, commercial outdoor services, driveway cleaning, patio cleaning, hedge trimming, lawn care Edinburgh",
  authors: [{ name: "aancu" }],
  creator: "aancu",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aancu.com",
    siteName: "aancu",
    title: "aancu | Edinburgh Outdoor Services",
    description: "Professional outdoor services in Edinburgh. Leave the outdoors to us.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "aancu - Edinburgh Outdoor Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "aancu | Edinburgh Outdoor Services",
    description: "Professional outdoor services in Edinburgh. Leave the outdoors to us.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingQR />
        <ScrollToTop />
        <Script
          defer
          src="https://imu.ainic.org/script.js"
          data-website-id="6d40e9f9-aeda-4943-9939-90d49e46f27b"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}