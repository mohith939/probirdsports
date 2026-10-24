"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { athleticEase, viewportDefault, revealUp, createStaggerContainer, staggerItem } from "@/lib/motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I request an official bulk or wholesale price quotation?",
    answer: "You can click any 'Request a Bulk Quote' button or select 'Enquire' on any individual product. This creates a prefilled WhatsApp enquiry detailing the equipment and quantity needed. If you have an institutional purchase order or spreadsheet of requirements, you can also share it directly via our WhatsApp enquiry desk or contact form.",
  },
  {
    question: "Can I consolidate multiple sports categories into a single institutional order?",
    answer: "Yes. ProBird Sports specializes in consolidated procurement. Educational institutions, multi-sport academies, and sports complexes can combine cricket kits, footballs, basketballs, badminton supplies, and gym accessories into one single consolidated quotation and shipment.",
  },
  {
    question: "Are there minimum order quantities (MOQ)?",
    answer: "Because we operate as a dedicated B2B sports equipment supplier, each product line has recommended wholesale packaging tiers (such as 10-20 balls, box of 12 balls, or team racket sets). We do not enforce arbitrary rigid constraints; order volumes and tiered pricing are reviewed and confirmed based on your institution's specific needs.",
  },
  {
    question: "How do I request specific product variants, sizes, or weights?",
    answer: "When initiating your enquiry, mention your required specifications—for example, bat weights (2lb 7oz vs 2lb 9oz), football sizes (Size 4 vs Size 5), or shuttlecock speeds (Speed 77 vs 78). Our procurement team will confirm batch availability for those exact technical specifications.",
  },
  {
    question: "Who can procure equipment from ProBird Sports?",
    answer: "We supply sports academies, primary and secondary schools, colleges, universities, professional sports clubs, corporate wellness centers, tournament organizers, and independent sporting goods retailers looking for wholesale inventory.",
  },
  {
    question: "How are payment and delivery timelines established?",
    answer: "Payment terms, invoice documentation, and freight transit timelines are provided directly on your itemized quotation based on destination and order volume. We do not make unsupported or blanket delivery promises; every order timeline is realistically confirmed by our team.",
  },
];

export function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <>
      <section className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181818] border border-[#2B2B2B] text-brand-red text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clarity & Policies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display uppercase">
              FREQUENTLY ASKED <span className="text-brand-red">QUESTIONS.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Straightforward answers about our quote-first wholesale model, batch sizes, and institutional ordering procedures.
            </p>
          </motion.div>

          <motion.div
            variants={createStaggerContainer(0.06, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              const headingId = `faq-heading-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="rounded-xl border border-[#222222] bg-[#121212] overflow-hidden transition-colors"
                >
                  <h3>
                    <button
                      type="button"
                      id={headingId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleIndex(idx)}
                      className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-brand-red transition-colors focus:outline-none focus:bg-[#181818] cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold tracking-tight">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180 text-brand-red" : "text-gray-400"
                        }`}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: athleticEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-[#1C1C1C]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="mt-12 text-center p-6 rounded-xl bg-[#141414] border border-[#242424] space-y-3"
          >
            <h4 className="text-base font-bold text-white">Have a specific equipment tender or requirement?</h4>
            <p className="text-xs text-gray-400 max-w-lg mx-auto">
              Our equipment coordinators can review official technical requirements and provide customized batch quotations.
            </p>
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18, ease: athleticEase }}
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 rounded-md bg-[#1F1F1F] hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors border border-[#333] cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask Our Team</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
