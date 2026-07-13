import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, MessageSquare, Clock, Send, Check, Mail, Shield, AlertCircle } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Your name is required.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct WhatsApp bridge as an optional super feature
    const whatsappText = `Hello Pihu Medical,

I have submitted a general website contact inquiry.

*CONTACT FORM DETAILS*
========================
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not Provided"}
*Message:* ${formData.message}
========================
_Sent via Pihu Medical Website_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919097046343&text=${encodeURIComponent(whatsappText)}`;
    
    // Simulate API storage
    const inquiries = JSON.parse(localStorage.getItem("pihu_contact_inquiries") || "[]");
    inquiries.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem("pihu_contact_inquiries", JSON.stringify(inquiries));

    setSubmitSuccess(true);
    
    // Open WhatsApp as well
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitSuccess(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1500);
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
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3.5 py-1.5 rounded-full">
            <span>Get in Touch</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Contact <span className="text-brand-green">Pihu Medical</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Have questions about medicine pricing, home delivery, or bulk orders? Connect with our Tekari pharmacy team now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Contact details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                Store Information
              </h2>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-855 shadow-xs">
                  <div className="p-3 bg-brand-green/10 dark:bg-brand-green/20 text-brand-green rounded-xl shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200">Our Address</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                      Titaiganj Rd, Tekari, Gaya, Bihar 824236
                    </p>
                    <a
                      href="https://maps.google.com/?q=Pihu+Medical+Titaiganj+Rd+Tekari+Bihar+824236"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-green hover:underline inline-block mt-2"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>

                {/* Call & WhatsApp */}
                <div className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-855 shadow-xs">
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200">Call & WhatsApp Order</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      For immediate drug stocks inquiry or delivery booking:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <a
                        href="tel:090970463A43"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold bg-brand-blue/10 text-brand-blue px-3 py-1.5 rounded-lg border border-brand-blue/10"
                      >
                        <span>Call Store: 090970463A43</span>
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=919097046343"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-lg border border-brand-green/10"
                      >
                        <span>Direct Chat</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-855 shadow-xs">
                  <div className="p-3 bg-amber-50 dark:bg-slate-800 text-amber-500 rounded-xl shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 dark:text-slate-200">Working Hours</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      We are open daily to handle your prescriptions and emergency needs:
                    </p>
                    <p className="text-xs text-slate-800 dark:text-slate-300 font-bold mt-2">
                      Monday - Sunday: 08:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick alert bar */}
            <div className="bg-emerald-50/50 dark:bg-slate-900/40 p-4 rounded-2xl border border-brand-green/10 flex items-start space-x-3 mt-4 lg:mt-0">
              <Shield className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <strong>Data Privacy:</strong> Your personal prescriptions, addresses, and medical information are strictly secure. We never share user details with third-party networks.
              </p>
            </div>
          </div>

          {/* Column 2: Inquiries Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-855 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                Submit An Inquiry
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fill out the secure form below. We will launch WhatsApp with your message for immediate response.
              </p>

              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-950/40 text-brand-green rounded-full flex items-center justify-center animate-bounce">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Connecting to Pharmacy...</h3>
                  <p className="text-xs text-slate-500">Launching WhatsApp with your inquiry. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Rahul Kumar"
                        className={`w-full px-4 py-2.8 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                          errors.name
                            ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                            : "border-slate-200 dark:border-slate-800 focus:border-brand-green"
                        }`}
                        id="contact-name"
                      />
                      {errors.name && (
                        <p className="text-rose-500 text-xs font-semibold mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile"
                        className={`w-full px-4 py-2.8 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                          errors.phone
                            ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                            : "border-slate-200 dark:border-slate-800 focus:border-brand-green"
                        }`}
                        id="contact-phone"
                      />
                      {errors.phone && (
                        <p className="text-rose-500 text-xs font-semibold mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rahul@example.com"
                      className={`w-full px-4 py-2.8 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                        errors.email
                          ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-green"
                      }`}
                      id="contact-email"
                    />
                    {errors.email && (
                      <p className="text-rose-500 text-xs font-semibold mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                      Your Message / Question *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your question about product stock, pricing, etc. here..."
                      className={`w-full px-4 py-2.8 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border text-slate-900 dark:text-white focus:outline-hidden transition-all ${
                        errors.message
                          ? "border-rose-400 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-200 dark:border-slate-800 focus:border-brand-green"
                      }`}
                      id="contact-message"
                    />
                    {errors.message && (
                      <p className="text-rose-500 text-xs font-semibold mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-brand-green/10 hover:shadow-brand-green/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                    id="submit-contact-form"
                  >
                    <Send className="h-4 w-4 fill-white" />
                    <span>Submit Inquiry & Direct Chat</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Embedded Google Map Section */}
        <div className="space-y-4" id="google-maps-section">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center uppercase tracking-tight">
            Find Us On the Map
          </h2>
          <div className="h-96 w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3719001150495!2d84.83256087593259!3d24.936453942911488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cdb9daaaaaaab%3A0x6b107b51829fbe00!2sTekari%2C%20Bihar!5e0!3m2!1sen!2sin!4v1783320000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pihu Medical Google Map"
              className="grayscale-[20%] dark:invert-[90%] dark:hue-rotate-[180deg]"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}
