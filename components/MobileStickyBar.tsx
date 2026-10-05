"use client";

import React from "react";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { Phone, MessageSquare, Calculator } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1F1712] border-t border-[#3D3027] py-2 px-3 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Action */}
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#2E231C] hover:bg-[#3D3027] active:bg-[#4A3B31] text-[#FBF8F3] rounded-lg text-xs font-semibold text-center transition-colors border border-[#3D3027]"
        >
          <Phone className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={buildWhatsAppLink("Hello VS Bricks Supply, I would like to get a quote for PVC / RBS / VBS red bricks.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#25D366] active:bg-[#20bd5a] text-white rounded-lg text-xs font-bold text-center transition-colors shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Quote / Calculator Link */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#78350F] active:bg-[#5B270A] text-[#FBF8F3] rounded-lg text-xs font-bold text-center transition-colors shadow-sm border border-[#9A4B1A]/40"
        >
          <Calculator className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
