"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Shield, 
  Truck, 
  Users, 
  Star, 
  ArrowRight, 
  MessageSquare,
  Layers,
  FileSpreadsheet,
  Headset
} from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { generateWhatsAppUrl, buildGeneralBulkEnquiryMessage, hasConfiguredWhatsApp } from "@/lib/whatsapp";

export function BuiltForBulk() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("");

  const handleCardClick = (title: string) => {
    setEnquirySubject(title);
    setModalOpen(true);
  };

  const handleWhatsAppAction = (e: React.MouseEvent) => {
    if (!hasConfiguredWhatsApp()) {
      e.preventDefault();
      setEnquirySubject("Institutional Bulk Pricing");
      setModalOpen(true);
    }
  };

  return (
    <>
      <section className="relative bg-[#070707] text-white overflow-hidden border-b border-[#1A1A1A]">
        {/* Full Section Grid Container */}
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            {/* ================= LEFT CONTENT PANEL (7 cols on lg) ================= */}
            <div className="lg:col-span-7 px-5 sm:px-8 lg:px-12 py-12 lg:py-16 flex flex-col justify-between space-y-8 z-10 bg-[#070707]">
              {/* Header block */}
              <div className="space-y-4">
                {/* Outlined Badge */}
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-brand-red/60 bg-brand-red/10 text-brand-red text-[11px] font-black uppercase tracking-widest">
                    WHOLESALE & INSTITUTIONAL OPERATIONS
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
                  BUILT FOR <br />
                  <span className="text-brand-red">BULK BUYERS.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-300">
                  SPORTS EQUIPMENT FOR TEAMS, INSTITUTIONS AND BUSINESSES.
                </p>
              </div>

              {/* 2x2 Feature Cards Grid matching reference mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* CARD 1: MULTI-SPORT SOURCING */}
                <button
                  type="button"
                  onClick={() => handleCardClick("Multi-Sport Sourcing")}
                  className="group relative h-28 sm:h-32 rounded-lg overflow-hidden border border-[#262626] hover:border-brand-red transition-all duration-300 text-left shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Multi-Sport Sourcing"
                >
                  <Image
                    src="/images/card-1-multi-sport.jpg"
                    alt="Multi-Sport Sourcing - Cricket, Football, Basketball, Badminton"
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <div className="relative z-10 h-full p-3.5 flex flex-col justify-between">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded bg-brand-red/15 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4 text-brand-red" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-white leading-tight drop-shadow">
                        MULTI-SPORT <br />SOURCING
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-black/60 border border-white/30 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </button>

                {/* CARD 2: CUSTOMIZED QUOTATIONS */}
                <button
                  type="button"
                  onClick={() => handleCardClick("Customized Quotations")}
                  className="group relative h-28 sm:h-32 rounded-lg overflow-hidden border border-[#262626] hover:border-brand-red transition-all duration-300 text-left shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Customized Quotations"
                >
                  <Image
                    src="/images/card-2-custom-quotes.jpg"
                    alt="Customized Quotations Checklist and Equipment Orders"
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <div className="relative z-10 h-full p-3.5 flex flex-col justify-between">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded bg-brand-red/15 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <FileSpreadsheet className="w-4 h-4 text-brand-red" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-white leading-tight drop-shadow">
                        CUSTOMIZED <br />QUOTATIONS
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-black/60 border border-white/30 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </button>

                {/* CARD 3: TEAM & TOURNAMENT SUPPLY */}
                <button
                  type="button"
                  onClick={() => handleCardClick("Team & Tournament Supply")}
                  className="group relative h-28 sm:h-32 rounded-lg overflow-hidden border border-[#262626] hover:border-brand-red transition-all duration-300 text-left shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Team & Tournament Supply"
                >
                  <Image
                    src="/images/card-3-team-supply.jpg"
                    alt="Team and Tournament Equipment Supply"
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <div className="relative z-10 h-full p-3.5 flex flex-col justify-between">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded bg-brand-red/15 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-brand-red" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-white leading-tight drop-shadow">
                        TEAM & <br />TOURNAMENT SUPPLY
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-black/60 border border-white/30 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </button>

                {/* CARD 4: DIRECT CONSULTATION */}
                <button
                  type="button"
                  onClick={() => handleCardClick("Direct Consultation via WhatsApp")}
                  className="group relative h-28 sm:h-32 rounded-lg overflow-hidden border border-[#262626] hover:border-brand-red transition-all duration-300 text-left shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                  aria-label="Direct Consultation via WhatsApp"
                >
                  <Image
                    src="/images/card-4-direct-consultation.jpg"
                    alt="Direct Consultation on WhatsApp"
                    fill
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  <div className="relative z-10 h-full p-3.5 flex flex-col justify-between">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded bg-brand-red/15 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <Headset className="w-4 h-4 text-brand-red" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-white leading-tight drop-shadow">
                        DIRECT <br />CONSULTATION
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-black/60 border border-white/30 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </button>
              </div>

              {/* Action Buttons matching reference mockup */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={generateWhatsAppUrl(buildGeneralBulkEnquiryMessage())}
                  onClick={handleWhatsAppAction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl shadow-brand-red/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  {/* WhatsApp speech bubble icon */}
                  <svg
                    className="w-4 h-4 fill-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.004.577 1.764.793 2.806.793 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.776-5.768-5.776zm3.385 8.136c-.143.403-.717.741-1.025.787-.278.043-.642.067-1.042-.061-.252-.081-.577-.189-1.001-.371-.85-.367-1.401-1.229-1.443-1.285-.043-.057-.348-.463-.348-.885 0-.421.221-.628.299-.714.079-.086.172-.108.229-.108.057 0 .114.001.164.004.053.002.124-.02.193.146.071.171.243.593.264.636.021.043.036.093.007.15-.029.057-.043.093-.086.143-.043.05-.091.111-.13.15-.044.043-.09.09-.039.179.051.088.226.372.486.603.334.298.616.39.703.433.088.043.14.036.192-.023.053-.06.227-.265.287-.356.06-.091.121-.076.204-.045.083.031.528.249.619.294.091.045.152.067.174.105.022.038.022.219-.121.622zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.177L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  <span>ENQUIRE FOR INSTITUTIONAL PRICING</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/about"
                  className="px-6 py-3.5 rounded-md bg-[#131313] hover:bg-[#1A1A1A] text-gray-200 font-bold text-xs uppercase tracking-wider border border-[#2E2E2E] hover:border-gray-400 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>LEARN OUR MODEL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bottom 4 Trust Micro-Pillars matching reference mockup */}
              <div className="pt-6 border-t border-[#1C1C1C] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    RELIABLE <br />SUPPLY
                  </span>
                </div>

                <div className="flex items-center gap-2.5 sm:border-l sm:border-[#1E1E1E] sm:pl-4">
                  <Truck className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    ORGANIZATIONAL <br />PURCHASING
                  </span>
                </div>

                <div className="flex items-center gap-2.5 sm:border-l sm:border-[#1E1E1E] sm:pl-4">
                  <Users className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    MULTI-SPORT <br />COVERAGE
                  </span>
                </div>

                <div className="flex items-center gap-2.5 sm:border-l sm:border-[#1E1E1E] sm:pl-4">
                  <Star className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                    DEDICATED <br />SUPPORT
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT VISUAL WAREHOUSE SCENE (5 cols on lg) ================= */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden bg-black flex items-center justify-center">
              {/* Dynamic diagonal red accent cut matching mockup */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/bulk-buyers-warehouse.jpg"
                  alt="ProBird Sports Team Athletes and Institutional Equipment Warehouse Racks"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center lg:object-left hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Subtle gradient to merge cleanly with left side on smaller screens */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/60 via-transparent to-transparent hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={enquirySubject}
      />
    </>
  );
}
