"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

interface BrandItem {
  id: string;
  name: string;
  specialty: string;
  logo: React.ReactNode;
}

const BRANDS: BrandItem[] = [
  {
    id: "alfa",
    name: "ALFA",
    specialty: "Hockey & Athletics",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-white font-display">
          ALFA<span className="text-brand-red">.</span>
        </span>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
          Hockey & Sports
        </span>
      </div>
    ),
  },
  {
    id: "head",
    name: "HEAD",
    specialty: "Tennis & Racket Sports",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1">
          <svg className="w-5 h-5 text-brand-red fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z" />
          </svg>
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
            HEAD
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
          Racket Sports
        </span>
      </div>
    ),
  },
  {
    id: "rakshak",
    name: "RAKSHAK",
    specialty: "Hockey & Protective Gear",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white font-display">
          RAKSHAK
        </span>
        <span className="text-[9px] uppercase tracking-widest text-brand-red font-semibold mt-0.5">
          Pro Hockey & Protection
        </span>
      </div>
    ),
  },
  {
    id: "tecnifibre",
    name: "TECNIFIBRE",
    specialty: "Squash & Tennis",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-brand-red transform rotate-45" />
          <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-display">
            TECNIFIBRE
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
          France &bull; Rackets & Strings
        </span>
      </div>
    ),
  },
  {
    id: "stag",
    name: "STAG",
    specialty: "Table Tennis & Multi-Sport",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-white font-display">
          STAG
        </span>
        <span className="text-[9px] uppercase tracking-widest text-brand-red font-semibold mt-0.5">
          Table Tennis & Athletic
        </span>
      </div>
    ),
  },
  {
    id: "dgt",
    name: "DGT",
    specialty: "Tournament Digital Chess",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl sm:text-3xl font-black tracking-widest text-white font-display border-b-2 border-brand-red pb-0.5">
          DGT
        </span>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-1">
          Digital Game Technology
        </span>
      </div>
    ),
  },
  {
    id: "donic",
    name: "DONIC",
    specialty: "Table Tennis Blades & Rubbers",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white font-display">
          DONIC
        </span>
        <span className="text-[9px] uppercase tracking-widest text-brand-red font-semibold mt-0.5">
          Germany &bull; Table Tennis
        </span>
      </div>
    ),
  },
  {
    id: "lining",
    name: "LI-NING",
    specialty: "Badminton & Athletic Footwear",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-5 text-brand-red fill-current" viewBox="0 0 24 24">
            <path d="M2 18c6 0 10-3 12-7 1.5-3 4-5 8-5-3 3-5 7-7 10-3 4.5-8 5-13 2z" />
          </svg>
          <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-display">
            LI-NING
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
          Anything is Possible
        </span>
      </div>
    ),
  },
  {
    id: "victor",
    name: "VICTOR",
    specialty: "Badminton Rackets & Equipment",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-brand-red font-black text-xl">&#9650;</span>
          <span className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white font-display">
            VICTOR
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
          Ready to Win
        </span>
      </div>
    ),
  },
];

export function TopBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand(brandName);
    setModalOpen(true);
  };

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#070707] text-white overflow-hidden border-b border-[#1A1A1A]">
        {/* Background Artwork using topsportsbrandbg.png properly set */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/topsportsbrandbg.png"
            alt="Top Sports Brands In One Place - Basketball, Soccer Ball, Cricket Bat and Gear"
            fill
            sizes="100vw"
            priority
            className="object-cover object-right sm:object-[80%_center] lg:object-center brightness-[0.88]"
          />
          {/* Subtle directional gradients keeping left text legible while letting sports equipment on right shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 sm:via-[#070707]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header matching reference mockup */}
          <div className="mb-12 space-y-3 max-w-2xl">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-brand-red/60 bg-brand-red/10 text-brand-red text-[11px] font-black uppercase tracking-widest">
                TRUSTED BRANDS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
              TOP SPORTS BRANDS <br />
              <span className="text-brand-red">IN ONE PLACE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
              Explore leading global brands with certified quality, reliable performance and equipment built for every level.
            </p>
          </div>

          {/* Carousel Slider Controls and Cards */}
          <div className="relative">
            {/* Left Nav Button */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous brands"
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/85 hover:bg-brand-red border border-white/25 hover:border-brand-red text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next brands"
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/85 hover:bg-brand-red border border-white/25 hover:border-brand-red text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scrollable Cards Container - scrollbar hidden completely across all browsers */}
            <div
              ref={scrollRef}
              className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1 snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {BRANDS.map((brand) => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => handleBrandClick(brand.name)}
                  className="flex-shrink-0 w-[170px] sm:w-[190px] h-[210px] sm:h-[230px] rounded-xl overflow-hidden border border-[#222222] hover:border-brand-red bg-[#101010]/90 backdrop-blur-md shadow-2xl transition-all duration-300 group flex flex-col justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-red snap-start hover:shadow-brand-glow hover:-translate-y-1"
                >
                  {/* Brand Center Mark - Cleanly Centered without the word Brand or dot */}
                  <div className="my-auto w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {brand.logo}
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-3 border-t border-[#1F1F1F] flex items-center justify-between w-full group-hover:border-brand-red/40 transition-colors">
                    <span className="text-xs font-black uppercase tracking-wider text-white group-hover:text-brand-red transition-colors">
                      {brand.name}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-black/60 border border-white/20 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-white" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Centered Primary CTA Button matching reference mockup */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => handleBrandClick("Official Multi-Brand Bulk Supply")}
              className="px-8 py-4 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-black text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-xl shadow-brand-red/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <span>VIEW ALL BRANDS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedBrand ? `${selectedBrand} Equipment Wholesale Enquiry` : ""}
      />
    </>
  );
}
