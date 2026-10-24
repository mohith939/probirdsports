import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | ProBird Sports — Bulk Sports Equipment Supplier",
    default: "ProBird Sports | Equip Your Next Win — Premium Wholesale Sports Equipment",
  },
  description:
    "Official supplier of competition-grade cricket, football, basketball, badminton, volleyball, and fitness equipment for bulk buyers, schools, sports academies, clubs, and retailers.",
  keywords: [
    "bulk sports equipment",
    "wholesale sports goods",
    "sports academy equipment supplier",
    "school sports equipment supplier",
    "tournament cricket equipment bulk",
    "FIFA standard match football wholesale",
    "composite basketballs bulk",
    "badminton tournament shuttles wholesale",
    "ProBird Sports",
  ],
  authors: [{ name: "ProBird Sports Procurement Division" }],
  creator: "ProBird Sports",
  publisher: "ProBird Sports",
  metadataBase: new URL("https://probirdsports.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProBird Sports — Play Strong. Fly High. Bulk Equipment Supply",
    description:
      "Premium sports equipment engineered for teams, academies, and institutions ready to play bigger. Direct wholesale quotations via WhatsApp.",
    url: "https://probirdsports.com",
    siteName: "ProBird Sports",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "ProBird Sports — Premium Athletic Sports Goods Supplier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProBird Sports | Equip Your Next Win",
    description: "Premium sports equipment for teams, academies, institutions, and retailers.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-gray-100 selection:bg-brand-red selection:text-white antialiased">
        {/* Skip to Main Content Link for WCAG 2.2 AA Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-red text-white text-sm font-bold rounded shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
