import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";

interface FloatingButtonsProps {
  openOrderModal: () => void;
}

export default function FloatingButtons({ openOrderModal }: FloatingButtonsProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-center space-y-3.5 print:hidden">
      
      {/* Back to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-full shadow-lg border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors"
            aria-label="Scroll back to top"
            id="back-to-top-btn"
          >
            <ArrowUp className="h-5.5 w-5.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href="tel:090970463A43"
        className="p-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full shadow-xl flex items-center justify-center relative group"
        aria-label="Call Store"
        id="floating-call-btn"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1.2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
          Call: 090970463A43
        </span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={openOrderModal}
        className="p-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-full shadow-xl flex items-center justify-center relative group cursor-pointer"
        aria-label="WhatsApp Order"
        id="floating-whatsapp-btn"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-brand-green/30 animate-ping" />
        <MessageSquare className="h-6 w-6 fill-white relative z-10" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1.2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md">
          WhatsApp Order & Inquiry
        </span>
      </motion.button>

    </div>
  );
}
