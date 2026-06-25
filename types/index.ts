// Service Type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits?: string[];
  image?: string;
}

// Portfolio Item Type
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client?: string;
  location?: string;
  description: string;
  image: string;
  year?: number;
}

// Testimonial Type
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position?: string;
  content: string;
  rating?: number;
  avatar?: string;
}

// Contact Form Data Type
export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  message: string;
}

// Button Variant Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Navigation Link Type
export interface NavLink {
  href: string;
  label: string;
}

// Stat Type
export interface Stat {
  value: string;
  label: string;
}

// Process Step Type
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// Feature Point Type
export interface FeaturePoint {
  title: string;
  description: string;
}
