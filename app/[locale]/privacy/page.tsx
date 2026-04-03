import type { Metadata } from 'next';
import type { Locale } from '@/lib/translations';

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isRo = params.locale === 'ro';
  return {
    title: isRo ? 'Politica de confidentialitate | BoXpert' : 'Privacy Policy | BoXpert',
    description: isRo
      ? 'Politica de confidentialitate BoXpert pentru prelucrarea datelor personale pe www.boxpert.ro.'
      : 'BoXpert privacy policy for personal data processing on www.boxpert.ro.',
  };
}

export default function PrivacyPage({ params }: Props) {
  const isRo = params.locale === 'ro';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            {isRo ? 'Politica de confidentialitate' : 'Privacy Policy'}
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
            <h2 className="text-2xl font-semibold mb-2">1. {isRo ? 'Operatorul de date' : 'Data controller'}</h2>
            <p>
              {isRo
                ? 'Operatorul datelor cu caracter personal colectate prin intermediul site-ului www.boxpert.ro este BoXpert, societate comerciala cu sediul in Romania. Ne puteti contacta la adresa: contact@boxpert.ro.'
                : 'The controller of personal data collected through www.boxpert.ro is BoXpert, a company established in Romania. You can contact us at: contact@boxpert.ro.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. {isRo ? 'Ce date colectam' : 'What data we collect'}</h2>
            <p>
              {isRo
                ? 'Colectam datele pe care le furnizati voluntar prin formularul de contact si formularul de cerere oferta din configurator: nume, e-mail, telefon (optional), subiect, mesaj si detalii de configurare trimise de dumneavoastra.'
                : 'We collect data you provide voluntarily through the contact form and quote request form in the configurator: name, email, phone (optional), subject, message, and configuration details submitted by you.'}
            </p>
            <p className="mt-2">
              {isRo
                ? 'Nu colectam date sensibile (medicale, biometrice, financiare).'
                : 'We do not collect sensitive data (medical, biometric, financial).'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. {isRo ? 'Scopul si temeiul prelucrarii' : 'Purpose and legal basis'}</h2>
            <p>
              {isRo
                ? 'Prelucram datele pentru a raspunde solicitarilor, a trimite oferte si a comunica privind proiectul dumneavoastra (Art. 6 alin. 1 lit. b GDPR). In anumite cazuri, putem transmite informatii relevante suplimentare in baza interesului legitim (Art. 6 alin. 1 lit. f GDPR), cu respectarea drepturilor dumneavoastra.'
                : 'We process data to respond to requests, send quotes, and communicate about your project (Art. 6(1)(b) GDPR). In limited cases, we may send additional relevant information based on legitimate interest (Art. 6(1)(f) GDPR), while respecting your rights.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. {isRo ? 'Durata pastrarii datelor' : 'Data retention'}</h2>
            <p>
              {isRo
                ? 'Datele sunt pastrate pe durata necesara solutionarii solicitarii si ulterior maximum 3 ani, pentru obligatii legale sau apararea drepturilor noastre. Dupa aceasta perioada, datele sunt sterse sau anonimizate.'
                : 'Data is retained for as long as needed to handle your request and then up to 3 years for legal obligations or defense of rights. After that period, data is deleted or anonymized.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. {isRo ? 'Destinatarii datelor' : 'Data recipients'}</h2>
            <p>
              {isRo
                ? 'Nu vindem si nu inchiriem datele dumneavoastra. Putem partaja datele strict cu furnizorul de e-mail Resend (pentru transmiterea mesajelor) si cu autoritati publice cand legea ne obliga.'
                : 'We do not sell or rent your data. We may share data only with our email service provider Resend (for sending messages) and with public authorities when legally required.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. {isRo ? 'Transferuri in afara UE' : 'Transfers outside the EU'}</h2>
            <p>
              {isRo
                ? 'Nu urmarim transferul datelor in afara SEE. Daca in viitor devine necesar, vom aplica garantiile adecvate prevazute de GDPR.'
                : 'We do not intend to transfer personal data outside the EEA. If this becomes necessary, we will apply appropriate GDPR safeguards.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. {isRo ? 'Drepturile dumneavoastra' : 'Your rights'}</h2>
            <p>
              {isRo
                ? 'Aveti dreptul de acces, rectificare, stergere, restrictionare, portabilitate, opozitie si dreptul de a depune plangere la ANSPDCP (www.dataprotection.ro). Pentru exercitarea drepturilor: contact@boxpert.ro. Raspundem in maximum 30 de zile.'
                : 'You have the right to access, rectify, erase, restrict, port, and object, as well as the right to lodge a complaint with the supervisory authority. For requests: contact@boxpert.ro. We respond within a maximum of 30 days.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. {isRo ? 'Cookie-uri' : 'Cookies'}</h2>
            <p>
              {isRo
                ? 'Site-ul foloseste cookie-uri tehnice necesare si, doar cu consimtamant, cookie-uri de analiza trafic (Google Analytics). Nu folosim cookie-uri de marketing fara consimtamant.'
                : 'The site uses necessary technical cookies and, only with consent, traffic analytics cookies (Google Analytics). We do not use marketing cookies without consent.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">9. {isRo ? 'Securitatea datelor' : 'Data security'}</h2>
            <p>
              {isRo
                ? 'Aplicam masuri tehnice si organizatorice adecvate pentru a proteja datele impotriva accesului neautorizat, pierderii sau distrugerii. Comunicarea cu site-ul se realizeaza prin conexiune securizata (HTTPS).'
                : 'We implement appropriate technical and organizational measures to protect data against unauthorized access, loss, or destruction. Communication with the site is secured via HTTPS.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">10. {isRo ? 'Modificari ale politicii' : 'Policy changes'}</h2>
            <p>
              {isRo
                ? 'Putem actualiza aceasta politica pentru a reflecta modificari legislative sau operationale. Versiunea actualizata va fi publicata pe aceasta pagina.'
                : 'We may update this policy to reflect legal or operational changes. The updated version will be published on this page.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">11. {isRo ? 'Contact' : 'Contact'}</h2>
            <ul className="space-y-1">
              <li>E-mail: contact@boxpert.ro</li>
              <li>Website: www.boxpert.ro</li>
              <li>{isRo ? 'Telefon' : 'Phone'}: +40 774 957 340</li>
              <li>{isRo ? 'Adresa' : 'Address'}: DJ100 3, 077180 Tunari, Romania</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
