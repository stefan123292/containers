'use client';

import { type Locale } from '@/lib/translations';

interface StructuredDataProps {
  locale: Locale;
  type?: 'Organization' | 'WebSite' | 'Product' | 'BreadcrumbList';
  data?: Record<string, any>;
}

export function StructuredData({ locale, type = 'Organization', data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boxpert.ro';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BoXpert',
    url: baseUrl,
    logo: `${baseUrl}/images/BoXpert.svg`,
    description: locale === 'ro' 
      ? 'BoXpert - Lider în România pentru containere modulare personalizate. Proiectează, modifică și personalizează containerul modular dorit cu configuratorul nostru integrat.'
      : 'BoXpert - Leader in Romania for custom modular containers. Design, modify and customize your desired modular container with our integrated configurator.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RO',
      streetAddress: 'DJ100 3',
      postalCode: '077180',
      addressLocality: 'Tunari',
      addressRegion: 'Ilfov',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40774957340',
      contactType: 'customer service',
      areaServed: 'RO',
      availableLanguage: ['Romanian', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/boxpert',
      'https://www.instagram.com/boxpert',
      'https://www.linkedin.com/company/boxpert',
    ],
    ...data,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BoXpert',
    url: baseUrl,
    description: locale === 'ro'
      ? 'Containere modulare personalizate cu configurator în timp real. Spații locative, birouri, cabine de pază, depozite și multe altele.'
      : 'Custom modular containers with a real-time configurator. Living spaces, offices, guard cabins, storage and more.',
    inLanguage: locale === 'ro' ? 'ro-RO' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${locale}/products?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    ...data,
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Containere Modulare Personalizate',
    description: locale === 'ro'
      ? 'Containere modulare personalizate pentru spații locative, birouri, cabine de pază, depozite și multe altele.'
      : 'Custom modular containers for living spaces, offices, guard cabins, storage and more.',
    brand: {
      '@type': 'Brand',
      name: 'BoXpert',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/${locale}/products`,
    },
    ...data,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data?.items || [],
  };

  let schema;
  switch (type) {
    case 'WebSite':
      schema = websiteSchema;
      break;
    case 'Product':
      schema = productSchema;
      break;
    case 'BreadcrumbList':
      schema = breadcrumbSchema;
      break;
    default:
      schema = organizationSchema;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
