'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { trackFormSubmit, trackButtonClick, trackExternalLink } from '@/lib/analytics';
import { StructuredData } from '@/components/seo/StructuredData';

export default function ContactPage() {
  const { t, locale } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormFeedback('idle');
    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          subject: formData.subject,
          message: formData.message,
          locale,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(typeof data.error === 'string' ? data.error : 'error');
      }
      trackFormSubmit('contact_form', 'contact_page');
      setFormFeedback('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setFormFeedback('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <StructuredData locale={locale} type="Organization" />
      <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-industrial-900 to-industrial-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-industrial-300">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold mb-6">{t('contact.contactInfo')}</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.phone')}</h3>
                    <a 
                      href="tel:+40774957340" 
                      onClick={() => trackButtonClick('Phone', 'contact_page')}
                      className="text-industrial-600 hover:text-primary"
                    >
                      +40774957340
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.email')}</h3>
                    <a 
                      href="mailto:contact@boxpert.ro" 
                      onClick={() => trackButtonClick('Email', 'contact_page')}
                      className="text-industrial-600 hover:text-primary"
                    >
                      contact@boxpert.ro
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.address')}</h3>
                    <p className="text-industrial-600">
                      DJ100 3, 077180 Tunari
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-industrial-50 rounded-lg">
                <h3 className="font-semibold mb-3">{t('contact.businessHours')}</h3>
                <div className="space-y-2 text-sm text-industrial-600">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-industrial-200 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold mb-6">{t('contact.sendMessage')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formFeedback === 'success' && (
                    <p className="text-sm text-green-800 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      {t('contact.formSuccess')}
                    </p>
                  )}
                  {formFeedback === 'error' && (
                    <p className="text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {t('contact.formError')}
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.fullName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.emailAddress')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t('contact.phoneNumber')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+40774957340"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t('contact.subject')}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">{t('contact.selectSubject')}</option>
                        <option value="quote">{t('contact.requestQuote')}</option>
                        <option value="general">{t('contact.generalInquiry')}</option>
                        <option value="support">{t('contact.support')}</option>
                        <option value="custom">{t('contact.customProject')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
                  >
                    <Send className="w-5 h-5" />
                    {submitting ? t('contact.formSending') : t('contact.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Map Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-industrial-900 mb-4">
                {t('contact.visitLocation')}
              </h2>
              <p className="text-lg text-industrial-600 mb-6">
                {t('contact.locationSubtitle')}
              </p>
              <a
                href="https://www.google.com/maps/place/Depozit24+-+Spatii+depozitare%2Fparcare+rulote/@44.5469393,26.1483676,19.13z/data=!4m6!3m5!1s0x40b21d00412b66f9:0xc6c5d1bd05b6a706!8m2!3d44.5468988!4d26.1486777!16s%2Fg%2F11w95sn3_9?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://www.google.com/maps', t('contact.getDirections'))}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                {t('contact.getDirections')}
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-industrial-200" style={{ height: '500px' }}>
              <iframe 
                src="https://www.google.com/maps?q=DJ100+3,+077180+Tunari&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BoXpert Location - DJ100 3, 077180 Tunari"
              />
            </div>

            {/* Location Details */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.address')}</h3>
                <p className="text-sm text-industrial-600">
                  DJ100 3, 077180 Tunari
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold mb-2">{t('contact.workingHours')}</h3>
                <p className="text-sm text-industrial-600">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 4:00 PM
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="font-semibold mb-2">{t('contact.freeParking')}</h3>
                <p className="text-sm text-industrial-600">
                  {t('contact.parkingDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

