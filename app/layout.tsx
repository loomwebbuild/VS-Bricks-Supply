import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { LanguageProvider } from "@/components/LanguageContext";
import { COMPANY } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://karimnagar-red-bricks.local"),
  title: {
    default: "Karimnagar Red Bricks – Strong Red Bricks | Zero Breakage",
    template: "%s | Karimnagar Red Bricks",
  },
  description:
    "Direct supplier of quality kiln-fired red clay bricks in Karimnagar, Telangana. Starting at ₹9/brick. No breakage guarantee, exact quantity verified, and on-time site delivery.",
  keywords: [
    "red bricks in Karimnagar",
    "brick supplier Karimnagar",
    "red brick price Karimnagar",
    "Karimnagar red bricks ₹9",
    "building bricks Telangana",
    "clay bricks supplier Karimnagar",
    "no breakage red bricks",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title: "Karimnagar Red Bricks – Strong Red Bricks. Zero Breakage.",
    description:
      "Direct supplier of quality red bricks in Karimnagar, Telangana. Starting at ₹9/brick. Exact quantity guaranteed.",
    type: "website",
    locale: "en_IN",
    siteName: COMPANY.name,
    images: [
      {
        url: COMPANY.images.hero,
        width: 1200,
        height: 630,
        alt: "Karimnagar Red Bricks - Quality Kiln-Fired Bricks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karimnagar Red Bricks – ₹9/Brick | Zero Breakage",
    description:
      "Quality kiln-fired red clay bricks supplier in Karimnagar, Telangana. Direct site delivery.",
    images: [COMPANY.images.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness JSON-LD
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": COMPANY.name,
    "description":
      "Supplier of kiln-fired red clay construction bricks in Karimnagar, Telangana. Zero breakage guarantee and exact quantity delivery.",
    "telephone": COMPANY.phoneRaw,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karimnagar",
      "addressRegion": "Telangana",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4386,
      "longitude": 79.1288,
    },
    "areaServed": {
      "@type": "City",
      "name": "Karimnagar",
    },
    "makesOffer": {
      "@type": "Offer",
      "name": "Red Clay Construction Bricks",
      "price": "9.00",
      "priceCurrency": "INR",
      "description": "Solid kiln-fired red bricks starting at ₹9 per unit with zero breakage guarantee.",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#1F2328] selection:bg-[#F2A900] selection:text-[#1F2328]" suppressHydrationWarning>
        <LanguageProvider>
          {/* Header */}
          <Header />

          {/* Main Content Viewport */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Persistent Conversion Controls */}
          <FloatingWhatsApp />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
