"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Share2, 
  Check, 
  Package, 
  Truck, 
  FileText 
} from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { BulkQuoteModal } from "@/components/ui/BulkQuoteModal";
import { generateWhatsAppUrl, buildProductEnquiryMessage, hasConfiguredWhatsApp } from "@/lib/whatsapp";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : ""
  );
  const [quantity, setQuantity] = useState("20");
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDirectWhatsApp = (e: React.MouseEvent) => {
    if (!hasConfiguredWhatsApp()) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  const productUrl = typeof window !== "undefined" ? window.location.href : `https://probirdsports.com/products/${product.slug}`;
  const whatsappUrl = generateWhatsAppUrl(
    buildProductEnquiryMessage({
      productName: product.name,
      productUrl,
      quantity,
      variant: selectedVariant,
    })
  );

  return (
    <>
      <div className="bg-[#0A0A0A] min-h-screen text-white pb-20">
        {/* Breadcrumb Navigation Bar */}
        <div className="border-b border-[#1E1E1E] bg-[#0E0E0E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/products" className="hover:text-white transition-colors">Products</a>
              <span>/</span>
              <a
                href={`/products?category=${product.category}`}
                className="hover:text-white capitalize transition-colors"
              >
                {product.categoryDisplayName}
              </a>
              <span>/</span>
              <span className="text-gray-200 truncate max-w-xs">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Main Product Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* Back link */}
          <div className="mb-6">
            <a
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-brand-red transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalogue</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* LEFT: GALLERY & IMAGES (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Primary Active Image */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#141414] border border-[#242424] shadow-2xl">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-brand-red text-white text-xs font-extrabold uppercase tracking-wider shadow-lg">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        selectedImage === img
                          ? "border-brand-red ring-2 ring-brand-red/30"
                          : "border-[#2A2A2A] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Verification & Packaging Callout */}
              <div className="p-5 rounded-xl bg-[#121212] border border-[#222222] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Wholesale Specification Disclosure</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  ProBird Sports publishes genuine manufacturing specifications. Material composition, grade designations, and dimensional standards are verified prior to institutional quotation.
                </p>
              </div>
            </div>

            {/* RIGHT: SPECS & BULK ENQUIRY (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    {product.categoryDisplayName}
                  </span>
                  <button
                    type="button"
                    onClick={handleShare}
                    aria-label="Share product"
                    className="p-1.5 rounded-md bg-[#181818] text-gray-400 hover:text-white border border-[#282828] text-xs flex items-center gap-1"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? "Link Copied" : "Share"}</span>
                  </button>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  {product.name}
                </h1>

                <p className="text-xs text-gray-400 font-mono">
                  Target Buyer: <span className="text-gray-300">{product.targetBuyer}</span>
                </p>
              </div>

              {/* Pricing Notice */}
              <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Pricing Model
                  </span>
                  <span className="text-xs font-semibold text-brand-red">
                    Volume Quotation
                  </span>
                </div>
                <div className="text-xl font-black text-white font-display">
                  ENQUIRE FOR BULK PRICING
                </div>
                <p className="text-xs text-gray-400">
                  {product.suggestedBulkTier}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Equipment Overview
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Variants Selector (if any) */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2">
                  <label htmlFor="variant-select" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    Select Specification / Variant:
                  </label>
                  <select
                    id="variant-select"
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2E2E2E] text-white text-sm focus:outline-none focus:border-brand-red"
                  >
                    {product.variants.map((v, idx) => (
                      <option key={idx} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Bulk Quantity Input */}
              <div className="space-y-2">
                <label htmlFor="qty-input" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Estimated Order Quantity (Units):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="qty-input"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-32 px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2E2E2E] text-white text-sm font-semibold focus:outline-none focus:border-brand-red"
                  />
                  <span className="text-xs text-gray-400">
                    Tier discounts apply to bulk institution volumes.
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  onClick={handleDirectWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-brand-red/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire For Bulk Pricing on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#181818] hover:bg-[#222222] text-gray-200 font-semibold text-xs uppercase tracking-wider border border-[#2B2B2B] flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-brand-red" />
                  <span>Request Written Formal Quote</span>
                </button>
              </div>

              {/* Verified Specs Table */}
              <div className="pt-4 border-t border-[#1E1E1E] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Technical Specifications
                </h3>
                <div className="rounded-xl border border-[#222222] overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-[#1C1C1C]">
                      {product.specs.map((s, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-[#121212]" : "bg-[#151515]"}>
                          <th scope="row" className="px-4 py-3 text-gray-400 font-medium w-1/3">
                            {s.label}
                          </th>
                          <td className="px-4 py-3 text-white font-semibold">
                            {s.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[#1C1C1C] space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Related Sports Equipment
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white font-display">
                    MORE IN {product.categoryDisplayName.toUpperCase()}
                  </h2>
                </div>
                <a
                  href={`/products?category=${product.category}`}
                  className="text-xs font-semibold text-brand-red hover:underline"
                >
                  View Category &rarr;
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <a
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="group p-4 rounded-xl bg-[#121212] border border-[#222222] hover:border-brand-red transition-all flex items-center gap-4"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#181818] flex-shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase text-brand-red tracking-wider">
                        {rel.badge}
                      </span>
                      <h3 className="text-sm font-bold text-white group-hover:text-brand-red line-clamp-1">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-mono">
                        Enquire for bulk quote &rarr;
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <BulkQuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={product.name}
        initialCategory={product.categoryDisplayName}
        initialQuantity={quantity}
      />
    </>
  );
}
