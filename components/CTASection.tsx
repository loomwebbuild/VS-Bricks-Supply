"use client";

import React from "react";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { useLanguage } from "@/components/LanguageContext";
import { Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showCalculatorLink?: boolean;
}

export function CTASection({ title, subtitle, showCalculatorLink = true }: CTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-[#1F1712] text-[#FBF8F3] py-16 sm:py-20 relative overflow-hidden border-t border-[#3D3027]">
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Kicker */}
        <p className="text-xs font-bold tracking-widest uppercase text-[#C89D7C] mb-3">
          {COMPANY.slogans.territory} · {COMPANY.slogans.primary}
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FBF8F3] max-w-3xl mx-auto text-balance">
          {title || t.cta.bannerTitle}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#E8E0D5]/80 max-w-2xl mx-auto leading-relaxed">
          {subtitle || t.cta.bannerSubtitle}
        </p>

        {/* Price callout badge */}
        <div className="my-6 inline-flex items-center gap-3 py-2 px-4 rounded-lg bg-[#2E231C] border border-[#4A3B31] text-xs sm:text-sm shadow-md">
          <span className="bg-[#78350F] text-[#FBF8F3] font-bold px-2.5 py-0.5 rounded text-xs border border-[#9A4B1A]/50">STARTING ₹9/BRICK</span>
          <span className="text-[#6B5B52]">·</span>
          <span className="text-[#E8E0D5] font-semibold">Zero Breakage Guarantee</span>
          <span className="text-[#6B5B52]">·</span>
          <span className="text-[#E8E0D5]">Direct Site Delivery</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href={buildWhatsAppLink("Hello VS Bricks Supply, I would like to get a quote for a red brick order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 rounded-lg transition-all shadow-lg"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#FBF8F3] bg-[#78350F] hover:bg-[#5B270A] active:bg-[#431B05] rounded-lg transition-all border border-[#9A4B1A]/40 shadow-md"
          >
            <Phone className="w-4 h-4 text-[#C89D7C]" />
            <span>Call {COMPANY.phoneDisplay}</span>
          </a>
        </div>

        {showCalculatorLink && (
          <div className="mt-6">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C89D7C] hover:text-[#FBF8F3] transition-colors"
            >
              <span>Calculate exact wall brick count first with our free Calculator</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}

        {/* Trust markers */}
        <div className="mt-10 pt-8 border-t border-[#3D3027] flex flex-wrap items-center justify-center gap-6 text-xs text-[#E8E0D5]/70">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C]" />
            <span>PVC, RBS &amp; VBS Red Bricks</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C]" />
            <span>Zero Transit Breakage</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C]" />
            <span>Tractor &amp; Truck Loads</span>
          </span>
        </div>

      </div>
    </section>
  );
}
