import React from "react";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Stockyard & Masonry Project Gallery | Karimnagar Red Bricks",
  description:
    "Explore authentic photos of our kiln-fired red clay brick stockyard, transport loading, and completed masonry construction sites across Karimnagar, Telangana.",
};

export default function GalleryPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#1F2328] text-[#F7F5F0] py-14 sm:py-18 relative">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2A900] block mb-2">
              Visual Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F0] tracking-tight">
              Stockyard &amp; Masonry Project Gallery
            </h1>
            <p className="mt-4 text-base text-[#F7F5F0]/80 leading-relaxed">
              Explore authentic documentation of our red clay brick stockyard, secure transport packaging, and active site masonry across Karimnagar.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Require Quality Red Bricks for Your Construction Site?"
        subtitle="Contact our Karimnagar dispatch team on WhatsApp or direct call to lock in current batch pricing starting at ₹9 per brick."
      />

    </div>
  );
}
