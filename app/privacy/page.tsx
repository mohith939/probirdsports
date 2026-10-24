import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ProBird Sports",
  description: "Privacy and data handling policy for ProBird Sports institutional and wholesale equipment buyers.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 border-b border-[#222222] pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red">Legal Disclosure</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase font-display">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">1. Information We Collect</h2>
            <p>
              ProBird Sports collects business contact information provided voluntarily by wholesale buyers, athletic directors, coaches, and institutional procurement agents. This includes your name, official email, telephone number, organization name, and equipment requirement specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">2. Purpose of Data Collection</h2>
            <p>
              We process inquiry information strictly for commercial communication:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Preparing and sending customized itemized wholesale quotations.</li>
              <li>Coordinating batch production schedules and freight delivery transit.</li>
              <li>Responding to specification requests, sizing questions, and compliance standards.</li>
              <li>Fulfilling institutional accounting, invoicing, and order records.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">3. Third-Party Disclosures & Security</h2>
            <p>
              We do not sell, rent, or trade your contact data to third-party marketing lists. Information is shared only with verified logistics and shipping freight partners as necessary to deliver physical equipment consignments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide">4. Contact & Inquiries</h2>
            <p>
              For privacy-related questions or to request removal of your business contact information from our quotation records, please email <span className="text-white font-mono">procurement@probirdsports.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
