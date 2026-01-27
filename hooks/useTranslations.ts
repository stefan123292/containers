'use client';

import { useParams } from 'next/navigation';
import { getTranslations, type Locale } from '@/lib/translations';

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'ro';
  const t = getTranslations(locale);
  
  return { t, locale };
}
