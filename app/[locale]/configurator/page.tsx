'use client';

import { PhotoViewer } from '@/components/configurator/PhotoViewer';
import { ConfiguratorPanel } from '@/components/configurator/ConfiguratorPanel';
import { StructuredData } from '@/components/seo/StructuredData';
import { useTranslations } from '@/hooks/useTranslations';

export default function ConfiguratorPage() {
  const { locale } = useTranslations();
  return (
    <>
      <StructuredData locale={locale} type="Product" />
      <div className="min-h-screen flex flex-col md:h-screen md:flex-row">
      {/* Photo Viewer */}
      <div className="h-[42vh] md:flex-1 md:h-full">
        <PhotoViewer />
      </div>

      {/* Configuration Panel */}
      <div className="w-full flex-1 md:w-[480px] md:h-full overflow-hidden">
        <ConfiguratorPanel />
      </div>
    </div>
    </>
  );
}
