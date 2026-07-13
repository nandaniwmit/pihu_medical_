import React from "react";
import { motion } from "motion/react";
import { Heart, Eye, Target, Sparkles, Award, MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react";

export default function AboutView() {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-brand-green" />,
      title: "100% Genuine Medicines",
      description: "We procure exclusively from authorized pharma channels with strict quality auditing."
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-blue" />,
      title: "Community First Care",
      description: "Treating our customers like family, we provide dosage guidance and compassionate consultation."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-amber-500" />,
      title: "Honest and Fair Pricing",
      description: "No inflated prices. We pass volume discounts directly to the patients in Tekari."
    }
  ];

  const timelineSteps = [
    {
      year: "2019",
      title: "Inception in Tekari",
      desc: "Pihu Medical was founded with a single mission: bringing reliable, authentic medicines directly to Tekari, eliminating the need to travel to Gaya city."
    },
    {
      year: "2021",
      title: "Critical Service During Monsoons",
      desc: "Expanded our cold storage capacity to securely stock vaccines, baby life-saving nutritionals, and insulin vials."
    },
    {
      year: "2024",
      title: "Going Digital with WhatsApp Support",
      desc: "Launched our direct-to-home messaging system to make medicine availability checks and prescriptions processing super easy."
    },
    {
      year: "2026",
      title: "Gaya District Recognition",
      desc: "Recognized as Tekari's highest-trusted local healthcare provider for community pharmacy guidelines."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold tracking-widest text-brand-green uppercase bg-brand-green/10 px-3.5 py-1.5 rounded-full">
            <span>Our Journey & Purpose</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            About <span className="text-brand-green">Pihu Medical</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Caring for families in Tekari, Bihar with absolute devotion and 100% authentic pharmacy supplies.
          </p>
        </div>

        {/* Business Story and Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="Pharmacy Front Desk"
                className="rounded-2xl shadow-md object-cover h-64 w-full"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80"
                alt="Health Vitamins"
                className="rounded-2xl shadow-md object-cover h-44 w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80"
                alt="Medicines Storage"
                className="rounded-2xl shadow-md object-cover h-44 w-full"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
                alt="Medical tools"
                className="rounded-2xl shadow-md object-cover h-64 w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Business Story text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
              Our Story: Eliminating the Healthcare Gap
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              For several years, the families of Tekari, Bihar had to endure long travel times of over an hour to Gaya city to obtain life-saving prescriptions and authentic medication. Standard retail shops nearby struggled with short supplies, leading to crucial gaps in healthcare.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Founded on the pillars of absolute integrity and modern customer care, <strong>Pihu Medical</strong> has successfully bridged this gap. Located at Titaiganj Road, Tekari, we stock thousands of authentic drug formulas, professional-grade diagnostic devices, sterile surgical gear, baby care lines, and wellness vitamins.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              We operate under the continuous guidance of licensed pharmacists, ensuring that every patient receives correct usage instructions, safety protocols, and personalized attention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Gaya district verified drug license</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Strict temperature control storage</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-xs space-y-4">
            <div className="h-12 w-12 bg-teal-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-green">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">Our Dedicated Mission</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              To supply 100% authentic, premium medications and healthcare products to the families of Tekari and neighboring rural communities, maintaining transparent fair pricing and superior customer guidance.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-xs space-y-4">
            <div className="h-12 w-12 bg-sky-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-blue">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">Our Core Vision</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              To build Tekari's most trusted, digit-enabled health platform, establishing instant medication availability and reliable rural home-deliveries while fostering health awareness.
            </p>
          </div>
        </div>

        {/* Owner Message Panel */}
        <div className="bg-linear-to-br from-brand-green/5 to-teal-500/5 dark:from-slate-900 dark:to-slate-950 p-8 md:p-10 rounded-3xl border border-brand-green/10 flex flex-col md:flex-row items-center gap-8">
          <div className="h-28 w-28 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 border-4 border-white dark:border-slate-850 shadow-md shrink-0">
            {/* Generic elegant owner icon */}
            <Award className="h-12 w-12 text-brand-green" />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-brand-green block">Founder & Registered Pharmacist Note</span>
            <blockquote className="text-base md:text-lg italic text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              "Health is the most valuable asset of our community in Tekari. Our commitment goes beyond commerce—we ensure that every parent, child, and senior gets genuine medicine on time. No patient should ever have to settle for less when it comes to life-saving healthcare supplies."
            </blockquote>
            <div>
              <span className="block font-black text-slate-900 dark:text-white">Pihu Medical Management Team</span>
              <span className="block text-xs text-slate-500">Titaiganj Rd, Tekari, Gaya</span>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center uppercase tracking-tight">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xs flex flex-col items-center text-center space-y-3"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  {v.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">{v.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-10">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center uppercase tracking-tight">
            Our History & Milestones
          </h3>
          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                {/* Year tag positioned on left for wider screens */}
                <div className="hidden md:block absolute right-full mr-12 text-right top-0.5">
                  <span className="text-lg font-black text-brand-green">{step.year}</span>
                </div>
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-4.5 w-4.5 -translate-x-2.2 bg-white dark:bg-slate-950 border-4 border-brand-green rounded-full shadow-xs" />
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-xs space-y-1">
                  <span className="md:hidden text-xs font-black text-brand-green block mb-1">{step.year}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{step.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
