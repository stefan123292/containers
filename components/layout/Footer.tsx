import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-900 text-industrial-300 border-t border-industrial-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded" />
              </div>
              <div>
                <div className="text-white font-display font-bold text-xl">ModularBox</div>
                <div className="text-primary text-xs">Custom Containers</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Leading provider of customizable modular containers for residential, commercial, and industrial applications.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-industrial-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/configurator" className="hover:text-primary transition-colors">Configurator</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=living" className="hover:text-primary transition-colors">Living Containers</Link></li>
              <li><Link href="/products?category=office" className="hover:text-primary transition-colors">Office Containers</Link></li>
              <li><Link href="/products?category=sanitary" className="hover:text-primary transition-colors">Sanitary Units</Link></li>
              <li><Link href="/products?category=refrigerated" className="hover:text-primary transition-colors">Refrigerated</Link></li>
              <li><Link href="/products?category=storage" className="hover:text-primary transition-colors">Storage</Link></li>
              <li><Link href="/products?category=custom" className="hover:text-primary transition-colors">Custom Modules</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Industrial Park Ave<br />Manufacturing District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@containers.com" className="hover:text-primary transition-colors">info@containers.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-industrial-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {currentYear} ModularBox. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

