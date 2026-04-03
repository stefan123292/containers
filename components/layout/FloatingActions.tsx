'use client';

import { MessageCircle, Phone, Star, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { trackButtonClick, trackExternalLink } from '@/lib/analytics';

export function FloatingActions() {
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = '40774957340'; // Replace with actual phone number
  const whatsappNumber = '40774957340'; // Replace with actual WhatsApp number
  const whatsappMessage = t('floatingActions.whatsappMessage');
  const googleMapsReviewUrl = 'https://www.google.com/maps/place/Depozit24+-+Spatii+depozitare%2Fparcare+rulote/@44.5469393,26.1483676,19.13z/data=!4m6!3m5!1s0x40b21d00412b66f9:0xc6c5d1bd05b6a706!8m2!3d44.5468988!4d26.1486777!16s%2Fg%2F11w95sn3_9?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    trackExternalLink(url, t('floatingActions.chatWithUs'));
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handlePhoneClick = () => {
    trackButtonClick(t('floatingActions.callUs'), 'floating_actions');
    window.location.href = `tel:+${phoneNumber}`;
    setIsOpen(false);
  };

  const handleReviewClick = () => {
    trackExternalLink(googleMapsReviewUrl, t('floatingActions.leaveReview'));
    window.open(googleMapsReviewUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Action Buttons */}
          <div className="absolute bottom-0 right-0 flex flex-col gap-3 mb-20">
            {/* Google Review Button */}
            <button
              onClick={handleReviewClick}
              className="group relative w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 flex items-center justify-center animate-in fade-in slide-in-from-bottom-2"
              aria-label={t('floatingActions.leaveReviewAria')}
              style={{ animationDelay: '0ms' }}
            >
              <Star className="w-7 h-7" fill="currentColor" />
              <span className="absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                {t('floatingActions.leaveReview')} ⭐
              </span>
            </button>

            {/* Phone Button */}
            <button
              onClick={handlePhoneClick}
              className="group relative w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all hover:scale-110 flex items-center justify-center animate-in fade-in slide-in-from-bottom-2"
              aria-label={t('floatingActions.callUsAria')}
              style={{ animationDelay: '50ms' }}
            >
              <Phone className="w-7 h-7" />
              <span className="absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                {t('floatingActions.callUs')} 📞
              </span>
            </button>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="group relative w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-in fade-in slide-in-from-bottom-2"
              aria-label={t('floatingActions.chatWithUsAria')}
              style={{ animationDelay: '100ms' }}
            >
              <MessageCircle className="w-7 h-7" />
              <span className="absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                {t('floatingActions.chatWithUs')} 💬
              </span>
            </button>
          </div>
        </>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label={isOpen ? 'Close menu' : 'Open chat menu'}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}

