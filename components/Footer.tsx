"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, FOOTER_LINKS, buildWhatsAppLink } from "@/lib/site-config";
import { useLanguage } from "@/components/LanguageContext";
import { Phone, MessageSquare, MapPin, CheckCircle2, Award } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#17100B] text-[#E8E0D5] border-t border-[#2E231C] pt-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E231C]">
          
          {/* Col 1: Brand Logo & Slogans */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg bg-white p-1 shadow-md border border-[#E8E0D5] flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={COMPANY.images.logo}
                  alt="VS Bricks Supply Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-[#FBF8F3] uppercase leading-none">
                  VS BRICKS SUPPLY
                </span>
                <span className="text-[10px] text-[#C89D7C] uppercase tracking-widest mt-0.5 font-semibold">
                  Karimnagar · {COMPANY.established}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8E0D5]/75 leading-relaxed">
              {COMPANY.slogans.primary}. Supplying premium quality PVC, RBS, and VBS kiln-fired red clay bricks all over Telangana.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-[#E8E0D5]/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                <span>Zero Breakage Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                <span>First Quality PVC Red Bricks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D7C] shrink-0" />
                <span>{COMPANY.certified}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBF8F3] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E8E0D5]/70">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#C89D7C] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Varieties & Pricing */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBF8F3] mb-4">
              Products &amp; Pricing
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E8E0D5]/80">
              <li>
                <span className="text-xs text-[#A89A8F] block">Price Baseline:</span>
                <span className="font-bold text-[#C89D7C] text-sm">Starting at ₹9 per brick</span>
              </li>
              <li>
                <span className="text-xs text-[#A89A8F] block">Hallmark Stamped Models:</span>
                <span className="font-medium text-[#FBF8F3]">PVC Brick · RBS Brick · VBS Brick</span>
              </li>
              <li>
                <span className="text-xs text-[#A89A8F] block">Supply Region:</span>
                <span className="text-xs leading-tight block text-[#E8E0D5] mt-0.5">
                  Supply in all over Telangana (Karimnagar, Warangal, Hyderabad, Nizamabad &amp; more)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FBF8F3] mb-4">
              Dispatch Desk
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#E8E0D5]/90">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-[#C89D7C] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C89D7C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#FBF8F3] block">{COMPANY.phoneDisplay}</span>
                  <span className="text-[11px] text-[#A89A8F]">Call for vehicle scheduling</span>
                </div>
              </a>

              <a
                href={buildWhatsAppLink("Hello VS Bricks Supply, I would like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#FBF8F3] block">WhatsApp Support</span>
                  <span className="text-[11px] text-[#A89A8F]">Fast quote &amp; dispatch updates</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-[#A89A8F]">
                <MapPin className="w-4 h-4 text-[#C89D7C] mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-[#FBF8F3] block">{COMPANY.location}</span>
                  <span>Karimnagar Stockyard, Telangana</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A89A8F]">
          <div>
            © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved. Telangana, India.
          </div>
          <div className="text-center md:text-right text-[#A89A8F] max-w-xl">
            {COMPANY.priceNote} Stronger Walls | Brighter Futures.
          </div>
        </div>

      </div>
    </footer>
  );
}
