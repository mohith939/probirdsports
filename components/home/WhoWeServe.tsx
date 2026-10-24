"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, ShoppingCart, Users, Building2, ArrowRight, FileText } from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

// Custom 3-bar histogram icon for Coaching Academies matching mockup
function AcademyBarChartIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="13" width="4" height="8" rx="0.8" fill="currentColor" fillOpacity="0.2" />
      <rect x="10" y="8" width="4" height="13" rx="0.8" fill="currentColor" fillOpacity="0.2" />
      <rect x="17" y="3" width="4" height="18" rx="0.8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

interface InstitutionalPathway {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  photo: string;
  modalTopic: string;
}

const ROW_1_CARDS: InstitutionalPathway[] = [
  {
    num: "01",
    icon: <GraduationCap className="w-7 h-7" />,
    title: "SCHOOLS, COLLEGES & UNIVERSITIES",
    desc: "Equip students with quality sports gear and build stronger, healthier communities.",
    photo: "/images/serve-thumb-1.png",
    modalTopic: "Schools, Colleges & Universities Supply",
  },
  {
    num: "02",
    icon: <AcademyBarChartIcon className="w-7 h-7" />,
    title: "SPORTS ACADEMIES & COACHING CLINICS",
    desc: "High-performance training equipment for academies and coaching programs.",
    photo: "/images/serve-thumb-2.png",
    modalTopic: "Sports Academies & Coaching Bundles",
  },
  {
    num: "03",
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "SPORTS RETAILERS & WHOLESALERS",
    desc: "Multi-category supply, competitive pricing, and reliable bulk shipments.",
    photo: "/images/serve-thumb-3.png",
    modalTopic: "Retail Distribution & Wholesale Supply",
  },
];

const ROW_2_CARDS: InstitutionalPathway[] = [
  {
    num: "04",
    icon: <Users className="w-7 h-7" />,
    title: "SPORTS CLUBS & TOURNAMENT LEAGUES",
    desc: "Match-day gear, field equipment, and accessories for your teams and events.",
    photo: "/images/serve-thumb-4.png",
    modalTopic: "Club & Tournament Match Packs",
  },
  {
    num: "05",
    icon: <Building2 className="w-7 h-7" />,
    title: "CORPORATE & SPORTS FACILITIES",
    desc: "Equipment for recreation, wellness programs, and institutional sports facilities.",
    photo: "/images/serve-thumb-5.png",
    modalTopic: "Corporate & Institutional Facility Gear",
  },
];

export function WhoWeServe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleEnquireBuyer = (topic: string) => {
    setSelectedTopic(topic);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#060606] text-white overflow-hidden border-b border-[#1A1A1A]">
        {/* Background Artwork using sportsstart.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sportsstart.png"
            alt="Sports Start With The Right Partner - Athletic Runner Ready on Track"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top sm:object-center brightness-[0.85] contrast-[1.05]"
          />
          {/* Multi-directional athletic gradients preserving text legibility while letting the athlete shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/85 sm:via-[#060606]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section Header & Floating Pill */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-brand-red/60 bg-brand-red/10 text-brand-red text-[11px] font-black uppercase tracking-widest">
                  WHO WE SERVE
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
                SPORTS START <br />
                <span className="text-brand-red">WITH THE RIGHT PARTNER.</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-xl">
                Premium sports equipment supply for the people and organizations that keep sport moving.
              </p>
            </div>

            {/* Top Right Floating Badge matching mockup */}
            <div className="hidden lg:flex items-center gap-3.5 px-5 py-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 shadow-2xl">
              <div className="w-10 h-10 rounded-full border border-brand-red/80 bg-brand-red/15 flex items-center justify-center text-brand-red shadow-md shadow-brand-red/20 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-none">
                  BUILT FOR
                </div>
                <div className="text-sm font-black font-display uppercase tracking-tight text-white leading-tight mt-0.5">
                  TEAMS. SCHOOLS. <br />
                  <span className="text-brand-red">INSTITUTIONS.</span>
                </div>
                <div className="w-6 h-[2px] bg-brand-red mt-1" />
              </div>
            </div>
          </div>

          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-5 lg:mb-6">
            {ROW_1_CARDS.map((aud) => (
              <div
                key={aud.num}
                onClick={() => handleEnquireBuyer(aud.modalTopic)}
                className="relative rounded-2xl overflow-hidden border border-[#222222] hover:border-brand-red/80 bg-[#0C0C0C]/90 backdrop-blur-md transition-all duration-300 group shadow-2xl flex flex-col justify-between p-6 sm:p-7 min-h-[185px] hover:-translate-y-1 hover:shadow-brand-glow cursor-pointer"
              >
                {/* Right Photographic Visual with Soft Dark Fade */}
                <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none z-0">
                  <Image
                    src={aud.photo}
                    alt={aud.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-right group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                  />
                  {/* Subtle edge overlay blending into dark card body */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/75 to-transparent" />
                </div>

                {/* Content on Left */}
                <div className="relative z-10 max-w-[64%] sm:max-w-[66%] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black font-mono text-gray-400">{aud.num}</span>
                  </div>

                  <div className="text-brand-red">
                    {aud.icon}
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-black font-display uppercase tracking-wide text-white group-hover:text-brand-red transition-colors leading-tight">
                      {aud.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    {aud.desc}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-red group-hover:text-white transition-colors">
                      <span>EXPLORE SOLUTIONS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Wider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-12 lg:mb-16">
            {ROW_2_CARDS.map((aud) => (
              <div
                key={aud.num}
                onClick={() => handleEnquireBuyer(aud.modalTopic)}
                className="relative rounded-2xl overflow-hidden border border-[#222222] hover:border-brand-red/80 bg-[#0C0C0C]/90 backdrop-blur-md transition-all duration-300 group shadow-2xl flex flex-col justify-between p-6 sm:p-7 min-h-[185px] hover:-translate-y-1 hover:shadow-brand-glow cursor-pointer"
              >
                {/* Right Photographic Visual with Soft Dark Fade */}
                <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none z-0">
                  <Image
                    src={aud.photo}
                    alt={aud.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-right group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/75 to-transparent" />
                </div>

                {/* Content on Left */}
                <div className="relative z-10 max-w-[62%] sm:max-w-[65%] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black font-mono text-gray-400">{aud.num}</span>
                  </div>

                  <div className="text-brand-red">
                    {aud.icon}
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-black font-display uppercase tracking-wide text-white group-hover:text-brand-red transition-colors leading-tight">
                      {aud.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    {aud.desc}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-red group-hover:text-white transition-colors">
                      <span>EXPLORE SOLUTIONS</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Full-Width CTA Banner matching mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-[#222222] bg-[#0A0A0A]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">
            {/* Red top glow accent line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-80" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              <div className="space-y-2 max-w-2xl">
                <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-brand-red/90">
                  LET&apos;S WORK TOGETHER
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display uppercase tracking-tight text-white leading-none">
                  BUYING FOR A <span className="text-brand-red">TEAM OR INSTITUTION?</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                  Tell us what you need. We&apos;ll help coordinate your bulk order with the right equipment, brands and support.
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleEnquireBuyer("Institutional & Team Wholesale Order")}
                  className="w-full sm:w-auto px-7 sm:px-9 py-4 rounded-xl bg-gradient-to-r from-brand-red via-brand-red to-[#B30006] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-3 shadow-xl shadow-brand-red/35 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>DISCUSS A BULK ORDER</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Inquiry Modal */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedTopic ? `Institutional Pathway: ${selectedTopic}` : ""}
      />
    </>
  );
}
