import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Target, Layers, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About ProBird Sports | Institutional Sports Equipment Supplier",
  description:
    "Learn about ProBird Sports: a dedicated B2B sports equipment supplier providing competition-grade goods for schools, academies, sports clubs, and retailers.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#222222] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1C] border border-[#2E2E2E] text-brand-red text-xs font-bold uppercase tracking-wider">
            <span>Brand Heritage & Supply Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display uppercase leading-tight">
            PLAY STRONG. <br />
            <span className="text-brand-red">FLY HIGH.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            ProBird Sports is an athletic sporting-goods supplier focused exclusively on bulk orders, institutional outfitting, and competitive equipment sourcing.
          </p>
        </div>
      </section>

      {/* Brand Identity & Mission */}
      <section className="py-16 lg:py-24 border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-display text-white">
                Engineered for <span className="text-brand-red">Organizations Ready to Play Bigger</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Conventional sporting goods stores are designed for single-item retail consumers. They carry consumer markups, limited batch availability, and fragmented category selections.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                ProBird Sports was established to solve this specific procurement challenge. We partner with sports academies, collegiate athletic boards, schools, coaching centres, and sports retailers who need dependable volume supply across cricket, football, basketball, badminton, volleyball, and fitness conditioning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#121212] border border-[#222222] space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">Product Integrity</span>
                  <p className="text-xs text-gray-400">
                    Transparent specification sheets disclosing willow grades, leather origins, polyurethane thicknesses, and testing benchmarks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121212] border border-[#222222] space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">Consolidated Orders</span>
                  <p className="text-xs text-gray-400">
                    Combine gear for multiple sports into a single quotation, single invoice, and synchronized seasonal delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Brand Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="p-8 rounded-2xl bg-[#121212] border border-[#262626] shadow-2xl space-y-6">
                {/* Official Logo Display - 100% Transparent */}
                <div className="relative h-16 w-56 flex items-center">
                  <Image
                    src="/images/logo-white.png"
                    alt="ProBird Sports Official Logo"
                    fill
                    sizes="224px"
                    className="object-contain object-left"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    The Eagle Standard
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    The ProBird eagle symbolizes power, aggressive aerodynamics, and unwavering focus. Every product in our catalogue is chosen to help athletes train with confidence and win decisively.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E1E1E] space-y-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
                    <span>Quote-First B2B Wholesale Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
                    <span>Direct Specification Matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
                    <span>Dedicated Institutional Procurement Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Buyer Commitment */}
      <section className="py-16 lg:py-24 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display text-white">
              Who We <span className="text-brand-red">Partner With</span>
            </h2>
            <p className="text-sm text-gray-400">
              Our operational processes are tuned to the exact requirements of institutional and trade buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#121212] border border-[#222222] space-y-3">
              <h3 className="text-base font-bold text-white">Schools & Universities</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We provide durable, high-impact equipment packs for physical education departments and inter-school varsity tournaments, backed by itemized quotations for institutional accounting.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121212] border border-[#222222] space-y-3">
              <h3 className="text-base font-bold text-white">Sports Academies & Clubs</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Coaches require balls and equipment that withstand hundreds of hours of drills without premature wear. We supply master boxes of balls, tournament shuttlecocks, and training markers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121212] border border-[#222222] space-y-3">
              <h3 className="text-base font-bold text-white">Retailers & Resellers</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Commercial sports shops access wholesale volume tiers and carton packaging to expand their shelf offerings with premium-grade athletic gear.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-red/20 transition-all"
            >
              <span>Explore The Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
