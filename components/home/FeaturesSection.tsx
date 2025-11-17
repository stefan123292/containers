import { Box, Zap, Shield, Wrench, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: '3D Real-Time Preview',
    description: 'See your container design come to life instantly with our advanced 3D configurator.',
  },
  {
    icon: Zap,
    title: 'Quick Customization',
    description: 'Choose size, colors, windows, doors, and features in minutes, not days.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Built to last with high-grade steel and weather-resistant coatings.',
  },
  {
    icon: Wrench,
    title: 'Fully Customizable',
    description: 'Every aspect can be tailored to your specific needs and requirements.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times from order to installation at your location.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Live price calculator shows exactly what you pay with no hidden fees.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-900 mb-6">
            Why Choose ModularBox?
          </h2>
          <p className="text-lg text-industrial-600">
            We combine cutting-edge technology with superior craftsmanship to deliver 
            the perfect modular solution for your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 bg-industrial-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-industrial-100 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-industrial-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/configurator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
          >
            Experience It Yourself
          </a>
        </div>
      </div>
    </section>
  );
}

