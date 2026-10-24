"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Shield, 
  Trophy, 
  Zap, 
  Activity, 
  Dumbbell, 
  Timer, 
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

const categoryIcons: Record<string, React.ReactNode> = {
  cricket: <Flame className="w-4 h-4 text-brand-red" />,
  football: <Shield className="w-4 h-4 text-brand-red" />,
  basketball: <Trophy className="w-4 h-4 text-brand-red" />,
  badminton: <Zap className="w-4 h-4 text-brand-red" />,
  volleyball: <Activity className="w-4 h-4 text-brand-red" />,
  fitness: <Dumbbell className="w-4 h-4 text-brand-red" />,
  athletics: <Timer className="w-4 h-4 text-brand-red" />,
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  // Handle sticky navbar scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node)
      ) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard Escape to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (productsDropdownOpen) {
          setProductsDropdownOpen(false);
          dropdownButtonRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [productsDropdownOpen, mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-[#222222] shadow-lg shadow-black/40"
            : "bg-[#0A0A0A] border-[#1C1C1C]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* BRAND LOGO */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-black rounded-lg"
                aria-label="ProBird Sports Homepage"
              >
                {/* Brand Logo - 100% Transparent on Dark Header */}
                <div className="relative h-11 sm:h-12 w-44 sm:w-52 flex items-center transition-transform duration-200 group-hover:scale-[1.03]">
                  <Image
                    src="/images/logo-white.png"
                    alt="ProBird Sports - Play Strong. Fly High."
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="relative">
                      <button
                        ref={dropdownButtonRef}
                        type="button"
                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setProductsDropdownOpen(true);
                          }
                        }}
                        aria-expanded={productsDropdownOpen}
                        aria-haspopup="true"
                        aria-controls="desktop-products-dropdown"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red ${
                          isActive(link.href) || productsDropdownOpen
                            ? "text-white bg-[#1A1A1A]"
                            : "text-gray-300 hover:text-white hover:bg-[#151515]"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            productsDropdownOpen ? "rotate-180 text-brand-red" : "text-gray-400"
                          }`}
                        />
                      </button>

                      {/* Accessible Mega-Dropdown */}
                      {productsDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          id="desktop-products-dropdown"
                          role="menu"
                          aria-orientation="vertical"
                          className="absolute left-0 mt-2 w-80 sm:w-96 rounded-xl bg-[#141414] border border-[#262626] shadow-2xl p-3 z-50 animate-fade-in"
                        >
                          <div className="px-3 py-2 border-b border-[#222222] mb-2 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                              Sports Categories
                            </span>
                            <a
                              href="/products"
                              className="text-xs text-brand-red hover:underline font-medium inline-flex items-center gap-1"
                            >
                              All Equipment <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>

                          <div className="grid grid-cols-1 gap-1">
                            {CATEGORIES.map((cat) => (
                              <a
                                key={cat.id}
                                href={`/products?category=${cat.id}`}
                                role="menuitem"
                                onClick={() => setProductsDropdownOpen(false)}
                                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#1E1E1E] transition-colors group"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-7 h-7 rounded-md bg-[#222222] flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                                    {categoryIcons[cat.id]}
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-200 group-hover:text-white">
                                      {cat.name}
                                    </div>
                                    <div className="text-[11px] text-gray-400 line-clamp-1">
                                      {cat.tagline}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[11px] font-mono text-gray-400 bg-[#1C1C1C] px-1.5 py-0.5 rounded">
                                  {cat.productCount}
                                </span>
                              </a>
                            ))}
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-[#222222] bg-[#0E0E0E] -mx-3 -mb-3 p-3 rounded-b-xl flex items-center justify-between">
                            <span className="text-xs text-gray-400">Institutional wholesale quotes</span>
                            <button
                              type="button"
                              onClick={() => {
                                setProductsDropdownOpen(false);
                                setQuoteModalOpen(true);
                              }}
                              className="text-xs font-semibold text-brand-red hover:text-white transition-colors"
                            >
                              Quick Quote &rarr;
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red ${
                      isActive(link.href)
                        ? "text-white bg-[#1A1A1A]"
                        : "text-gray-300 hover:text-white hover:bg-[#151515]"
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-red rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* FAR RIGHT CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold tracking-wide uppercase bg-brand-red hover:bg-brand-redHover text-white shadow-md shadow-brand-red/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-black"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request a Bulk Quote</span>
              </button>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                aria-label="Request quote"
                className="p-2 text-xs font-bold bg-brand-red text-white rounded-md uppercase"
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-navigation-menu"
                className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="md:hidden border-t border-[#222222] bg-[#0E0E0E] px-4 pt-3 pb-6 space-y-3 animate-fade-in"
          >
            <div className="space-y-1">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  isActive("/") ? "bg-[#1C1C1C] text-white" : "text-gray-300 hover:bg-[#181818]"
                }`}
              >
                Home
              </a>

              {/* Mobile Products Sub-menu */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold text-gray-300 hover:bg-[#181818]"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileProductsOpen ? "rotate-180 text-brand-red" : ""}`}
                  />
                </button>

                {mobileProductsOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#141414] rounded-lg mt-1 border border-[#222]">
                    <a
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-brand-red hover:underline"
                    >
                      Browse All Equipment &rarr;
                    </a>
                    {CATEGORIES.map((cat) => (
                      <a
                        key={cat.id}
                        href={`/products?category=${cat.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#202020] rounded-md"
                      >
                        {categoryIcons[cat.id]}
                        <span>{cat.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  isActive("/about") ? "bg-[#1C1C1C] text-white" : "text-gray-300 hover:bg-[#181818]"
                }`}
              >
                About Us
              </a>

              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  isActive("/contact") ? "bg-[#1C1C1C] text-white" : "text-gray-300 hover:bg-[#181818]"
                }`}
              >
                Contact
              </a>
            </div>

            <div className="pt-3 border-t border-[#222222]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request a Bulk Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Bulk Quote Modal */}
      <BulkQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
