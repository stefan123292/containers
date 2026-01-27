import { Loading } from '@/components/ui/Loading';
import { getServerTranslations } from '@/lib/server-translations';
import { defaultLocale } from '@/lib/translations';

export default async function ConfiguratorLoading() {
  const t = await getServerTranslations(defaultLocale);
  return <Loading fullScreen={true} size="lg" text={t('loading.configurator')} />;
}
