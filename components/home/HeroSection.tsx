import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/container.jpg"
          alt="Modular Container Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-900/90 via-industrial-900/80 to-industrial-800/85" />
      </div>

      {/* Animated accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now with 3D Real-Time Configurator
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-slide-up">
            Build Your Dream Space
            <span className="block text-primary mt-2">Container by Container</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-industrial-300 mb-12 max-w-2xl mx-auto animate-slide-up delay-200">
            Design and customize modular containers in real-time with our revolutionary 3D configurator. 
            From living spaces to offices, storage to specialized units.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link
              href="/configurator"
              className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
            >
              Start Configuring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-industrial-700 animate-fade-in delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-industrial-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-industrial-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-industrial-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-industrial-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-industrial-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

