'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Configurator', href: '/configurator' },
    { name: 'Products', href: '/products' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-industrial-900/95 backdrop-blur-sm border-b border-industrial-700">
      {/* Top bar */}
      <div className="bg-industrial-800 border-b border-industrial-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-6 text-sm text-industrial-300">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@containers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@containers.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-xl">ModularBox</div>
              <div className="text-primary text-xs">Custom Containers</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-industrial-200 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/configurator"
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-industrial-800 border-t border-industrial-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-industrial-200 hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/configurator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

