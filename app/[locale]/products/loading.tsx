import { Loading } from '@/components/ui/Loading';
import { getServerTranslations } from '@/lib/server-translations';
import { defaultLocale } from '@/lib/translations';

export default async function ProductsLoading() {
  const t = await getServerTranslations(defaultLocale);
  return <Loading fullScreen={false} size="lg" text={t('loading.products')} />;
}
