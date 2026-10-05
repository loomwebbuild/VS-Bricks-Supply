import React from "react";
import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Karimnagar Red Bricks",
  description:
    "Request a fast quote for red clay bricks in Karimnagar, Telangana. Direct WhatsApp quotation and phone support. Starting at ₹9/brick with zero breakage guarantee.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#1F2328] text-[#F7F5F0] py-14 sm:py-18 relative">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2A900] block mb-2">
              Fast Quotation &amp; Dispatch Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F0] tracking-tight">
              Get an Instant Brick Quote in Karimnagar
            </h1>
            <p className="mt-4 text-base text-[#F7F5F0]/80 leading-relaxed">
              Fill out the form below to immediately open a pre-filled quote request in WhatsApp, or call our dispatch desk directly for immediate load scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Contact Info & Map Placeholder (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Action Cards */}
              <div className="bg-white rounded-lg border border-[#5B6470]/20 p-6 shadow-sm space-y-6">
                <div>
                  <h3 className="text-base font-bold text-[#1F2328] mb-1">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs text-[#5B6470]">
                    Speak directly with our supply desk for vehicle dispatch and pricing.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  
                  {/* Phone */}
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-start gap-3 p-3 rounded bg-[#F7F5F0] hover:bg-slate-200 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded bg-[#1F2328] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#F2A900]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#5B6470] block">Direct Phone Call</span>
                      <span className="font-bold text-[#1F2328] text-base group-hover:text-[#F2A900] transition-colors">
                        {COMPANY.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={buildWhatsAppLink("Hello Karimnagar Red Bricks, I would like to get a quote.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <span className="text-xs text-[#5B6470] block">WhatsApp Chat</span>
                      <span className="font-bold text-[#1F2328] text-base group-hover:text-[#25D366] transition-colors">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </a>

                  {/* Location & Address */}
                  <div className="flex items-start gap-3 p-3 rounded bg-[#F7F5F0]">
                    <div className="w-9 h-9 rounded bg-[#1F2328] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#F2A900]" />
                    </div>
                    <div className="text-xs">
                      <span className="text-[#5B6470] block">Supply &amp; Stockyard Hub</span>
                      <span className="font-bold text-[#1F2328] text-sm block">{COMPANY.location}</span>
                      <span className="text-[#5B6470] mt-0.5 block font-mono">{COMPANY.placeholders.address}</span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3 p-3 rounded bg-[#F7F5F0]">
                    <div className="w-9 h-9 rounded bg-[#1F2328] text-white flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#F2A900]" />
                    </div>
                    <div className="text-xs">
                      <span className="text-[#5B6470] block">Dispatch &amp; Operating Hours</span>
                      <span className="font-bold text-[#1F2328] text-sm block">Monday – Saturday</span>
                      <span className="text-[#5B6470] font-mono mt-0.5 block">{COMPANY.placeholders.businessHours}</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 p-3 rounded bg-[#F7F5F0]">
                    <div className="w-9 h-9 rounded bg-[#1F2328] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#F2A900]" />
                    </div>
                    <div className="text-xs">
                      <span className="text-[#5B6470] block">Email Inquiries</span>
                      <span className="font-mono text-[#1F2328] block">{COMPANY.placeholders.email}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map Embed / Location Card Placeholder */}
              <div className="bg-white rounded-lg border border-[#5B6470]/20 p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F2328]">
                    Karimnagar Location Map
                  </span>
                  <span className="text-[11px] text-[#5B6470]">Telangana, India</span>
                </div>

                {/* Map Interactive Visual Placeholder */}
                <div className="aspect-[16/9] w-full bg-[#1F2328] rounded flex flex-col items-center justify-center text-center p-4 relative overflow-hidden border border-[#5B6470]/30">
                  <div className="absolute inset-0 bg-dark-grid-pattern opacity-50 pointer-events-none" />
                  <div className="w-10 h-10 rounded-full bg-[#F2A900] text-[#1F2328] flex items-center justify-center mb-2 z-10 shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#F7F5F0] z-10">Karimnagar Red Bricks Stockyard</span>
                  <span className="text-[11px] text-[#F7F5F0]/70 z-10 mt-0.5">Geo: 18.4386° N, 79.1288° E · Karimnagar</span>
                  <span className="text-[10px] text-[#F2A900] z-10 mt-2 font-mono">Service Area: Karimnagar &amp; {COMPANY.placeholders.serviceAreas}</span>
                </div>

                <p className="text-[11px] text-[#5B6470] text-center">
                  Direct tractor and lorry dispatches arranged throughout Karimnagar municipal corporation and surrounding mandals.
                </p>
              </div>

            </div>

            {/* Right Col: Interactive Quote Request Form (7 cols) */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Prefer to Speak on the Phone?"
        subtitle="Call our dispatch manager now for instant answers on load availability, tractor freight charges, and same-day delivery slots."
      />

    </div>
  );
}
