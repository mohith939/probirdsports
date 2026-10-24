"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ChevronRight, ArrowRight, ShieldCheck, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { athleticEase, viewportDefault, createStaggerContainer, staggerItem } from "@/lib/motion";
import { generateWhatsAppUrl, buildGeneralBulkEnquiryMessage, hasConfiguredWhatsApp } from "@/lib/whatsapp";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
      <path d="M8.53 7.33C8.37 6.96 8.19 6.95 7.97 6.94C7.79 6.93 7.58 6.93 7.37 6.93C7.16 6.93 6.82 7.01 6.53 7.33C6.24 7.64 5.43 8.41 5.43 9.96C5.43 11.51 6.56 13.01 6.72 13.22C6.88 13.43 8.9 16.56 12 17.91C12.74 18.23 13.32 18.42 13.77 18.57C14.51 18.8 15.19 18.77 15.72 18.69C16.32 18.6 17.55 17.94 17.81 17.22C18.07 16.5 18.07 15.88 17.99 15.75C17.91 15.62 17.7 15.54 17.39 15.39C17.08 15.23 15.55 14.48 15.26 14.37C14.98 14.27 14.77 14.22 14.56 14.53C14.35 14.84 13.75 15.54 13.56 15.75C13.38 15.96 13.19 15.98 12.88 15.83C12.57 15.67 11.58 15.35 10.4 14.3C9.48 13.48 8.86 12.47 8.68 12.16C8.5 11.85 8.66 11.68 8.82 11.53C8.96 11.39 9.13 11.17 9.28 10.99C9.44 10.81 9.5 10.68 9.6 10.47C9.7 10.27 9.65 10.09 9.57 9.94C9.5 9.78 8.9 8.3 8.53 7.33Z" />
    </svg>
  );
}

const CATEGORIES = [
  { name: "Cricket", href: "/products?category=cricket" },
  { name: "Football", href: "/products?category=football" },
  { name: "Basketball", href: "/products?category=basketball" },
  { name: "Badminton", href: "/products?category=badminton" },
  { name: "Volleyball", href: "/products?category=volleyball" },
  { name: "Fitness & Strength", href: "/products?category=fitness" },
  { name: "Athletics & Training", href: "/products?category=athletics" },
];

const PATHWAYS = [
  { name: "Schools & Universities", href: "/products?buyer=schools" },
  { name: "Sports Academies & Clubs", href: "/products?buyer=academies" },
  { name: "Retailers & Wholesalers", href: "/products?buyer=retailers" },
  { name: "Tournaments & Events", href: "/products?buyer=tournaments" },
  { name: "Why ProBird Sports", href: "/about" },
];

export function Footer() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Wholesale Bulk Procurement");

  const handleOpenModal = (topic: string) => {
    setModalTopic(topic);
    setQuoteModalOpen(true);
  };

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    if (!hasConfiguredWhatsApp()) {
      e.preventDefault();
      handleOpenModal("Direct WhatsApp Procurement Enquiry");
    }
  };

  return (
    <>
      <footer className="relative bg-[#070707] text-gray-400 overflow-hidden border-t border-[#1F1F1F]">
        {/* Master background artwork using footerbg.png */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/footerbg.png"
            alt="ProBird Sports footer atmospheric background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-[0.88] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* 4 Column Responsive Grid matching mockup */}
          <motion.div
            variants={createStaggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
          >
            {/* COLUMN 1: BRAND, TAGLINE, DESCRIPTION & CTA (4 cols on lg) */}
            <motion.div variants={staggerItem} className="lg:col-span-4 space-y-4">
              {/* Brand Logo - 100% Transparent on Dark Footer */}
              <Link href="/" className="inline-block" aria-label="ProBird Sports Home">
                <div className="relative h-14 w-48 sm:w-56 flex items-center transition-transform duration-200 hover:scale-[1.03]">
                  <Image
                    src="/images/logo-white.png"
                    alt="ProBird Sports"
                    fill
                    sizes="224px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Official Tagline */}
              <p className="text-xs sm:text-[13px] font-black uppercase tracking-[0.22em] text-brand-red font-display">
                PLAY STRONG. FLY HIGH.
              </p>

              {/* Brand Description */}
              <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed max-w-sm">
                ProBird Sports is a premier sports equipment supplier, delivering high-quality gear to schools, academies, clubs, retailers, and institutional buyers across the globe. Built for performance. Trusted by teams.
              </p>

              {/* Wholesale Quotation Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenModal("Wholesale Equipment Request")}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg border border-brand-red text-white text-xs font-bold uppercase tracking-wider bg-black/40 hover:bg-brand-red/15 transition-all group shadow-sm hover:shadow-[0_0_20px_rgba(224,24,35,0.35)] focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-brand-red shrink-0" />
                  <span>REQUEST WHOLESALE QUOTATION</span>
                  <ChevronRight className="w-4 h-4 text-brand-red shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* COLUMN 2: EQUIPMENT CATEGORIES (2.5 cols on lg) */}
            <motion.div variants={staggerItem} className="lg:col-span-3 space-y-3">
              <div>
                <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white font-display">
                  EQUIPMENT CATEGORIES
                </h3>
                <div className="w-8 h-[2px] bg-brand-red mt-1.5" />
              </div>

              <div className="space-y-0.5 pt-1">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="flex items-center justify-between py-2 border-b border-[#1A1A1A] text-xs sm:text-[13px] text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* COLUMN 3: INSTITUTIONAL PATHWAYS (2.5 cols on lg) */}
            <motion.div variants={staggerItem} className="lg:col-span-2 space-y-3">
              <div>
                <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white font-display">
                  INSTITUTIONAL PATHWAYS
                </h3>
                <div className="w-8 h-[2px] bg-brand-red mt-1.5" />
              </div>

              <div className="space-y-0.5 pt-1">
                {PATHWAYS.map((pathway) => (
                  <Link
                    key={pathway.name}
                    href={pathway.href}
                    className="flex items-center justify-between py-2 border-b border-[#1A1A1A] text-xs sm:text-[13px] text-gray-300 hover:text-white transition-colors group"
                  >
                    <span>{pathway.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* COLUMN 4: TALK TO OUR TEAM (3 cols on lg) */}
            <motion.div variants={staggerItem} className="lg:col-span-3 space-y-3.5">
              <div>
                <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white font-display">
                  TALK TO OUR TEAM
                </h3>
                <div className="w-8 h-[2px] bg-brand-red mt-1.5" />
              </div>

              <div className="space-y-2.5 pt-1">
                {/* WhatsApp Chat Row */}
                <a
                  href={generateWhatsAppUrl(buildGeneralBulkEnquiryMessage())}
                  onClick={handleWhatsAppDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1.5 text-xs sm:text-[13px] text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-4 h-4 text-brand-red shrink-0" />
                    <span>WhatsApp Business Chat</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Email Row */}
                <a
                  href="mailto:procurement@probirdsports.com"
                  className="flex items-center justify-between py-1.5 text-xs sm:text-[13px] text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="truncate">procurement@probirdsports.com</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                {/* Institutional Division Row */}
                <button
                  type="button"
                  onClick={() => handleOpenModal("Institutional Sports Equipment Supply Division")}
                  className="w-full flex items-center justify-between py-1.5 text-xs sm:text-[13px] text-gray-300 hover:text-white transition-colors group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="leading-snug">Institutional Sports Equipment<br className="hidden sm:inline" /> Supply Division</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              </div>

              {/* Wholesale Quotations Highlight Box */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#0B0B0B]/90 border border-brand-red/35 flex items-center gap-3 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs sm:text-[13px] leading-tight">
                    Wholesale quotations
                  </h4>
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mt-0.5">
                    tailored to quantities, specifications and delivery timelines.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* BOTTOM COPYRIGHT & LEGAL BAR matching mockup */}
          <div className="mt-14 pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>
              &copy; 2025 ProBird Sports. All rights reserved. Play Strong. Fly High.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Supply
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Procurement Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={modalTopic}
      />
    </>
  );
}
