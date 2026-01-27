import { Award, Users, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { getServerTranslations } from '@/lib/server-translations';
import type { Locale } from '@/lib/translations';

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = await getServerTranslations(params.locale);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-industrial-300">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-industrial-900 mb-6">{t('about.story.title')}</h2>
            <div className="prose prose-lg max-w-none text-industrial-700">
              <p className="mb-4">
                {t('about.story.p1')}
              </p>
              <p className="mb-4">
                {t('about.story.p2')}
              </p>
              <p>
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center text-industrial-900 mb-12">
              {t('about.values.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.quality.title')}</h3>
                <p className="text-industrial-600">
                  {t('about.values.quality.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.customer.title')}</h3>
                <p className="text-industrial-600">
                  {t('about.values.customer.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.sustainability.title')}</h3>
                <p className="text-industrial-600">
                  {t('about.values.sustainability.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('about.values.innovation.title')}</h3>
                <p className="text-industrial-600">
                  {t('about.values.innovation.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center text-industrial-900 mb-12">
              {t('about.team.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'John Smith', role: 'CEO & Founder', description: '15+ years in modular construction' },
                { name: 'Sarah Johnson', role: 'Head of Design', description: 'Award-winning architect' },
                { name: 'Michael Chen', role: 'Operations Director', description: 'Logistics and manufacturing expert' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-industrial-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-industrial-900 to-industrial-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-industrial-300 mb-8">
            {t('about.cta.subtitle')}
          </p>
          <Link
            href={`/${params.locale}/configurator`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}

