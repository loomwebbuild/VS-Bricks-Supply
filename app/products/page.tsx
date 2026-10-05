import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import { MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PVC, RBS & VBS Red Bricks | VS Bricks Supply (Karimnagar Red Bricks)",
  description:
    "Explore our complete product lineup: PVC Red Bricks (Premium Quality), RBS Bricks (Heavy Duty), and VBS Bricks (High Density). Starting at ₹9 across Telangana.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#1F1712] text-[#FBF8F3] py-14 sm:py-18 relative">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C89D7C] block mb-2">
              Official Product Catalogue · {COMPANY.slogans.territory}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FBF8F3] tracking-tight">
              PVC, RBS &amp; VBS Red Clay Bricks
            </h1>
            <p className="mt-4 text-base text-[#E8E0D5]/80 leading-relaxed">
              Kiln-fired, solid red clay bricks manufactured with distinct hallmark stamps. Engineered for maximum compressive resistance, plumb masonry alignment, and zero breakage during transport.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 bg-[#78350F] text-[#FBF8F3] font-bold px-4 py-2.5 rounded-lg shadow-md border border-[#9A4B1A]/40">
              <span className="text-sm uppercase tracking-wider">Direct Supply Price:</span>
              <span className="text-xl font-black">Starting at ₹9 / Brick</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* Products In-Depth Grid */}
      <section className="py-16 sm:py-20 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {COMPANY.products.map((prod, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={prod.id}
                id={prod.id}
                className="bg-white rounded-xl border border-[#E8E0D5] overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Product Image Box */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#E8E0D5] bg-[#EFE9DF] group">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#1F1712] text-[#FBF8F3] text-xs font-bold py-1 px-3 rounded shadow">
                      {prod.stampName}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#78350F] text-[#FBF8F3] text-xs font-bold py-1 px-3 rounded shadow border border-[#9A4B1A]/40">
                      Starting ₹9/Brick
                    </div>
                  </div>
                </div>

                {/* Product Text & Specifications */}
                <div className={`lg:col-span-7 space-y-4 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#78350F]">
                      {prod.badge}
                    </span>
                    <span className="text-xs text-[#A89A8F]">·</span>
                    <span className="text-xs font-semibold text-[#1F1712]">
                      {COMPANY.slogans.secondary}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#1F1712]">
                    {prod.title}
                  </h2>

                  <p className="text-sm font-semibold text-[#78350F]">
                    {prod.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Specification Table for this model */}
                  <div className="bg-[#FBF8F3] rounded-lg p-4 border border-[#E8E0D5] space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2 pb-1 border-b border-[#E8E0D5]">
                      <div>
                        <span className="text-[#6B5B52] block">Stamp Mark:</span>
                        <span className="font-bold text-[#1F1712]">{prod.specs.stamp}</span>
                      </div>
                      <div>
                        <span className="text-[#6B5B52] block">Standard Price:</span>
                        <span className="font-bold text-[#1F1712]">Starting at ₹9/Brick</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pb-1 border-b border-[#E8E0D5]">
                      <div>
                        <span className="text-[#6B5B52] block">Kiln Process:</span>
                        <span className="text-[#1F1712]">{prod.specs.firing}</span>
                      </div>
                      <div>
                        <span className="text-[#6B5B52] block">Density:</span>
                        <span className="text-[#1F1712]">{prod.specs.density}</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <span className="text-[#6B5B52] block">Best Application:</span>
                      <span className="font-semibold text-[#1F1712]">{prod.specs.idealFor}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildWhatsAppLink(`Hello VS Bricks Supply, I would like to order ${prod.title} (${prod.stampName}) at ₹9/brick.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Order {prod.stampName} on WhatsApp</span>
                    </a>

                    <Link
                      href="/calculator"
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-lg bg-[#1F1712] hover:bg-[#2E231C] text-[#FBF8F3] font-semibold text-xs transition-colors"
                    >
                      <span>Calculate Quantity Needed</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C89D7C]" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Specifications Master Table */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E8E0D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78350F] block mb-2">
              Engineering Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1F1712] tracking-tight">
              Product Specification Matrix
            </h2>
          </div>

          <div className="bg-[#FBF8F3] rounded-xl border border-[#E8E0D5] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1F1712] text-[#FBF8F3] border-b border-[#3D3027]">
                    <th className="py-3 px-4 sm:px-6 font-bold uppercase tracking-wider">Parameter</th>
                    <th className="py-3 px-4 sm:px-6 font-bold text-[#C89D7C]">PVC Red Brick</th>
                    <th className="py-3 px-4 sm:px-6 font-bold text-[#FBF8F3]">RBS Red Brick</th>
                    <th className="py-3 px-4 sm:px-6 font-bold text-[#FBF8F3]">VBS Red Brick</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E0D5] text-[#1F1712]">
                  <tr className="hover:bg-white">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#6B5B52]">Stamp Hallmark</td>
                    <td className="py-3 px-4 sm:px-6 font-black text-[#1F1712]">PVC</td>
                    <td className="py-3 px-4 sm:px-6 font-bold">RBS</td>
                    <td className="py-3 px-4 sm:px-6 font-bold">VBS</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#6B5B52]">Standard Base Price</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#1F1712]">Starting at ₹9/Brick</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#1F1712]">Starting at ₹9/Brick</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-[#1F1712]">Starting at ₹9/Brick</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#6B5B52]">Primary Characteristic</td>
                    <td className="py-3 px-4 sm:px-6">Strong · Durable · Cost Effective</td>
                    <td className="py-3 px-4 sm:px-6">Heavy Load Structural Endurance</td>
                    <td className="py-3 px-4 sm:px-6">High Density &amp; Clean Edges</td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#6B5B52]">Breakage Policy</td>
                    <td className="py-3 px-4 sm:px-6 text-emerald-700 font-semibold" colSpan={3}>
                      Zero Breakage Guarantee on all models
                    </td>
                  </tr>
                  <tr className="hover:bg-white">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#6B5B52]">Delivery Coverage</td>
                    <td className="py-3 px-4 sm:px-6 font-medium" colSpan={3}>
                      All over Telangana (Karimnagar, Warangal, Hyderabad, Nizamabad &amp; more)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Order PVC, RBS or VBS Red Bricks?"
        subtitle="Call or WhatsApp us now to confirm stock availability, tractor trolley schedules, and delivery rates."
      />

    </div>
  );
}
