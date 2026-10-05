"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { useLanguage } from "@/components/LanguageContext";
import { TrustStrip } from "@/components/TrustStrip";
import { BrickCalculator } from "@/components/BrickCalculator";
import { CTASection } from "@/components/CTASection";
import {
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Layers,
  Sparkles,
  HelpCircle,
  TrendingDown,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (Deep Espresso & Earth Brown) */}
      <section className="relative bg-[#1F1712] text-[#FBF8F3] pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Hero Information (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Territory & Brand Slogan Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C89D7C] bg-[#2E231C] border border-[#3D3027] py-1.5 px-3 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#C89D7C] animate-pulse" />
                <span>{COMPANY.slogans.territory} · {COMPANY.slogans.primary}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black leading-[1.12] tracking-tight text-[#FBF8F3] text-balance">
                Premium Quality <span className="text-[#C89D7C]">PVC Red Bricks</span>. Starting at ₹9/Brick.
              </h1>

              {/* Sub-line */}
              <p className="text-sm sm:text-base text-[#E8E0D5]/85 max-w-2xl leading-relaxed">
                <strong className="text-white">Build Today | Last for Tomorrow.</strong> Strong, durable, and cost-effective kiln-fired red clay bricks (PVC, RBS &amp; VBS varieties). Zero breakage guarantee and exact quantity delivery across Karimnagar and all Telangana.
              </p>

              {/* Price Highlight Box */}
              <div className="p-4 rounded-xl bg-[#2E231C] border border-[#4A3B31] shadow-xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#78350F] text-[#FBF8F3] font-black text-2xl sm:text-3xl py-1.5 px-3.5 rounded-lg shadow-md tracking-tight border border-[#9A4B1A]/50">
                    Starting ₹9
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C89D7C] block">
                      Direct Manufacturer Supply
                    </span>
                    <span className="text-xs text-[#E8E0D5]/80">
                      Standard supply rate (PVC / RBS / VBS)
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#A89A8F] max-w-xs text-left sm:text-right">
                  <span>{COMPANY.priceNote}</span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={buildWhatsAppLink("Hello VS Bricks Supply (Karimnagar Red Bricks), I would like to get a quote for PVC / RBS / VBS red bricks at ₹9.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 rounded-lg transition-all shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FBF8F3] bg-[#2E231C] hover:bg-[#3D3027] active:bg-[#4A3B31] rounded-lg border border-[#3D3027] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C89D7C]" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
              </div>

              {/* Key 4 Badges */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#E8E0D5]/90">
                <div className="flex items-center gap-1.5 bg-[#2E231C]/80 p-2 rounded-lg border border-[#3D3027]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                  <span className="truncate">PVC Red Bricks</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#2E231C]/80 p-2 rounded-lg border border-[#3D3027]">
                  <BadgeCheck className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                  <span className="truncate">First Quality Bricks</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#2E231C]/80 p-2 rounded-lg border border-[#3D3027]">
                  <Layers className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                  <span className="truncate">Strong &amp; Durable</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#2E231C]/80 p-2 rounded-lg border border-[#3D3027]">
                  <Truck className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                  <span className="truncate">All Telangana</span>
                </div>
              </div>

            </div>

            {/* Right Col: Product Trio Visual Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#2E231C] rounded-xl border border-[#4A3B31] shadow-2xl p-4 sm:p-5 space-y-4">
                
                {/* Header tag */}
                <div className="flex items-center justify-between border-b border-[#3D3027] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C89D7C]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FBF8F3]">
                      Official Product Lineup
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#C89D7C] bg-[#1F1712] py-0.5 px-2.5 rounded-full border border-[#3D3027]">
                    Starting ₹9/Brick
                  </span>
                </div>

                {/* 3 Stamped Bricks Display (PVC, RBS, VBS) */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  
                  {/* PVC Brick Box */}
                  <div className="bg-[#1F1712] rounded-lg border border-[#3D3027] overflow-hidden text-center group">
                    <div className="relative aspect-square w-full bg-[#17100B]">
                      <Image
                        src={COMPANY.images.pvcBrick}
                        alt="PVC Red Brick"
                        fill
                        sizes="(max-width: 768px) 33vw, 150px"
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-[#1F1712]">
                      <span className="block font-black text-xs text-[#FBF8F3] group-hover:text-[#C89D7C]">PVC BRICK</span>
                      <span className="text-[10px] text-[#A89A8F] block">Premium Flagship</span>
                    </div>
                  </div>

                  {/* RBS Brick Box */}
                  <div className="bg-[#1F1712] rounded-lg border border-[#3D3027] overflow-hidden text-center group">
                    <div className="relative aspect-square w-full bg-[#17100B]">
                      <Image
                        src={COMPANY.images.rbsBrick}
                        alt="RBS Red Brick"
                        fill
                        sizes="(max-width: 768px) 33vw, 150px"
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-[#1F1712]">
                      <span className="block font-black text-xs text-[#FBF8F3] group-hover:text-[#C89D7C]">RBS BRICK</span>
                      <span className="text-[10px] text-[#A89A8F] block">First Quality</span>
                    </div>
                  </div>

                  {/* VBS Brick Box */}
                  <div className="bg-[#1F1712] rounded-lg border border-[#3D3027] overflow-hidden text-center group">
                    <div className="relative aspect-square w-full bg-[#17100B]">
                      <Image
                        src={COMPANY.images.vbsBrick}
                        alt="VBS Red Brick"
                        fill
                        sizes="(max-width: 768px) 33vw, 150px"
                        className="object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-[#1F1712]">
                      <span className="block font-black text-xs text-[#FBF8F3] group-hover:text-[#C89D7C]">VBS BRICK</span>
                      <span className="text-[10px] text-[#A89A8F] block">High Density</span>
                    </div>
                  </div>

                </div>

                {/* Sub-text */}
                <div className="pt-2 text-center text-xs text-[#E8E0D5]">
                  <span className="font-bold text-[#FBF8F3]">STRONGER WALLS | BRIGHTER FUTURES</span>
                  <p className="text-[11px] text-[#A89A8F] mt-0.5">
                    Carefully packed &amp; delivered to construction sites with zero transit breakage.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* 2. THE 3 OFFICIAL PRODUCTS DETAIL SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78350F] block mb-2">
              Tested &amp; Certified Firing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1712] tracking-tight">
              Our Kiln-Fired Product Lineup
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B5B52]">
              Every brick is stamped with genuine factory hallmarks ensuring authentic compressive strength and sharp rectangular edges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY.products.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#FBF8F3] rounded-xl border border-[#E8E0D5] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full bg-[#EFE9DF] overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#1F1712] text-[#FBF8F3] text-[11px] font-bold py-1 px-2.5 rounded shadow">
                      {prod.stampName}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#78350F] text-[#FBF8F3] text-[11px] font-bold py-1 px-2.5 rounded shadow border border-[#9A4B1A]/40">
                      {prod.price}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#78350F] block">
                      {prod.badge}
                    </span>

                    <h3 className="text-xl font-black text-[#1F1712]">
                      {prod.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#78350F]">
                      {prod.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="pt-2 border-t border-[#E8E0D5] space-y-1.5 text-xs text-[#1F1712]">
                      <div className="flex justify-between">
                        <span className="text-[#6B5B52]">Stamp Hallmark:</span>
                        <span className="font-bold">{prod.specs.stamp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6B5B52]">Kiln Firing:</span>
                        <span>{prod.specs.firing}</span>
                      </div>
                      <div className="pt-1">
                        <span className="text-[#6B5B52] block text-[11px]">Recommended Use:</span>
                        <span className="font-medium text-[11px] leading-tight block mt-0.5">{prod.specs.idealFor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <a
                    href={buildWhatsAppLink(`Hello VS Bricks Supply, I would like to order ${prod.title} (${prod.stampName}) for my project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1F1712] hover:bg-[#78350F] text-[#FBF8F3] text-xs font-bold transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order {prod.stampName} on WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE BRICK ESTIMATOR */}
      <section className="py-16 sm:py-20 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78350F] block mb-2">
              Free Wall Masonry Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1712] tracking-tight">
              Estimate Your Brick Units &amp; Cost at ₹9 Baseline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B5B52]">
              Input your wall dimensions to calculate exact bricks required for 4.5&quot; partition or 9&quot; structural walls.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BrickCalculator isTeaser={true} />
          </div>

        </div>
      </section>

      {/* 4. TELANGANA LOGISTICS & COVERAGE */}
      <section className="py-16 sm:py-20 bg-[#1F1712] text-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C89D7C] block">
                Regional Supply Network
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FBF8F3] tracking-tight">
                Direct Brick Dispatch All Over Telangana
              </h2>
              <p className="text-sm sm:text-base text-[#E8E0D5]/80 leading-relaxed">
                Whether you need a single tractor load for residential construction or multi-truck daily supplies for commercial developments, our logistics fleet operates throughout Telangana.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                {[
                  "Karimnagar City",
                  "Warangal & Hanamkonda",
                  "Hyderabad & Secunderabad",
                  "Nizamabad",
                  "Jagtial & Korutla",
                  "Peddapalli & NTPC",
                  "Siricilla",
                  "Siddipet & Gajwel",
                  "Ramagundam & Mancherial",
                ].map((city, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#2E231C] border border-[#3D3027] text-[#E8E0D5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                    <span className="font-semibold">{city}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#78350F] hover:bg-[#5B270A] text-[#FBF8F3] font-bold text-xs sm:text-sm transition-all shadow-md border border-[#9A4B1A]/40"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Freight Rate: {COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#3D3027] shadow-2xl">
                <Image
                  src={COMPANY.images.delivery}
                  alt="Brick transport lorry in Telangana"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1712] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-xs">
                  <span className="font-bold text-[#C89D7C] block text-sm">Zero Breakage Transport</span>
                  <span className="text-[#E8E0D5]/80">Carefully stacked interlocking vehicle loads with zero transit crushing.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. HOW ORDERING WORKS */}
      <section className="py-16 sm:py-20 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78350F] block mb-2">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F1712] tracking-tight">
              How Ordering Works
            </h2>
            <p className="mt-3 text-sm text-[#6B5B52]">
              From WhatsApp inquiry to site unloading in 3 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E0D5] shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-black text-[#78350F] font-mono">01</span>
                <h3 className="text-lg font-bold text-[#1F1712]">Send Enquiry on WhatsApp</h3>
                <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                  Share your required quantity (PVC, RBS, or VBS) and your site location in Karimnagar or anywhere in Telangana.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E8E0D5] text-xs text-[#78350F] font-semibold">
                Instant reply on WhatsApp
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E0D5] shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-black text-[#78350F] font-mono">02</span>
                <h3 className="text-lg font-bold text-[#1F1712]">Confirm Quantity &amp; Price</h3>
                <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                  Get transparent starting ₹9/brick pricing plus distance-based transport charges with clear dispatch timing.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E8E0D5] text-xs text-[#78350F] font-semibold">
                No hidden broker fees
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E0D5] shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-black text-[#78350F] font-mono">03</span>
                <h3 className="text-lg font-bold text-[#1F1712]">On-Time Site Delivery</h3>
                <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                  Tractor or lorry arrives at your site. Bricks are unloaded carefully with exact tally count verification.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E8E0D5] text-xs text-[#78350F] font-semibold">
                Zero Breakage Guarantee
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <CTASection
        title="Ready to Order PVC, RBS or VBS Red Bricks?"
        subtitle="Contact VS Bricks Supply / Karimnagar Red Bricks on WhatsApp or phone for immediate vehicle dispatch across Telangana."
      />

    </div>
  );
}
