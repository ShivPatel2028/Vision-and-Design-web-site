export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  services: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
