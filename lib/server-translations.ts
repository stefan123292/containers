import { getTranslations, type Locale } from './translations';

export async function getServerTranslations(locale: Locale = 'ro') {
  return getTranslations(locale);
}
