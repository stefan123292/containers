import Link from 'next/link';
import { Home, Briefcase, Droplet, Snowflake, Package, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 'living',
    name: 'Living Containers',
    icon: Home,
    description: 'Comfortable residential spaces perfect for guest houses, vacation homes, or permanent residences.',
    features: ['Full insulation', 'Kitchen & bathroom', 'Electrical wiring', 'Climate control ready'],
  },
  {
    id: 'office',
    name: 'Office Containers',
    icon: Briefcase,
    description: 'Modern workspaces designed for productivity and comfort.',
    features: ['Network cabling', 'HVAC system', 'Multiple windows', 'Professional finish'],
  },
  {
    id: 'sanitary',
    name: 'Sanitary Units',
    icon: Droplet,
    description: 'Complete bathroom and shower facilities for any location.',
    features: ['Plumbing ready', 'Water heater', 'Ventilation', 'Durable fixtures'],
  },
  {
    id: 'refrigerated',
    name: 'Refrigerated',
    icon: Snowflake,
    description: 'Temperature-controlled storage for food, pharmaceuticals, and more.',
    features: ['Adjustable temp', 'Insulated walls', 'Power efficient', 'Digital controls'],
  },
  {
    id: 'storage',
    name: 'Storage',
    icon: Package,
    description: 'Secure and weather-resistant storage for equipment and inventory.',
    features: ['Lockable doors', 'Weather-proof', 'Various sizes', 'Easy access'],
  },
  {
    id: 'custom',
    name: 'Custom Modules',
    icon: Sparkles,
    description: 'Tailored solutions designed specifically for your unique requirements.',
    features: ['Unlimited options', 'Expert design', 'Any purpose', 'Full customization'],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-industrial-300">
              Explore our comprehensive range of modular container solutions. 
              Each category is fully customizable to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white border border-industrial-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon & Title */}
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-industrial-900 mb-3">
                        {category.name}
                      </h2>
                      <p className="text-industrial-600 mb-6">
                        {category.description}
                      </p>
                      <Link
                        href={`/configurator?category=${category.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Configure Now
                      </Link>
                    </div>

                    {/* Features */}
                    <div className="md:w-2/3">
                      <h3 className="font-semibold text-lg mb-4 text-industrial-900">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-industrial-50 rounded-lg"
                          >
                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-industrial-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Additional info */}
                      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-sm text-industrial-700">
                          <strong className="text-primary">Starting from $3,500</strong> - Final price depends on size, features, and customization. 
                          Use our configurator for an instant quote.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-industrial-900 mb-4">
            Not Sure Which One Is Right for You?
          </h2>
          <p className="text-lg text-industrial-600 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you choose the perfect container solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              href="/configurator"
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Try the Configurator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

