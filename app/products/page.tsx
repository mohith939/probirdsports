import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductCatalogueView } from "@/components/catalogue/ProductCatalogueView";

export const metadata: Metadata = {
  title: "Sports Equipment Catalogue & Bulk Quotations",
  description:
    "Browse competition-grade cricket bats, FIFA standard footballs, FIBA composite basketballs, tournament badminton shuttles, match volleyballs, and gym conditioning gear.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-400">
              Loading ProBird Catalogue...
            </span>
          </div>
        </div>
      }
    >
      <ProductCatalogueView />
    </Suspense>
  );
}
