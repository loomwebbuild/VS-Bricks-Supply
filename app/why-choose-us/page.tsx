import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { TrustStrip } from "@/components/TrustStrip";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import {
  ShieldCheck,
  CheckCircle2,
  Truck,
  Scale,
  Layers,
  ArrowRight,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us | Karimnagar Red Bricks",
  description:
    "Discover how our strict quality control, verified quantity counting, and protective transit loading eliminate broken bricks and project delays in Karimnagar.",
};

export default function WhyChooseUsPage() {
  const pillars = [
    {
      title: "1. Zero Transit Breakage Guarantee",
      subtitle: "Eliminating the traditional 5-8% brick waste on site",
      icon: ShieldCheck,
      description:
        "Typical local suppliers dump bricks into loose trucks, causing friction and crushing over potholes. We enforce structured interlocking stacking on flatbed lorries and tractors, ensuring that 100% of your ordered bricks arrive intact and ready for the mason's trowel.",
      highlights: [
        "Palletized and tightly bound interlocking truck stacks",
        "Trained unloading crews prevent edge chippings",
        "Direct replacement policy if transit damage occurs",
      ],
    },
    {
      title: "2. No Compromise in Quality and Quantity",
      subtitle: "Exact tally verification on every tractor and lorry",
      icon: Scale,
      description:
        "Quantity shortfalls are one of the biggest hidden costs for contractors in Telangana. We maintain transparent batch counting records before dispatch. If you order 3,000 bricks, you receive exactly 3,000 bricks — verified on your site.",
      highlights: [
        "Transparent pre-dispatch tally verification",
        "Zero hidden shortages or uncounted broken pieces",
        "Full count confirmation upon unloading",
      ],
    },
    {
      title: "3. Consistent Kiln Firing & Geometry",
      subtitle: "Uniform clay density with sharp rectangular edges",
      icon: Layers,
      description:
        "Under-burnt (yellow/pale) bricks soak up excessive water and crack under load, while over-burnt (blackened) bricks deform. Our kiln firing process yields a consistent deep red hue with true square edges, resulting in cleaner mortar joints and lower plaster costs.",
      highlights: [
        "Even firing temperature prevents weak soft cores",
        "Minimal water absorption preventing dampness seepage",
        "Standardized height and length for straight masonry lines",
      ],
    },
    {
      title: "4. Direct Manufacturer Supply (₹9/Brick)",
      subtitle: "No broker markups or unexpected on-site surcharges",
      icon: Truck,
      description:
        "By dealing directly with Karimnagar Red Bricks, you eliminate 2 to 3 tiers of commission agents. We provide transparent base pricing starting at ₹9 per brick with fair, distance-based freight calculations stated upfront.",
      highlights: [
        "Direct stockyard pricing with no middlemen",
        "Clear invoice / transport breakdown before dispatch",
        "Immediate support directly from our dispatch manager",
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
              Our Quality &amp; Integrity Standards
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F0] tracking-tight">
              Why Builders Choose Karimnagar Red Bricks
            </h1>
            <p className="mt-4 text-base text-[#F7F5F0]/80 leading-relaxed">
              We operate on two simple, non-negotiable promises: <strong className="text-[#F7F5F0]">&ldquo;No breakage&rdquo;</strong> and <strong className="text-[#F7F5F0]">&ldquo;No compromise in quality and quantity&rdquo;</strong>. Here is how we ensure reliable performance on every single dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* 4 Pillars of Excellence */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-lg border border-[#5B6470]/20 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
                >
                  <div className={`lg:col-span-8 space-y-4 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B6470]">
                      <Icon className="w-4 h-4 text-[#1F2328]" />
                      <span>{pillar.subtitle}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-[#1F2328]">
                      {pillar.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#5B6470] leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#1F2328]">
                        {pillar.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1F2328] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`lg:col-span-4 ${isEven ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[4/3] rounded overflow-hidden bg-[#1F2328]/10 border border-[#5B6470]/20">
                      <Image
                        src={
                          idx === 0
                            ? COMPANY.images.delivery
                            : idx === 1
                            ? COMPANY.images.hero
                            : idx === 2
                            ? COMPANY.images.texture
                            : COMPANY.images.masonry
                        }
                        alt={pillar.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#5B6470]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B6470] block mb-2">
              Objective Market Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2328] tracking-tight">
              Typical Suppliers vs. Karimnagar Red Bricks
            </h2>
            <p className="mt-3 text-sm text-[#5B6470]">
              Clear differences in transit loss, tally honesty, and customer support.
            </p>
          </div>

          <ComparisonTable />

        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience Zero Breakage on Your Next Brick Delivery"
        subtitle="Call or WhatsApp us now to schedule your site delivery in Karimnagar with guaranteed exact counts and starting rates of ₹9/brick."
      />

    </div>
  );
}
