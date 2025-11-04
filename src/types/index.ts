import { Tags } from "./tags.enum";

// Project types
export interface Project {
  id: number;
  title: string;
  description?: string;
  tags: string[];
  image: string;
  slug?: string;
  category?: string;
  completedAt?: Date;
  location?: string;
}

export interface ProjectItem {
  id: number;
  img: string;
  tags: Tags[];
  title: string;
  description?: string;
  location?: string;
  images: string[];
}

// Navigation types
export interface NavigationItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

// Language types
export interface Language {
  code: string;
  name: string;
  nativeName?: string;
  flagSrc: string;
}

// Hero slider types
export interface HeroSlide {
  id?: number;
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonAction?: () => void;
}

// Component base props
export interface BaseComponentProps {
  className?: string;
  id?: string;
  "data-testid"?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}
