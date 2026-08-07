import React from "react";
import { HeartPulse, MapPin, Phone, MessageSquare, Clock, ArrowRight, ShieldCheck, FileText, AlertTriangle } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
  openOrderModal: () => void;
  openLegalModal: (type: "privacy" | "terms" | "disclaimer") => void;
}

export default function Footer({ setCurrentPage, openOrderModal, openLegalModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesLinks = [
    { label: "Prescription Medicines", page: "services" },
    { label: "General Medicines (OTC)", page: "services" },
    { label: "Baby Care Products", page: "services" },
    { label: "Medical Equipment", page: "services" },
    { label: "Health Supplements", page: "services" },
    { label: "Diabetic Care", page: "services" },
  ];

  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Our Services", page: "services" },
    { label: "Photo Gallery", page: "gallery" },
    { label: "FAQs", page: "faq" },
    { label: "Contact Us", page: "contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-black transition-colors duration-300 pt-16 pb-8 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick("home")}
              className="flex items-center space-x-3 text-left cursor-pointer group"
              id="footer-logo-btn"
            >
              <div className="bg-brand-green/20 p-2.5 rounded-xl">
                <HeartPulse className="h-6 w-6 text-brand-green" />
              </div>
              <div>
                <span className="block text-lg font-black tracking-tight text-white uppercase">
                  Pihu <span className="text-brand-green">Medical</span>
                </span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Tekari, Gaya
                </span>
              </div>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Your Trusted Medical Store in Tekari for 100% Genuine Medicines, Surgical supplies, Baby Care, and Personal Health essentials at the most affordable rates.
            </p>
            <div className="pt-2 space-y-2">
              <span className="inline-flex items-center text-xs font-bold bg-brand-green/10 text-brand-green px-3 py-1.2 rounded-full border border-brand-green/20">
                ● Licensed Pharmacy
              </span>
              <p className="text-xs text-slate-500">
                Lic No: BR-GAY-2026-X10294 (Sample)
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest border-l-3 border-brand-green pl-3 mb-6">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className="group flex items-center space-x-2 text-sm hover:text-white transition-colors cursor-pointer text-left"
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest border-l-3 border-brand-green pl-3 mb-6">
              Our Departments
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className="group flex items-center space-x-2 text-sm hover:text-white transition-colors cursor-pointer text-left"
                    id={`footer-dept-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-brand-green group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest border-l-3 border-brand-green pl-3 mb-4">
                Operational Hours
              </h3>
              <div className="flex items-start space-x-3 text-sm">
                <Clock className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-300">Mon - Sun (Daily)</span>
                  <span className="text-xs text-slate-500">08:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest border-l-3 border-brand-green pl-3 mb-4">
                Store Location
              </h3>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Pihu+Medical+Titaiganj+Rd+Tekari+Bihar+824236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Titaiganj Rd, Tekari, Gaya, Bihar 824236
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle row: Fast contact CTA */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left border-b border-slate-800">
          <div className="text-slate-300">
            <span className="block font-black text-lg">In Need of Urgent Medicines?</span>
            <span className="text-xs text-slate-500">Prepare prescription & place your order directly.</span>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="tel:090970463A43"
              className="flex items-center space-x-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-blue/10 hover:-translate-y-0.5"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>090970463A43</span>
            </a>
            <button
              onClick={openOrderModal}
              className="flex items-center space-x-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-brand-green/10 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="h-4.5 w-4.5 fill-white" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
          <div className="text-center md:text-right">
            <a
              href="https://maps.google.com/?q=Pihu+Medical+Titaiganj+Rd+Tekari+Bihar+824236"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green hover:underline"
            >
              <span>Get Maps Directions</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bottom row: copyright & legal link */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            <p>
              © {currentYear} Pihu Medical. All Rights Reserved. Crafted with care in Tekari, Bihar.{" "}
              <span className="opacity-75">|</span> {" "}
              <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <button
              onClick={() => openLegalModal("privacy")}
              className="hover:text-slate-300 flex items-center space-x-1 cursor-pointer"
              id="privacy-policy-btn"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => openLegalModal("terms")}
              className="hover:text-slate-300 flex items-center space-x-1 cursor-pointer"
              id="terms-conditions-btn"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Terms & Conditions</span>
            </button>
            <button
              onClick={() => openLegalModal("disclaimer")}
              className="hover:text-slate-300 flex items-center space-x-1 cursor-pointer"
              id="medical-disclaimer-btn"
            >
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>Medical Disclaimer</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
