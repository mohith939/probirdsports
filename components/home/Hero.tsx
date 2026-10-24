"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-[#1A1A1A]">
        {/* Animated Background Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated Hero Artwork using section-1.png */}
          <div className="relative w-full h-full animate-hero-bg">
            <Image
              src="/images/section-1.png"
              alt="ProBird Sports Multi-Sport Athletes - Cricket, Football, Basketball, and Badminton"
              fill
              sizes="100vw"
              priority
              className="object-cover object-[70%_center] sm:object-[center_right] lg:object-center brightness-95"
            />
          </div>

          {/* Cinematic Athletic Gradient Overlays */}
          {/* Base darkening for whole image */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Left-to-right gradient ensuring text readability over athletes */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 sm:via-[#0A0A0A]/75 sm:to-transparent to-[#0A0A0A]/60" />

          {/* Bottom-to-top gradient for clean section transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

          {/* Animated Ambient Red Athletic Glow */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[120px] pointer-events-none animate-hero-glow" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[90px] pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Tagline Badge (Animated entrance) */}
            <div className="animate-hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-[#161616]/90 backdrop-blur-md border border-[#2E2E2E] mb-6 shadow-lg shadow-black/50">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-200">
                PLAY STRONG. FLY HIGH.
              </span>
              <span className="text-xs text-gray-500">|</span>
              <span className="text-xs text-brand-red font-semibold uppercase tracking-wider">
                Bulk B2B Supply
              </span>
            </div>

            {/* Main Headline (Animated entrance) */}
            <h1 className="animate-hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[1.05] drop-shadow-md">
              EQUIP YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300">
                NEXT WIN.
              </span>
            </h1>

            {/* Supporting Copy (Animated entrance) */}
            <p className="animate-hero-copy mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Sports equipment for teams, institutions, and businesses ready to play bigger. Direct wholesale quotations across cricket, football, basketball, badminton, and athletic conditioning.
            </p>

            {/* Value Highlights (Animated entrance) */}
            <div className="animate-hero-highlights mt-6 flex flex-wrap gap-y-2.5 gap-x-6 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-2 bg-[#121212]/80 backdrop-blur-sm px-3 py-1.5 rounded border border-[#222]">
                <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                <span>Multi-Category Bulk Sourcing</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121212]/80 backdrop-blur-sm px-3 py-1.5 rounded border border-[#222]">
                <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                <span>Institutional Tier Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121212]/80 backdrop-blur-sm px-3 py-1.5 rounded border border-[#222]">
                <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                <span>Direct WhatsApp Consultation</span>
              </div>
            </div>

            {/* CTAs (Animated entrance) */}
            <div className="animate-hero-cta mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-xl shadow-brand-red/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-black group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request a Bulk Quote</span>
              </button>

              <a
                href="/products"
                className="px-8 py-4 rounded-md bg-[#161616]/90 hover:bg-[#202020] text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#2E2E2E] hover:border-gray-400 flex items-center justify-center gap-2 backdrop-blur-sm transition-all group"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Buyer Trust Signal (Animated entrance) */}
            <div className="animate-hero-trust mt-10 sm:mt-12 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
              <span>
                Dedicated wholesale procurement division for schools, sports clubs, academies, colleges, and commercial retailers.
              </span>
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
