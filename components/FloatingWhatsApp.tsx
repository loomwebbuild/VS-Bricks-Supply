"use client";

import React, { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import { MessageSquare, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-2 bg-[#1F2328] text-[#F7F5F0] text-xs p-3 rounded-lg shadow-xl border border-[#5B6470]/30 max-w-xs relative animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#5B6470] hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-[#F2A900] mb-1">Direct Brick Dispatch Support</p>
          <p className="text-[#F7F5F0]/80">
            Have questions about brick availability, lorry loads, or pricing in Karimnagar? Chat with us instantly.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={buildWhatsAppLink("Hello Karimnagar Red Bricks, I would like to check prices and place an order for red bricks.")}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Chat on WhatsApp with Karimnagar Red Bricks"
      >
        {/* Pulse indicator */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
