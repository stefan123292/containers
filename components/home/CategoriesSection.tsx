import Link from 'next/link';
import { Home, Briefcase, Droplet, Snowflake, Package, Sparkles } from 'lucide-react';

const categories = [
  {
    icon: Home,
    name: 'Living Containers',
    description: 'Comfortable residential spaces with all amenities',
    image: 'living',
    href: '/products?category=living',
  },
  {
    icon: Briefcase,
    name: 'Office Containers',
    description: 'Modern workspaces for businesses',
    image: 'office',
    href: '/products?category=office',
  },
  {
    icon: Droplet,
    name: 'Sanitary Units',
    description: 'Complete bathroom and shower facilities',
    image: 'sanitary',
    href: '/products?category=sanitary',
  },
  {
    icon: Snowflake,
    name: 'Refrigerated',
    description: 'Temperature-controlled storage solutions',
    image: 'refrigerated',
    href: '/products?category=refrigerated',
  },
  {
    icon: Package,
    name: 'Storage',
    description: 'Secure storage for any purpose',
    image: 'storage',
    href: '/products?category=storage',
  },
  {
    icon: Sparkles,
    name: 'Custom Modules',
    description: 'Tailored solutions for unique needs',
    image: 'custom',
    href: '/products?category=custom',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-industrial-900 to-industrial-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Explore Our Categories
          </h2>
          <p className="text-lg text-industrial-300">
            From residential to commercial, we offer a wide range of modular container 
            solutions to fit every application.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-industrial-800 border border-industrial-700 hover:border-primary transition-all duration-300"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-industrial-400 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium">
                    Explore
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

