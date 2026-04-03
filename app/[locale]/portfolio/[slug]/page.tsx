import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServerTranslations } from '@/lib/server-translations';
import { getProjectBySlug } from '@/lib/portfolio-data';
import type { Locale } from '@/lib/translations';
import type { Metadata } from 'next';
import { PortfolioDetailCarousel } from '@/components/portfolio/PortfolioDetailCarousel';

type Props = { params: { locale: Locale; slug: string } };

export function generateStaticParams() {
  return [{ slug: 'birou-parc-auto' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {};
  }
  const t = await getServerTranslations(params.locale);
  const base = `portfolio.projects.${project.key}`;
  const title = t(`${base}.title`);
  const description = t(`${base}.description`);
  return {
    title: `${title} | BoXpert`,
    description,
    openGraph: {
      title: `${title} | BoXpert`,
      description,
    },
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  const t = await getServerTranslations(params.locale);
  const base = `portfolio.projects.${project.key}`;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link
            href={`/${params.locale}/portfolio`}
            className="inline-flex text-sm text-industrial-300 hover:text-white mb-6"
          >
            ← {t('portfolio.backToList')}
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/10 text-sm font-medium rounded-full text-white mb-4">
              {t(`${base}.tag`)}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t(`${base}.title`)}
            </h1>
            <p className="text-xl text-industrial-300">
              {t(`${base}.description`)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <PortfolioDetailCarousel
            images={project.def.images}
            label={t(`${base}.title`)}
          />
        </div>
      </section>
    </div>
  );
}
