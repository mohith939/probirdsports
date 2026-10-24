import { Hero } from "@/components/home/Hero";
import { BuiltForBulk } from "@/components/home/BuiltForBulk";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { TopBrands } from "@/components/home/TopBrands";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyProBird } from "@/components/home/WhyProBird";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { HowItWorks } from "@/components/home/HowItWorks";
import { EnquiryBanner } from "@/components/home/EnquiryBanner";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "ProBird Sports",
    "description": "Premium sports equipment supplier for bulk buyers, schools, sports academies, clubs, and retailers. Cricket, Football, Basketball, Badminton, Volleyball, and Athletic Training equipment.",
    "url": "https://probirdsports.com",
    "logo": "https://probirdsports.com/images/logo.jpg",
    "slogan": "PLAY STRONG. FLY HIGH.",
    "knowsAbout": [
      "Bulk Sports Equipment Supply",
      "Institutional Cricket Gear",
      "Match Footballs Wholesale",
      "Composite Basketballs",
      "Badminton Tournament Equipment",
      "Gym Dumbbells and Conditioning Gear"
    ],
  };

  return (
    <>
      {/* Schema.org Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 12-Section Engineered Sequence */}
      <div className="flex flex-col">
        {/* Section 2: Cinematic Hero */}
        <Hero />

        {/* Section 3: Built for Bulk Buyers */}
        <BuiltForBulk />

        {/* Section 4: Sports Category Discovery */}
        <CategoryGrid />

        {/* Section 4.5: Top Sports Brands in One Place */}
        <TopBrands />

        {/* Section 5: Featured Products */}
        <FeaturedProducts />

        {/* Section 6: Why ProBird Sports */}
        <WhyProBird />

        {/* Section 7: Who We Serve */}
        <WhoWeServe />

        {/* Section 8: How Bulk Enquiries Work */}
        <HowItWorks />

        {/* Section 9: Prominent Bulk Enquiry Banner */}
        <EnquiryBanner />

        {/* Section 10: Frequently Asked Questions */}
        <FAQAccordion />

        {/* Section 11: Final Conversion Section */}
        <FinalCTA />
      </div>
    </>
  );
}
