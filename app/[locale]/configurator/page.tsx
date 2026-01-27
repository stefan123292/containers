'use client';

import { PhotoViewer } from '@/components/configurator/PhotoViewer';
import { ConfiguratorPanel } from '@/components/configurator/ConfiguratorPanel';

export default function ConfiguratorPage() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Photo Viewer */}
      <div className="flex-1 h-1/2 md:h-full">
        <PhotoViewer />
      </div>

      {/* Configuration Panel */}
      <div className="w-full md:w-[480px] h-1/2 md:h-full overflow-hidden">
        <ConfiguratorPanel />
      </div>
    </div>
  );
}
