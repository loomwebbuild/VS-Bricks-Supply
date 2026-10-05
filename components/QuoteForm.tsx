"use client";

import React, { useState } from "react";
import { COMPANY, buildWhatsAppLink } from "@/lib/site-config";
import { MessageSquare, Mail, CheckCircle2 } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    quantity: "3000",
    brickType: "PVC Red Bricks (Premium Flagship)",
    useType: "Load-Bearing House Construction",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (!formData.location.trim()) {
      errs.location = "Please enter your delivery location/site in Telangana";
    }

    if (!formData.quantity || parseInt(formData.quantity) <= 0) {
      errs.quantity = "Please enter estimated brick quantity required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructFormattedMessage = () => {
    return `*New Red Brick Quote Request - VS Bricks Supply (Karimnagar Red Bricks)*
---------------------------------------
👤 *Customer Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
📍 *Delivery Location:* ${formData.location} (Telangana)
🧱 *Brick Type Selected:* ${formData.brickType}
🔢 *Quantity Required:* ${Number(formData.quantity).toLocaleString("en-IN")} Bricks
🏗️ *Project Application:* ${formData.useType}
💬 *Additional Notes:* ${formData.message || "None provided"}
---------------------------------------
Please share your delivered quotation (starting at ₹9/brick base rate) including freight charges to my site location.`;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructFormattedMessage();
    const whatsappUrl = buildWhatsAppLink(message);
    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleMailtoFallback = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Brick Quote Request - ${formData.name} (${formData.location})`);
    const body = encodeURIComponent(constructFormattedMessage());
    window.location.href = `mailto:${COMPANY.placeholders.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-xl border border-[#E8E0D5] shadow-md p-6 sm:p-8">
      
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-xl font-bold text-[#1F1712]">
            Enquiry Prepared for WhatsApp
          </h3>
          <p className="text-sm text-[#6B5B52] max-w-md mx-auto">
            Your quotation details have been prefilled. If WhatsApp did not open automatically, click the button below to send your inquiry directly to our dispatch team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={buildWhatsAppLink(constructFormattedMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Open in WhatsApp</span>
            </a>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-semibold text-[#6B5B52] hover:text-[#1F1712] underline"
            >
              Edit Inquiry Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmitWhatsApp} className="space-y-4 sm:space-y-5">
          
          <div className="border-b border-[#E8E0D5] pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1F1712]">
                Request a Direct Supply Quotation
              </h3>
              <span className="bg-[#78350F] text-[#FBF8F3] font-bold text-xs px-2.5 py-0.5 rounded border border-[#9A4B1A]/40">
                STARTING ₹9/BRICK
              </span>
            </div>
            <p className="text-xs text-[#6B5B52] mt-1">
              Supply all over Telangana. Direct dispatch for PVC, RBS, and VBS red clay bricks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name-input" className="block text-xs font-bold text-[#1F1712] mb-1">
                Your Name / Contractor Name *
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Reddy"
                className={`w-full px-3 py-2 text-sm border rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none ${
                  errors.name ? "border-[#78350F] ring-1 ring-[#78350F]" : "border-[#D7CCC8] focus:border-[#78350F]"
                }`}
              />
              {errors.name && <p className="text-[11px] text-[#78350F] mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone-input" className="block text-xs font-bold text-[#1F1712] mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                id="phone-input"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98765 43210"
                className={`w-full px-3 py-2 text-sm border rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none ${
                  errors.phone ? "border-[#78350F] ring-1 ring-[#78350F]" : "border-[#D7CCC8] focus:border-[#78350F]"
                }`}
              />
              {errors.phone && <p className="text-[11px] text-[#78350F] mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Delivery Location */}
            <div>
              <label htmlFor="location-input" className="block text-xs font-bold text-[#1F1712] mb-1">
                Delivery Location / Site Area in Telangana *
              </label>
              <input
                id="location-input"
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Karimnagar / Warangal / Hyderabad"
                className={`w-full px-3 py-2 text-sm border rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none ${
                  errors.location ? "border-[#78350F] ring-1 ring-[#78350F]" : "border-[#D7CCC8] focus:border-[#78350F]"
                }`}
              />
              {errors.location && <p className="text-[11px] text-[#78350F] mt-1">{errors.location}</p>}
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity-input" className="block text-xs font-bold text-[#1F1712] mb-1">
                Quantity Required (Approx Bricks) *
              </label>
              <input
                id="quantity-input"
                type="number"
                step="500"
                min="500"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 3000"
                className={`w-full px-3 py-2 text-sm border rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none tabular-nums ${
                  errors.quantity ? "border-[#78350F] ring-1 ring-[#78350F]" : "border-[#D7CCC8] focus:border-[#78350F]"
                }`}
              />
              {errors.quantity && <p className="text-[11px] text-[#78350F] mt-1">{errors.quantity}</p>}
            </div>
          </div>

          {/* Brick Model Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="brick-model-select" className="block text-xs font-bold text-[#1F1712] mb-1">
                Preferred Brick Variety
              </label>
              <select
                id="brick-model-select"
                value={formData.brickType}
                onChange={(e) => setFormData({ ...formData, brickType: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-[#D7CCC8] rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none focus:border-[#78350F] font-medium"
              >
                <option value="PVC Red Bricks (Premium Flagship)">PVC Red Bricks (Premium Flagship - Stamped PVC)</option>
                <option value="RBS Red Bricks (Heavy Duty Structural)">RBS Red Bricks (First Quality - Stamped RBS)</option>
                <option value="VBS Red Bricks (High Density Interlocking)">VBS Red Bricks (High Density - Stamped VBS)</option>
                <option value="Any First Quality Variety (Best Rate)">Any First Quality Variety (Best Available Batch)</option>
              </select>
            </div>

            <div>
              <label htmlFor="use-type-select" className="block text-xs font-bold text-[#1F1712] mb-1">
                Construction Application
              </label>
              <select
                id="use-type-select"
                value={formData.useType}
                onChange={(e) => setFormData({ ...formData, useType: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-[#D7CCC8] rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none focus:border-[#78350F]"
              >
                <option value="Load-Bearing House Construction">Load-Bearing House Construction (9&quot; Wall)</option>
                <option value="Compound & Boundary Wall">Compound &amp; Boundary Wall</option>
                <option value="Partition & Interior Wall">Partition &amp; Interior Wall (4.5&quot; Wall)</option>
                <option value="Foundation & Basement Masonry">Foundation &amp; Basement Masonry</option>
                <option value="Commercial / Multi-Storey Builder Order">Commercial / Multi-Storey Builder Order</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message-input" className="block text-xs font-bold text-[#1F1712] mb-1">
              Additional Notes / Timing Requirements (Optional)
            </label>
            <textarea
              id="message-input"
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Need delivery by tractor next Monday morning. Road is accessible for truck."
              className="w-full px-3 py-2 text-sm border border-[#D7CCC8] rounded-lg bg-[#FAF7F2] text-[#1F1712] focus:outline-none focus:border-[#78350F]"
            />
          </div>

          <p className="text-[11px] text-[#6B5B52] leading-tight">
            * {COMPANY.priceNote} Zero breakage and exact quantity guaranteed on all vehicle dispatches.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all shadow-md active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Submit &amp; Open in WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleMailtoFallback}
              className="inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-lg bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#1F1712] font-semibold text-xs border border-[#D7CCC8] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#6B5B52]" />
              <span>Send via Email</span>
            </button>
          </div>

        </form>
      )}

    </div>
  );
}
