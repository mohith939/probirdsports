"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { ProductImageWithFallback } from "@/components/ui/ProductImageWithFallback";
import { athleticEase, athleticSnappy, viewportDefault, revealUp, createStaggerContainer, staggerItem } from "@/lib/motion";

// --- Vector Athletic Icons strictly matching mockup ---
function AllProductsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.8" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.8" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.8" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.8" />
    </svg>
  );
}

function FootballIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#ffffff" stroke="#111111" strokeWidth="0.8" />
      <polygon points="12,8.2 15.3,10.6 14.1,14.5 9.9,14.5 8.7,10.6" fill="#1a1a1a" />
      <line x1="12" y1="8.2" x2="12" y2="2.8" stroke="#1a1a1a" strokeWidth="1.2" />
      <line x1="15.3" y1="10.6" x2="20.2" y2="9" stroke="#1a1a1a" strokeWidth="1.2" />
      <line x1="14.1" y1="14.5" x2="17" y2="19.5" stroke="#1a1a1a" strokeWidth="1.2" />
      <line x1="9.9" y1="14.5" x2="7" y2="19.5" stroke="#1a1a1a" strokeWidth="1.2" />
      <line x1="8.7" y1="10.6" x2="3.8" y2="9" stroke="#1a1a1a" strokeWidth="1.2" />
      <polygon points="10,2.5 14,2.5 12,4.5" fill="#1a1a1a" />
      <polygon points="20.5,8 21.8,10.5 19.5,11" fill="#1a1a1a" />
      <polygon points="16,20 18.5,18.5 15,18" fill="#1a1a1a" />
      <polygon points="8,20 5.5,18.5 9,18" fill="#1a1a1a" />
      <polygon points="3.5,8 2.2,10.5 4.5,11" fill="#1a1a1a" />
    </svg>
  );
}

function CricketIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="crkGradTab" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ff4d4d" />
          <stop offset="40%" stopColor="#b80c0c" />
          <stop offset="85%" stopColor="#630000" />
          <stop offset="100%" stopColor="#380000" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#crkGradTab)" />
      <path d="M4.5 19.5 C8.5 14.5, 14.5 8.5, 19.5 4.5" stroke="#ffffff" strokeWidth="1.4" strokeDasharray="1.4 1.2" />
      <path d="M5.5 20.5 C9.5 15.5, 15.5 9.5, 20.5 5.5" stroke="#ffebeb" strokeWidth="0.8" strokeDasharray="0.8 1.2" opacity="0.7" />
    </svg>
  );
}

function BasketballIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bskGradTab" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ff8c3b" />
          <stop offset="60%" stopColor="#d85200" />
          <stop offset="100%" stopColor="#7a2800" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#bskGradTab)" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="#1f140e" strokeWidth="1.3" />
      <line x1="12" y1="2" x2="12" y2="22" stroke="#1f140e" strokeWidth="1.3" />
      <path d="M4.5 4.5 C9 8, 9 16, 4.5 19.5" stroke="#1f140e" strokeWidth="1.3" fill="none" />
      <path d="M19.5 4.5 C15 8, 15 16, 19.5 19.5" stroke="#1f140e" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

function BadmintonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8" cy="18" rx="3.2" ry="2.8" transform="rotate(-45 8 18)" fill="#f5eedc" stroke="#c2b090" strokeWidth="0.8" />
      <path d="M6.5 16 L9.5 19" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 15.5 L15 5.5 C16 5 18 6 18.5 7 L10.5 17.5 Z" fill="#ffffff" stroke="#d8d8d8" strokeWidth="0.6" />
      <path d="M9 16 L17.5 7.5 C18.5 8.5 19 9.5 19.5 11 L11 18 Z" fill="#f4f4f4" stroke="#d8d8d8" strokeWidth="0.6" />
      <path d="M10 16.5 L19.5 11 C20 12.5 19.5 14.5 18 16 L11.5 18.5 Z" fill="#e8e8e8" stroke="#d8d8d8" strokeWidth="0.6" />
      <line x1="8.5" y1="16" x2="16.5" y2="6" stroke="#cccccc" strokeWidth="0.7" />
      <line x1="9.5" y1="16.5" x2="18.5" y2="9" stroke="#cccccc" strokeWidth="0.7" />
    </svg>
  );
}

function TennisIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tnsGradTab" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ecff5e" />
          <stop offset="65%" stopColor="#bce000" />
          <stop offset="100%" stopColor="#6d8500" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#tnsGradTab)" />
      <path d="M4 7 C8.5 8, 8.5 16, 4 17" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M20 7 C15.5 8, 15.5 16, 20 17" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FitnessIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="10" height="4" rx="0.8" />
      <rect x="5" y="7" width="2.2" height="10" rx="1" />
      <rect x="2" y="5" width="3" height="14" rx="1.2" />
      <rect x="16.8" y="7" width="2.2" height="10" rx="1" />
      <rect x="19" y="5" width="3" height="14" rx="1.2" />
    </svg>
  );
}

function GaugeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <line x1="12" y1="12" x2="16.5" y2="7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

interface ProductItem {
  id: string;
  name: string;
  categoryTag: string;
  category: "all" | "football" | "cricket" | "basketball" | "badminton" | "tennis" | "fitness";
  description: string;
  image: string;
  slug?: string;
}

const CATEGORIES = [
  { id: "all", label: "All Products", icon: AllProductsIcon },
  { id: "football", label: "Football", icon: FootballIcon },
  { id: "cricket", label: "Cricket", icon: CricketIcon },
  { id: "basketball", label: "Basketball", icon: BasketballIcon },
  { id: "badminton", label: "Badminton", icon: BadmintonIcon },
  { id: "tennis", label: "Tennis", icon: TennisIcon },
  { id: "fitness", label: "Fitness", icon: FitnessIcon },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const FEATURED_PRODUCTS: Record<CategoryId, ProductItem[]> = {
  all: [
    {
      id: "all-1",
      name: "Match Football",
      categoryTag: "FOOTBALL",
      category: "football",
      description: "Professional-grade match ball for clubs and institutions.",
      image: "/images/featured-football.jpg",
      slug: "probird-aerostrike-pro-match-football",
    },
    {
      id: "all-2",
      name: "English Willow Bat",
      categoryTag: "CRICKET",
      category: "cricket",
      description: "Premium English willow bats for professional and academy use.",
      image: "/images/featured-cricket.jpg",
      slug: "probird-imperial-grade-1-english-willow-bat",
    },
    {
      id: "all-3",
      name: "Indoor/Outdoor Basketball",
      categoryTag: "BASKETBALL",
      category: "basketball",
      description: "Durable and high-grip basketballs for training and tournaments.",
      image: "/images/featured-basketball.jpg",
      slug: "probird-vanguard-composite-match-basketball",
    },
    {
      id: "all-4",
      name: "Graphite Badminton Racket",
      categoryTag: "BADMINTON",
      category: "badminton",
      description: "High-performance rackets for schools, clubs and tournaments.",
      image: "/images/featured-badminton.jpg",
      slug: "probird-aeroblade-tour-graphite-badminton-racket",
    },
  ],
  football: [
    {
      id: "ft-1",
      name: "Match Football",
      categoryTag: "FOOTBALL",
      category: "football",
      description: "Professional-grade match ball for clubs and institutions.",
      image: "/images/featured-football.jpg",
      slug: "probird-aerostrike-pro-match-football",
    },
    {
      id: "ft-2",
      name: "Institutional Agility Grid & Marker Cone System",
      categoryTag: "FOOTBALL",
      category: "football",
      description: "50 shatter-proof marker cones and 6m speed agility ladder for team drills.",
      image: "/images/game-card-football.jpg",
      slug: "probird-institutional-agility-training-grid-pack",
    },
    {
      id: "ft-3",
      name: "Tournament Regulation Steel Frame Goal Nets",
      categoryTag: "FOOTBALL",
      category: "football",
      description: "Heavy-duty all-weather braided match nets with ground anchors.",
      image: "/images/featured-football.jpg",
    },
    {
      id: "ft-4",
      name: "Club Elite Hybrid Match Football Pack",
      categoryTag: "FOOTBALL",
      category: "football",
      description: "Box of 10 thermally sealed training balls for coaching academies.",
      image: "/images/game-card-football.jpg",
    },
  ],
  cricket: [
    {
      id: "crk-1",
      name: "English Willow Bat",
      categoryTag: "CRICKET",
      category: "cricket",
      description: "Premium English willow bats for professional and academy use.",
      image: "/images/featured-cricket.jpg",
      slug: "probird-imperial-grade-1-english-willow-bat",
    },
    {
      id: "crk-2",
      name: "Four-Piece Alum-Tanned Match Leather Balls",
      categoryTag: "CRICKET",
      category: "cricket",
      description: "Box of 12 hand-stitched four-piece leather balls built for 50-over matches.",
      image: "/images/game-card-cricket.jpg",
      slug: "probird-four-piece-club-match-leather-balls",
    },
    {
      id: "crk-3",
      name: "Pro-Guard HD Batting Legguards & Gloves Kit",
      categoryTag: "CRICKET",
      category: "cricket",
      description: "High-density molded plastazote foam pads with multi-flex pittard leather palms.",
      image: "/images/featured-cricket.jpg",
      slug: "probird-pro-guard-batting-pads-gloves-kit",
    },
    {
      id: "crk-4",
      name: "Titanium-Finish Tournament Cricket Helmet",
      categoryTag: "CRICKET",
      category: "cricket",
      description: "High-impact composite shell with certified steel face grille protection.",
      image: "/images/game-card-cricket.jpg",
    },
  ],
  basketball: [
    {
      id: "bsk-1",
      name: "Indoor/Outdoor Basketball",
      categoryTag: "BASKETBALL",
      category: "basketball",
      description: "Durable and high-grip basketballs for training and tournaments.",
      image: "/images/featured-basketball.jpg",
      slug: "probird-vanguard-composite-match-basketball",
    },
    {
      id: "bsk-2",
      name: "Vanguard Microfiber Composite Match Ball",
      categoryTag: "BASKETBALL",
      category: "basketball",
      description: "FIBA-standard composite leather with deep pebbled moisture-wicking channels.",
      image: "/images/game-card-basketball.jpg",
      slug: "probird-vanguard-composite-match-basketball",
    },
    {
      id: "bsk-3",
      name: "Heavy-Duty Breakaway Court Flex Rim",
      categoryTag: "BASKETBALL",
      category: "basketball",
      description: "Institutional positive-lock flex goal rim engineered for competitive gyms.",
      image: "/images/featured-basketball.jpg",
    },
    {
      id: "bsk-4",
      name: "Tactical Coaching Board & Training Cones",
      categoryTag: "BASKETBALL",
      category: "basketball",
      description: "Double-sided magnetic tactical whiteboard with complete drill set.",
      image: "/images/game-card-basketball.jpg",
    },
  ],
  badminton: [
    {
      id: "bdm-1",
      name: "Graphite Badminton Racket",
      categoryTag: "BADMINTON",
      category: "badminton",
      description: "High-performance rackets for schools, clubs and tournaments.",
      image: "/images/featured-badminton.jpg",
      slug: "probird-aeroblade-tour-graphite-badminton-racket",
    },
    {
      id: "bdm-2",
      name: "AeroBlade Tour High-Modulus Graphite Racket",
      categoryTag: "BADMINTON",
      category: "badminton",
      description: "High-tension isometric carbon graphite frame engineered for steep smashes.",
      image: "/images/game-card-badminton.jpg",
      slug: "probird-aeroblade-tour-graphite-badminton-racket",
    },
    {
      id: "bdm-3",
      name: "Grade-A Tournament Goose Feather Shuttles",
      categoryTag: "BADMINTON",
      category: "badminton",
      description: "Tube of 12 tournament-certified goose feather shuttlecocks with natural cork.",
      image: "/images/featured-badminton.jpg",
      slug: "probird-feather-shuttlecocks-speed-77",
    },
    {
      id: "bdm-4",
      name: "Competition Braided Badminton Court Net",
      categoryTag: "BADMINTON",
      category: "badminton",
      description: "Regulation double-stitched nylon net with heavy-duty reinforced headband.",
      image: "/images/game-card-badminton.jpg",
    },
  ],
  tennis: [
    {
      id: "tns-1",
      name: "Championship Tour Pressurized Tennis Balls",
      categoryTag: "TENNIS",
      category: "tennis",
      description: "Extra-duty felt pressurized tennis balls engineered for hard and clay courts.",
      image: "/images/game-card-tennis.jpg",
    },
    {
      id: "tns-2",
      name: "Pro Tour 100 Carbon Graphite Tennis Racket",
      categoryTag: "TENNIS",
      category: "tennis",
      description: "Spin-optimized 100 sq.in isometric carbon frame for competitive club players.",
      image: "/images/game-card-tennis.jpg",
    },
    {
      id: "tns-3",
      name: "Tournament Regulation Tennis Court Net",
      categoryTag: "TENNIS",
      category: "tennis",
      description: "Heavy-duty braided polyethylene netting with quadruple-stitched headband.",
      image: "/images/game-card-tennis.jpg",
    },
    {
      id: "tns-4",
      name: "Academy 72-Ball Wire Hopper & Stand",
      categoryTag: "TENNIS",
      category: "tennis",
      description: "72-ball capacity durable wire hopper basket with locking conversion legs.",
      image: "/images/game-card-tennis.jpg",
    },
  ],
  fitness: [
    {
      id: "fit-1",
      name: "Commercial Hex Cast-Iron Dumbbells",
      categoryTag: "FITNESS",
      category: "fitness",
      description: "Solid urethane anti-roll hex dumbbells built for institutional conditioning.",
      image: "/images/game-card-fitness.jpg",
      slug: "probird-commercial-urethane-hex-dumbbell-set",
    },
    {
      id: "fit-2",
      name: "Olympic Competition Bumper Plates Set",
      categoryTag: "FITNESS",
      category: "fitness",
      description: "High-density virgin rubber bumper plates with stainless steel center hubs.",
      image: "/images/game-card-fitness.jpg",
      slug: "probird-olympic-high-density-bumper-plate-set",
    },
    {
      id: "fit-3",
      name: "Cast Iron Competition Kettlebells",
      categoryTag: "FITNESS",
      category: "fitness",
      description: "Color-coded ergonomic handle kettlebells for explosive strength circuits.",
      image: "/images/game-card-fitness.jpg",
    },
    {
      id: "fit-4",
      name: "Multi-Resistance Heavy-Duty Loop Bands",
      categoryTag: "FITNESS",
      category: "fitness",
      description: "Continuous layered latex resistance bands for athletic mobility and warmups.",
      image: "/images/game-card-fitness.jpg",
    },
  ],
};

export function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const handleQuoteClick = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const currentProducts = FEATURED_PRODUCTS[activeCategory] || FEATURED_PRODUCTS.all;

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#080808] text-white overflow-hidden border-b border-[#1A1A1A]">
        {/* Top Right Atmospheric Equipment Artwork matching mockup */}
        <div className="hidden lg:block absolute top-0 right-0 w-[480px] xl:w-[540px] h-[250px] pointer-events-none z-0">
          <Image
            src="/images/featured-equipment-clean.jpg"
            alt="ProBird Sports Official Equipment - Kitbag, Balls, Cricket Bat"
            fill
            sizes="540px"
            priority
            className="object-cover object-left-bottom opacity-90 brightness-[0.95]"
          />
          {/* Gradients blending into the athletic dark background seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="mb-8 sm:mb-10 max-w-2xl"
          >
            <div className="inline-block mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-brand-red/60 bg-brand-red/10 text-brand-red text-[11px] font-black uppercase tracking-widest">
                FEATURED PRODUCTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
              PREMIUM EQUIPMENT <br />
              <span className="text-brand-red">FOR EVERY GAME.</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed mt-3 max-w-xl">
              Explore our most in-demand products across all major sports. Built for teams, institutions, and bulk buyers.
            </p>
          </motion.div>

          {/* Category Filter Pills Bar - exactly matching mockup icons and layout */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-10"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const IconComp = cat.icon;

              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15, ease: athleticSnappy }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer ${
                    isActive
                      ? "bg-brand-red text-white shadow-lg shadow-brand-red/30"
                      : "bg-[#141414]/90 hover:bg-[#1F1F1F] text-gray-300 hover:text-white border border-[#262626]"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Product Cards 4-Column Grid with Smooth Tab Switch Transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={createStaggerContainer(0.07, 0.05)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 10, transition: { duration: 0.18 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            >
              {currentProducts.map((product) => {
                const isFav = !!favorites[product.id];

                return (
                  <motion.div
                    key={product.id}
                    variants={staggerItem}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25, ease: athleticEase }}
                    className="rounded-xl overflow-hidden border border-[#202020] hover:border-brand-red/70 bg-[#0C0C0C] transition-colors duration-300 group shadow-2xl flex flex-col justify-between hover:shadow-brand-glow"
                  >
                    {/* Card Visual & Overlays */}
                    <div className="relative aspect-[1.12/1] w-full overflow-hidden bg-[#141414]">
                      <ProductImageWithFallback
                        src={product.image}
                        alt={product.name}
                        categoryTag={product.categoryTag}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Dark gradient for overlay legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

                      {/* Category Badge overlay on top left */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-wider text-white px-2.5 py-1 rounded-[4px]">
                          {product.categoryTag}
                        </span>
                      </div>

                      {/* Wishlist / Heart button on top right */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                        transition={{ duration: 0.15 }}
                        onClick={(e) => toggleFavorite(product.id, e)}
                        aria-label={`Save ${product.name} to wishlist`}
                        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isFav ? "fill-brand-red text-brand-red" : "text-white hover:text-brand-red"
                          }`}
                        />
                      </motion.button>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-4">
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-white group-hover:text-brand-red transition-colors line-clamp-1">
                          {product.slug ? (
                            <a href={`/products/${product.slug}`} className="hover:underline">
                              {product.name}
                            </a>
                          ) : (
                            product.name
                          )}
                        </h3>
                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed min-h-[34px]">
                          {product.description}
                        </p>
                      </div>

                      {/* Red Primary Action Button matching mockup */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.15, ease: athleticSnappy }}
                        onClick={() => handleQuoteClick(product.name)}
                        className="w-full py-2.5 px-4 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-200 shadow-md shadow-brand-red/25 group/btn cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red"
                      >
                        <span className="flex items-center gap-2">
                          <GaugeIcon className="w-4 h-4 text-white" />
                          <span>Request Bulk Quote</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Centered Outline Action matching mockup */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            className="mt-12 text-center"
          >
            <motion.a
              href="/products"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: athleticSnappy }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#0F0F0F] border border-brand-red/50 hover:border-brand-red hover:bg-brand-red/10 text-white font-black text-xs uppercase tracking-wider transition-colors duration-300 shadow-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Quote Inquiry Modal */}
      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </>
  );
}
