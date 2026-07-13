import { Testimonial, FaqItem, ServiceItem, CategoryItem, HealthTip, GalleryItem } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    role: "Regular Customer",
    rating: 5,
    comment: "Pihu Medical is my go-to store for all my family's medicines. They always have 100% genuine products, and their staff is highly professional and experienced. The WhatsApp order feature is super convenient!",
    location: "Tekari, Gaya",
    date: "June 20, 2026"
  },
  {
    id: "t2",
    name: "Anjali Singh",
    role: "Local Resident",
    rating: 5,
    comment: "I always buy baby care and diabetic products for my parents here. Extremely reasonable pricing compared to other stores in Tekari, and they provide quick home delivery when needed.",
    location: "Titaiganj, Tekari",
    date: "July 1, 2026"
  },
  {
    id: "t3",
    name: "Dr. Arvind Pathak",
    role: "Healthcare Professional",
    rating: 5,
    comment: "As a doctor, I always recommend Pihu Medical to my patients. Their inventory is complete, storage conditions for life-saving vaccines and medicines are well-maintained, and the team is incredibly reliable.",
    location: "Tekari, Bihar",
    date: "May 15, 2026"
  },
  {
    id: "t4",
    name: "Manoj Yadav",
    role: "Business Owner",
    rating: 4,
    comment: "Very fast service! I sent my prescription on WhatsApp and within 15 minutes, my medicines were packed and ready for pickup. Digital payments were smooth and easy.",
    location: "Tekari Bazaar",
    date: "June 29, 2026"
  },
  {
    id: "t5",
    name: "Suman Kumari",
    role: "Teacher",
    rating: 5,
    comment: "A highly trusted pharmacy. The owner is very polite and always guides us with the correct dosage and precautions. Excellent stock of surgical supplies and wellness vitamins.",
    location: "Tekari, Gaya",
    date: "July 4, 2026"
  },
  {
    id: "t6",
    name: "Vikash Vardhan",
    role: "Tech Professional",
    rating: 5,
    comment: "Modern pharmacy experience in Tekari. Appreciate the digitized receipt and quick availability checks. I was looking for a rare blood pressure medicine everywhere, but Pihu Medical arranged it in a day!",
    location: "Tekari",
    date: "May 22, 2026"
  }
];

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "What are the operating hours of Pihu Medical in Tekari?",
    answer: "Pihu Medical is open seven days a week, from 8:00 AM to 10:00 PM.",
    category: "Store Hours"
  },
  {
    id: "f2",
    question: "Do you offer home delivery in Tekari?",
    answer: "Yes! We offer fast, nearby home delivery within Tekari and adjoining areas. For orders placed via WhatsApp or phone call, we coordinate delivery directly to your doorstep.",
    category: "Delivery"
  },
  {
    id: "f3",
    question: "How can I order medicines using WhatsApp?",
    answer: "Ordering is simple: click on the 'WhatsApp Order' button, fill in your details (name, address, medicine requirements), upload a picture of your prescription, and click send. It will launch WhatsApp with a prefilled message instantly.",
    category: "Ordering"
  },
  {
    id: "f4",
    question: "Are all medicines sold at Pihu Medical genuine?",
    answer: "Absolutely. We maintain a zero-tolerance policy for counterfeit products. 100% of our stock is sourced directly from authorized medical distributors and verified pharmaceutical manufacturers.",
    category: "Trust & Quality"
  },
  {
    id: "f5",
    question: "Is a prescription mandatory to buy medicines?",
    answer: "For Schedule H, H1, and X prescription drugs, a valid medical prescription from a registered practitioner is legally mandatory. General OTC (Over-The-Counter) products and healthcare supplements can be purchased directly.",
    category: "Regulations"
  },
  {
    id: "f6",
    question: "What categories of products are available at Pihu Medical?",
    answer: "We stock a massive range including: Prescription Drugs, OTC Medicines, Baby Care, Personal Care, Diabetic Monitoring, Blood Pressure Monitors, First Aid Supplies, Surgical Items, and Health Supplements.",
    category: "Products"
  },
  {
    id: "f7",
    question: "Do you offer any discounts on bulk orders or chronic medicines?",
    answer: "Yes, we offer special seasonal discounts and attractive savings on monthly chronic disease medications (like diabetes and hypertension drugs). Please inquire at the counter or via WhatsApp for current offers.",
    category: "Pricing"
  },
  {
    id: "f8",
    question: "What payment methods do you accept at the store?",
    answer: "We support a wide array of payment methods, including cash, UPI (Google Pay, PhonePe, Paytm, BHIM), debit/credit cards, and net banking.",
    category: "Payments"
  },
  {
    id: "f9",
    question: "Can I return or exchange purchased medicines?",
    answer: "Medicines can be returned or exchanged within 7 days of purchase, provided they are in their original intact packaging, have not expired, are not refrigerated products (insulin, etc.), and are accompanied by the original purchase receipt.",
    category: "Return Policy"
  },
  {
    id: "f10",
    question: "Do you supply surgical items and home care medical devices?",
    answer: "Yes, we have a fully-stocked medical device section with wheelchairs, walking aids, orthopedic supports, vaporizers, nebulizers, digital thermometers, and glucometers.",
    category: "Products"
  }
];

export const services: ServiceItem[] = [
  {
    id: "s1",
    title: "Prescription Medicines",
    description: "Highly controlled, authentic prescription drugs curated under the supervision of qualified and experienced pharmacists.",
    iconName: "FileText",
    detailedInfo: "We stock a full spectrum of prescription medications for acute and chronic conditions, including cardiovascular, respiratory, gastrointestinal, neurological, and infectious diseases. Storage conditions are continuously monitored to ensure quality and efficacy."
  },
  {
    id: "s2",
    title: "General Medicines (OTC)",
    description: "Safe, daily non-prescription remedies for pain relief, cough, cold, allergies, digestive issues, and other common health concerns.",
    iconName: "Pill",
    detailedInfo: "Our over-the-counter section provides reliable solutions for routine ailments. Our staff can help you navigate active ingredients, proper dosages, and contraindications."
  },
  {
    id: "s3",
    title: "Health Supplements",
    description: "Premium multivitamins, protein formulations, calcium supplements, omega-3, and energy enhancers for daily vitality.",
    iconName: "Activity",
    detailedInfo: "Bridge nutrition gaps with our curated selection of vitamins, minerals, and specialized nutrition powders designed for children, adults, seniors, and active sports enthusiasts."
  },
  {
    id: "s4",
    title: "Baby Care Products",
    description: "Gentle baby food, diapers, sensitive skin lotions, wipes, feeding bottles, and clinically tested baby skincare brands.",
    iconName: "Baby",
    detailedInfo: "We understand that your little ones deserve the softest touch. We carry globally certified, toxic-free baby care essentials from premium brands like Himalaya, Johnson's, and Sebamed."
  },
  {
    id: "s5",
    title: "Personal Care Products",
    description: "Premium dermatological lotions, organic skin creams, dental hygiene sets, shampoos, hair treatments, and personal sanitizers.",
    iconName: "Heart",
    detailedInfo: "Enhance your self-care routine with safe skincare, hair care, body washes, oral hygiene, and female wellness products sourced from verified dermatological lines."
  },
  {
    id: "s6",
    title: "Medical Equipment",
    description: "Digital blood pressure monitors, portable nebulizers, insulin pens, glucometers, vaporizers, and orthopedic braces.",
    iconName: "Tv",
    detailedInfo: "Keep track of your vitals from the comfort of your home. We sell high-quality, pre-calibrated medical equipment from brands like Omron, Dr Trust, and Accu-Chek, complete with brand warranty."
  },
  {
    id: "s7",
    title: "Surgical Supplies",
    description: "Sterile surgical gloves, syringes, surgical dressings, sutures, face masks, disposable gowns, and catheter kits.",
    iconName: "Scissors",
    detailedInfo: "Catering to local clinics, nursing homes, and home healthcare, we provide premium grade clinical and surgical supplies maintaining the highest sterile standards."
  },
  {
    id: "s8",
    title: "First Aid Products",
    description: "Complete first aid kits, antiseptic washes (Dettol/Savlon), wound band-aids, medical adhesive tapes, and antiseptic creams.",
    iconName: "ShieldAlert",
    detailedInfo: "Be prepared for any emergency. We offer complete home, office, and travel first-aid kits containing sterilized bandages, burn ointments, splints, and essential emergency medicines."
  },
  {
    id: "s9",
    title: "Diabetic Care",
    description: "Comprehensive care: sugar-free supplements, diagnostic test strips, lancets, diabetic socks, and skin creams.",
    iconName: "Flame",
    detailedInfo: "Living with diabetes requires structured lifestyle support. We carry a dedicated range of sugar-free nutritionals, glucometer strips, insulin cooling cases, and neuropathy care products."
  },
  {
    id: "s10",
    title: "Healthcare Essentials",
    description: "Disinfectants, multi-surface sanitizers, adult diapers, underpads, pulse oximeters, and community wellness products.",
    iconName: "Award",
    detailedInfo: "Pihu Medical holds all your monthly daily-living healthcare aids in continuous stock. Perfect for elderly support, chronic home care, and hygiene upkeep."
  }
];

export const categories: CategoryItem[] = [
  {
    id: "c1",
    name: "Tablets",
    description: "Broad selection of standard compressed oral solid dose medications.",
    iconName: "Layers",
    accentColor: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
  },
  {
    id: "c2",
    name: "Capsules",
    description: "Hard and soft gel capsules for optimal gastro-intestinal absorption.",
    iconName: "Zap",
    accentColor: "bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400"
  },
  {
    id: "c3",
    name: "Syrups",
    description: "Liquid cough, cold, respiratory formulations and liquid vitamin tonics.",
    iconName: "Droplet",
    accentColor: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
  },
  {
    id: "c4",
    name: "Injections",
    description: "Sterile vials, pre-filled syringes, insulin cartridges, and vaccines.",
    iconName: "Syringe",
    accentColor: "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400"
  },
  {
    id: "c5",
    name: "Medical Equipment",
    description: "Patient vitals monitoring, nebulizers, and respiratory vaporizers.",
    iconName: "Activity",
    accentColor: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400"
  },
  {
    id: "c6",
    name: "Protein Supplements",
    description: "Bodybuilding, energy, diabetic, and clinical meal replacement shakes.",
    iconName: "Flame",
    accentColor: "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400"
  },
  {
    id: "c7",
    name: "Vitamins & Minerals",
    description: "Essential micro-nutrients to build immunity and joint strength.",
    iconName: "Shield",
    accentColor: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400"
  },
  {
    id: "c8",
    name: "Skin Care",
    description: "Dermaceutic skin repair, moisturizers, acne gels, and sunscreen.",
    iconName: "Sparkles",
    accentColor: "bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400"
  },
  {
    id: "c9",
    name: "Baby Products",
    description: "Hypoallergenic infant care, milk formula, wipes, and pediatric creams.",
    iconName: "Baby",
    accentColor: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
  },
  {
    id: "c10",
    name: "Personal Hygiene",
    description: "Antiseptic liquids, premium soaps, face washes, and sanitizers.",
    iconName: "Heart",
    accentColor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
  },
  {
    id: "c11",
    name: "Orthopedic Support",
    description: "Knee braces, cervical collars, lumbar belts, and ankle stabilizers.",
    iconName: "Accessibility",
    accentColor: "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400"
  },
  {
    id: "c12",
    name: "Diabetic Care",
    description: "Insulin syringes, low GI snacks, test strips, and active lancets.",
    iconName: "Award",
    accentColor: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400"
  }
];

export const healthTips: HealthTip[] = [
  {
    id: "ht1",
    title: "Understanding Your Prescription Labels Correctly",
    category: "Prescription Safety",
    excerpt: "Learn how to read medical abbreviations and symbols on your drug prescription to ensure dosing safety.",
    content: "Reading a prescription label is critical for patient health. Always double check: 1. Your full name. 2. The brand and chemical name of the drug. 3. The exact frequency (e.g., OD - once a day, BD - twice a day, TDS - thrice a day, HS - at bedtime). 4. Post-food (PC) or pre-food (AC) requirements. If you see abbreviations like OD, BD, TDS, always consult our on-duty pharmacist to clarify before consuming.",
    readTime: "3 min read",
    date: "July 5, 2026"
  },
  {
    id: "ht2",
    title: "Essential Vitamins for Boosting Rainy Season Immunity",
    category: "Nutrition & Health",
    excerpt: "Monsoons bring seasonal viral fever and colds. Learn which key minerals protect your health.",
    content: "With seasonal fluctuations in Bihar during the monsoons, viral infection risks surge. Key micro-nutrients to include in your routine are: Vitamin C (acts as a cell-protective antioxidant), Zinc (fundamental for T-cell production), and Vitamin D3 (fortifies respiratory linings). Prioritize washing hands frequently and consuming freshly prepared food.",
    readTime: "4 min read",
    date: "June 28, 2026"
  },
  {
    id: "ht3",
    title: "Why You Should Never Skip Daily Blood Pressure Checks",
    category: "Heart Care",
    excerpt: "Hypertension is a silent threat. Discover the standard rules to record clean, accurate digital readings at home.",
    content: "Fluctuations in blood pressure often show no direct symptoms. Checking BP regularly using a digital machine is vital. Ensure: 1. You sit still in a chair with back supported for 5 minutes prior to testing. 2. Do not talk during the test. 3. Place the arm cuff at your exact heart level. 4. Record 2 readings 1 minute apart and log them in your diary.",
    readTime: "5 min read",
    date: "June 12, 2026"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Store Exterior",
    category: "Store Front",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g2",
    title: "Fully Stocked Medicine Racks",
    category: "Medicine Shelves",
    url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g3",
    title: "Genuine Pediatric & Baby Care",
    category: "Products",
    url: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g4",
    title: "Advanced Medical Monitoring Tools",
    category: "Medical Equipment",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g5",
    title: "Helpful and Attentive Customers",
    category: "Customers",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g6",
    title: "Wellness & Nutritional Supplement Rack",
    category: "Products",
    url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80"
  }
];
