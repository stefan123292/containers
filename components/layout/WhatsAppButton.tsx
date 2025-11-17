'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '1234567890'; // Replace with actual WhatsApp business number
  const message = 'Hi! I would like to know more about your container solutions.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-16 bg-industrial-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </button>
  );
}

