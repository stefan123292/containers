'use client';

import { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

export function ReviewPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed the prompt
    const hasSeenPrompt = localStorage.getItem('reviewPromptDismissed');
    if (hasSeenPrompt) {
      setDismissed(true);
      return;
    }

    // Show prompt after 30 seconds on site
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleReview = () => {
    const googleMapsReviewUrl = 'https://www.google.com/maps/place/St.+Anthony%E2%80%99s+Church/@44.4303973,26.1019462,18z/data=!4m6!3m5!1s0x40b1ff3e31e93745:0x429b14c5aaab2df1!8m2!3d44.4301036!4d26.1020425!16s%2Fg%2F1hfbhn8sm?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D';
    window.open(googleMapsReviewUrl, '_blank');
    handleDismiss();
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('reviewPromptDismissed', 'true');
    setDismissed(true);
  };

  if (!showPrompt || dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 p-8 relative animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 hover:bg-industrial-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-industrial-600" />
        </button>

        {/* Stars */}
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-8 h-8 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-display font-bold text-industrial-900 text-center mb-3">
          Enjoying Our Service?
        </h3>
        <p className="text-industrial-600 text-center mb-6">
          Your feedback helps us improve and helps others find us! 
          Would you take a moment to leave us a review on Google?
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleReview}
            className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
          >
            <Star className="w-5 h-5" fill="currentColor" />
            Leave a Review
          </button>
          <button
            onClick={handleDismiss}
            className="w-full py-3 text-industrial-600 hover:text-industrial-900 font-medium transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}

