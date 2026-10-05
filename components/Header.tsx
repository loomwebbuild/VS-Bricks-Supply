"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { useLanguage } from "@/components/LanguageContext";
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  Globe,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/", label: "Home", labelTe: "హోమ్" },
    {
      href: "/products",
      label: "Products",
      labelTe: "ఉత్పత్తులు",
      hasDropdown: true,
    },
    { href: "/calculator", label: "Brick Calculator", labelTe: "కాలిక్యులేటర్" },
    { href: "/why-choose-us", label: "Why Choose Us", labelTe: "ప్రత్యేకతలు" },
    { href: "/gallery", label: "Gallery", labelTe: "గ్యాలరీ" },
    { href: "/contact", label: "Contact", labelTe: "సంప్రదించండి" },
  ];

  return (
    <>
      {/* 1. Top Utility & Trust Bar */}
      <div className="bg-[#17100B] text-[#E8E0D5] border-b border-[#2E231C] text-[11px] py-1.5 px-4 tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Territory & Rate Badge */}
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 font-semibold text-[#FBF8F3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89D7C] animate-pulse" />
              <span>{COMPANY.slogans.territory}</span>
            </span>
            <span className="text-[#6B5B52] hidden sm:inline">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#E8E0D5]/80">
              <span className="font-bold text-[#C89D7C]">Starting ₹9/Brick</span>
              <span>· {COMPANY.established} · {COMPANY.certified}</span>
            </span>
          </div>

          {/* Right: Direct Call & Language Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-[#E8E0D5] hover:text-[#C89D7C] transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-[#C89D7C]" />
              <span className="tabular-nums">{COMPANY.phoneDisplay}</span>
            </a>

            <span className="text-[#3D3027] hidden sm:inline">|</span>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#271E18] hover:bg-[#342921] text-[#E8E0D5] transition-colors border border-[#3D3027] font-medium text-[11px]"
              title="Switch between English and Telugu"
            >
              <Globe className="w-3 h-3 text-[#C89D7C]" />
              <span>{language === "en" ? "తెలుగు" : "English"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1F1712]/95 backdrop-blur-md shadow-xl border-b border-[#3D3027]/90 py-0"
            : "bg-[#1F1712] border-b border-[#2E231C] py-0.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            
            {/* Zone 1: Official Logo & Brand Lockup */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white p-1 shadow-md border border-[#E8E0D5] flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src={COMPANY.images.logo}
                  alt="VS Bricks Supply Official Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg uppercase tracking-tight text-[#FBF8F3] group-hover:text-[#C89D7C] transition-colors leading-tight">
                  VS BRICKS SUPPLY
                </span>
                <span className="text-[10px] font-semibold text-[#A89A8F] tracking-widest uppercase flex items-center gap-1.5">
                  <span>Karimnagar</span>
                  <span>·</span>
                  <span>{COMPANY.established}</span>
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === "/products" && pathname.startsWith("/products"));

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all ${
                          isActive
                            ? "text-[#FBF8F3] bg-[#2E231C] font-bold shadow-sm"
                            : "text-[#E8E0D5]/85 hover:text-[#FBF8F3] hover:bg-[#271E18]"
                        }`}
                      >
                        <span>{language === "te" ? item.labelTe : item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180 text-[#C89D7C]" : "text-[#A89A8F]"}`} />
                      </Link>

                      {/* Dropdown Menu */}
                      {productsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 rounded-lg bg-[#1F1712] border border-[#3D3027] shadow-2xl p-2 z-50 animate-fade-in">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#A89A8F] px-2.5 py-1">
                            Hallmark Certified Varieties
                          </div>

                          <Link
                            href="/products#pvc"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-start gap-2.5 p-2 rounded-md hover:bg-[#2E231C] transition-colors group"
                          >
                            <div className="w-6 h-6 rounded bg-[#78350F]/40 border border-[#78350F] text-[#C89D7C] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                              PVC
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#FBF8F3] group-hover:text-[#C89D7C] block">
                                PVC Red Bricks
                              </span>
                              <span className="text-[11px] text-[#A89A8F] block">
                                Premium Flagship · ₹9/brick
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/products#rbs"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-start gap-2.5 p-2 rounded-md hover:bg-[#2E231C] transition-colors group"
                          >
                            <div className="w-6 h-6 rounded bg-[#78350F]/40 border border-[#78350F] text-[#C89D7C] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                              RBS
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#FBF8F3] group-hover:text-[#C89D7C] block">
                                RBS Red Bricks
                              </span>
                              <span className="text-[11px] text-[#A89A8F] block">
                                First Quality Heavy Duty · ₹9/brick
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/products#vbs"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-start gap-2.5 p-2 rounded-md hover:bg-[#2E231C] transition-colors group"
                          >
                            <div className="w-6 h-6 rounded bg-[#78350F]/40 border border-[#78350F] text-[#C89D7C] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                              VBS
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#FBF8F3] group-hover:text-[#C89D7C] block">
                                VBS Red Bricks
                              </span>
                              <span className="text-[11px] text-[#A89A8F] block">
                                High Density Interlocking · ₹9/brick
                              </span>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#FBF8F3] bg-[#2E231C] font-bold shadow-sm"
                        : "text-[#E8E0D5]/85 hover:text-[#FBF8F3] hover:bg-[#271E18]"
                    }`}
                  >
                    {language === "te" ? item.labelTe : item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Direct Actions (WhatsApp + Get Fast Quote) */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              
              {/* WhatsApp Quick Button */}
              <a
                href={buildWhatsAppLink("Hello VS Bricks Supply, I would like to get a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-colors shadow-sm active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              {/* Get Quote CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-[#FBF8F3] bg-[#78350F] hover:bg-[#5B270A] rounded-lg transition-all shadow-md active:scale-95 border border-[#9A4B1A]/50"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C89D7C]" />
              </Link>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#E8E0D5] hover:text-white hover:bg-[#2E231C] transition-colors focus:outline-none border border-[#3D3027]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1F1712] border-b border-[#3D3027] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#78350F] text-[#FBF8F3] font-bold"
                        : "text-[#E8E0D5] hover:bg-[#2E231C] hover:text-white"
                    }`}
                  >
                    {language === "te" ? item.labelTe : item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#3D3027] flex flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-lg bg-[#2E231C] text-[#FBF8F3] border border-[#3D3027]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89D7C]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={buildWhatsAppLink("Hello VS Bricks Supply, I would like to get a quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-lg bg-[#25D366] text-white shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold rounded-lg bg-[#78350F] text-[#FBF8F3] border border-[#9A4B1A]/50 shadow-md"
              >
                <span>Request Custom Site Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C89D7C]" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
