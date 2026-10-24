"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Copy, Check } from "lucide-react";
import { generateWhatsAppUrl, hasConfiguredWhatsApp } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [orgType, setOrgType] = useState("Sports Academy / Coaching Centre");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Multiple Categories");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const buildMessageText = () => {
    return [
      "Hello ProBird Sports Procurement Division,",
      "",
      "I am submitting an official bulk equipment enquiry:",
      `• Contact Name: ${name || "Institutional Buyer"}`,
      `• Organization Type: ${orgType}`,
      `• Email: ${email || "Not specified"}`,
      `• Phone/WhatsApp: ${phone || "Not specified"}`,
      `• Category Needed: ${category}`,
      `• Estimated Units: ${quantity || "To be discussed"}`,
      `• Requirements: ${message || "Please provide your institutional wholesale catalogue and pricing"}`,
      "",
      "— Sent via ProBird Sports Contact Portal",
    ].join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildMessageText();
    const url = generateWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleCopy = () => {
    const text = buildMessageText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#222222] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1C1C] border border-[#2E2E2E] text-brand-red text-xs font-bold uppercase tracking-wider">
            <span>Procurement & Wholesale Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display uppercase">
            CONTACT <span className="text-brand-red">PROBIRD SPORTS.</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Connect directly with our institutional equipment team. Submit equipment requirements for schools, sports clubs, academies, or retail wholesale orders.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-tight text-white font-display">
                Wholesale Communication Channels
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We prioritize direct, responsive communication. Our coordinators work directly with athletic directors, coaches, and purchase officers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#121212] border border-[#222222] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">WhatsApp Business Desk</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct messaging for immediate item specifications, batch availability, and quick quotes.
                  </p>
                  <div className="mt-2">
                    <span className="text-xs text-brand-red font-semibold">
                      Fastest response channel
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#121212] border border-[#222222] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-gray-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Procurement Email</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Send formal purchase orders, institutional tender documents, or equipment spreadsheets.
                  </p>
                  <p className="text-xs text-gray-200 font-mono mt-1">
                    procurement@probirdsports.com
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#121212] border border-[#222222] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-gray-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Supply Division</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    ProBird Sports Institutional Sporting Goods Supply Division. Dispatch coordination across regional and national transit networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#101010] border border-[#262626] text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>Quote-First Policy</span>
              </div>
              <p className="leading-relaxed">
                Wholesale pricing is finalized per transaction based on verified quantities, delivery location, and custom branding requirements.
              </p>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121212] border border-[#242424] shadow-2xl">
              <h2 className="text-xl font-bold uppercase tracking-tight text-white font-display mb-2">
                Submit an Equipment Enquiry
              </h2>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the form below. Your request will be formatted into an official enquiry and opened in WhatsApp, with full copy support for your records.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Enquiry Prepared & Launched</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Your enquiry details have been forwarded to the WhatsApp procurement desk. You can also copy the structured message below for your records.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-5 py-2.5 text-xs font-semibold rounded-md border border-[#333] hover:bg-[#222] text-gray-300 inline-flex items-center gap-2"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? "Copied to Clipboard" : "Copy Message Text"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 text-xs font-semibold rounded-md bg-brand-red hover:bg-brand-redHover text-white"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Name / Representative *
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Coach Robert"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="orgType" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Organization Type *
                      </label>
                      <select
                        id="orgType"
                        value={orgType}
                        onChange={(e) => setOrgType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                      >
                        <option value="Sports Academy / Coaching Centre">Sports Academy / Coaching Centre</option>
                        <option value="School / College / University">School / College / University</option>
                        <option value="Sports Retailer / Reseller">Sports Retailer / Reseller</option>
                        <option value="Club / Team Management">Club / Team Management</option>
                        <option value="Corporate / Complex Buyer">Corporate / Complex Buyer</option>
                        <option value="Tournament Organizer">Tournament Organizer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Official Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="procurement@school.edu"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 555-0192"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Primary Sport Category
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                      >
                        <option value="Multiple Categories">Multiple Categories (Consolidated)</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Volleyball">Volleyball</option>
                        <option value="Fitness & Conditioning">Fitness & Conditioning</option>
                        <option value="Athletics & Training">Athletics & Training</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Estimated Units / Tiers
                      </label>
                      <input
                        id="quantity"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 50 match balls, 10 bats"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Requirements / Tender Notes
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify sizes, materials, delivery date requirements, or custom logo branding needs..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="py-3.5 px-5 rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] text-gray-300 font-semibold text-xs flex items-center justify-center gap-2 border border-[#333] transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? "Copied" : "Copy Text"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
