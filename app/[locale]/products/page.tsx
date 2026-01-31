import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Eye, Star, ArrowRight } from 'lucide-react';
import { getServerTranslations } from '@/lib/server-translations';
import { StructuredData } from '@/components/seo/StructuredData';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/translations';

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  return generateSEOMetadata(params.locale, 'products');
}

const products = [
  {
    id: 'living-20ft',
    name: 'Living Container 20ft',
    category: 'living',
    price: 8500,
    oldPrice: 9500,
    rating: 4.8,
    reviews: 24,
    image: '/images/containers/20ft-anthracite-front.jpg',
    badge: 'Popular',
    features: ['Full Insulation', 'Kitchen Ready', 'Bathroom Included', 'Climate Control'],
    inStock: true,
  },
  {
    id: 'living-40ft',
    name: 'Living Container 40ft',
    category: 'living',
    price: 14500,
    rating: 4.9,
    reviews: 18,
    image: '/images/containers/40ft-anthracite-front.jpg',
    badge: 'Best Seller',
    features: ['2 Bedrooms', 'Full Kitchen', 'Bathroom', 'Solar Ready'],
    inStock: true,
  },
  {
    id: 'office-20ft',
    name: 'Office Container 20ft',
    category: 'office',
    price: 7200,
    rating: 4.7,
    reviews: 31,
    image: '/images/containers/20ft-white-front.jpg',
    features: ['Network Cabling', 'HVAC System', 'Large Windows', 'Professional Finish'],
    inStock: true,
  },
  {
    id: 'office-40ft',
    name: 'Office Container 40ft',
    category: 'office',
    price: 12800,
    rating: 4.8,
    reviews: 22,
    image: '/images/containers/40ft-white-front.jpg',
    badge: 'New',
    features: ['Open Plan', '8 Workstations', 'Meeting Room', 'High-Speed Ready'],
    inStock: true,
  },
  {
    id: 'storage-20ft',
    name: 'Storage Container 20ft',
    category: 'storage',
    price: 3500,
    oldPrice: 4000,
    rating: 4.6,
    reviews: 45,
    image: '/images/containers/20ft-black-front.jpg',
    features: ['Lockable Doors', 'Weather-proof', 'Ventilation', 'Easy Access'],
    inStock: true,
  },
  {
    id: 'storage-40ft',
    name: 'Storage Container 40ft',
    category: 'storage',
    price: 6200,
    rating: 4.7,
    reviews: 38,
    image: '/images/containers/40ft-black-front.jpg',
    features: ['Double Capacity', 'Security Locks', 'Reinforced', 'Ground Level'],
    inStock: true,
  },
  {
    id: 'custom-20ft',
    name: 'Custom Container 20ft',
    category: 'custom',
    price: 9800,
    rating: 5.0,
    reviews: 12,
    image: '/images/containers/20ft-orange-front.jpg',
    badge: 'Customizable',
    features: ['Unlimited Options', 'Expert Design', 'Any Purpose', 'Full Support'],
    inStock: true,
  },
  {
    id: 'custom-40ft',
    name: 'Custom Container 40ft',
    category: 'custom',
    price: 17500,
    rating: 5.0,
    reviews: 9,
    image: '/images/containers/40ft-hc-anthracite-front.jpg',
    badge: 'Premium',
    features: ['High Cube', 'Bespoke Design', 'Premium Finish', 'Project Manager'],
    inStock: true,
  },
];


export default async function ProductsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = await getServerTranslations(params.locale);
  
  return (
    <>
      <StructuredData locale={params.locale} type="Product" />
      <div className="min-h-screen bg-industrial-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-industrial-900 to-industrial-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-primary" />
              {t('products.rated')}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t('products.title')}
            </h1>
            <p className="text-xl text-industrial-300 mb-6">
              {t('products.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-industrial-300">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('products.freeConsultation')}
              </div>
              <div className="flex items-center gap-2 text-industrial-300">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('products.warranty')}
              </div>
              <div className="flex items-center gap-2 text-industrial-300">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('products.fastDelivery')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-28 z-40 bg-white border-b border-industrial-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'all', name: t('products.allProducts'), count: 8 },
              { id: 'living', name: t('categories.items.living.name'), count: 2 },
              { id: 'office', name: t('categories.items.office.name'), count: 2 },
              { id: 'storage', name: t('categories.items.storage.name'), count: 2 },
              { id: 'custom', name: t('categories.items.custom.name'), count: 2 },
            ].map((cat) => (
              <button
                key={cat.id}
                className="px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all hover:bg-industrial-100 border border-industrial-200 hover:border-primary hover:text-primary"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-industrial-100"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-industrial-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  {product.oldPrice && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </div>
                  )}
                  
                  {/* Badge */}
                  {product.badge && !product.oldPrice && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Stock Status */}
                  {product.inStock && (
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      {t('products.inStock')}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Category */}
                  <div className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
                    {product.category}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-industrial-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-industrial-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-industrial-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-industrial-700">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-industrial-900">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-industrial-500 line-through">
                        ${product.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      href={`/${params.locale}/configurator`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {t('products.configure')}
                    </Link>
                    <Link
                      href={`/${params.locale}/products/${product.id}`}
                      className="px-4 py-2.5 border-2 border-industrial-200 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t('products.premiumQuality')}</h3>
              <p className="text-sm text-industrial-600">{t('products.premiumQualityDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t('products.fastDelivery')}</h3>
              <p className="text-sm text-industrial-600">{t('products.fastDeliveryDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t('products.warranty')}</h3>
              <p className="text-sm text-industrial-600">{t('products.warrantyDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">{t('products.support24')}</h3>
              <p className="text-sm text-industrial-600">{t('products.support24Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-industrial-900 to-industrial-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            {t('products.cantFind')}
          </h2>
          <p className="text-xl text-industrial-300 mb-8 max-w-2xl mx-auto">
            {t('products.cantFindDesc')}
          </p>
          <Link
            href={`/${params.locale}/configurator`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg"
          >
            {t('products.startCustom')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
    </>
    );
}
