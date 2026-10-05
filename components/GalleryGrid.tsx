"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { X, ZoomIn, MessageSquare, ShieldCheck, MapPin } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "stockyard" | "delivery" | "masonry" | "quality";
  categoryLabel: string;
  image: string;
  description: string;
  caption: string;
}

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Kiln-Fired Red Clay Brick Stockyard",
      category: "stockyard",
      categoryLabel: "Stockyard & Kiln",
      image: COMPANY.images.hero,
      description: "Neatly stacked solid red clay bricks stored under uniform moisture-controlled conditions prior to site dispatch in Karimnagar.",
      caption: "Uniform stacking and edge protection in our Karimnagar stockyard",
    },
    {
      id: "2",
      title: "Safe Pallet Loading & Transport Fleet",
      category: "delivery",
      categoryLabel: "Transport & Logistics",
      image: COMPANY.images.delivery,
      description: "Palletized brick loading on flatbed logistics vehicles to prevent transit vibration loss and honor our Zero Breakage Guarantee.",
      caption: "Secured loading ready for direct delivery to construction sites",
    },
    {
      id: "3",
      title: "Load-Bearing 9-Inch Masonry Construction",
      category: "masonry",
      categoryLabel: "Site Masonry",
      image: COMPANY.images.masonry,
      description: "Plumb, structurally sound brick masonry wall with clean mortar bond lines constructed using Karimnagar Red Bricks.",
      caption: "True square edges for consistent mortar bonding and wall strength",
    },
    {
      id: "4",
      title: "Dense High-Strength Red Clay Texture",
      category: "quality",
      categoryLabel: "Brick Quality",
      image: COMPANY.images.texture,
      description: "High-density kiln-fired brick showing sharp corners, homogenous clay body, and minimal surface porosity for high compressive resistance.",
      caption: "Close-up of dense kiln-fired clay body and sharp edges",
    },
    {
      id: "5",
      title: "Finished Structural Partition Masonry",
      category: "masonry",
      categoryLabel: "Site Masonry",
      image: COMPANY.images.masonry,
      description: "Interlocking partition wall constructed with precise level lines, demonstrating consistent brick dimensions throughout the batch.",
      caption: "Consistent sizing reduces mortar wastage on site",
    },
    {
      id: "6",
      title: "Bulk Dispatch Readiness for Multi-Unit Projects",
      category: "delivery",
      categoryLabel: "Transport & Logistics",
      image: COMPANY.images.hero,
      description: "High capacity storage ready for continuous daily dispatch to commercial builders and residential layouts in Karimnagar.",
      caption: "Daily capacity to support continuous construction schedules",
    },
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <div>
      {/* Category Filter Tabs (Zero-pill styled buttons) */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
        {[
          { id: "all", label: "All Photos" },
          { id: "stockyard", label: "Stockyard & Batches" },
          { id: "delivery", label: "Transport & Loading" },
          { id: "masonry", label: "Site Masonry" },
          { id: "quality", label: "Brick Quality & Density" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
              filter === tab.id
                ? "bg-[#1F2328] text-[#F7F5F0] shadow-sm"
                : "bg-white text-[#5B6470] border border-[#5B6470]/20 hover:border-[#1F2328] hover:text-[#1F2328]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group bg-white rounded-lg border border-[#5B6470]/20 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            {/* Image Container with Fallback & Hover zoom */}
            <div className="relative aspect-[4/3] bg-[#1F2328]/10 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2328]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-[#F7F5F0] font-semibold flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4 text-[#F2A900]" />
                  <span>Click to view details</span>
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#5B6470] uppercase tracking-wider block mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="font-bold text-[#1F2328] text-sm group-hover:text-[#F2A900] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5B6470] mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-[#5B6470]/15 flex items-center justify-between text-[11px] text-[#5B6470]">
                <span>Karimnagar, Telangana</span>
                <span className="text-[#1F2328] font-bold">₹9/brick base</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-[#1F2328]/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border border-[#5B6470]/30 max-w-3xl w-full overflow-hidden shadow-2xl animate-fade-in relative">
            
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#1F2328]/80 text-[#F7F5F0] hover:bg-[#1F2328] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-[#1F2328]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6 bg-[#F7F5F0]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B6470]">
                  {activeItem.categoryLabel} · Karimnagar Supply
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F2A900]/20 text-[#1F2328]">
                  Starting ₹9/Brick
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1F2328]">
                {activeItem.title}
              </h3>
              <p className="text-sm text-[#5B6470] mt-2 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#5B6470]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#5B6470]">
                  <span className="font-semibold text-[#1F2328] block">No Breakage Guarantee</span>
                  Every batch is inspected for structural density and true square edges.
                </div>

                <a
                  href={buildWhatsAppLink(`Hello Karimnagar Red Bricks, I saw photo '${activeItem.title}' in your gallery and would like to ask about availability and pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#F2A900] hover:bg-[#D99400] text-[#1F2328] font-bold text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enquire about this batch</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
