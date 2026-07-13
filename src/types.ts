export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detailedInfo: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  url: string;
}
