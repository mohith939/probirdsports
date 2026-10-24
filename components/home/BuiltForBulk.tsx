"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  Package, 
  Users, 
  Headset, 
  ArrowRight, 
  MessageSquare 
} from "lucide-react";
import { motion } from "framer-motion";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { generateWhatsAppUrl, buildGeneralBulkEnquiryMessage, hasConfiguredWhatsApp } from "@/lib/whatsapp";

import { athleticEase, viewportDefault } from "@/lib/motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: athleticEase,
    },
  },
};

const pillarVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: athleticEase,
    },
  },
};

export function BuiltForBulk() {
  const [modalOpen, setModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("Institutional Bulk Pricing");

  const handleOpenModal = (topic: string) => {
    setEnquirySubject(topic);
    setModalOpen(true);
  };

  const handleWhatsAppAction = (e: React.MouseEvent) => {
    if (!hasConfiguredWhatsApp()) {
      e.preventDefault();
      handleOpenModal("Institutional Bulk Pricing");
    }
  };

  return (
    <>
      <section className="relative min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#070707] text-white border-b border-[#1A1A1A]">
        {/* ================= BACKGROUND ARTWORK ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/bulk-buyers-bg.jpg"
              alt="ProBird Sports Athletes walking in warehouse with equipment racks and banners"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[75%_center] sm:object-right lg:object-right brightness-[0.95] contrast-[1.04]"
            />
          </motion.div>

          {/* Directional gradients preserving sharp left typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 sm:via-[#070707]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/40" />

          {/* Athletic red floor reflection ambient glow */}
          <div className="absolute bottom-0 left-1/4 w-[450px] h-32 bg-brand-red/15 blur-[100px] pointer-events-none" />
        </div>

        {/* ================= CONTENT CONTAINER ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-2xl lg:max-w-3xl flex flex-col justify-between space-y-8 lg:space-y-10"
          >
            {/* Header block with athletic stagger */}
            <div className="space-y-5 sm:space-y-6">
              {/* Tagline Kicker Line matching reference mockup */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: athleticEase }}
                  className="h-[2.5px] bg-brand-red rounded-full shrink-0" 
                />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-gray-300">
                  WHOLESALE & INSTITUTIONAL OPERATIONS
                </span>
              </motion.div>

              {/* Main Headline matching reference mockup */}
              <motion.h2 
                variants={itemVariants} 
                className="text-5xl sm:text-7xl lg:text-[84px] font-black font-display uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl"
              >
                BUILT FOR <br />
                <span className="text-brand-red">BULK BUYERS.</span>
              </motion.h2>

              {/* Subtitle Copy matching reference mockup */}
              <motion.div variants={itemVariants} className="space-y-1.5 text-sm sm:text-base lg:text-[17px] text-gray-300 font-normal leading-relaxed max-w-xl">
                <p>Sports equipment for teams, institutions and businesses.</p>
                <p className="text-gray-400">
                  Quality gear. Reliable supply. Competitive wholesale pricing.
                </p>
              </motion.div>
            </div>

            {/* Action Buttons matching reference mockup */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              {/* Primary Button with Athletic Pulse Glow */}
              <motion.a
                href={generateWhatsAppUrl(buildGeneralBulkEnquiryMessage())}
                onClick={handleWhatsAppAction}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative group px-7 sm:px-8 py-4 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(224,24,35,0.45)] hover:shadow-[0_0_45px_rgba(224,24,35,0.7)] transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                {/* Athletic speed sheen highlight animation */}
                <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-700 ease-out pointer-events-none" />
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>ENQUIRE FOR INSTITUTIONAL PRICING</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary Button */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="/about"
                  className="group px-7 sm:px-8 py-4 rounded-lg bg-black/55 hover:bg-black/80 text-gray-200 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#303030] hover:border-gray-400 flex items-center justify-center gap-2.5 backdrop-blur-md transition-all shadow-lg"
                >
                  <span>LEARN OUR MODEL</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom 4 Trust Micro-Pillars with Framer Motion Stagger */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-[#1F1F1F] flex flex-wrap items-center gap-y-4 gap-x-2 sm:gap-x-0"
            >
              {/* Pillar 1: Reliable Supply */}
              <motion.div 
                variants={pillarVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="flex items-center gap-3 pr-4 sm:pr-6 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 group-hover:bg-brand-red/20 group-hover:border-brand-red/50 transition-colors">
                  <Shield className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-300 leading-tight">
                  RELIABLE <br />SUPPLY
                </span>
              </motion.div>

              {/* Divider 1 */}
              <div className="hidden sm:block w-[1px] h-8 bg-[#262626] mr-6" />

              {/* Pillar 2: Organizational Purchasing */}
              <motion.div 
                variants={pillarVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="flex items-center gap-3 pr-4 sm:pr-6 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 group-hover:bg-brand-red/20 group-hover:border-brand-red/50 transition-colors">
                  <Package className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-300 leading-tight">
                  ORGANIZATIONAL <br />PURCHASING
                </span>
              </motion.div>

              {/* Divider 2 */}
              <div className="hidden sm:block w-[1px] h-8 bg-[#262626] mr-6" />

              {/* Pillar 3: Multi-Sport Coverage */}
              <motion.div 
                variants={pillarVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="flex items-center gap-3 pr-4 sm:pr-6 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 group-hover:bg-brand-red/20 group-hover:border-brand-red/50 transition-colors">
                  <Users className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-300 leading-tight">
                  MULTI-SPORT <br />COVERAGE
                </span>
              </motion.div>

              {/* Divider 3 */}
              <div className="hidden sm:block w-[1px] h-8 bg-[#262626] mr-6" />

              {/* Pillar 4: Dedicated Support */}
              <motion.div 
                variants={pillarVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="flex items-center gap-3 cursor-default group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 group-hover:bg-brand-red/20 group-hover:border-brand-red/50 transition-colors">
                  <Headset className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-300 leading-tight">
                  DEDICATED <br />SUPPORT
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={enquirySubject}
      />
    </>
  );
}
