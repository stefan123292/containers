import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    company: '',
    content: 'The 3D configurator made it so easy to design my dream guest house. The team was professional and the quality exceeded my expectations!',
    rating: 5,
    image: '',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'We needed quick office expansion. ModularBox delivered three fully-equipped office containers in just 4 weeks. Incredible service!',
    rating: 5,
    image: '',
  },
  {
    name: 'Emma Davis',
    role: 'Project Manager',
    company: 'BuildCo',
    content: 'Perfect solution for our construction site facilities. Durable, customizable, and great value for money.',
    rating: 5,
    image: '',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-industrial-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-industrial-600">
            Don&apos;t just take our word for it - hear from some of our satisfied customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-industrial-50 rounded-2xl border border-industrial-100 hover:shadow-xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-16 h-16" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-industrial-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-industrial-900">{testimonial.name}</div>
                  <div className="text-sm text-industrial-600">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-industrial-200">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-center">
              <div className="font-semibold text-industrial-900">ISO 9001</div>
              <div className="text-sm text-industrial-600">Certified</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-industrial-900">5 Year</div>
              <div className="text-sm text-industrial-600">Warranty</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-industrial-900">A+</div>
              <div className="text-sm text-industrial-600">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-industrial-900">EPA</div>
              <div className="text-sm text-industrial-600">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

