"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface GameCategory {
  id: string;
  name: string;
  href: string;
  image: string;
  alt: string;
}

const gameCategories: GameCategory[] = [
  {
    id: "football",
    name: "FOOTBALL",
    href: "/products?category=football",
    image: "/images/game-card-football.jpg",
    alt: "Football match and training equipment",
  },
  {
    id: "cricket",
    name: "CRICKET",
    href: "/products?category=cricket",
    image: "/images/game-card-cricket.jpg",
    alt: "Cricket bats, leather balls, and tournament equipment",
  },
  {
    id: "basketball",
    name: "BASKETBALL",
    href: "/products?category=basketball",
    image: "/images/game-card-basketball.jpg",
    alt: "Basketball composite match balls and hoops",
  },
  {
    id: "badminton",
    name: "BADMINTON",
    href: "/products?category=badminton",
    image: "/images/game-card-badminton.jpg",
    alt: "Badminton feather shuttlecocks and high-modulus rackets",
  },
  {
    id: "tennis",
    name: "TENNIS",
    href: "/products?category=all",
    image: "/images/game-card-tennis.jpg",
    alt: "Tennis rackets and championship balls",
  },
  {
    id: "fitness",
    name: "FITNESS",
    href: "/products?category=fitness",
    image: "/images/game-card-fitness.jpg",
    alt: "Commercial gym dumbbells, plates, and conditioning equipment",
  },
];

export function CategoryGrid() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#070707] text-white overflow-hidden border-b border-[#1A1A1A]">
      {/* Background Graphic Artwork using findyourgamebg.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/findyourgamebg.png"
          alt="Athletic stadium lighting with ProBird eagle watermark and red speed streaks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        {/* Subtle ambient gradients to ensure seamless blend with surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 space-y-3">
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-[4px] border border-brand-red/60 bg-brand-red/10 text-brand-red text-[11px] font-black uppercase tracking-widest">
              SPORTS CATALOGUE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-none">
            FIND YOUR <span className="text-brand-red">GAME.</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-medium max-w-xl leading-relaxed">
            Explore equipment by sport. Built for teams, schools and bulk buyers.
          </p>
        </div>

        {/* 6 Category Cards Grid matching reference mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {gameCategories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative h-[280px] sm:h-[330px] lg:h-[370px] rounded-lg sm:rounded-xl overflow-hidden border border-[#262626] hover:border-brand-red transition-all duration-300 shadow-xl flex flex-col justify-end focus:outline-none focus:ring-2 focus:ring-brand-red"
              aria-label={`Explore ${cat.name} equipment`}
            >
              {/* Card Artwork */}
              <Image
                src={cat.image}
                alt={cat.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Glow Highlight */}
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-colors duration-300" />

              {/* Bottom Label Bar */}
              <div className="relative z-10 w-full p-3 bg-black/90 backdrop-blur-sm border-t border-[#222222] flex items-center justify-between group-hover:border-brand-red/40 transition-colors">
                <span className="text-xs font-black uppercase tracking-wider text-white group-hover:text-brand-red transition-colors">
                  {cat.name}
                </span>
                <span className="text-brand-red group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Centered Bottom Link matching reference mockup */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-300 hover:text-white transition-colors group pb-1 border-b border-brand-red/50 hover:border-brand-red"
          >
            <span>VIEW ALL SPORTS</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-red group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
