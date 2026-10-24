import Link from "next/link";
import { ArrowLeft, Home, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#0A0A0A] flex items-center justify-center px-4 py-20 text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-widest">
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display uppercase">
          PAGE <span className="text-brand-red">NOT FOUND.</span>
        </h1>

        <p className="text-sm text-gray-400 leading-relaxed">
          The sports equipment route or category you were looking for is unavailable or has moved. Explore our active catalogue or return to home.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/products"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/25"
          >
            <Package className="w-4 h-4" />
            <span>Browse Products</span>
          </a>

          <a
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#181818] hover:bg-[#222222] text-gray-200 text-xs font-semibold uppercase tracking-wider border border-[#2B2B2B] flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}
