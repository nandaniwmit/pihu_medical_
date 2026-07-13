import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { ServiceItem } from "../types";
import { Search, HeartPulse, HelpCircle, Check, FileText, ChevronRight, X, MessageSquare, AlertCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function ServicesView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [inquiryText, setInquiryText] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Filter services by search
  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper to dynamically render Lucide Icons
  const renderIcon = (iconName: string) => {
    // Fallbacks
    const iconMap: { [key: string]: React.ReactNode } = {
      FileText: <FileText className="h-6 w-6 text-brand-green" />,
      Pill: <LucideIcons.Pill className="h-6 w-6 text-brand-green" />,
      Activity: <LucideIcons.Activity className="h-6 w-6 text-brand-green" />,
      Baby: <LucideIcons.Baby className="h-6 w-6 text-brand-green" />,
      Heart: <LucideIcons.Heart className="h-6 w-6 text-brand-green" />,
      Tv: <LucideIcons.Tv className="h-6 w-6 text-brand-green" />,
      Scissors: <LucideIcons.Scissors className="h-6 w-6 text-brand-green" />,
      ShieldAlert: <LucideIcons.ShieldAlert className="h-6 w-6 text-brand-green" />,
      Flame: <LucideIcons.Flame className="h-6 w-6 text-brand-green" />,
      Award: <LucideIcons.Award className="h-6 w-6 text-brand-green" />,
    };
    return iconMap[iconName] || <HeartPulse className="h-6 w-6 text-brand-green" />;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryText.trim() || !inquiryName.trim() || !inquiryPhone.trim()) return;

    // Create formatted message
    const formattedText = `Hello Pihu Medical,

I have a service availability inquiry.

*CUSTOMER INQUIRY*
========================
*Name:* ${inquiryName}
*Phone:* ${inquiryPhone}
*Inquiry Item:* ${inquiryText}
========================
_Sent via Pihu Medical Website_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919097046343&text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, "_blank");

    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryText("");
      setInquiryName("");
      setInquiryPhone("");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Department Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3.5 py-1.5 rounded-full">
            <span>Departments & Solutions</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Our Medical <span className="text-brand-green">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Providing comprehensive diagnostic monitoring, authentic prescription dispensing, and dedicated home care support.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services (e.g. Baby care, Diabetic...)"
              className="w-full px-5 py-3.5 pl-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl text-sm text-slate-900 dark:text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-hidden shadow-xs transition-all"
              id="services-search-input"
            />
            <Search className="absolute left-4.5 top-7 text-slate-400 h-5 w-5" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs hover:shadow-lg dark:hover:border-slate-800 transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-4">
                <div className="h-12 w-12 bg-brand-green/10 dark:bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green shrink-0 group-hover:bg-brand-green/20 transition-all">
                  {renderIcon(service.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs font-bold text-brand-green border-t border-slate-50 dark:border-slate-850 mt-6">
                <span>View Details & Specifications</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
              <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No matching services found.</p>
              <p className="text-xs text-slate-400 mt-1">Please try searching with another keyword.</p>
            </div>
          )}
        </div>

        {/* Dynamic Availability Inquiry Form */}
        <div className="bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-slate-900/60 dark:to-slate-850/60 p-8 rounded-3xl border border-brand-green/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-green block">Instant Stock Check</span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">Medicine Availability Inquiry</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Looking for a specific prescription medication, insulin pen, or medical device? Submit its name below, and our team will check our shelves and notify you instantly via WhatsApp.
            </p>
            <div className="space-y-2 pt-1">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Check className="h-4 w-4 text-brand-green" />
                <span>Response in less than 15 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Check className="h-4 w-4 text-brand-green" />
                <span>No need to stand in long queues</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 shadow-md">
            {inquirySuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-950/40 text-brand-green rounded-full flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6 stroke-[3]" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">Inquiry Forwarded!</h4>
                <p className="text-xs text-slate-500">Connecting to WhatsApp chat for instant pharmacist response...</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4" id="availability-inquiry-form">
                <div>
                  <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                    Medicine Name / Strength Required *
                  </label>
                  <input
                    type="text"
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="e.g. Glycomet GP 1 Forte, Januvia 100mg"
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-900 dark:text-white focus:border-brand-green focus:outline-hidden transition-all"
                    required
                    id="inquiry-medicine-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Sumit Kumar"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-900 dark:text-white focus:border-brand-green focus:outline-hidden transition-all"
                      required
                      id="inquiry-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="10-digit number"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-900 dark:text-white focus:border-brand-green focus:outline-hidden transition-all"
                      required
                      id="inquiry-phone-input"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md shadow-brand-green/10 transition-all hover:-translate-y-0.5 cursor-pointer"
                  id="submit-inquiry-btn"
                >
                  <MessageSquare className="h-4 w-4 fill-white" />
                  <span>Check Availability via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Detailed Service Specifications Overlay (Modal) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
              />

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative bg-white dark:bg-slate-900 max-w-lg w-full p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-850 overflow-hidden flex flex-col"
                id="service-detail-modal"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute right-4.5 top-4.5 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  id="close-service-modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-5">
                  <div className="h-12 w-12 bg-brand-green/10 dark:bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green">
                    {renderIcon(selectedService.iconName)}
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                      {selectedService.title}
                    </h2>
                    <span className="inline-flex items-center text-[10px] font-black uppercase tracking-wider bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full">
                      Professional standard
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedService.detailedInfo}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl space-y-2">
                    <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Department Highlights</span>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <li className="flex items-center space-x-1.5">
                        <Check className="h-3.5 w-3.5 text-brand-green" />
                        <span>100% Genuine stocks</span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <Check className="h-3.5 w-3.5 text-brand-green" />
                        <span>Licensed pharmacist</span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <Check className="h-3.5 w-3.5 text-brand-green" />
                        <span>Cold storage kept</span>
                      </li>
                      <li className="flex items-center space-x-1.5">
                        <Check className="h-3.5 w-3.5 text-brand-green" />
                        <span>Digital safety tracking</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="flex-1 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      id="close-specification-btn"
                    >
                      Close Window
                    </button>
                    <a
                      href="tel:090970463A43"
                      className="flex-1 py-3 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all hover:-translate-y-0.5"
                    >
                      <LucideIcons.Phone className="h-4.5 w-4.5" />
                      <span>Direct Dial Inquiry</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
