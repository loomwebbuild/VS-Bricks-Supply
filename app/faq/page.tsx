import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import {
  HelpCircle,
  MessageSquare,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Karimnagar Red Bricks",
  description:
    "Get clear answers about red brick pricing starting at ₹9, tractor load minimums, Karimnagar delivery areas, breakage policies, and payment methods.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Pricing & Quotations",
      items: [
        {
          q: "What is the exact price of red bricks in Karimnagar?",
          a: `Our red clay bricks start at ₹9 per brick. The final delivered price per brick is determined by two factors: total quantity ordered (bulk discounts apply) and exact delivery location in Karimnagar to compute freight and fuel charges. ${COMPANY.priceNote}`,
        },
        {
          q: "Are there any hidden broker or agent commissions in your price?",
          a: "No. You deal directly with Karimnagar Red Bricks. We provide direct manufacturer pricing with zero middleman commissions. All transport and unloading terms are stated clearly before vehicle dispatch.",
        },
        {
          q: "Do you offer bulk discounts for commercial or apartment projects?",
          a: `Yes. For bulk orders (multiple truck loads or ongoing construction phases), volume-based pricing is available. Contact our dispatch desk on WhatsApp (${COMPANY.phoneDisplay}) for bulk commercial pricing.`,
        },
      ],
    },
    {
      category: "Delivery, Transport & Minimum Orders",
      items: [
        {
          q: "What is the minimum order quantity for site delivery?",
          a: `Standard dispatches are handled in tractor trolley loads (typically ${COMPANY.placeholders.minimumOrderQuantity} to ${COMPANY.placeholders.deliveryVehicleCapacity} bricks) or full multi-axle truck loads. For smaller trial batches or specific site limits, please contact our dispatch team.`,
        },
        {
          q: "Which delivery areas are covered in and around Karimnagar?",
          a: `We supply across Karimnagar City, surrounding mandals, and regional construction corridors including ${COMPANY.placeholders.serviceAreas}.`,
        },
        {
          q: "Can tractors deliver to narrow residential streets in Karimnagar?",
          a: "Yes. We maintain flexible transport options including agile tractor trolleys designed specifically for tight residential lanes and colonies where heavy lorries cannot enter.",
        },
        {
          q: "How much advance notice is required to schedule a delivery?",
          a: "We usually dispatch within [DISPATCH_TIMELINE] (typically same-day or next-morning) depending on current stock levels and vehicle availability. Please confirm with our dispatch desk on WhatsApp.",
        },
      ],
    },
    {
      category: "Quality, Breakage & Quantity Guarantees",
      items: [
        {
          q: "What is your 'Zero Breakage' policy?",
          a: "We stack and pack bricks using interlocking methods on flatbed vehicles and instruct our loading and unloading crews to handle every brick with care. Unlike unverified local vendors who write off 5% to 8% as normal breakage loss, we ensure all bricks arrive structurally intact at your site.",
        },
        {
          q: "How do you ensure exact quantity without shortages?",
          a: "We operate on our strict promise of 'No compromise in quality and quantity'. Our team performs pre-dispatch counting and transparent tallying so you receive 100% of the brick units you purchased.",
        },
        {
          q: "What are the standard dimensions and technical specifications of your red bricks?",
          a: `Our bricks are traditional kiln-fired solid red clay bricks. Key parameters: Size: ${COMPANY.placeholders.brickSize}, Grade: ${COMPANY.placeholders.brickGrade}, Compressive Strength: ${COMPANY.placeholders.compressiveStrength}. Full batch certificates available upon client request.`,
        },
      ],
    },
    {
      category: "Payment & Invoicing",
      items: [
        {
          q: "What payment methods do you accept?",
          a: "We accept UPI (Google Pay, PhonePe, Paytm), Direct Bank Transfer (IMPS/NEFT/RTGS), and cash on site delivery verification.",
        },
        {
          q: "Is GST invoice provided for registered contractors?",
          a: `Yes, official tax invoices with GST registration number (${COMPANY.placeholders.gstNumber}) can be generated for registered commercial contractors and builders.`,
        },
      ],
    },
  ];

  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#1F2328] text-[#F7F5F0] py-14 sm:py-18 relative">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2A900] block mb-2">
              Transparency &amp; Support
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F0] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base text-[#F7F5F0]/80 leading-relaxed">
              Find transparent answers regarding our ₹9 starting price, tractor delivery areas across Karimnagar, our Zero Breakage Guarantee, and order processes.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* FAQ Content Section */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#1F2328] border-b border-[#5B6470]/20 pb-2">
                {cat.category}
              </h2>

              <div className="space-y-3">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="bg-white p-5 rounded-lg border border-[#5B6470]/20 shadow-sm"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#1F2328] flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#F2A900] shrink-0 mt-0.5" />
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6470] mt-2.5 pl-6 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Unanswered Questions Box */}
          <div className="bg-[#1F2328] text-[#F7F5F0] rounded-lg p-6 sm:p-8 border border-[#5B6470]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-[#F7F5F0]">
                Have a specific question about your site in Karimnagar?
              </h3>
              <p className="text-xs text-[#F7F5F0]/75">
                Our team is available on WhatsApp to answer questions regarding delivery access, customized tractor loads, or batch testing.
              </p>
            </div>

            <a
              href={buildWhatsAppLink("Hello Karimnagar Red Bricks, I have a question about brick supply in Karimnagar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#F2A900] hover:bg-[#D99400] text-[#1F2328] font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Request a Delivered Price Quote?"
        subtitle="Call or WhatsApp our Karimnagar dispatch desk for quick scheduling and verified batch counts."
      />

    </div>
  );
}
