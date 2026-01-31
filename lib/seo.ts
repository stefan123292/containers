import { type Locale } from './translations';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const seoData: Record<Locale, Record<string, SEOData>> = {
  ro: {
    home: {
      title: 'BoXpert - Containere Modulare Personalizate | Configurator  Online',
      description: 'Proiectează și personalizează containere modulare în timp real cu configuratorul nostru . Spații locative, birouri, cabine de pază, depozite, grupuri sanitare și multe altele. Ofertă instantanee și livrare rapidă în România.',
      keywords: [
        'containere modulare',
        'containere personalizate',
        'configurator containere',
        'containere locative',
        'birouri containere',
        'cabine de pază',
        'grupuri sanitare containere',
        'depozite containere',
        'containere România',
        'container homes România',
        'containere prefabricate',
        'spații modulare',
        'construcții modulare',
        'BoXpert'
      ],
      ogTitle: 'BoXpert - Containere Modulare Personalizate',
      ogDescription: 'Proiectează containerul tău modular cu configuratorul nostru . Ofertă instantanee și livrare rapidă.',
      ogImage: '/images/og-image.jpg',
    },
    products: {
      title: 'Produse Containere Modulare | BoXpert - Catalog Complet',
      description: 'Explorează gama completă de containere modulare BoXpert: spații locative, birouri, cabine de pază, depozite, grupuri sanitare și containere personalizate. Toate cu garanție 12 luni și livrare rapidă.',
      keywords: [
        'produse containere',
        'catalog containere',
        'containere locative',
        'birouri containere',
        'cabine de pază',
        'grupuri sanitare',
        'depozite containere',
        'containere frigorifice',
        'containere personalizate',
        'containere modulare România'
      ],
      ogTitle: 'Produse Containere Modulare BoXpert',
      ogDescription: 'Catalog complet de containere modulare pentru toate nevoile tale.',
    },
    configurator: {
      title: 'Configurator Containere  | BoXpert - Personalizează Containerul Tău',
      description: 'Configurator  interactiv pentru containere modulare. Proiectează, personalizează și obține ofertă instantanee pentru containerul tău. Vizualizare în timp real și prețuri transparente.',
      keywords: [
        'configurator containere',
        'configurator ',
        'personalizare containere',
        'design containere',
        'configurator online',
        'ofertă containere',
        'prețuri containere'
      ],
      ogTitle: 'Configurator Containere  BoXpert',
      ogDescription: 'Proiectează containerul tău modular cu configuratorul nostru  interactiv.',
    },
    about: {
      title: 'Despre BoXpert - Experiență în Containere Modulare | Echipa Noastră',
      description: 'BoXpert este lider în România pentru containere modulare personalizate. Peste 10 ani de experiență, sute de proiecte finalizate și clienți mulțumiți. Calitate premium, garanție 12 luni și suport tehnic dedicat.',
      keywords: [
        'despre BoXpert',
        'companie containere',
        'experiență containere',
        'echipa BoXpert',
        'istoric BoXpert',
        'valori BoXpert'
      ],
      ogTitle: 'Despre BoXpert - Lider în Containere Modulare',
      ogDescription: 'Peste 10 ani de experiență în containere modulare personalizate.',
    },
    contact: {
      title: 'Contact BoXpert - Sună-ne sau Trimite-ne un Mesaj',
      description: 'Contactează echipa BoXpert pentru consultanță gratuită, ofertă personalizată sau întrebări despre containerele modulare. Răspundem rapid la toate solicitările tale.',
      keywords: [
        'contact BoXpert',
        'telefon containere',
        'email containere',
        'ofertă containere',
        'consultanță containere',
        'suport BoXpert'
      ],
      ogTitle: 'Contact BoXpert - Consultanță Gratuită',
      ogDescription: 'Contactează-ne pentru ofertă personalizată și consultanță gratuită.',
    },
    portfolio: {
      title: 'Portofoliu Proiecte Containere Modulare | BoXpert',
      description: 'Explorează portofoliul nostru de proiecte finalizate: containere locative, birouri, cabine de pază, grupuri sanitare și multe altele. Fiecare proiect este unic și adaptat nevoilor clientului.',
      keywords: [
        'portofoliu containere',
        'proiecte containere',
        'galerie containere',
        'realizări containere',
        'exemple containere',
        'case study containere'
      ],
      ogTitle: 'Portofoliu Proiecte Containere BoXpert',
      ogDescription: 'Explorează proiectele noastre finalizate de containere modulare.',
    },
  },
  en: {
    home: {
      title: 'BoXpert - Custom Modular Containers |  Online Configurator',
      description: 'Design and customize modular containers in real-time with our  configurator. Living spaces, offices, guard cabins, storage, sanitary units and more. Instant quotes and fast delivery.',
      keywords: [
        'modular containers',
        'custom containers',
        'container configurator',
        'living containers',
        'office containers',
        'guard cabins',
        'sanitary units',
        'storage containers',
        'container homes',
        'prefabricated containers',
        'modular spaces',
        'modular construction',
        'BoXpert'
      ],
      ogTitle: 'BoXpert - Custom Modular Containers',
      ogDescription: 'Design your modular container with our  configurator. Instant quotes and fast delivery.',
      ogImage: '/images/og-image.jpg',
    },
    products: {
      title: 'Modular Container Products | BoXpert - Complete Catalog',
      description: 'Explore the complete range of BoXpert modular containers: living spaces, offices, guard cabins, storage, sanitary units and custom containers. All with 12 months warranty and fast delivery.',
      keywords: [
        'container products',
        'container catalog',
        'living containers',
        'office containers',
        'guard cabins',
        'sanitary units',
        'storage containers',
        'refrigerated containers',
        'custom containers',
        'modular containers'
      ],
      ogTitle: 'BoXpert Modular Container Products',
      ogDescription: 'Complete catalog of modular containers for all your needs.',
    },
    configurator: {
      title: ' Container Configurator | BoXpert - Customize Your Container',
      description: 'Interactive  configurator for modular containers. Design, customize and get instant quotes for your container. Real-time visualization and transparent pricing.',
      keywords: [
        'container configurator',
        ' configurator',
        'container customization',
        'container design',
        'online configurator',
        'container quotes',
        'container prices'
      ],
      ogTitle: 'BoXpert  Container Configurator',
      ogDescription: 'Design your modular container with our interactive  configurator.',
    },
    about: {
      title: 'About BoXpert - Modular Container Experience | Our Team',
      description: 'BoXpert is a leader in Romania for custom modular containers. Over 10 years of experience, hundreds of completed projects and satisfied clients. Premium quality, 12 months warranty and dedicated technical support.',
      keywords: [
        'about BoXpert',
        'container company',
        'container experience',
        'BoXpert team',
        'BoXpert history',
        'BoXpert values'
      ],
      ogTitle: 'About BoXpert - Leader in Modular Containers',
      ogDescription: 'Over 10 years of experience in custom modular containers.',
    },
    contact: {
      title: 'Contact BoXpert - Call Us or Send Us a Message',
      description: 'Contact the BoXpert team for free consultation, personalized quotes or questions about modular containers. We respond quickly to all your requests.',
      keywords: [
        'contact BoXpert',
        'container phone',
        'container email',
        'container quotes',
        'container consultation',
        'BoXpert support'
      ],
      ogTitle: 'Contact BoXpert - Free Consultation',
      ogDescription: 'Contact us for personalized quotes and free consultation.',
    },
    portfolio: {
      title: 'Modular Container Projects Portfolio | BoXpert',
      description: 'Explore our portfolio of completed projects: living containers, offices, guard cabins, sanitary units and more. Each project is unique and adapted to the client\'s needs.',
      keywords: [
        'container portfolio',
        'container projects',
        'container gallery',
        'container achievements',
        'container examples',
        'container case studies'
      ],
      ogTitle: 'BoXpert Container Projects Portfolio',
      ogDescription: 'Explore our completed modular container projects.',
    },
  },
};

export function getSEOData(locale: Locale, page: string): SEOData {
  return seoData[locale]?.[page] || seoData[locale].home;
}

export function generateMetadata(locale: Locale, page: string) {
  const seo = getSEOData(locale, page);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://boxpert.ro';
  const canonicalUrl = seo.canonical || `${baseUrl}/${locale}${page !== 'home' ? `/${page}` : ''}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ro': `${baseUrl}/ro${page !== 'home' ? `/${page}` : ''}`,
        'en': `${baseUrl}/en${page !== 'home' ? `/${page}` : ''}`,
        'x-default': `${baseUrl}/ro${page !== 'home' ? `/${page}` : ''}`,
      },
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: canonicalUrl,
      siteName: 'BoXpert',
      images: [
        {
          url: seo.ogImage || `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: seo.ogTitle || seo.title,
        },
      ],
      locale: locale === 'ro' ? 'ro_RO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: [seo.ogImage || `${baseUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}
