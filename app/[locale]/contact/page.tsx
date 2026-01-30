'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { trackFormSubmit, trackButtonClick, trackExternalLink } from '@/lib/analytics';

export default function ContactPage() {
  const { t, locale } = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    trackFormSubmit('contact_form', 'contact_page');
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
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
                      href="tel:+1234567890" 
                      onClick={() => trackButtonClick('Phone', 'contact_page')}
                      className="text-industrial-600 hover:text-primary"
                    >
                      +1 (234) 567-890
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
                      href="mailto:info@containers.com" 
                      onClick={() => trackButtonClick('Email', 'contact_page')}
                      className="text-industrial-600 hover:text-primary"
                    >
                      info@containers.com
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
                      123 Industrial Park Ave<br />
                      Manufacturing District<br />
                      New York, NY 10001
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
                        placeholder="+1 (234) 567-890"
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
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
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
                href="https://www.google.com/maps/place/St.+Anthony%E2%80%99s+Church/@44.4303973,26.1019462,18z/data=!4m6!3m5!1s0x40b1ff3e31e93745:0x429b14c5aaab2df1!8m2!3d44.4301036!4d26.1020425!16s%2Fg%2F1hfbhn8sm?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.5673944487808!2d26.101946175571584!3d44.43039726076679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3e31e93745%3A0x429b14c5aaab2df1!2sSt.%20Anthony%E2%80%99s%20Church!5e0!3m2!1sen!2sro!4v1763372619800!5m2!1sen!2sro" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BoXpert Location - St. Anthony's Church"
              />
            </div>

            {/* Location Details */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t('contact.address')}</h3>
                <p className="text-sm text-industrial-600">
                  St. Anthony&apos;s Church Area<br />
                  Bucharest, Romania
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
  );
}

