import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useTracking from "./hooks/useTracking";
import FloatingButtons from "./components/FloatingButtons";
import OrderFormView from "./components/OrderFormView";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import GalleryView from "./components/GalleryView";
import ContactView from "./components/ContactView";
import { ShieldCheck, FileText, AlertTriangle, X, Check, ArrowUpRight } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  
  // Activate global analytics tracking
  useTracking(currentPage);

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | "disclaimer" | null>(null);

  // Dark Mode persistent state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("pihu_dark_mode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("pihu_dark_mode", String(darkMode));
  }, [darkMode]);

  // Client-side Hash Routing listener for SEO & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "").replace("#", "").toLowerCase();
      const validPages = ["home", "about", "services", "gallery", "contact"];
      
      if (hash === "faq") {
        setCurrentPage("home");
        setTimeout(() => {
          const faqEl = document.getElementById("faqs-section");
          if (faqEl) faqEl.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
  };

  // Render active page view
  const renderActiveView = () => {
    switch (currentPage) {
      case "home":
        return <HomeView setCurrentPage={handlePageChange} openOrderModal={() => setOrderModalOpen(true)} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView />;
      case "gallery":
        return <GalleryView />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={handlePageChange} openOrderModal={() => setOrderModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* 1. Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openOrderModal={() => setOrderModalOpen(true)}
      />

      {/* 2. Main Page Stage */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        openOrderModal={() => setOrderModalOpen(true)}
        openLegalModal={(type) => setLegalModalType(type)}
      />

      {/* 4. Floating Action Buttons */}
      <FloatingButtons openOrderModal={() => setOrderModalOpen(true)} />

      {/* 5. WhatsApp Order Form Slide-Over */}
      <OrderFormView isOpen={orderModalOpen} onClose={() => setOrderModalOpen(false)} />

      {/* 6. Legal Compliance Overlays (Modals) */}
      <AnimatePresence>
        {legalModalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModalType(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-100 dark:border-slate-800 max-h-[85vh] overflow-y-auto"
              id="legal-modal-dialog"
            >
              <button
                onClick={() => setLegalModalType(null)}
                className="absolute right-5 top-5 p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                id="close-legal-modal"
              >
                <X className="h-5.5 w-5.5" />
              </button>

              {/* Privacy Policy */}
              {legalModalType === "privacy" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-brand-green">
                    <ShieldCheck className="h-7 w-7" />
                    <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
                      Privacy Policy
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400">Effective Date: July 6, 2026</p>
                  
                  <div className="text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p>
                      At <strong>Pihu Medical</strong>, we prioritize our patients' confidentiality. This Privacy Policy details how we handle information uploaded on our WhatsApp order forms and inquiry submissions.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">1. Information We Process</h4>
                    <p>
                      When you use our direct WhatsApp prescription order form, we temporarily handle your name, delivery address, phone number, and prescription photos to compile and prepare the physical medicine bundles.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">2. Medical Privacy & Storage</h4>
                    <p>
                      All medical information and prescription photos are direct peer-to-peer encrypted communications via WhatsApp messenger. We do not store, catalog, or share your medical prescriptions or files with third-party networks or marketing databases.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">3. Patient Rights</h4>
                    <p>
                      You hold the complete right to request deletion of your order billing logs in our local ledger at any point by visiting our physical store at Titaiganj Rd, Tekari.
                    </p>
                  </div>
                </div>
              )}

              {/* Terms & Conditions */}
              {legalModalType === "terms" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-brand-blue">
                    <FileText className="h-7 w-7" />
                    <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
                      Terms & Conditions
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400">Effective Date: July 6, 2026</p>

                  <div className="text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p>
                      Welcome to <strong>Pihu Medical</strong>. By navigating this website or utilizing our WhatsApp ordering support systems, you agree to comply with the following operational terms:
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">1. Prescription Requirements</h4>
                    <p>
                      In compliance with Indian Drugs and Cosmetics Act regulations, Schedule H, H1, and X medicines cannot be dispensed without a valid, signed medical prescription from a registered medical practitioner.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">2. Inventory Availability</h4>
                    <p>
                      Submitting a WhatsApp check does not guarantee stock availability. Our team coordinates to prepare orders only after confirming direct inventory.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">3. Delivery and Payments</h4>
                    <p>
                      Home deliveries are subject to address locations inside Tekari, Gaya, Bihar. All invoices must be settled via cash, card, or UPI prior to package dispatch.
                    </p>
                  </div>
                </div>
              )}

              {/* Medical Disclaimer */}
              {legalModalType === "disclaimer" && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-rose-500">
                    <AlertTriangle className="h-7 w-7" />
                    <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
                      Medical Disclaimer
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400">Effective Date: July 6, 2026</p>

                  <div className="text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-rose-500">
                      WARNING: THE INFORMATION PROVIDED ON THIS WEBSITE IS FOR GENERAL HEALH AWARENESS EDUCATION ONLY AND MUST NOT BE USED AS A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">1. Consultation Guidance</h4>
                    <p>
                      Always seek direct guidance from your doctor or other registered medical practitioner regarding any symptoms, dosages, or general medical conditions. Never delay seeking clinical diagnosis due to articles read on this website.
                    </p>
                    <h4 className="font-bold text-slate-900 dark:text-white">2. Emergency Incidents</h4>
                    <p>
                      If you are experiencing a life-critical medical emergency (e.g., cardiac arrest, respiratory failure), please contact local hospitals immediately or call national emergency numbers. Pihu Medical is a pharmacy outlet and does not operate as an emergency medical rescue dispatch.
                    </p>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex justify-end">
                <button
                  onClick={() => setLegalModalType(null)}
                  className="px-6 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-850 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                  id="close-legal-dialog-btn"
                >
                  I Understand
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
