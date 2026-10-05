"use client";

import React from "react";
import { ShieldCheck, Truck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface TrustStripProps {
  className?: string;
  variant?: "dark" | "light";
}

export function TrustStrip({ className = "", variant = "light" }: TrustStripProps) {
  const { t } = useLanguage();
  const isDark = variant === "dark";

  return (
    <div
      className={`border-y py-4 px-4 sm:px-6 transition-colors ${
        isDark
          ? "bg-[#1F1712] border-[#3D3027] text-[#FBF8F3]"
          : "bg-white border-[#E8E0D5] text-[#1F1712]"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4EDE4] text-[#78350F] flex items-center justify-center shrink-0 border border-[#E8E0D5]">
              <span className="font-black text-sm">₹9</span>
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-[#1F1712]">
                Starting ₹9/Brick
              </p>
              <p className="text-[11px] text-[#6B5B52] leading-tight">
                Direct kiln pricing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4EDE4] text-[#78350F] flex items-center justify-center shrink-0 border border-[#E8E0D5]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-[#1F1712]">
                {t.trust.zeroBreakage}
              </p>
              <p className="text-[11px] text-[#6B5B52] leading-tight">
                Safe palletized transit
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4EDE4] text-[#78350F] flex items-center justify-center shrink-0 border border-[#E8E0D5]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-[#1F1712]">
                First Quality Tested
              </p>
              <p className="text-[11px] text-[#6B5B52] leading-tight">
                PVC, RBS &amp; VBS varieties
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4EDE4] text-[#78350F] flex items-center justify-center shrink-0 border border-[#E8E0D5]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight text-[#1F1712]">
                All Over Telangana
              </p>
              <p className="text-[11px] text-[#6B5B52] leading-tight">
                Tractor &amp; truck logistics
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
