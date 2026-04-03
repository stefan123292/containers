'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';

interface LogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-[3.75rem] h-[3.75rem]',
  lg: 'w-[4.5rem] h-[4.5rem]',
};

export function Logo({ showTagline = false, size = 'md', className = '', href }: LogoProps) {
  const { t, locale } = useTranslations();
  const logoSize = sizeClasses[size];
  const logoHref = href !== undefined ? href : `/${locale}`;

  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${logoSize} relative flex-shrink-0`}>
        <Image
          src="/images/BoXpert.svg"
          alt="BoXpert Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showTagline && (
        <div>
          <div className="text-white font-display font-bold text-xl">BoXpert</div>
          <div className="text-primary text-xs">{t('header.tagline')}</div>
        </div>
      )}
    </div>
  );

  if (href !== undefined) {
    return (
      <Link href={logoHref} className="flex items-center">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
