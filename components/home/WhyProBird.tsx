"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trophy, Layers, ShieldCheck, Zap, Package } from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

// Authentic WhatsApp SVG Icon matching brand & mockup
function WhatsAppChatIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
      <path d="M8.53 7.33C8.37 6.96 8.19 6.95 7.97 6.94C7.79 6.93 7.58 6.93 7.37 6.93C7.16 6.93 6.82 7.01 6.53 7.33C6.24 7.64 5.43 8.41 5.43 9.96C5.43 11.51 6.56 13.01 6.72 13.22C6.88 13.43 8.9 16.56 12 17.91C12.74 18.23 13.32 18.42 13.77 18.57C14.51 18.8 15.19 18.77 15.72 18.69C16.32 18.6 17.55 17.94 17.81 17.22C18.07 16.5 18.07 15.88 17.99 15.75C17.91 15.62 17.7 15.54 17.39 15.39C17.08 15.23 15.55 14.48 15.26 14.37C14.98 14.27 14.77 14.22 14.56 14.53C14.35 14.84 13.75 15.54 13.56 15.75C13.38 15.96 13.19 15.98 12.88 15.83C12.57 15.67 11.58 15.35 10.4 14.3C9.48 13.48 8.86 12.47 8.68 12.16C8.5 11.85 8.66 11.68 8.82 11.53C8.96 11.39 9.13 11.17 9.28 10.99C9.44 10.81 9.5 10.68 9.6 10.47C9.7 10.27 9.65 10.09 9.57 9.94C9.5 9.78 8.9 8.3 8.53 7.33Z" />
    </svg>
  );
}

interface ValuePillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  photo: string;
  actionTitle?: string;
}

const PILLARS: ValuePillar[] = [
  {
    id: "pillar-1",
    icon: <Trophy className="w-5 h-5 text-brand-red" />,
    title: "SPORT-SPECIFIC EXPERTISE",
    description: "Dedicated to competition-grade equipment across cricket, football, basketball, badminton, volleyball, and fitness.",
    photo: "/images/why-card-photo-1.png",
    actionTitle: "Multi-Sport Competition Consultation",
  },
  {
    id: "pillar-2",
    icon: <Layers className="w-5 h-5 text-brand-red" />,
    title: "MULTI-CATEGORY SOURCING",
    description: "Consolidate all your institutional equipment needs under one supplier, reducing multiple vendor orders.",
    photo: "/images/why-card-photo-2.png",
    actionTitle: "Consolidated Institutional Sourcing",
  },
  {
    id: "pillar-3",
    icon: <ShieldCheck className="w-5 h-5 text-brand-red" />,
    title: "VERIFIED SPECIFICATIONS",
    description: "Clear technical disclosures on materials, grades, construction, and performance so you know exactly what you're getting.",
    photo: "/images/why-card-photo-3.png",
    actionTitle: "Technical Specification Verification",
  },
  {
    id: "pillar-4",
    icon: <Zap className="w-5 h-5 text-brand-red" />,
    title: "TRANSPARENT WHOLESALE PROCESS",
    description: "Direct quote-first model with pricing based on your quantity, customization requirements, and delivery schedule.",
    photo: "/images/why-card-photo-4.png",
    actionTitle: "Wholesale Quotation Model",
  },
  {
    id: "pillar-5",
    icon: <WhatsAppChatIcon className="w-5 h-5 text-brand-red" />,
    title: "RAPID WHATSAPP COMMUNICATION",
    description: "Get quick responses, product variants, stock timelines, and custom requirements directly with our team.",
    photo: "/images/why-card-photo-5.png",
    actionTitle: "Direct WhatsApp Procurement Support",
  },
  {
    id: "pillar-6",
    icon: <Package className="w-5 h-5 text-brand-red" />,
    title: "INSTITUTIONAL PACKAGING",
    description: "Products packed in master team cartons, ball nets, and protective bundles designed for safe freight handling and easy distribution.",
    photo: "/images/why-card-photo-6.png",
    actionTitle: "Institutional Packaging & Freight Handling",
  },
];

export function WhyProBird() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const handlePillarClick = (topic: string) => {
    setSelectedTopic(topic);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#070707] text-white overflow-hidden border-b border-[#1A1A1A]">
        {/* Background Athletic Stadium Lighting & Gear Composition matching mockup */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top Right Equipment Composition */}
          <div className="hidden lg:block absolute top-0 right-0 w-[550px] xl:w-[620px] h-[280px]">
            <Image
              src="/images/why-top-equipment.png"
              alt="ProBird Sports Wholesale Equipment Lineup - Bag, Balls, Cricket Bat"
              fill
              sizes="620px"
              priority
              className="object-cover object-left-bottom opacity-95 brightness-[0.95]"
            />
            {/* Smooth gradient blends so equipment integrates naturally */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
          </div>

          {/* Stadium Atmospheric Glow & Diagonal Red Streak on Left */}
          <div className="absolute top-0 left-0 w-[600px] h-[350px] bg-gradient-to-br from-brand-red/10 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/10 blur-[100px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header exactly matching mockup */}
          <div className="mb-12 lg:mb-16 max-w-2xl space-y-3">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-brand-red/60 bg-brand-red/10 text-brand-red text-[11px] font-black uppercase tracking-widest">
                WHY PROBIRD SPORTS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
              MORE THAN <br />
              <span className="text-brand-red">A SUPPLIER.</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 font-bold tracking-wider uppercase leading-relaxed pt-1">
              A TRUSTED PARTNER FOR TEAMS, INSTITUTIONS AND BULK BUYERS.
            </p>
          </div>

          {/* 6 Value Cards in 3x2 Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                onClick={() => handlePillarClick(pillar.actionTitle || pillar.title)}
                className="relative rounded-xl overflow-hidden border border-[#202020] hover:border-brand-red/70 bg-[#0C0C0C] transition-all duration-300 group shadow-2xl flex flex-col justify-between p-5 sm:p-6 min-h-[145px] hover:-translate-y-1 hover:shadow-brand-glow cursor-pointer"
              >
                {/* Red Triangle Accent on Top-Right Corner */}
                <svg
                  className="absolute top-0 right-0 w-6 h-6 z-20 pointer-events-none transform group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <polygon points="0,0 24,0 24,24" fill="#E01823" />
                </svg>

                {/* Right Photographic Visual with Soft Fade */}
                <div className="absolute top-0 right-0 bottom-0 w-[46%] sm:w-[48%] overflow-hidden pointer-events-none z-0">
                  <Image
                    src={pillar.photo}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover object-right group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                  />
                  {/* Directional Gradient keeping text 100% crisp and readable */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent" />
                </div>

                {/* Card Content on Left */}
                <div className="relative z-10 max-w-[66%] sm:max-w-[70%] space-y-3">
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-brand-red/80 bg-brand-red/10 flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-red/20 group-hover:border-brand-red group-hover:bg-brand-red/20 transition-colors">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-black font-display uppercase tracking-wide text-white group-hover:text-brand-red transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <div className="w-6 h-[2px] bg-brand-red mt-1 group-hover:w-10 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-gray-300 font-medium leading-relaxed pt-0.5">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Quote Modal for Pillar Consultation */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedTopic ? `Wholesale Advantage: ${selectedTopic}` : ""}
      />
    </>
  );
}
