import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  MessageSquare,
  Building,
  Scale,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Karimnagar Red Bricks",
  description:
    "Learn about Karimnagar Red Bricks — dedicated supplier of kiln-fired red clay bricks in Karimnagar, Telangana. Built on our mission: No breakage, no compromise.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#1F2328] text-[#F7F5F0] py-14 sm:py-18 relative">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2A900] block mb-2">
              Company Overview &amp; Principles
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F0] tracking-tight">
              About Karimnagar Red Bricks
            </h1>
            <p className="mt-4 text-base text-[#F7F5F0]/80 leading-relaxed">
              Supplying dependable, kiln-fired red clay construction bricks to civil contractors, builders, and individual home builders throughout Karimnagar, Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* Story & Mission Section */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#5B6470] block">
                  Our Founding Core
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2328] tracking-tight">
                  The Mission: No Breakage, No Compromise
                </h2>
                <p className="text-sm sm:text-base text-[#5B6470] leading-relaxed">
                  In local building material supply, contractors often face two persistent frustrations: damaged broken bricks arriving from careless transport, and unverified batch tallies falling short of what was paid for.
                </p>
                <p className="text-sm sm:text-base text-[#5B6470] leading-relaxed">
                  <strong className="text-[#1F2328]">{COMPANY.name}</strong> was established with a singular focus on eliminating these compromises. We provide transparent supplier pricing starting at <strong className="text-[#1F2328]">₹9 per brick</strong>, paired with disciplined vehicle loading that ensures every single brick arrives intact at your construction site.
                </p>
              </div>

              {/* Strict Allowed Claims Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="bg-white p-5 rounded-lg border border-[#5B6470]/20 shadow-sm">
                  <div className="w-8 h-8 rounded bg-[#F2A900]/20 text-[#1F2328] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-[#1F2328] text-sm mb-1">
                    No Breakage Policy
                  </h3>
                  <p className="text-xs text-[#5B6470] leading-relaxed">
                    Careful packing and stable flatbed loading ensure zero transit shattering.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-[#5B6470]/20 shadow-sm">
                  <div className="w-8 h-8 rounded bg-[#F2A900]/20 text-[#1F2328] flex items-center justify-center mb-3">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-[#1F2328] text-sm mb-1">
                    No Compromise in Quality &amp; Quantity
                  </h3>
                  <p className="text-xs text-[#5B6470] leading-relaxed">
                    Strict batch tallying ensures 100% accurate count delivery without shortfalls.
                  </p>
                </div>

              </div>

            </div>

            {/* Visual Box (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#5B6470]/20 shadow-md bg-[#1F2328]/10">
                <Image
                  src={COMPANY.images.hero}
                  alt="Stockyard of Karimnagar Red Bricks"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Corporate Facts & Placeholder Info Card */}
              <div className="bg-white p-5 rounded-lg border border-[#5B6470]/20 text-xs space-y-2.5">
                <div className="font-bold text-xs uppercase tracking-wider text-[#1F2328] border-b border-[#5B6470]/15 pb-2">
                  Company Registry Profile
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[#5B6470]">Company Name:</span>
                  <span className="font-semibold text-[#1F2328]">{COMPANY.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5B6470]">Headquarters:</span>
                  <span className="text-[#1F2328]">{COMPANY.location}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5B6470]">Operating History:</span>
                  <span className="font-mono text-[#1F2328]">{COMPANY.placeholders.yearsInBusiness}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5B6470]">GST Registration:</span>
                  <span className="font-mono text-[#1F2328]">{COMPANY.placeholders.gstNumber}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5B6470]">Direct Phone:</span>
                  <span className="font-semibold text-[#1F2328]">{COMPANY.phoneDisplay}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Transparent Procurement Standards */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#5B6470]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B6470] block mb-2">
              Our Service Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2328] tracking-tight">
              Honest Supply for Telangana&apos;s Growing Infrastructure
            </h2>
            <p className="mt-3 text-sm text-[#5B6470]">
              We respect your construction schedule and your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#F7F5F0] p-6 rounded-lg border border-[#5B6470]/20 space-y-3">
              <h3 className="font-bold text-base text-[#1F2328]">
                Direct Stockyard Logistics
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6470] leading-relaxed">
                Tractor trolleys and heavy multi-axle freight trucks managed directly from our Karimnagar stockyard to your unloading gate.
              </p>
            </div>

            <div className="bg-[#F7F5F0] p-6 rounded-lg border border-[#5B6470]/20 space-y-3">
              <h3 className="font-bold text-base text-[#1F2328]">
                Transparent Pricing Policy
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6470] leading-relaxed">
                Starting at ₹9 per brick. Clear transport estimates calculated strictly by distance and vehicle type, without hidden brokerage fees.
              </p>
            </div>

            <div className="bg-[#F7F5F0] p-6 rounded-lg border border-[#5B6470]/20 space-y-3">
              <h3 className="font-bold text-base text-[#1F2328]">
                Rapid Dispatch Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6470] leading-relaxed">
                Direct WhatsApp coordination and instant phone contact so your site supervisors always know when vehicles are on the road.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Partner with Karimnagar Red Bricks?"
        subtitle="Call or WhatsApp us today to discuss your brick delivery schedule and lock in your price quote."
      />

    </div>
  );
}
