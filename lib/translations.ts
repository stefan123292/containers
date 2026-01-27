import roMessages from '@/messages/ro.json';
import enMessages from '@/messages/en.json';

export type Locale = 'ro' | 'en';

export const locales: Locale[] = ['ro', 'en'];
export const defaultLocale: Locale = 'ro';

const messages = {
  ro: roMessages,
  en: enMessages,
};

export function getTranslations(locale: Locale = defaultLocale) {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return t;
}

export function getNestedTranslation(locale: Locale = defaultLocale, namespace: string) {
  const t = getTranslations(locale);
  return (key: string) => t(`${namespace}.${key}`);
}
