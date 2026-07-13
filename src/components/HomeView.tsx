import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials, faqs, categories, healthTips, services } from "../data";
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldAlert,
  Users,
  BadgePercent,
  CheckCircle,
  Truck,
  ArrowRight,
  ChevronDown,
  Star,
  Search,
  BookOpen,
  Calendar,
  Layers,
  Zap,
  Droplet,
  Syringe,
  Activity,
  Flame,
  Shield,
  Sparkles,
  Baby,
  Heart,
  Accessibility,
  Award,
  Download
} from "lucide-react";
// @ts-ignore
import heroImg from "../assets/images/hero_pharmacy_1783327661259.jpg";

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
  openOrderModal: () => void;
}

export default function HomeView({ setCurrentPage, openOrderModal }: HomeViewProps) {
  // States for interactive components
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  // Search autocomplete list (common medicines)
  const commonMedicines = [
    "Paracetamol 650mg",
    "Pantocid 40mg",
    "Amoxyclav 625mg",
    "Glycomet GP 1 Forte",
    "Limcee Vitamin C",
    "Becosules Capsules",
    "Omron BP Monitor",
    "Insulin Glargine Pen",
    "Himalaya Baby Wipes",
    "Volini Pain Spray",
    "Dettol Liquid Antiseptic",
    "Accu-Chek Sugar Test Strips"
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim().length > 0) {
      const filtered = commonMedicines.filter((m) =>
        m.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(filtered);
      setShowSearchDropdown(true);
    } else {
      setSearchResult([]);
      setShowSearchDropdown(false);
    }
  };

  const handleSelectSearch = (item: string) => {
    setSearchQuery(item);
    setShowSearchDropdown(false);
    openOrderModal();
  };

  const toggleFaq = (id: string) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper for rendering category icons
  const renderCategoryIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      Layers: <Layers className="h-5 w-5" />,
      Zap: <Zap className="h-5 w-5" />,
      Droplet: <Droplet className="h-5 w-5" />,
      Syringe: <Syringe className="h-5 w-5" />,
      Activity: <Activity className="h-5 w-5" />,
      Flame: <Flame className="h-5 w-5" />,
      Shield: <Shield className="h-5 w-5" />,
      Sparkles: <Sparkles className="h-5 w-5" />,
      Baby: <Baby className="h-5 w-5" />,
      Heart: <Heart className="h-5 w-5" />,
      Accessibility: <Accessibility className="h-5 w-5" />,
      Award: <Award className="h-5 w-5" />
    };
    return iconMap[iconName] || <Activity className="h-5 w-5" />;
  };

  return (
    <div className="space-y-18 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden" id="hero-section">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Pihu Medical Store"
            className="w-full h-full object-cover opacity-35 filter blur-[1px] transform scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest text-brand-green uppercase bg-brand-green/20 px-4 py-1.5 rounded-full border border-brand-green/30">
                <span className="animate-pulse h-2 w-2 rounded-full bg-brand-green block" />
                <span>Tekari's Premier Healthcare Partner</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                Pihu <span className="text-brand-green">Medical</span>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-300 normal-case tracking-normal mt-2">
                  Your Trusted Pharmacy in Tekari
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
                Providing 100% genuine prescription medicines, premium healthcare essentials, surgical gear, pediatric foods, and wellness vitamins at honest, wholesale-like prices.
              </p>

              {/* Interactive Medicine Search Box */}
              <div className="relative max-w-md bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl flex items-center space-x-2 border border-white/10 mt-3">
                <Search className="h-5 w-5 text-slate-400 shrink-0 ml-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search & check medicine availability..."
                  className="flex-1 bg-transparent border-0 text-slate-900 dark:text-white text-xs sm:text-sm focus:ring-0 focus:outline-hidden"
                  id="hero-medicine-search"
                />
                <button
                  onClick={openOrderModal}
                  className="px-4 py-2 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
                >
                  Find Now
                </button>

                {/* Dropdown suggestions */}
                <AnimatePresence>
                  {showSearchDropdown && searchResult.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-30"
                    >
                      <span className="block px-4 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                        Common Pharmacy Stocks
                      </span>
                      <ul className="max-h-48 overflow-y-auto">
                        {searchResult.map((item, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handleSelectSearch(item)}
                              className="w-full text-left px-4 py-2.5 text-xs text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between"
                            >
                              <span>{item}</span>
                              <span className="text-[9px] font-bold bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full">
                                In Stock
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:090970463A43"
                  className="flex items-center space-x-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-blue/15 hover:-translate-y-0.5"
                  id="hero-call-btn"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>Call 090970463A43</span>
                </a>
                
                <button
                  onClick={openOrderModal}
                  className="flex items-center space-x-2 px-6 py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-green/15 hover:-translate-y-0.5 cursor-pointer"
                  id="hero-whatsapp-btn"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-white" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href="https://maps.google.com/?q=Pihu+Medical+Titaiganj+Rd+Tekari+Bihar+824236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-all border border-white/20"
                  id="hero-directions-btn"
                >
                  <MapPin className="h-4.5 w-4.5 text-brand-green" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right sidebar quick features panel */}
            <div className="lg:col-span-5 hidden lg:block bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/15 text-white space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Live Updates</span>
              <h3 className="font-extrabold text-lg text-slate-100">Nearby Delivery Information</h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-brand-green shrink-0 mt-0.5 animate-bounce" />
                  <div>
                    <span className="block font-bold">Fast Local Delivery</span>
                    <span className="text-slate-300">Daily delivery within Tekari and neighboring locations.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <BadgePercent className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Monthly Prescription Offers</span>
                    <span className="text-slate-300">Enjoy discount rates on chronic medications for senior citizens.</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs">
                <div>
                  <span className="block text-slate-400">Licensed under:</span>
                  <span className="font-bold text-slate-200">Gaya District Drug Auth</span>
                </div>
                <div className="text-right">
                  <span className="block text-slate-400">Current Status:</span>
                  <span className="inline-flex items-center space-x-1.5 text-brand-green font-bold">
                    <span className="h-2 w-2 rounded-full bg-brand-green block" />
                    <span>Open & Active</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Emergency Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-rose-50 to-red-50 dark:from-slate-900/60 dark:to-slate-850/60 border border-rose-100 dark:border-rose-950/40 p-5 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start space-x-4 text-center md:text-left">
            <div className="p-3 bg-rose-100 dark:bg-rose-950/50 rounded-2xl text-rose-600 shrink-0 hidden sm:block">
              <ShieldAlert className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-black text-rose-600 uppercase tracking-widest block">Emergency Contact</span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">In Need of Critical Life-Saving Medicines?</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Our pharmacy prioritizes oxygen support, nebulizers, insulin, and life-critical cardiac formulations.</p>
            </div>
          </div>
          <a
            href="tel:090970463A43"
            className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs shadow-md shadow-rose-600/10 transition-colors flex items-center space-x-2 shrink-0"
          >
            <Phone className="h-4 w-4" />
            <span>Call Hotline Now</span>
          </a>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-brand-green uppercase block">Our Guarantees</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Dedicated to safety, reliability, and honest community healthcare values.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "100% Genuine Medicines", desc: "Sourced directly from certified medical manufacturers and distributors.", color: "border-teal-500/10 text-brand-green" },
            { title: "Experienced Staff", desc: "Qualified pharmacists guide you with dosage guidelines and drug safety.", color: "border-blue-500/10 text-brand-blue" },
            { title: "Affordable Prices", desc: "Transparent billing with seasonal discounts and senior citizen cuts.", color: "border-amber-500/10 text-amber-500" },
            { title: "Fast Services", desc: "Prescription packing in minutes, plus reliable local delivery.", color: "border-purple-500/10 text-purple-500" },
            { title: "Prescription Drugs", desc: "Fully stocked chronic medications for cardiac, BP, and diabetes care.", color: "border-rose-500/10 text-rose-500" },
            { title: "Healthcare Products", desc: "Authentic nebulizers, BP monitors, walking aids, and glucometers.", color: "border-indigo-500/10 text-indigo-500" },
            { title: "Trusted Local Pharmacy", desc: "Rooted deep in Tekari, Bihar with a flawless reputation of integrity.", color: "border-sky-500/10 text-sky-500" },
            { title: "Easy WhatsApp Support", desc: "Simply snap your prescription and click send. We handle the rest.", color: "border-emerald-500/10 text-brand-green" }
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-900 p-6 rounded-2.5xl border hover:border-brand-green transition-all shadow-xs hover:shadow-md flex flex-col justify-between ${item.color}`}
            >
              <div className="space-y-2">
                <div className="h-10 w-10 bg-slate-50 dark:bg-slate-950 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm uppercase tracking-tight leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Categories */}
      <section className="bg-slate-100 dark:bg-slate-950 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-brand-green uppercase block mb-1">Our Stock Categories</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Featured Departments
              </h2>
            </div>
            <button
              onClick={() => {
                setCurrentPage("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-1.5 text-xs font-black text-brand-green hover:underline cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((cat) => (
              <div
                key={cat.id}
                onClick={openOrderModal}
                className="bg-white dark:bg-slate-900 p-5 rounded-2.5xl border border-slate-100 dark:border-slate-850 hover:border-brand-green shadow-xs hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${cat.accentColor} group-hover:scale-105 transition-transform`}>
                    {renderCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-sm uppercase tracking-tight">{cat.name}</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-[11px] font-bold text-brand-green border-t border-slate-50 dark:border-slate-850 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Send Inquiry</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-brand-green uppercase block">Step-By-Step</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Getting your authentic medicines was never this convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { num: "01", title: "Visit Store", desc: "Drop by our pharmacy at Titaiganj Road, Tekari for physical consultation." },
            { num: "02", title: "Share Prescription", desc: "Either hand it at the counter or snap a picture and upload on our WhatsApp form." },
            { num: "03", title: "Get Medicines", desc: "Our experienced pharmacists will retrieve the authentic drugs immediately." },
            { num: "04", title: "Easy Payment", desc: "Complete payments securely via Cash, debit card, or any UPI app (GPay/PhonePe)." }
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs relative group flex flex-col justify-between"
            >
              <div className="absolute right-6 top-6 text-3xl font-black text-slate-100 dark:text-slate-800 group-hover:text-brand-green/20 transition-colors">
                {step.num}
              </div>
              <div className="space-y-2 mt-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">{step.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Customers Trust Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-850 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-green">Local Legacy</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 uppercase tracking-tight">
              Why Tekari Trusts Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Pihu Medical has served as a primary life-saving pharmacy hub, ensuring continuous medical support for chronic ailments, children's health, and elderly home support.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentPage("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green hover:underline cursor-pointer"
              >
                <span>Read Our Heritage Story</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { label: "Experienced Pharmacy", val: "Licensed & Certified" },
              { label: "Quality Medicines", val: "100% Genuine Audit" },
              { label: "Quick Service", val: "Instant Dispensing" },
              { label: "Friendly Staff", val: "Polite Consultation" },
              { label: "Reasonable Pricing", val: "Transparent Billing" },
              { label: "Convenient Location", val: "Titaiganj Rd, Tekari" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-extrabold">{stat.label}</span>
                <span className="block font-black text-slate-100 text-sm mt-1">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Download Prescription Reminder Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-emerald-500/10 to-teal-500/10 border border-brand-green/10 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="h-12 w-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
              <Download className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Forgot Your Prescription Format?</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Download our easy-to-read dosage tracker template to log your daily medication timing.</p>
            </div>
          </div>
          <button
            onClick={() => {
              // Mock download
              const content = "MEDICINE DOSAGE TRACKER\n\nName: __________\nAge: ____\n\n[ ] Medicine 1: __________________ Timing: Morning [ ] Afternoon [ ] Night [ ]\n[ ] Medicine 2: __________________ Timing: Morning [ ] Afternoon [ ] Night [ ]\n[ ] Medicine 3: __________________ Timing: Morning [ ] Afternoon [ ] Night [ ]\n\nAlways purchase 100% genuine medicines from Pihu Medical, Tekari, Gaya (090970463A43).";
              const blob = new Blob([content], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = "Pihu_Medical_Dosage_Tracker.txt";
              link.click();
              URL.revokeObjectURL(url);
            }}
            className="px-5 py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl text-xs flex items-center space-x-2 transition-colors cursor-pointer shrink-0"
          >
            <span>Download Tracker Form</span>
          </button>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="testimonials-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-brand-green uppercase block mb-1">Reviews</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Why Customers Trust Us
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer"
              id="prev-testimonial"
            >
              <ChevronDown className="h-5 w-5 rotate-90 text-slate-700 dark:text-slate-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer"
              id="next-testimonial"
            >
              <ChevronDown className="h-5 w-5 -rotate-90 text-slate-700 dark:text-slate-300" />
            </button>
          </div>
        </div>

        {/* Highlight Testimonial Slider Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-850 p-8 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute right-10 top-10 text-8xl font-serif text-slate-100 dark:text-slate-800 leading-none select-none pointer-events-none">
            “
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 relative z-10"
            >
              {/* Star ratings */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl text-slate-800 dark:text-slate-200 italic font-medium leading-relaxed max-w-4xl">
                "{testimonials[testimonialIndex].comment}"
              </blockquote>

              <div className="pt-4 flex items-center space-x-4 border-t border-slate-50 dark:border-slate-850">
                <div className="h-11 w-11 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center font-extrabold text-sm uppercase">
                  {testimonials[testimonialIndex].name.substring(0, 2)}
                </div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white">
                    {testimonials[testimonialIndex].name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {testimonials[testimonialIndex].role} • {testimonials[testimonialIndex].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 shadow-xs space-y-4">
              <div className="flex items-center space-x-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">"{item.comment}"</p>
              <div className="flex items-center space-x-3 pt-2">
                <div className="h-8 w-8 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center font-bold text-xs">
                  {item.name.substring(0, 2)}
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">{item.name}</span>
                  <span className="block text-[10px] text-slate-400">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="faqs-section">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-brand-green uppercase block">Have Questions?</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Answers to common queries regarding medicine authenticity, returns, and ordering.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer text-slate-900 dark:text-white"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-bold text-sm sm:text-base leading-snug pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-green" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-850 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Health tips section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-brand-green uppercase block">Health Tips</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Latest Health Tips
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Learn proper dosage guidelines and daily precautions to protect your family's health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-850 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-brand-green">
                  <span>{tip.category}</span>
                  <span className="text-slate-400">{tip.date}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-snug group-hover:text-brand-green transition-colors">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>

              <div className="p-6 border-t border-slate-50 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 flex items-center justify-between text-xs font-bold text-brand-green">
                <span>{tip.readTime}</span>
                <button
                  onClick={() => {
                    alert(`${tip.title}\n\n${tip.content}`);
                  }}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Google Review Star Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-xs text-center space-y-4">
          <div className="flex items-center justify-center space-x-1.5 text-amber-400">
            <Star className="h-6 w-6 fill-amber-400" />
            <Star className="h-6 w-6 fill-amber-400" />
            <Star className="h-6 w-6 fill-amber-400" />
            <Star className="h-6 w-6 fill-amber-400" />
            <Star className="h-6 w-6 fill-amber-400" />
          </div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">4.9/5 Rating on Google Reviews</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            "Genuine medicine supply and extremely caring behavior from Pihu Medical staff. Highly recommended pharmacy in Tekari, Gaya!"
          </p>
        </div>
      </section>

      {/* 12. Newsletter Subscription */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-brand-green/5 to-teal-500/5 dark:from-slate-900 dark:to-slate-950 p-8 sm:p-10 rounded-3xl border border-brand-green/10 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-brand-green block">Stay Informed</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">Subscribe to Health Awareness Newsletter</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Get monthly wellness tips and exclusive offers on medicine packages directly in your inbox.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing! We will send you our next newsletter issue.");
              (e.target as HTMLFormElement).reset();
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            id="newsletter-form"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-brand-green focus:outline-hidden text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl font-bold text-xs transition-colors shrink-0 cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* 13. Map Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-start space-x-4 text-center md:text-left">
            <div className="p-3 bg-brand-green/10 text-brand-green rounded-2xl shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Visit Our Pharmacy Store</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Located conveniently at Titaiganj Road, Tekari, Gaya, Bihar 824236.</p>
            </div>
          </div>
          <button
            onClick={() => {
              setCurrentPage("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-5 py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>View Interactive Google Map</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 14. Contact CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-linear-to-r from-brand-green to-emerald-700 p-8 sm:p-12 rounded-3xl text-white text-center space-y-6 shadow-xl shadow-brand-green/10">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-100 block">Fast Service Helpline</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
              In Need of Daily Healthcare Medicines?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
              Call us or order via WhatsApp now. Prepare your prescription and click order below—our professional on-duty pharmacists will pack them instantly!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:090970463A43"
              className="flex items-center justify-center space-x-2 px-6.5 py-3.8 bg-brand-blue hover:bg-brand-blue/90 text-white font-black rounded-xl text-sm transition-all shadow-lg shadow-black/20 hover:-translate-y-0.5 w-full sm:w-auto"
              id="cta-call-btn"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call: 090970463A43</span>
            </a>

            <button
              onClick={openOrderModal}
              className="flex items-center justify-center space-x-2 px-6.5 py-3.8 bg-white text-slate-900 hover:bg-slate-50 font-black rounded-xl text-sm transition-all shadow-lg shadow-black/10 hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
              id="cta-whatsapp-btn"
            >
              <MessageSquare className="h-4.5 w-4.5 text-brand-green fill-brand-green" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
