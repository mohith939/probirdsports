"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { athleticEase, viewportDefault, revealUp, createStaggerContainer, staggerItem } from "@/lib/motion";

interface StepItem {
  num: string;
  title: string;
  description: string;
  image: string;
  actionTopic: string;
}

const STEPS: StepItem[] = [
  {
    num: "01",
    title: "EXPLORE THE CATALOGUE",
    description:
      "Review our sports categories, technical specifications, materials, and recommended wholesale batch sizes for your institution or club.",
    image: "/images/step-card-1.jpg",
    actionTopic: "Explore Catalogue & Specifications",
  },
  {
    num: "02",
    title: "TELL US WHAT YOU NEED",
    description:
      "Click 'Request a Bulk Enquiry' or select specific items to share your required sizes, quantities, and any customization requirements.",
    image: "/images/step-card-2.jpg",
    actionTopic: "Submit Bulk Requirements Enquiry",
  },
  {
    num: "03",
    title: "GET YOUR WHOLESALE QUOTE",
    description:
      "Our procurement coordinator reviews your enquiry and provides an itemized quotation, estimated lead times, and dispatch terms.",
    image: "/images/step-card-3.jpg",
    actionTopic: "Receive Custom Wholesale Quotation",
  },
];

export function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Wholesale Bulk Procurement");

  const handleStepClick = (topic: string) => {
    setSelectedTopic(topic);
    setModalOpen(true);
  };

  const handleStartEnquiry = () => {
    setSelectedTopic("Institutional Bulk Enquiry");
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 text-white overflow-hidden border-b border-[#1A1A1A] bg-[#070707]">
        {/* Background Artwork using findyourgamebg.png */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/findyourgamebg.png"
            alt="Athletic stadium arena background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-[0.88] contrast-[1.08]"
          />
          {/* Subtle directional gradients for optimal depth and card contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/50 via-transparent to-[#070707]" />
        </div>

        {/* Bottom Athletic Floor Glow & Red Line matching mockup */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-85 z-10 pointer-events-none" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 bg-brand-red/25 blur-[90px] pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header exactly matching mockup */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="text-center max-w-3xl mx-auto mb-14 lg:mb-16 space-y-3.5"
          >
            {/* Outlined Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-1 rounded-[2px] border border-brand-red/80 bg-brand-red/10 text-brand-red text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em]">
                TRANSPARENT PROCUREMENT
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
              HOW BULK <span className="text-brand-red">ENQUIRIES WORK.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-300 font-medium tracking-wide">
              A clear, three-step process for institutional sports buyers.
            </p>
          </motion.div>

          {/* 3 Step Cards in Row with Connecting Pipeline */}
          <div className="relative max-w-5xl mx-auto mb-12">
            {/* Connecting red pipeline line across the cards on desktop */}
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportDefault}
              transition={{ duration: 0.8, ease: athleticEase }}
              className="hidden md:block absolute top-[7.85%] left-[10%] right-[10%] h-[2px] bg-brand-red/90 z-0 pointer-events-none shadow-[0_0_8px_rgba(224,24,35,0.6)] origin-left"
            />

            <motion.div
              variants={createStaggerContainer(0.12, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefault}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 relative z-10"
            >
              {STEPS.map((step) => (
                <motion.div
                  key={step.num}
                  variants={staggerItem}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: athleticEase }}
                  onClick={() => handleStepClick(step.actionTopic)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleStepClick(step.actionTopic);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Step ${step.num}: ${step.title}. ${step.description}. Click to request a quote.`}
                  className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(224,24,35,0.4)] focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <Image
                    src={step.image}
                    alt={`Step ${step.num}: ${step.title}`}
                    width={323}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                  <span className="sr-only">
                    {step.num} - {step.title}: {step.description}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Operational Policy Disclaimer Pill matching mockup */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-lg bg-[#0C0C0C]/85 border border-[#2B2B2B] shadow-lg backdrop-blur-sm max-w-2xl mx-auto text-left sm:text-center">
              <div className="text-brand-red shrink-0">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
              </div>
              <div className="hidden sm:block h-4 w-[1px] bg-[#333333]" />
              <p className="text-xs sm:text-[13px] text-gray-300 font-medium leading-relaxed">
                Final pricing, availability and lead times are confirmed in your individual quotation.
              </p>
            </div>
          </motion.div>

          {/* Chamfered CTA Button matching mockup */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="text-center"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: athleticEase }}
              onClick={handleStartEnquiry}
              className="group relative inline-flex items-center gap-3 px-9 py-4 bg-brand-red hover:bg-brand-redHover text-white font-black font-display text-sm sm:text-base uppercase tracking-wider transition-colors duration-300 shadow-[0_0_35px_rgba(224,24,35,0.45)] hover:shadow-[0_0_50px_rgba(224,24,35,0.7)] [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)] cursor-pointer"
            >
              <span>START A BULK ENQUIRY</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedTopic}
      />
    </>
  );
}
