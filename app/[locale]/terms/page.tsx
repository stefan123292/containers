import type { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/lib/translations';

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isRo = params.locale === 'ro';
  return {
    title: isRo ? 'Termeni si conditii | BoXpert' : 'Terms and Conditions | BoXpert',
    description: isRo
      ? 'Termeni si conditii de utilizare pentru www.boxpert.ro.'
      : 'Terms and conditions for using www.boxpert.ro.',
  };
}

export default function TermsPage({ params }: Props) {
  const isRo = params.locale === 'ro';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            {isRo ? 'Termeni si conditii' : 'Terms and Conditions'}
          </h1>
          <p className="text-industrial-300">
            {isRo
              ? 'BoXpert - www.boxpert.ro | Ultima actualizare: 3 aprilie 2026'
              : 'BoXpert - www.boxpert.ro | Last updated: April 3, 2026'}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl text-industrial-800 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. {isRo ? 'Informatii generale' : 'General information'}</h2>
            <p>
              {isRo
                ? 'Prezentul document stabileste termenii si conditiile de utilizare ale site-ului www.boxpert.ro, operat de BoXpert, societate comerciala cu sediul in Romania. Prin accesarea si utilizarea site-ului, acceptati acesti termeni. Daca nu sunteti de acord, va rugam sa nu utilizati site-ul.'
                : 'This document sets the terms and conditions for using www.boxpert.ro, operated by BoXpert, a company established in Romania. By accessing and using the site, you accept these terms. If you do not agree, please do not use the site.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. {isRo ? 'Obiectul site-ului' : 'Scope of the site'}</h2>
            <p>
              {isRo
                ? 'Site-ul are caracter informativ si prezinta produsele si serviciile BoXpert, inclusiv containere modulare personalizate si configuratorul online.'
                : 'The site is informational and presents BoXpert products and services, including custom modular containers and the online configurator.'}
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>{isRo ? 'vizualizarea produselor si optiunilor disponibile;' : 'viewing products and available options;'}</li>
              <li>{isRo ? 'transmiterea cererilor de informatii prin formularul de contact;' : 'sending information requests through the contact form;'}</li>
              <li>{isRo ? 'transmiterea cererilor de oferta prin formularul din configurator;' : 'sending quote requests via the configurator form;'}</li>
              <li>{isRo ? 'contactarea echipei BoXpert prin e-mail, telefon sau WhatsApp.' : 'contacting the BoXpert team by email, phone, or WhatsApp.'}</li>
            </ul>
            <p className="mt-2">
              {isRo
                ? 'Site-ul nu este platforma de comert electronic. Contractele de vanzare se incheie offline, dupa discutie directa cu reprezentantii BoXpert.'
                : 'The site is not an e-commerce platform. Sales contracts are concluded offline after direct discussion with BoXpert representatives.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. {isRo ? 'Utilizarea site-ului' : 'Use of the site'}</h2>
            <p>
              {isRo
                ? 'Utilizatorul se obliga sa foloseasca site-ul doar in scopuri legale. Este interzisa folosirea frauduloasa sau ilegala, transmiterea de continut ofensator/ilegal, tentativele de acces neautorizat si copierea continutului fara acord scris.'
                : 'Users must use the site only for lawful purposes. Fraudulent or illegal use, offensive/illegal content submissions, unauthorized access attempts, and copying content without written consent are prohibited.'}
            </p>
            <p className="mt-2">
              {isRo
                ? 'Datele furnizate prin formularele de contact si oferta sunt transmise voluntar si sunt prelucrate conform '
                : 'Data submitted through contact and quote forms is provided voluntarily and processed according to our '}
              <Link href={`/${params.locale}/privacy`} className="text-primary hover:underline">
                {isRo ? 'Politicii de confidentialitate' : 'Privacy Policy'}
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. {isRo ? 'Proprietate intelectuala' : 'Intellectual property'}</h2>
            <p>
              {isRo
                ? 'Continutul site-ului (texte, imagini, grafica, logo, design) apartine BoXpert sau este utilizat legal. Reproducerea, distribuirea sau reutilizarea continutului fara acord scris prealabil este interzisa.'
                : 'Site content (texts, images, graphics, logo, design) belongs to BoXpert or is used lawfully. Reproduction, distribution, or reuse without prior written consent is prohibited.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. {isRo ? 'Limitarea raspunderii' : 'Limitation of liability'}</h2>
            <p>
              {isRo
                ? 'Depunem eforturi pentru informatii corecte si actualizate, dar nu garantam lipsa erorilor sau actualizarea permanenta. Nu raspundem pentru indisponibilitati temporare, erori tehnice sau prejudicii rezultate din utilizarea/imposibilitatea utilizarii site-ului.'
                : 'We strive to keep information accurate and up to date, but we do not guarantee absence of errors or continuous updates. We are not liable for temporary unavailability, technical errors, or damages resulting from use/inability to use the site.'}
            </p>
            <p className="mt-2">
              {isRo
                ? 'Preturile si configuratiile afisate in site/configurator au caracter informativ. Oferta ferma este transmisa doar dupa analiza solicitarilor directe.'
                : 'Prices and configurations displayed on the site/configurator are informational. A binding offer is provided only after direct request analysis.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. {isRo ? 'Link-uri externe' : 'External links'}</h2>
            <p>
              {isRo
                ? 'Site-ul poate include link-uri externe (ex. Google Maps, retele sociale). BoXpert nu controleaza si nu raspunde pentru continutul acestor site-uri.'
                : 'The site may include external links (e.g., Google Maps, social networks). BoXpert does not control and is not responsible for the content of those websites.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. {isRo ? 'Modificarea termenilor' : 'Changes to terms'}</h2>
            <p>
              {isRo
                ? 'BoXpert poate modifica oricand acesti termeni. Versiunea actualizata va fi publicata pe aceasta pagina, cu data ultimei actualizari. Continuarea utilizarii site-ului inseamna acceptarea noilor termeni.'
                : 'BoXpert may modify these terms at any time. The updated version will be published on this page with the latest update date. Continued use of the site means acceptance of the new terms.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. {isRo ? 'Legea aplicabila' : 'Applicable law'}</h2>
            <p>
              {isRo
                ? 'Acesti termeni sunt guvernati de legislatia romana. Litigiile se solutioneaza amiabil, iar in caz de esec de catre instantele competente din Romania.'
                : 'These terms are governed by Romanian law. Disputes will be resolved amicably, and if unresolved, by the competent courts in Romania.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">9. {isRo ? 'Contact' : 'Contact'}</h2>
            <ul className="space-y-1">
              <li>E-mail: contact@boxpert.ro</li>
              <li>Website: www.boxpert.ro</li>
              <li>{isRo ? 'Telefon' : 'Phone'}: +40 774 957 340</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
