"use client";

import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/site-config";

export function ComparisonTable() {
  const comparisonItems = [
    {
      feature: "Transit Breakage Policy",
      typical: "3% to 8% broken bricks treated as normal site loss with no replacement.",
      ours: "Zero Breakage Guarantee — packed, loaded, and handled to reach your site intact.",
      advantage: true,
    },
    {
      feature: "Quantity & Tally Verification",
      typical: "Estimations often short by dozens of bricks per tractor load.",
      ours: "Exact quantity guaranteed with transparent batch tallying before dispatch.",
      advantage: true,
    },
    {
      feature: "Brick Composition & Firing",
      typical: "Inconsistent kiln batches with mixed under-burnt or over-burnt pieces.",
      ours: "First-quality kiln-fired red clay providing uniform density and true bonding.",
      advantage: true,
    },
    {
      feature: "Pricing Transparency",
      typical: "Hidden broker/agent markups added at delivery point.",
      ours: "Direct supply starting at ₹9/brick with upfront freight calculation.",
      advantage: true,
    },
    {
      feature: "Delivery Scheduling",
      typical: "Frequent delays that keep masons waiting on site.",
      ours: "Scheduled tractor & truck dispatch aligned with your daily construction plan.",
      advantage: true,
    },
    {
      feature: "Customer Support & Inquiry",
      typical: "Unreachable middle agents with unclear dispute resolution.",
      ours: "Direct phone and instant WhatsApp updates from Karimnagar supply desk.",
      advantage: true,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E8E0D5] shadow-md overflow-hidden">
      
      {/* Table Title Bar */}
      <div className="bg-[#1F1712] text-[#FBF8F3] p-4 sm:p-6 border-b border-[#3D3027] flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#FBF8F3]">
            Supplier Comparison: Typical Local Vendors vs. VS Bricks Supply
          </h3>
          <p className="text-xs text-[#E8E0D5]/75 mt-0.5">
            Clear, defensible standards based on actual site delivery practices in Telangana.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#C89D7C] font-semibold bg-[#2E231C] py-1 px-2.5 rounded-lg border border-[#3D3027]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Verified Standard</span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#E8E0D5] bg-[#FBF8F3]">
              <th className="py-3.5 px-6 font-bold text-xs uppercase tracking-wider text-[#1F1712] w-1/4">
                Quality &amp; Service Parameter
              </th>
              <th className="py-3.5 px-6 font-semibold text-xs uppercase tracking-wider text-[#6B5B52] w-3/8">
                Typical Local Suppliers
              </th>
              <th className="py-3.5 px-6 font-bold text-xs uppercase tracking-wider text-[#78350F] bg-[#F4EDE4] w-3/8 border-l border-[#E8E0D5]">
                VS Bricks Supply (Karimnagar Red Bricks)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8E0D5]">
            {comparisonItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                <td className="py-4 px-6 font-semibold text-[#1F1712] text-xs sm:text-sm">
                  {item.feature}
                </td>
                <td className="py-4 px-6 text-[#6B5B52] text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-[#A89A8F] shrink-0 mt-0.5" />
                    <span>{item.typical}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-[#1F1712] font-medium bg-[#F4EDE4]/40 border-l border-[#E8E0D5] text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5" />
                    <span>{item.ours}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="md:hidden divide-y divide-[#E8E0D5] p-4 space-y-4">
        {comparisonItems.map((item, idx) => (
          <div key={idx} className="pt-3 first:pt-0 space-y-2">
            <h4 className="font-bold text-[#1F1712] text-sm">{item.feature}</h4>
            
            <div className="bg-[#FAF7F2] p-2.5 rounded-lg text-xs text-[#6B5B52] flex items-start gap-2">
              <X className="w-4 h-4 text-[#A89A8F] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#1F1712]">Typical Vendor:</span>
                {item.typical}
              </div>
            </div>

            <div className="bg-[#F4EDE4] border border-[#E8E0D5] p-2.5 rounded-lg text-xs text-[#1F1712] flex items-start gap-2">
              <Check className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#78350F]">VS Bricks Supply:</span>
                {item.ours}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="bg-[#FBF8F3] p-4 border-t border-[#E8E0D5] text-xs text-[#6B5B52] flex items-center justify-between">
        <span>* Our claims strictly adhere to our policy of &ldquo;No breakage&rdquo; &amp; &ldquo;No compromise in quality and quantity&rdquo;.</span>
      </div>

    </div>
  );
}
