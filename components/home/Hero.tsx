"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { athleticEase, athleticSnappy } from "@/lib/motion";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#070707] border-b border-[#1A1A1A]">
        {/* Background Artwork using header.jpg */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 1.06, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: athleticEase }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/header.jpg"
              alt="ProBird Sports basketball athlete preparing on court - Bulk wholesale sports equipment"
              fill
              sizes="100vw"
              priority
              className="object-cover object-[75%_center] sm:object-right lg:object-right brightness-[0.94] contrast-[1.04]"
            />
          </motion.div>

          {/* Directional gradient ensuring left text legibility over deep black stadium ambience */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 sm:via-[#070707]/55 to-transparent" />

          {/* Subtle top and bottom transitions */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />

          {/* Ambient red court floor reflection glow */}
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-96 h-40 bg-brand-red/15 blur-[100px] pointer-events-none"
          />
        </div>

        {/* Hero Content Container matching reference mockup */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7">
            {/* Tagline Kicker Bar matching reference mockup */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: athleticEase }}
              className="flex items-center gap-3"
            >
              <div className="w-8 sm:w-10 h-[2.5px] bg-brand-red rounded-full shrink-0" />
              <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em]">
                <span className="text-gray-200">PLAY STRONG. FLY HIGH.</span>
                <span className="text-gray-500 font-normal">/</span>
                <span className="text-brand-red">BULK B2B SUPPLY</span>
              </div>
            </motion.div>

            {/* Main Headline matching reference mockup */}
            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black font-display uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: athleticEase }}
                className="block"
              >
                EQUIP YOUR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: athleticEase }}
                className="block text-brand-red"
              >
                NEXT WIN.
              </motion.span>
            </h1>

            {/* Supporting Copy matching reference mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: athleticEase }}
              className="space-y-1 text-sm sm:text-base lg:text-[17px] text-gray-300 font-normal leading-relaxed max-w-xl"
            >
              <p>Sports equipment for teams, institutions, and businesses.</p>
              <p className="text-gray-400">
                Request wholesale quotations across cricket, football, basketball, badminton, and athletic conditioning.
              </p>
            </motion.div>

            {/* Dual CTAs matching reference mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: athleticEase }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease: athleticSnappy }}
                onClick={() => setModalOpen(true)}
                className="px-7 sm:px-8 py-4 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_28px_rgba(224,24,35,0.45)] hover:shadow-[0_0_40px_rgba(224,24,35,0.7)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>REQUEST A BULK QUOTE</span>
                <ArrowRight className="w-4 h-4 shrink-0 ml-0.5" />
              </motion.button>

              <motion.a
                href="/products"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease: athleticSnappy }}
                className="group px-7 sm:px-8 py-4 rounded-lg bg-black/55 hover:bg-black/80 text-gray-200 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#303030] hover:border-gray-400 flex items-center justify-center gap-2.5 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>BROWSE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct="General Bulk Equipment Enquiry"
      />
    </>
  );
}
