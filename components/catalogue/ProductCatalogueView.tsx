"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  X, 
  Filter, 
  Eye, 
  MessageSquare, 
  Sparkles, 
  PackageX, 
  RotateCcw,
  SlidersHorizontal,
  Flame,
  Shield,
  Trophy,
  Zap,
  Activity,
  Dumbbell,
  Timer
} from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";

const categoryIcons: Record<string, React.ReactNode> = {
  cricket: <Flame className="w-3.5 h-3.5 text-brand-red" />,
  football: <Shield className="w-3.5 h-3.5 text-brand-red" />,
  basketball: <Trophy className="w-3.5 h-3.5 text-brand-red" />,
  badminton: <Zap className="w-3.5 h-3.5 text-brand-red" />,
  volleyball: <Activity className="w-3.5 h-3.5 text-brand-red" />,
  fitness: <Dumbbell className="w-3.5 h-3.5 text-brand-red" />,
  athletics: <Timer className="w-3.5 h-3.5 text-brand-red" />,
};

export function ProductCatalogueView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Sync category param if URL changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Filter products by search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.categoryDisplayName.toLowerCase().includes(q) ||
        product.specs.some(
          (s) =>
            s.label.toLowerCase().includes(q) ||
            s.value.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleEnquire = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <>
      <div className="bg-[#0A0A0A] min-h-screen text-white">
        {/* Top Header Banner */}
        <section className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#222222] py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1C] border border-[#2E2E2E] text-brand-red text-xs font-bold uppercase tracking-wider">
              <span>B2B Wholesale Equipment Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase">
              ATHLETIC EQUIPMENT <span className="text-brand-red">CATALOGUE.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Explore verified competition gear for cricket, football, basketball, badminton, volleyball, and physical conditioning. All equipment is priced and packaged for bulk institutional orders.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar Section */}
        <div className="sticky top-20 z-30 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#222222] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search equipment, specs, materials..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#181818] border border-[#2E2E2E] text-sm text-white placeholder-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status and Reset */}
              <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
                <span className="text-gray-400 font-mono">
                  Showing <strong className="text-white">{filteredProducts.length}</strong> of {PRODUCTS.length} products
                </span>

                {(selectedCategory !== "all" || searchQuery) && (
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#202020] hover:bg-[#2A2A2A] text-brand-red text-xs font-semibold border border-[#333] transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedCategory === "all"
                    ? "bg-brand-red text-white shadow-md shadow-brand-red/20"
                    : "bg-[#181818] text-gray-300 hover:bg-[#222222] border border-[#2B2B2B]"
                }`}
              >
                <span>All Sports</span>
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-brand-red text-white shadow-md shadow-brand-red/20"
                      : "bg-[#181818] text-gray-300 hover:bg-[#222222] border border-[#2B2B2B]"
                  }`}
                >
                  {categoryIcons[cat.id]}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between rounded-xl overflow-hidden border border-[#222222] bg-[#121212] hover:border-brand-red/60 transition-all duration-300 shadow-xl"
                >
                  {/* Image container with fixed aspect ratio */}
                  <div className="relative aspect-[4/3] w-full bg-[#181818] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded bg-brand-red text-white text-[10px] font-extrabold uppercase tracking-wider shadow">
                        {product.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#0A0A0A]/90 backdrop-blur-md text-gray-300 text-[10px] font-bold uppercase tracking-wider border border-[#262626]">
                        {product.categoryDisplayName}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-red transition-colors line-clamp-2">
                        <a href={`/products/${product.slug}`}>
                          {product.name}
                        </a>
                      </h2>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Specs Table Snippet */}
                    <div className="pt-2 border-t border-[#1E1E1E] space-y-1.5">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 truncate max-w-[120px]">{spec.label}:</span>
                          <span className="text-gray-200 font-medium truncate max-w-[160px]">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & Tier Notice */}
                    <div className="pt-2 border-t border-[#1E1E1E] flex items-center justify-between text-xs">
                      <div className="text-brand-red font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Enquire For Bulk Pricing</span>
                      </div>
                      <span className="text-[11px] text-gray-400 truncate max-w-[140px]">
                        {product.targetBuyer.split(",")[0]}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <a
                        href={`/products/${product.slug}`}
                        className="py-2.5 px-3 rounded-md bg-[#1B1B1B] hover:bg-[#252525] text-white text-xs font-bold uppercase tracking-wider border border-[#2C2C2C] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-gray-400" />
                        <span>Details</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleEnquire(product)}
                        className="py-2.5 px-3 rounded-md bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-brand-red/20 transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 px-4 rounded-2xl bg-[#111111] border border-[#222222] max-w-xl mx-auto space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center mx-auto text-gray-400">
                <PackageX className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white">No Equipment Found</h3>
              <p className="text-sm text-gray-400 max-w-sm mx-auto">
                No items matched your search criteria for &ldquo;{searchQuery || selectedCategory}&rdquo;. Try clearing your query or explore all sports.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 rounded-md bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>View All Equipment</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <BulkQuoteModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialProduct={selectedProduct.name}
          initialCategory={selectedProduct.categoryDisplayName}
        />
      )}
    </>
  );
}
