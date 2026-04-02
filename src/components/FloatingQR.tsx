"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function FloatingQR() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show QR after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className={`qr-float transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-2 transition-all duration-200 ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-dark text-white text-xs font-body px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Scan to message us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark" />
        </div>
      </div>

      {/* QR Code Container */}
      <a
        href="https://wa.me/44123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative bg-white rounded-xl shadow-2xl border-2 border-primary-green p-2 hover:shadow-primary-green/20 transition-shadow"
      >
        {/* QR Code - We'll use a generated QR code SVG */}
        <div className="w-16 h-16 md:w-20 md:h-20 relative">
          <QRCodeSVG />
        </div>

        {/* WhatsApp Icon Badge */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* Dismiss Button */}
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="absolute -top-2 -right-2 w-5 h-5 bg-dark text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-700 transition-colors shadow-md"
        aria-label="Dismiss QR code"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

// Simple QR Code SVG component that links to WhatsApp
function QRCodeSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* QR Code pattern - simplified representation */}
      <rect fill="white" width="100" height="100" />

      {/* Corner patterns */}
      <rect fill="#2F4B3D" x="5" y="5" width="25" height="25" />
      <rect fill="white" x="8" y="8" width="19" height="19" />
      <rect fill="#2F4B3D" x="11" y="11" width="13" height="13" />

      <rect fill="#2F4B3D" x="70" y="5" width="25" height="25" />
      <rect fill="white" x="73" y="8" width="19" height="19" />
      <rect fill="#2F4B3D" x="76" y="11" width="13" height="13" />

      <rect fill="#2F4B3D" x="5" y="70" width="25" height="25" />
      <rect fill="white" x="8" y="73" width="19" height="19" />
      <rect fill="#2F4B3D" x="11" y="76" width="13" height="13" />

      {/* Data patterns - simplified */}
      <rect fill="#2F4B3D" x="35" y="5" width="5" height="5" />
      <rect fill="#2F4B3D" x="45" y="5" width="5" height="5" />
      <rect fill="#2F4B3D" x="55" y="5" width="5" height="5" />

      <rect fill="#2F4B3D" x="35" y="15" width="5" height="5" />
      <rect fill="#2F4B3D" x="50" y="15" width="5" height="5" />
      <rect fill="#2F4B3D" x="60" y="15" width="5" height="5" />

      <rect fill="#2F4B3D" x="35" y="25" width="5" height="5" />
      <rect fill="#2F4B3D" x="45" y="25" width="5" height="5" />
      <rect fill="#2F4B3D" x="55" y="25" width="5" height="5" />

      {/* Middle section */}
      <rect fill="#2F4B3D" x="5" y="35" width="5" height="5" />
      <rect fill="#2F4B3D" x="15" y="35" width="5" height="5" />
      <rect fill="#2F4B3D" x="25" y="35" width="5" height="5" />
      <rect fill="#2F4B3D" x="40" y="35" width="5" height="5" />
      <rect fill="#2F4B3D" x="55" y="35" width="5" height="5" />
      <rect fill="#2F4B3D" x="70" y="35" width="5" height="5" />
      <rect fill="#2F4B3D" x="85" y="35" width="5" height="5" />

      <rect fill="#2F4B3D" x="10" y="45" width="5" height="5" />
      <rect fill="#2F4B3D" x="25" y="45" width="5" height="5" />
      <rect fill="#2F4B3D" x="35" y="45" width="5" height="5" />
      <rect fill="#2F4B3D" x="50" y="45" width="5" height="5" />
      <rect fill="#2F4B3D" x="65" y="45" width="5" height="5" />
      <rect fill="#2F4B3D" x="80" y="45" width="5" height="5" />

      <rect fill="#2F4B3D" x="5" y="55" width="5" height="5" />
      <rect fill="#2F4B3D" x="20" y="55" width="5" height="5" />
      <rect fill="#2F4B3D" x="35" y="55" width="5" height="5" />
      <rect fill="#2F4B3D" x="45" y="55" width="5" height="5" />
      <rect fill="#2F4B3D" x="60" y="55" width="5" height="5" />
      <rect fill="#2F4B3D" x="75" y="55" width="5" height="5" />
      <rect fill="#2F4B3D" x="90" y="55" width="5" height="5" />

      {/* Bottom section */}
      <rect fill="#2F4B3D" x="35" y="70" width="5" height="5" />
      <rect fill="#2F4B3D" x="50" y="70" width="5" height="5" />
      <rect fill="#2F4B3D" x="65" y="75" width="5" height="5" />
      <rect fill="#2F4B3D" x="80" y="70" width="5" height="5" />
      <rect fill="#2F4B3D" x="90" y="75" width="5" height="5" />

      <rect fill="#2F4B3D" x="40" y="80" width="5" height="5" />
      <rect fill="#2F4B3D" x="55" y="80" width="5" height="5" />
      <rect fill="#2F4B3D" x="70" y="85" width="5" height="5" />
      <rect fill="#2F4B3D" x="85" y="80" width="5" height="5" />

      <rect fill="#2F4B3D" x="35" y="90" width="5" height="5" />
      <rect fill="#2F4B3D" x="50" y="90" width="5" height="5" />
      <rect fill="#2F4B3D" x="60" y="90" width="5" height="5" />
      <rect fill="#2F4B3D" x="75" y="90" width="5" height="5" />
      <rect fill="#2F4B3D" x="90" y="90" width="5" height="5" />
    </svg>
  );
}
