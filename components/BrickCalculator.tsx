"use client";

import React, { useState, useMemo } from "react";
import { CALCULATOR_CONSTANTS, COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { Calculator, MessageSquare, RefreshCw, Info } from "lucide-react";

interface BrickCalculatorProps {
  isTeaser?: boolean;
}

export function BrickCalculator({ isTeaser = false }: BrickCalculatorProps) {
  const [unit, setUnit] = useState<"ft" | "m">("ft");
  const [length, setLength] = useState<number>(30);
  const [height, setHeight] = useState<number>(10);
  const [wallType, setWallType] = useState<"4.5" | "9">("9");
  const [openingsArea, setOpeningsArea] = useState<number>(20);
  const [wastagePercent, setWastagePercent] = useState<number>(CALCULATOR_CONSTANTS.DEFAULT_WASTAGE_PERCENT);

  const calculations = useMemo(() => {
    const rawGrossArea = Math.max(0, Number(length) || 0) * Math.max(0, Number(height) || 0);
    const rawDeductions = Math.max(0, Number(openingsArea) || 0);

    const grossAreaSqFt = unit === "m" ? rawGrossArea * CALCULATOR_CONSTANTS.SQMETERS_TO_SQFEET : rawGrossArea;
    const deductionsSqFt = unit === "m" ? rawDeductions * CALCULATOR_CONSTANTS.SQMETERS_TO_SQFEET : rawDeductions;
    const netAreaSqFt = Math.max(0, grossAreaSqFt - deductionsSqFt);

    const ratePerSqFt =
      wallType === "4.5"
        ? CALCULATOR_CONSTANTS.BRICKS_PER_SQFT_HALF_BRICK_WALL_4_5_INCH
        : CALCULATOR_CONSTANTS.BRICKS_PER_SQFT_FULL_BRICK_WALL_9_INCH;

    const baseBricks = Math.round(netAreaSqFt * ratePerSqFt);
    const wastageBricks = Math.round(baseBricks * (wastagePercent / 100));
    const totalBricks = baseBricks + wastageBricks;
    const estimatedCost = totalBricks * CALCULATOR_CONSTANTS.BASE_RATE_PER_BRICK;

    return {
      grossAreaSqFt: Math.round(grossAreaSqFt * 10) / 10,
      netAreaSqFt: Math.round(netAreaSqFt * 10) / 10,
      baseBricks,
      wastageBricks,
      totalBricks,
      estimatedCost,
      ratePerSqFt,
    };
  }, [unit, length, height, wallType, openingsArea, wastagePercent]);

  const whatsappMessage = useMemo(() => {
    return `Hello VS Bricks Supply (Karimnagar Red Bricks), I calculated a brick estimate for my project in Telangana:
- Wall Dimensions: ${length} ${unit} x ${height} ${unit} (${wallType}" wall)
- Net Wall Area: ${calculations.netAreaSqFt} sq.ft
- Estimated Bricks Needed: ${calculations.totalBricks.toLocaleString("en-IN")} bricks (incl. ${wastagePercent}% allowance)
- Approx Material Base Cost: ₹${calculations.estimatedCost.toLocaleString("en-IN")} (@ ₹${CALCULATOR_CONSTANTS.BASE_RATE_PER_BRICK}/brick starting price)

Please provide a final price quotation (PVC / RBS / VBS) with delivery to my site location.`;
  }, [length, height, unit, wallType, calculations, wastagePercent]);

  const handleReset = () => {
    setLength(30);
    setHeight(10);
    setWallType("9");
    setOpeningsArea(20);
    setWastagePercent(5);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E8E0D5] shadow-md overflow-hidden">
      
      {/* Header Bar */}
      <div className="bg-[#1F1712] text-[#FBF8F3] p-4 sm:p-6 border-b border-[#3D3027] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#C89D7C]" />
            <h3 className="text-base sm:text-lg font-bold text-[#FBF8F3]">
              Wall Brick Quantity &amp; Cost Estimator
            </h3>
          </div>
          <p className="text-xs text-[#E8E0D5]/75 mt-0.5">
            Engineering formula estimate for 4.5&quot; and 9&quot; brick masonry walls.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8E0D5] hover:text-white transition-colors py-1 px-2.5 rounded bg-[#2E231C] border border-[#3D3027]"
          type="button"
        >
          <RefreshCw className="w-3 h-3 text-[#C89D7C]" />
          <span>Reset</span>
        </button>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Unit Toggle & Wall Thickness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1712] mb-1.5">
                Measurement Unit
              </label>
              <div className="grid grid-cols-2 gap-2 bg-[#F4EDE4] p-1 rounded-lg border border-[#E8E0D5]">
                <button
                  type="button"
                  onClick={() => setUnit("ft")}
                  className={`py-1.5 text-xs font-bold rounded transition-colors ${
                    unit === "ft" ? "bg-[#78350F] text-[#FBF8F3] shadow-sm" : "text-[#6B5B52] hover:text-[#1F1712]"
                  }`}
                >
                  Feet (ft)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("m")}
                  className={`py-1.5 text-xs font-bold rounded transition-colors ${
                    unit === "m" ? "bg-[#78350F] text-[#FBF8F3] shadow-sm" : "text-[#6B5B52] hover:text-[#1F1712]"
                  }`}
                >
                  Meters (m)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1712] mb-1.5">
                Wall Thickness / Type
              </label>
              <div className="grid grid-cols-2 gap-2 bg-[#F4EDE4] p-1 rounded-lg border border-[#E8E0D5]">
                <button
                  type="button"
                  onClick={() => setWallType("9")}
                  className={`py-1.5 text-xs font-bold rounded transition-colors ${
                    wallType === "9" ? "bg-[#78350F] text-[#FBF8F3] shadow-sm" : "text-[#6B5B52] hover:text-[#1F1712]"
                  }`}
                >
                  9&quot; Load-Bearing
                </button>
                <button
                  type="button"
                  onClick={() => setWallType("4.5")}
                  className={`py-1.5 text-xs font-bold rounded transition-colors ${
                    wallType === "4.5" ? "bg-[#78350F] text-[#FBF8F3] shadow-sm" : "text-[#6B5B52] hover:text-[#1F1712]"
                  }`}
                >
                  4.5&quot; Partition
                </button>
              </div>
            </div>
          </div>

          {/* Wall Length & Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="wall-length" className="block text-xs font-bold text-[#1F1712] mb-1">
                Wall Length ({unit === "ft" ? "Feet" : "Meters"})
              </label>
              <input
                id="wall-length"
                type="number"
                min="1"
                step="0.5"
                value={length || ""}
                onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-medium border border-[#D7CCC8] rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none focus:border-[#78350F] focus:ring-1 focus:ring-[#78350F] tabular-nums"
                placeholder="e.g. 30"
              />
              <span className="text-[11px] text-[#6B5B52] mt-1 block">Total length of running wall</span>
            </div>

            <div>
              <label htmlFor="wall-height" className="block text-xs font-bold text-[#1F1712] mb-1">
                Wall Height ({unit === "ft" ? "Feet" : "Meters"})
              </label>
              <input
                id="wall-height"
                type="number"
                min="1"
                step="0.5"
                value={height || ""}
                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-medium border border-[#D7CCC8] rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none focus:border-[#78350F] focus:ring-1 focus:ring-[#78350F] tabular-nums"
                placeholder="e.g. 10"
              />
              <span className="text-[11px] text-[#6B5B52] mt-1 block">Standard room height is 10-11 ft</span>
            </div>
          </div>

          {/* Deductions & Wastage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8E0D5]">
            <div>
              <label htmlFor="openings-area" className="block text-xs font-bold text-[#1F1712] mb-1">
                Openings / Deductions ({unit === "ft" ? "Sq. Ft" : "Sq. M"})
              </label>
              <input
                id="openings-area"
                type="number"
                min="0"
                step="1"
                value={openingsArea}
                onChange={(e) => setOpeningsArea(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-medium border border-[#D7CCC8] rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none focus:border-[#78350F] focus:ring-1 focus:ring-[#78350F] tabular-nums"
                placeholder="0"
              />
              <span className="text-[11px] text-[#6B5B52] mt-1 block">Door &amp; window areas deducted</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1F1712] mb-1">
                Cutting &amp; Handling Wastage
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[0, 5, 10].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setWastagePercent(val)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                      wastagePercent === val
                        ? "bg-[#78350F] text-[#FBF8F3] border-[#78350F]"
                        : "bg-[#FAF7F2] text-[#6B5B52] border-[#E8E0D5] hover:border-[#78350F]"
                    }`}
                  >
                    {val}%
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-[#6B5B52] mt-1 block">5% recommended for clean cuts</span>
            </div>
          </div>

          {/* Note */}
          <div className="p-3 bg-[#F4EDE4] rounded-lg border border-[#E8E0D5] text-xs text-[#1F1712] flex items-start gap-2">
            <Info className="w-4 h-4 text-[#78350F] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#78350F]">Calculation Standard: </span>
              Based on {calculations.ratePerSqFt} bricks / sq.ft for {wallType}&quot; masonry with 10-12mm mortar joints.
            </div>
          </div>

        </div>

        {/* Right Output Summary Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#1F1712] text-[#FBF8F3] p-6 rounded-xl border border-[#3D3027] shadow-xl">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#3D3027] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C89D7C]">
                Estimation Result
              </span>
              <span className="text-xs text-[#E8E0D5]/80 font-mono">
                {wallType}&quot; Wall · {calculations.netAreaSqFt} sq.ft
              </span>
            </div>

            {/* Total Bricks Metric */}
            <div>
              <span className="text-xs text-[#E8E0D5]/70 block">Estimated Bricks Required</span>
              <div className="text-3xl sm:text-4xl font-black text-[#FBF8F3] tabular-nums tracking-tight mt-0.5">
                {calculations.totalBricks.toLocaleString("en-IN")}{" "}
                <span className="text-sm font-medium text-[#C89D7C]">Bricks</span>
              </div>
              <p className="text-xs text-[#E8E0D5]/60 mt-1">
                Includes {calculations.baseBricks.toLocaleString("en-IN")} base + {calculations.wastageBricks.toLocaleString("en-IN")} ({wastagePercent}%) allowance
              </p>
            </div>

            {/* Cost Metric */}
            <div className="pt-3 border-t border-[#3D3027]">
              <span className="text-xs text-[#E8E0D5]/70 block">Approximate Material Cost</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C89D7C] tabular-nums mt-0.5">
                ₹{calculations.estimatedCost.toLocaleString("en-IN")}*
              </div>
              <p className="text-[11px] text-[#E8E0D5]/60 mt-1">
                *Calculated at starting base rate of ₹9/brick. {COMPANY.priceNote}
              </p>
            </div>

            {/* Breakdown Mini Table */}
            <div className="text-xs space-y-1.5 pt-3 border-t border-[#3D3027] text-[#E8E0D5]/80">
              <div className="flex justify-between">
                <span>Net Masonry Area:</span>
                <span className="font-mono tabular-nums text-[#FBF8F3]">{calculations.netAreaSqFt} sq.ft</span>
              </div>
              <div className="flex justify-between">
                <span>Standard Brick Rate:</span>
                <span className="font-mono tabular-nums text-[#C89D7C] font-bold">Starting ₹9/Brick</span>
              </div>
              <div className="flex justify-between">
                <span>Breakage Guarantee:</span>
                <span className="text-emerald-400 font-bold">Zero Breakage</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-[#3D3027] space-y-2">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send this estimate on WhatsApp</span>
            </a>

            <p className="text-[11px] text-center text-[#E8E0D5]/60">
              Opens WhatsApp with prefilled wall dimensions and brick quantities.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
