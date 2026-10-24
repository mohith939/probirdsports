"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Copy, Check, MessageSquare, Building2, Package, Sparkles } from "lucide-react";
import { generateWhatsAppUrl, hasConfiguredWhatsApp, WHATSAPP_BUSINESS_NUMBER } from "@/lib/whatsapp";

export interface BulkQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialCategory?: string;
  initialQuantity?: string | number;
}

export function BulkQuoteModal({
  isOpen,
  onClose,
  initialProduct = "",
  initialCategory = "",
  initialQuantity = "",
}: BulkQuoteModalProps) {
  const [name, setName] = useState("");
  const [orgType, setOrgType] = useState("Sports Academy / Club");
  const [itemsNeeded, setItemsNeeded] = useState(initialProduct || "");
  const [quantity, setQuantity] = useState(initialQuantity ? String(initialQuantity) : "");
  const [specifications, setSpecifications] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Sync initial values when modal opens
  useEffect(() => {
    if (initialProduct) {
      setItemsNeeded(initialProduct);
    }
    if (initialQuantity) {
      setQuantity(String(initialQuantity));
    }
  }, [initialProduct, initialQuantity]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildStructuredEnquiry = () => {
    const lines = [
      "Hello ProBird Sports,",
      "",
      "I would like to request an official wholesale / bulk quotation.",
      `• Contact Name: ${name.trim() || "Wholesale Buyer"}`,
      `• Organization: ${orgType}`,
      `• Equipment Required: ${itemsNeeded.trim() || "Multi-category equipment"}`,
    ];
    if (quantity.trim()) {
      lines.push(`• Estimated Quantity: ${quantity.trim()}`);
    }
    if (specifications.trim()) {
      lines.push(`• Custom Notes / Specs: ${specifications.trim()}`);
    }
    lines.push("");
    lines.push("Please share institutional pricing, tier availability, and delivery lead time.");
    lines.push("— Sent via ProBird Sports Portal");
    return lines.join("\n");
  };

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildStructuredEnquiry();
    const url = generateWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleCopy = () => {
    const text = buildStructuredEnquiry();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bulk-quote-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#121212] border border-[#2A2A2A] rounded-xl shadow-2xl overflow-hidden text-white"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#222222] bg-[#171717]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-red/15 flex items-center justify-center text-brand-red border border-brand-red/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 id="bulk-quote-title" className="text-lg font-bold tracking-tight text-white">
                Request a Bulk Quotation
              </h2>
              <p className="text-xs text-gray-400">
                Direct wholesale enquiry for schools, clubs, retailers & institutions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#252525] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppClick} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">WhatsApp Enquiry Launched</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Your prefilled bulk request has been prepared for WhatsApp chat. Our procurement team responds with verified wholesale rates and dispatch timelines.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-2 text-xs font-semibold rounded-md border border-[#333] hover:bg-[#222] text-gray-300 inline-flex items-center gap-2"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied Message" : "Copy Message Text"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold rounded-md bg-brand-red hover:bg-brand-redHover text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Notice regarding wholesale model */}
              <div className="p-3 rounded-lg bg-[#181818] border border-[#262626] flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white">Wholesale Quote-First Model:</strong> ProBird Sports customizes wholesale rates based on shipment volumes, institution credentials, and delivery destinations.
                </p>
              </div>

              {/* Grid fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="buyer-name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Name or Department *
                  </label>
                  <input
                    id="buyer-name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Coach David / Athletics Dept"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="buyer-org" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Buyer Category *
                  </label>
                  <select
                    id="buyer-org"
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  >
                    <option value="Sports Academy / Coaching Centre">Sports Academy / Coaching Centre</option>
                    <option value="School / College / University">School / College / University</option>
                    <option value="Sports Retailer / Reseller">Sports Retailer / Reseller</option>
                    <option value="Club / Team Management">Club / Team Management</option>
                    <option value="Corporate / Institutional Buyer">Corporate / Institutional Buyer</option>
                    <option value="Tournament Organizer">Tournament Organizer</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="items-needed" className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Equipment or Items Required *
                </label>
                <input
                  id="items-needed"
                  required
                  type="text"
                  value={itemsNeeded}
                  onChange={(e) => setItemsNeeded(e.target.value)}
                  placeholder="e.g. AeroStrike Footballs (Size 5), Cricket Leather Balls"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="estimated-qty" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Estimated Quantity
                  </label>
                  <input
                    id="estimated-qty"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 50 units / 5 cartons"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="specs" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Specific Sizes / Variants
                  </label>
                  <input
                    id="specs"
                    type="text"
                    value={specifications}
                    onChange={(e) => setSpecifications(e.target.value)}
                    placeholder="e.g. Size 5 only, White balls"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-[#222222] flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-[#121212]"
                >
                  <Send className="w-4 h-4" />
                  Initiate WhatsApp Quotation
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-3 px-4 rounded-lg bg-[#222222] hover:bg-[#2C2C2C] text-gray-200 font-semibold text-xs flex items-center justify-center gap-2 border border-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy Enquiry"}
                </button>
              </div>

              {!hasConfiguredWhatsApp() && (
                <p className="text-[11px] text-gray-400 text-center italic">
                  Note: Official WhatsApp destination number can be customized in environment variables (NEXT_PUBLIC_WHATSAPP_NUMBER).
                </p>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
