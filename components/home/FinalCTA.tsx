"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

export function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-24 bg-[#0A0A0A] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 lg:p-16 rounded-2xl bg-gradient-to-r from-[#141414] via-[#101010] to-[#171717] border border-[#262626] relative overflow-hidden">
            {/* Red streak background styling */}
            <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Ready To Gear Up Your Organization?
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display uppercase leading-tight">
                START YOUR BULK <br />
                ENQUIRY TODAY.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Whether you are outfitting a full tournament, supplying an academy with seasonal gear, or stocking a retail store, ProBird Sports is ready with verified specs and competitive wholesale quotation terms.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-brand-red/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request a Bulk Quote</span>
                </button>

                <a
                  href="/products"
                  className="px-8 py-4 rounded-md bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white font-bold text-xs uppercase tracking-wider border border-[#333333] flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Catalogue</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                <span>Zero retail intermediary markups &bull; Dedicated procurement support &bull; Verified standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
