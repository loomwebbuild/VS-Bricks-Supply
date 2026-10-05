import React from "react";
import type { Metadata } from "next";
import { BrickCalculator } from "@/components/BrickCalculator";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import { COMPANY, CALCULATOR_CONSTANTS } from "@/lib/site-config";
import { Info, CheckCircle2, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brick Quantity & Cost Calculator | Karimnagar Red Bricks",
  description:
    "Calculate exact red brick requirements and estimated costs for 4.5-inch and 9-inch masonry walls in Karimnagar. Instant WhatsApp estimate sharing at ₹9/brick baseline.",
};

export default function CalculatorPage() {
  return (
    <div className="space-y-0">
      
      {/* Header */}
      <section className="bg-[#1F2328] text-[#F7F5F0] py-14 sm:py-18 relative">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2A900] block mb-2">
              Interactive Estimator Tool
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F5F0] tracking-tight">
              Red Brick Quantity &amp; Price Calculator
            </h1>
            <p className="mt-4 text-base text-[#F7F5F0]/80 leading-relaxed">
              Calculate how many red clay bricks you need for your house, compound wall, or partition project in Karimnagar. Get instant unit counts and estimated costs based on ₹9/brick baseline rate.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip variant="light" />

      {/* Main Calculator Body */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <BrickCalculator />

          {/* Practical Estimation Guidelines for Builders */}
          <div className="mt-12 bg-white rounded-lg border border-[#5B6470]/20 p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#5B6470]/15 pb-4">
              <h3 className="text-lg font-bold text-[#1F2328]">
                How the Estimation Formula Works
              </h3>
              <p className="text-xs text-[#5B6470] mt-1">
                Standard Indian civil engineering masonry estimation rules used by contractors and quantity surveyors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              
              <div className="space-y-3 bg-[#F7F5F0] p-4 rounded border border-[#5B6470]/15">
                <div className="flex items-center gap-2 font-bold text-[#1F2328]">
                  <span className="w-6 h-6 rounded bg-[#1F2328] text-white flex items-center justify-center text-xs">
                    1
                  </span>
                  <span>9-Inch External / Load-Bearing Wall</span>
                </div>
                <p className="text-xs text-[#5B6470] leading-relaxed">
                  A standard 9-inch double-leaf brick wall typically consumes approx <strong className="text-[#1F2328]">{CALCULATOR_CONSTANTS.BRICKS_PER_SQFT_FULL_BRICK_WALL_9_INCH} bricks per sq.ft</strong> of net wall elevation, accounting for 10-12mm cement-sand mortar bedding joints.
                </p>
              </div>

              <div className="space-y-3 bg-[#F7F5F0] p-4 rounded border border-[#5B6470]/15">
                <div className="flex items-center gap-2 font-bold text-[#1F2328]">
                  <span className="w-6 h-6 rounded bg-[#1F2328] text-white flex items-center justify-center text-xs">
                    2
                  </span>
                  <span>4.5-Inch Internal / Partition Wall</span>
                </div>
                <p className="text-xs text-[#5B6470] leading-relaxed">
                  A 4.5-inch single-leaf partition or perimeter wall typically consumes approx <strong className="text-[#1F2328]">{CALCULATOR_CONSTANTS.BRICKS_PER_SQFT_HALF_BRICK_WALL_4_5_INCH} bricks per sq.ft</strong> of net wall elevation.
                </p>
              </div>

            </div>

            <div className="space-y-2 text-xs text-[#5B6470] border-t border-[#5B6470]/15 pt-4">
              <p>
                <strong>Deductions Note:</strong> Always remember to subtract the total surface area of all doors, windows, and structural column offsets from your total wall length $\times$ height.
              </p>
              <p>
                <strong>Wastage Allowance:</strong> A 5% allowance is standard to account for triangular cuttings around gables, pipe conduit chasing, and boundary corners. Because of our <strong className="text-[#1F2328]">Zero Breakage Guarantee</strong>, you do not need to add the extra 8-10% allowance that typical suppliers require for broken transit rubble.
              </p>
              <p>
                <strong>Pricing Structure:</strong> {COMPANY.priceNote}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Convert Your Estimate into an Active Order?"
        subtitle="Send your estimated dimensions directly to our dispatch desk on WhatsApp or call for immediate tractor availability in Karimnagar."
        showCalculatorLink={false}
      />

    </div>
  );
}
