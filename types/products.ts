export type ContainerCategory = 
  | 'living'
  | 'office'
  | 'sanitary'
  | 'refrigerated'
  | 'storage'
  | 'custom';

export interface Product {
  id: string;
  name: string;
  category: ContainerCategory;
  description: string;
  features: string[];
  images: string[];
  specifications: {
    dimensions: string;
    weight: string;
    material: string;
    [key: string]: string;
  };
  priceRange: string;
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ContainerCategory;
  images: string[];
  completionDate: string;
  location?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
  date: string;
}

