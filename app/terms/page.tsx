import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Supply | ProBird Sports",
  description: "Terms and conditions for wholesale sporting goods procurement and institutional enquiries with ProBird Sports.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 border-b border-[#222222] pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red">Commercial Agreement</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase font-display">
            Terms of Supply & Quotations
          </h1>
          <p className="text-xs text-gray-400">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">1. Wholesale Quotation Model</h2>
            <p>
              ProBird Sports functions on a quote-first wholesale supply model for institutional and trade buyers. Any preliminary rates, estimates, or catalogue listings displayed on this website constitute an invitation to treat and do not represent binding retail offers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">2. Quotation Validity & Price Confirmation</h2>
            <p>
              Formal quotations issued via WhatsApp or official email are valid for 14 calendar days from the date of issuance, subject to factory raw material stability and current warehouse inventory availability. Final purchase orders must be confirmed in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">3. Manufacturing Tolerances & Specifications</h2>
            <p>
              Natural athletic equipment (including English/Kashmir willow bats, hand-stitched leather balls, and goose feather shuttlecocks) carries standard international sporting tolerances in grain density, natural wood moisture, and exact gram weights. All products meet or exceed stated technical specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">4. Delivery, Inspection & Claims</h2>
            <p>
              Institutional consignments must be inspected upon freight arrival. Any transit damage or packaging discrepancies must be documented and communicated to your designated ProBird Sports procurement coordinator within 48 hours of delivery receipt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
