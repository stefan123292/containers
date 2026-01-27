'use client';

import { MessageCircle, Phone, Star } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

export function FloatingActions() {
  const { t } = useTranslations();
  const [showLabels, setShowLabels] = useState(false);
  
  const phoneNumber = '1234567890'; // Replace with actual phone number
  const whatsappNumber = '1234567890'; // Replace with actual WhatsApp number
  const whatsappMessage = t('floatingActions.whatsappMessage');
  const googleMapsReviewUrl = 'https://www.google.com/maps/place/St.+Anthony%E2%80%99s+Church/@44.4303973,26.1019462,18z/data=!4m6!3m5!1s0x40b1ff3e31e93745:0x429b14c5aaab2df1!8m2!3d44.4301036!4d26.1020425!16s%2Fg%2F1hfbhn8sm?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleReviewClick = () => {
    window.open(googleMapsReviewUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(false)}
    >
      {/* Google Review Button */}
      <button
        onClick={handleReviewClick}
        className="group relative w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 flex items-center justify-center"
        aria-label={t('floatingActions.leaveReviewAria')}
      >
        <Star className="w-7 h-7" fill="currentColor" />
        <span 
          className={`absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-opacity pointer-events-none ${
            showLabels ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('floatingActions.leaveReview')} ⭐
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="group relative w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all hover:scale-110 flex items-center justify-center"
        aria-label={t('floatingActions.callUsAria')}
      >
        <Phone className="w-7 h-7" />
        <span 
          className={`absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-opacity pointer-events-none ${
            showLabels ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('floatingActions.callUs')} 📞
        </span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
        aria-label={t('floatingActions.chatWithUsAria')}
      >
        <MessageCircle className="w-7 h-7" />
        <span 
          className={`absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-opacity pointer-events-none ${
            showLabels ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('floatingActions.chatWithUs')} 💬
        </span>
      </button>
    </div>
  );
}

