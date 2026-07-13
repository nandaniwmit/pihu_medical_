import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeartPulse, Menu, X, Sun, Moon, Phone, MessageSquare } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  openOrderModal: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  openOrderModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 bg-white/85 dark:bg-slate-900/85 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
            id="logo-button"
          >
            <div className="bg-brand-green/10 dark:bg-brand-green/20 p-2.5 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-green/20">
              <HeartPulse className="h-6.5 w-6.5 text-brand-green animate-pulse" />
            </div>
            <div className="text-left">
              <span className="block text-xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans leading-tight">
                Pihu <span className="text-brand-green">Medical</span>
              </span>
              <span className="block text-[10px] font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase leading-none mt-0.5">
                Tekari, Gaya
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  currentPage === item.id
                    ? "text-brand-green bg-brand-green/10 dark:bg-brand-green/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-green hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
              id="theme-toggle"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Call Now Button */}
            <a
              href="tel:090970463A43"
              className="flex items-center space-x-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 transition-colors"
              id="call-header-btn"
            >
              <Phone className="h-4.5 w-4.5 text-brand-blue" />
              <span>Call Store</span>
            </a>

            {/* Quick WhatsApp Order */}
            <button
              onClick={openOrderModal}
              className="flex items-center space-x-2 px-4.5 py-2.2 bg-brand-green hover:bg-brand-green-dark text-white text-sm font-bold rounded-xl shadow-md shadow-brand-green/20 hover:shadow-brand-green/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              id="order-header-btn"
            >
              <MessageSquare className="h-4.5 w-4.5 fill-white" />
              <span>WhatsApp Order</span>
            </button>
          </div>

          {/* Mobile Right Bar controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
              id="theme-toggle-mobile"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              id="mobile-menu-trigger"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide-Over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-slate-900 shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-2.5">
                    <HeartPulse className="h-5.5 w-5.5 text-brand-green" />
                    <span className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                      Pihu Medical
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    id="close-mobile-menu"
                  >
                    <X className="h-5.5 w-5.5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center px-4 py-3 rounded-xl text-base font-bold transition-colors cursor-pointer ${
                        currentPage === item.id
                          ? "text-brand-green bg-brand-green/10 dark:bg-brand-green/20"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                      }`}
                      id={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="tel:090970463A43"
                  className="flex items-center justify-center space-x-2 w-full py-3.5 border border-slate-200 dark:border-slate-800 rounded-xl text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  id="mobile-call-btn"
                >
                  <Phone className="h-5 w-5 text-brand-blue" />
                  <span>Call Store</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openOrderModal();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white text-base font-bold rounded-xl shadow-md shadow-brand-green/10 transition-colors cursor-pointer"
                  id="mobile-order-btn"
                >
                  <MessageSquare className="h-5 w-5 fill-white" />
                  <span>WhatsApp Order</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
