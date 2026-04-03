import { getServerTranslations } from '@/lib/server-translations';
import type { Locale } from '@/lib/translations';
import { StructuredData } from '@/components/seo/StructuredData';
import { PortfolioProjectsGrid } from '@/components/portfolio/PortfolioProjectsGrid';

export default async function PortfolioPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = await getServerTranslations(params.locale);
  
  return (
  <>
      <StructuredData locale={params.locale} type="Product" />
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-industrial-300">
              {t('portfolio.subtitle')}
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
              <div className="text-sm text-industrial-600">{t('portfolio.projectsCompleted')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-industrial-600">{t('portfolio.citiesServed')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-industrial-600">{t('portfolio.satisfactionRate')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-industrial-600">{t('portfolio.yearsExperience')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PortfolioProjectsGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-industrial-900 mb-4">
            {t('portfolio.readyToCreate')}
          </h2>
          <p className="text-lg text-industrial-600 mb-8 max-w-2xl mx-auto">
            {t('portfolio.readyToCreateDesc')}
          </p>
          <a
            href={`/${params.locale}/configurator`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            {t('portfolio.startConfiguring')}
          </a>
        </div>
      </section>
    </div>
    </>
  );
}

