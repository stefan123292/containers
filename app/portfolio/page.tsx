import { Home, Briefcase, Building2, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Beach House',
    category: 'Residential',
    icon: Home,
    description: '2x 40ft containers converted into a stunning beachfront vacation home.',
    features: ['2 Bedrooms', 'Full Kitchen', 'Ocean View Deck', 'Solar Powered'],
    image: 'beach-house',
  },
  {
    id: 2,
    title: 'Tech Startup Office',
    category: 'Commercial',
    icon: Briefcase,
    description: 'Modern office space with meeting rooms for a growing tech company.',
    features: ['Open Plan', '6 Workstations', 'Conference Room', 'Fiber Internet'],
    image: 'tech-office',
  },
  {
    id: 3,
    title: 'Construction Site Complex',
    category: 'Industrial',
    icon: Building2,
    description: 'Complete site facility with offices, storage, and sanitary units.',
    features: ['5 Units', 'Office + Storage', 'Sanitary Facilities', 'Portable'],
    image: 'construction',
  },
  {
    id: 4,
    title: 'Pop-up Restaurant',
    category: 'Commercial',
    icon: Users,
    description: 'Full-service restaurant built from modified shipping containers.',
    features: ['Commercial Kitchen', 'Dining Area', 'Bar Setup', 'Outdoor Seating'],
    image: 'restaurant',
  },
  {
    id: 5,
    title: 'Artist Studio',
    category: 'Residential',
    icon: Home,
    description: 'Creative workspace with excellent natural lighting and storage.',
    features: ['Large Windows', 'Climate Control', 'High Ceilings', 'Gallery Space'],
    image: 'studio',
  },
  {
    id: 6,
    title: 'Medical Clinic',
    category: 'Healthcare',
    icon: Building2,
    description: 'Mobile medical facility for remote healthcare services.',
    features: ['Examination Rooms', 'Medical Equipment', 'Sterilization', 'Portable'],
    image: 'clinic',
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-industrial-300">
              Explore our completed projects and see what&apos;s possible with modular containers. 
              From homes to offices, we&apos;ve built it all.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-industrial-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-industrial-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-industrial-600">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-industrial-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-industrial-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group bg-white border border-industrial-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Image placeholder */}
                  <div className="h-64 bg-gradient-to-br from-industrial-700 to-industrial-900 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                    <Icon className="w-24 h-24 text-white/30 relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-industrial-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-industrial-600 mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-industrial-700"
                        >
                          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
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
            Ready to Create Your Own?
          </h2>
          <p className="text-lg text-industrial-600 mb-8 max-w-2xl mx-auto">
            Start designing your custom container solution today with our interactive 3D configurator.
          </p>
          <a
            href="/configurator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Start Configuring
          </a>
        </div>
      </section>
    </div>
  );
}

