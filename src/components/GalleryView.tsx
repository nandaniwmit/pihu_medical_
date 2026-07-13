import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { galleryItems } from "../data";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

  const filters = ["All", "Store Front", "Medicine Shelves", "Products", "Medical Equipment", "Customers"];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    // Find absolute index in the original array to allow correct carousel sliding
    const selectedItem = filteredItems[index];
    const originalIndex = galleryItems.findIndex((item) => item.id === selectedItem.id);
    setLightboxIndex(originalIndex);
    setZoomScale(1);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomScale(1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIndex = (lightboxIndex + 1) % galleryItems.length;
      setLightboxIndex(nextIndex);
      setZoomScale(1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIndex = (lightboxIndex - 1 + galleryItems.length) % galleryItems.length;
      setLightboxIndex(prevIndex);
      setZoomScale(1);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleZoomReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3.5 py-1.5 rounded-full">
            <span>Virtual Tour</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Our Store <span className="text-brand-green">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Explore Pihu Medical's modern pharmacy setup, completely stocked medicine shelves, professional equipment, and hygienic storefront.
          </p>
        </div>

        {/* Filter Categories Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4.5 py-2.2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800 hover:border-brand-green"
              }`}
              id={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Create staggered delays based on rendering
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-850 group cursor-pointer shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
                  id={`gallery-item-${item.id}`}
                >
                  <div className="relative overflow-hidden aspect-4/3 bg-slate-100 dark:bg-slate-950">
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-white/30 backdrop-blur-md rounded-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex items-center justify-between border-t border-slate-50 dark:border-slate-850">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">{item.title}</h4>
                      <span className="block text-[10px] text-brand-green font-extrabold uppercase tracking-wider mt-0.5">
                        {item.category}
                      </span>
                    </div>
                    <div className="h-7 w-7 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-400 group-hover:text-brand-green transition-colors">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Lightbox Popup */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 overflow-hidden flex flex-col justify-between bg-black/95">
              
              {/* Top Controls Bar */}
              <div className="p-4 flex items-center justify-between z-10 text-white bg-gradient-to-b from-black/80 to-transparent">
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    {galleryItems[lightboxIndex].title}
                  </h4>
                  <span className="text-[10px] uppercase font-black text-brand-green tracking-widest block mt-0.5">
                    {galleryItems[lightboxIndex].category}
                  </span>
                </div>

                {/* Toolbar buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleZoomIn}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                    title="Zoom In"
                    id="lightbox-zoom-in"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                    title="Zoom Out"
                    id="lightbox-zoom-out"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleZoomReset}
                    className="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                    title="Reset Zoom"
                    id="lightbox-zoom-reset"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
                    title="Close Gallery"
                    id="close-lightbox"
                  >
                    <X className="h-5.5 w-5.5" />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div className="flex-1 flex items-center justify-center relative p-4">
                
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors z-10 cursor-pointer"
                  aria-label="Previous image"
                  id="lightbox-prev"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Carousel Image container */}
                <div className="overflow-hidden max-w-4xl max-h-[70vh] flex items-center justify-center">
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: zoomScale }}
                    transition={{ type: "spring", damping: 30 }}
                    src={galleryItems[lightboxIndex].url}
                    alt={galleryItems[lightboxIndex].title}
                    className="object-contain max-w-full max-h-[70vh] rounded-lg cursor-grab active:cursor-grabbing select-none"
                    style={{ transformOrigin: "center center" }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors z-10 cursor-pointer"
                  aria-label="Next image"
                  id="lightbox-next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

              </div>

              {/* Bottom Carousel Indicator */}
              <div className="p-4 text-center z-10 text-xs text-slate-500 bg-gradient-to-t from-black/80 to-transparent">
                <span>
                  Image {lightboxIndex + 1} of {galleryItems.length}
                </span>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
