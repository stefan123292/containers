'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';

type Props = {
  images: string[];
  label: string;
};

export function PortfolioDetailCarousel({ images, label }: Props) {
  const [index, setIndex] = useState(0);
  const { t } = useTranslations();
  const n = images.length;

  return (
    <div className="space-y-6">
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-industrial-100">
        <Image
          src={images[index]}
          alt={`${label} — ${index + 1}/${n}`}
          fill
          className="object-contain bg-industrial-900/5"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + n) % n)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/95 text-industrial-900 flex items-center justify-center shadow-lg hover:bg-white"
          aria-label={t('portfolio.carousel.prev')}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % n)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/95 text-industrial-900 flex items-center justify-center shadow-lg hover:bg-white"
          aria-label={t('portfolio.carousel.next')}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-primary' : 'w-2 bg-white/70 hover:bg-white'
              }`}
              aria-label={`${i + 1} / ${n}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
              i === index ? 'border-primary ring-2 ring-primary/30' : 'border-transparent opacity-80 hover:opacity-100'
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}
