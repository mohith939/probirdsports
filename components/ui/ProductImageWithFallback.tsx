"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield } from "lucide-react";

interface ProductImageWithFallbackProps {
  src: string;
  alt: string;
  categoryTag?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function ProductImageWithFallback({
  src,
  alt,
  categoryTag,
  className = "",
  fill = true,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: ProductImageWithFallbackProps) {
  const [hasError, setHasError] = useState(!src);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#121212] via-[#0D0D0D] to-[#181818] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none border border-[#222222]">
        {/* Subtle radial athletic glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,24,35,0.12)_0%,transparent_70%)] pointer-events-none" />

        {/* Central sport icon */}
        <div className="relative z-10 w-12 h-12 rounded-full bg-[#1c1c1c] border border-brand-red/30 flex items-center justify-center mb-3 shadow-lg shadow-black/50">
          <Shield className="w-6 h-6 text-brand-red" />
        </div>

        {/* Brand label */}
        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red font-display">
          PROBIRD SPORTS
        </span>

        {/* Category tag */}
        {categoryTag && (
          <span className="relative z-10 text-[11px] font-bold text-gray-300 mt-1 uppercase tracking-wider">
            {categoryTag} EQUIPMENT
          </span>
        )}

        <span className="relative z-10 text-[9px] text-gray-500 mt-1 uppercase tracking-widest">
          OFFICIAL SPECIFICATION
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    />
  );
}
