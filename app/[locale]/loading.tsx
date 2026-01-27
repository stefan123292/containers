import { Loading } from '@/components/ui/Loading';
import { getServerTranslations } from '@/lib/server-translations';
import { defaultLocale } from '@/lib/translations';

export default async function LoadingPage() {
  // Note: In loading.tsx, we don't have access to params, so we use default locale
  const t = await getServerTranslations(defaultLocale);
  return <Loading fullScreen={true} size="lg" text={t('loading.default')} />;
}
