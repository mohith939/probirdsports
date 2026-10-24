"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

export function EnquiryBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-[#1A1A1A] bg-[#070707] flex items-center min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]">
        {/* Background Artwork using letsbuild.png */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/letsbuild.png"
            alt="ProBird Sports Equipment Lineup - Let's Build Your Next Win"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center lg:object-right brightness-[0.92] contrast-[1.08]"
          />
          {/* Multi-layer directional gradients: ensuring maximum text legibility on the left while highlighting equipment on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/85 sm:via-[#060606]/65 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/60 lg:hidden" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Ambient bottom floor laser reflection matching mockup */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-80 z-10 pointer-events-none" />
        <div className="absolute -bottom-14 left-1/4 w-96 h-28 bg-brand-red/20 blur-[80px] pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-5 sm:space-y-6">
            {/* Top Kicker Tag with Red Bar */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-red inline-block" />
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.25em] text-brand-red">
                READY TO GEAR UP YOUR ORGANIZATION?
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight text-white leading-[0.95] drop-shadow-lg">
              LET’S BUILD YOUR <br />
              <span className="text-brand-red">NEXT WIN.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium max-w-xl leading-relaxed">
              Bulk sports equipment for teams, academies, schools and retailers.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Chamfered Red Button */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-red hover:bg-brand-redHover text-white font-black font-display text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(224,24,35,0.45)] hover:shadow-[0_0_50px_rgba(224,24,35,0.7)] hover:scale-105 active:scale-95 [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)]"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>REQUEST A BULK QUOTE</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Chamfered Dark Outlined Button */}
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0A0A0A]/70 hover:bg-[#161616] text-white font-black font-display text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)]"
              >
                <span>EXPLORE CATALOGUE</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Highlights Line */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span>Clear specifications</span>
                <span className="text-gray-500">•</span>
                <span>Tailored quantities</span>
                <span className="text-gray-500">•</span>
                <span>Direct enquiry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct="Ready To Gear Up Bulk Order"
      />
    </>
  );
}
