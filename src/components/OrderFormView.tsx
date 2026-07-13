import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Phone, MessageSquare, Upload, Calendar, Check, AlertCircle } from "lucide-react";

interface OrderFormViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderFormView({ isOpen, onClose }: OrderFormViewProps) {
  // Local storage caching for repeat orders
  const [name, setName] = useState(() => localStorage.getItem("pihu_customer_name") || "");
  const [mobile, setMobile] = useState(() => localStorage.getItem("pihu_customer_mobile") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("pihu_customer_email") || "");
  const [address, setAddress] = useState(() => localStorage.getItem("pihu_customer_address") || "");
  const [medicine, setMedicine] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("Anytime (08:00 AM - 10:00 PM)");
  const [prescriptionAttached, setPrescriptionAttached] = useState<boolean>(false);
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setPrescriptionAttached(true);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setPrescriptionFile(file);
      setPrescriptionAttached(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setPrescriptionFile(null);
    setPrescriptionAttached(false);
    setPrescriptionPreview(null);
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Customer name is required.";
    if (!mobile.trim()) {
      tempErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile.replace(/\D/g, ""))) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (!address.trim()) tempErrors.address = "Delivery address is required.";
    if (!medicine.trim() && !prescriptionAttached) {
      tempErrors.medicine = "Please specify medicines required OR upload a prescription.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save details for fast checkout next time
    localStorage.setItem("pihu_customer_name", name);
    localStorage.setItem("pihu_customer_mobile", mobile);
    localStorage.setItem("pihu_customer_email", email);
    localStorage.setItem("pihu_customer_address", address);

    // Format WhatsApp message
    const businessName = "Pihu Medical";
    const boldLine = "========================";
    
    const text = `Hello Pihu Medical,

I would like to order medicines from your store.

*CUSTOMER ORDER DETAILS*
${boldLine}
*Customer Name:* ${name}
*Phone:* ${mobile}
*Email:* ${email || "Not Provided"}
*Delivery Address:* ${address}
${boldLine}

*MEDICINES REQUIRED:*
${medicine || "Please check attached prescription image."}

*PRESCRIPTION ATTACHED:*
${prescriptionAttached ? "Yes, Photo Attached in WhatsApp Chat" : "No Prescription"}

*PREFERRED DELIVERY TIME:*
${deliveryTime}

*ADDITIONAL MESSAGE:*
${message || "Please deliver at the earliest. Thank you!"}
${boldLine}
_Sent via Pihu Medical Website_`;

    // Encode URI
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919097046343&text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
      // Clear order-specific fields, keep user profile
      setMedicine("");
      setMessage("");
      removeFile();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 print:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Form Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800"
            id="order-modal-dialog"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-slate-850 border-b border-slate-200/50 dark:border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-green/20 p-2 rounded-xl text-brand-green">
                  <MessageSquare className="h-5 w-5 fill-brand-green" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    WhatsApp Medicine Order
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Order with genuine medicines in 3 easy steps
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
                id="close-order-modal"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-950/40 text-brand-green rounded-full flex items-center justify-center animate-bounce">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Connecting to WhatsApp...
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    We are launching WhatsApp with your formatted order details. Please hit send in your WhatsApp chat!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="whatsapp-order-form">
                  {/* Alert banner */}
                  <div className="bg-brand-blue-light/50 dark:bg-slate-800/60 p-4 rounded-2xl flex items-start space-x-3 border border-brand-blue/10">
                    <AlertCircle className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong>Prescription Policy:</strong> Schedule H drugs require a clear prescription upload. You can either type your medicines below or upload a photo of your prescription.
                    </p>
                  </div>

                  {/* Customer Information Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                          errors.name
                            ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                            : "border-slate-200 dark:border-slate-800 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                        }`}
                        id="order-name-input"
                      />
                      {errors.name && (
                        <p className="text-rose-500 text-xs font-semibold mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                          errors.mobile
                            ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                            : "border-slate-200 dark:border-slate-800 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                        }`}
                        id="order-phone-input"
                      />
                      {errors.mobile && (
                        <p className="text-rose-500 text-xs font-semibold mt-1">{errors.mobile}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rahul@gmail.com"
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-hidden transition-all"
                        id="order-email-input"
                      />
                    </div>

                    {/* Preferred Delivery Time */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Preferred Delivery Time
                      </label>
                      <select
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-hidden transition-all cursor-pointer"
                        id="order-delivery-select"
                      >
                        <option>Anytime (08:00 AM - 10:00 PM)</option>
                        <option>Morning (08:00 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 04:00 PM)</option>
                        <option>Evening (04:00 PM - 08:00 PM)</option>
                        <option>Night (08:00 PM - 10:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Full Delivery Address *
                    </label>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Ward No 5, Titaiganj Rd, Tekari, Gaya, Bihar 824236"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                        errors.address
                          ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                      id="order-address-input"
                    />
                    {errors.address && (
                      <p className="text-rose-500 text-xs font-semibold mt-1">{errors.address}</p>
                    )}
                  </div>

                  {/* Medicine List */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Medicines Required / Medical Items *
                    </label>
                    <textarea
                      rows={3}
                      value={medicine}
                      onChange={(e) => setMedicine(e.target.value)}
                      placeholder="List your medicines with dosage and quantities here&#10;e.g:&#10;1. Paracetamol 650mg - 1 Strip&#10;2. Vitamin C Chewable - 2 Strips"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                        errors.medicine
                          ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                      }`}
                      id="order-medicines-input"
                    />
                    {errors.medicine && (
                      <p className="text-rose-500 text-xs font-semibold mt-1">{errors.medicine}</p>
                    )}
                  </div>

                  {/* Prescription Drag & Drop Upload */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Upload Valid Prescription (Photo/PDF)
                    </label>
                    
                    {!prescriptionPreview ? (
                      <div
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-brand-green dark:hover:border-brand-green rounded-2xl p-6 text-center bg-slate-50/50 dark:bg-slate-950/20 transition-all cursor-pointer relative group"
                        id="prescription-dropzone"
                      >
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Upload className="h-8 w-8 text-slate-400 dark:text-slate-500 mx-auto mb-2 group-hover:text-brand-green group-hover:scale-105 transition-all" />
                        <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                          Drag & drop or <span className="text-brand-green">browse files</span>
                        </span>
                        <span className="block text-xs text-slate-400 mt-1">
                          Supports JPG, PNG, or PDF up to 5MB
                        </span>
                      </div>
                    ) : (
                      <div className="relative border border-slate-200 dark:border-slate-800 rounded-2xl p-3 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
                        <div className="flex items-center space-x-3 min-w-0">
                          <img
                            src={prescriptionPreview}
                            alt="Prescription Thumbnail"
                            className="h-14 w-14 rounded-lg object-cover border border-slate-200 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <span className="block text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                              {prescriptionFile?.name}
                            </span>
                            <span className="block text-xs text-brand-green font-semibold">
                              ✓ Attached ready to attach in WhatsApp
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950 text-slate-500 hover:text-rose-500 transition-colors cursor-pointer"
                          id="remove-file-btn"
                        >
                          <X className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Additional Message or Special Instructions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Please send the bill total before dispatch. Ring bell when arriving."
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-hidden transition-all"
                      id="order-message-input"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl font-bold text-base shadow-lg shadow-brand-green/20 hover:shadow-brand-green/35 flex items-center justify-center space-x-2.5 hover:-translate-y-0.5 transition-all cursor-pointer"
                      id="submit-order-btn"
                    >
                      <Send className="h-5 w-5 fill-white" />
                      <span>Send Order via WhatsApp</span>
                    </button>
                    <span className="block text-center text-xs text-slate-400 mt-2.5">
                      We will double-check stock availability and message you pricing instantly.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
