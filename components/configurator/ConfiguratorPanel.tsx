'use client';

import { useState, type FormEvent } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { formatPrice, generateId } from '@/lib/utils';
import { trackConfiguratorAction } from '@/lib/analytics';
import { DEFAULT_PRICING, type ContainerSize } from '@/types/configurator';
import { useTranslations } from '@/hooks/useTranslations';
import { 
  Ruler, 
  Palette, 
  DoorOpen, 
  SquareStack, 
  Zap, 
  Wind,
  Plus,
  Trash2,
  X,
  Loader2,
  Box
} from 'lucide-react';

export function ConfiguratorPanel() {
  const [activeTab, setActiveTab] = useState<'size' | 'exterior' | 'features'>('size');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteContact, setQuoteContact] = useState({ name: '', email: '', phone: '' });
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t, locale } = useTranslations();
  const store = useConfiguratorStore();
  const totalPrice = store.calculatePrice();
  const canAddDoor = store.doors.length < 5;
  const canAddWindow = store.windows.length < 5;
  const isTwoByTwo = store.size === '2x2';
  const stairsSizes = new Set(['6x2_5', '6x3', '9x3']);
  const pricing = DEFAULT_PRICING;
  const size = store.size as ContainerSize;

  const colorOptions = [
    { name: t('configurator.colors.anthracite'), value: '#2D3039' },
    { name: t('configurator.colors.white'), value: '#F3F4F6' },
  ];
  const getDoorLabel = (doorType: string) => {
    if (doorType === 'standard') return t('configurator.exterior.defaultDoorModel');
    return `${doorType} (90x200 cm)`;
  };
  const getWindowLabel = (windowType: string) => {
    if (windowType === 'standard') return t('configurator.exterior.defaultWindowModel');
    return `${windowType} (100x100 cm)`;
  };

  const openQuoteModal = () => {
    setQuoteStatus('idle');
    setQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteOpen(false);
    setQuoteStatus('idle');
  };

  const submitQuote = async (e: FormEvent) => {
    e.preventDefault();
    setQuoteStatus('loading');
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: {
            name: quoteContact.name.trim(),
            email: quoteContact.email.trim(),
            phone: quoteContact.phone.trim() || undefined,
          },
          configuration: {
            size: store.size,
            exteriorColor: store.exteriorColor,
            doors: store.doors,
            windows: store.windows,
            interiorFinish: store.interiorFinish,
            flooring: store.flooring,
            electrical: store.electrical,
            plumbing: store.plumbing,
            extraMessage: store.extraMessage,
            hasInsulation: store.hasInsulation,
          },
          estimatedPriceLabel: formatPrice(totalPrice),
          locale,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : 'error');
      }
      setQuoteStatus('success');
    } catch {
      setQuoteStatus('error');
    }
  };

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="bg-industrial-900 text-white p-6">
        <h2 className="text-2xl font-display font-bold mb-2">{t('configurator.panel.title')}</h2>
        <p className="text-industrial-400 text-sm">{t('configurator.panel.subtitle')}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-industrial-200">
        <TabButton
          active={activeTab === 'size'}
          onClick={() => setActiveTab('size')}
          icon={<Ruler className="w-4 h-4" />}
          label={t('configurator.tabs.size')}
        />
        <TabButton
          active={activeTab === 'exterior'}
          onClick={() => setActiveTab('exterior')}
          icon={<Palette className="w-4 h-4" />}
          label={t('configurator.tabs.exterior')}
        />
        <TabButton
          active={activeTab === 'features'}
          onClick={() => setActiveTab('features')}
          icon={<SquareStack className="w-4 h-4" />}
          label={t('configurator.tabs.interior')}
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'size' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">{t('configurator.size.title')}</h3>
            
            <SizeOption
              size="6 x 3 m"
              visualScale={0.7}
              dimensions="5950 mm (L) * 3000 mm (l) * 2800 mm (Î)"
              description={t('configurator.size.options.6x3.description')}
              selected={store.size === '6x3'}
              onSelect={() => {
                store.setSize('6x3');
                trackConfiguratorAction('size_change', { size: '6x3' });
              }}
            />
            
            <SizeOption
              size="6 x 2,5 m"
              visualScale={0.62}
              dimensions="5950 mm (L) * 2500 mm (l) * 2800 mm (Î)"
              description={t('configurator.size.options.6x2_5.description')}
              selected={store.size === '6x2_5'}
              onSelect={() => {
                store.setSize('6x2_5');
                trackConfiguratorAction('size_change', { size: '6x2_5' });
              }}
            />
            
            <SizeOption
              size="2 x 2 m"
              visualScale={0.32}
              dimensions="1950 mm (L) * 2000 mm (l) * 2800 mm (Î)"
              description={t('configurator.size.options.2x2.description')}
              selected={store.size === '2x2'}
              onSelect={() => {
                store.setSize('2x2');
                trackConfiguratorAction('size_change', { size: '2x2' });
              }}
            />

            <SizeOption
              size="4 x 2 m"
              visualScale={0.5}
              dimensions="3950 mm (L) * 2000 mm (l) * 2800 mm (Î)"
              description={t('configurator.size.options.4x2.description')}
              selected={store.size === '4x2'}
              onSelect={() => {
                store.setSize('4x2');
                trackConfiguratorAction('size_change', { size: '4x2' });
              }}
            />

            <SizeOption
              size="9 x 3 m"
              visualScale={1}
              dimensions="8950 mm (L) * 3000 mm (l) * 2800 mm (Î)"
              description={t('configurator.size.options.9x3.description')}
              selected={store.size === '9x3'}
              onSelect={() => {
                store.setSize('9x3');
                trackConfiguratorAction('size_change', { size: '9x3' });
              }}
            />
          </div>
        )}

        {activeTab === 'exterior' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">{t('configurator.exterior.colorTitle')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => {
                      store.setExteriorColor(color.value);
                      trackConfiguratorAction('color_change', { color: color.name, colorValue: color.value });
                    }}
                    className={`relative p-4 rounded-lg border-2 transition-all ${
                      store.exteriorColor === color.value
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'border-industrial-200 hover:border-industrial-400'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="text-xs text-center">{color.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{t('configurator.exterior.extraDoors')}</h3>
                <button
                  onClick={() => {
                    if (!canAddDoor || isTwoByTwo) return;
                    store.addDoor({
                      id: generateId(),
                      type: 'standard',
                      position: { x: 0, y: 0, z: 0 },
                      wall: 'front',
                    });
                    trackConfiguratorAction('door_added', { totalDoors: store.doors.length + 1 });
                  }}
                  disabled={!canAddDoor || isTwoByTwo}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                  {t('configurator.exterior.add')}
                </button>
              </div>
              <p className="text-xs text-industrial-500 mb-3">{t('configurator.exterior.maxDoors')}</p>
              {isTwoByTwo && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2 py-1 mb-3">
                  {t('configurator.exterior.unavailableFor2x2')}
                </p>
              )}
              <p className="text-xs text-industrial-500 mb-2">{t('configurator.exterior.extraDoorPrice')}: €{pricing.extraDoorPriceBySize[size]} +TVA</p>
              <p className="text-xs text-industrial-500 mb-3">{t('configurator.exterior.addedModel')}: {t('configurator.exterior.defaultDoorModel')}</p>
              
              {store.doors.length === 0 ? (
                <p className="text-industrial-500 text-sm">{t('configurator.exterior.noDoors')}</p>
              ) : (
                <div className="space-y-2">
                  {store.doors.map((door: any) => (
                    <div
                      key={door.id}
                      className="flex items-center justify-between p-3 bg-industrial-100 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <DoorOpen className="w-5 h-5 text-industrial-600" />
                        <div>
                          <p className="font-medium">{getDoorLabel(door.type)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          store.removeDoor(door.id);
                          trackConfiguratorAction('door_removed', { doorType: door.type, doorId: door.id });
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{t('configurator.exterior.extraWindows')}</h3>
                <button
                  onClick={() => {
                    if (!canAddWindow || isTwoByTwo) return;
                    store.addWindow({
                      id: generateId(),
                      type: 'standard',
                      size: 'medium',
                      position: { x: 0, y: 0, z: 0 },
                      wall: 'left',
                    });
                    trackConfiguratorAction('window_added', { totalWindows: store.windows.length + 1 });
                  }}
                  disabled={!canAddWindow || isTwoByTwo}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                  {t('configurator.exterior.add')}
                </button>
              </div>
              <p className="text-xs text-industrial-500 mb-3">{t('configurator.exterior.maxWindows')}</p>
              {isTwoByTwo && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2 py-1 mb-3">
                  {t('configurator.exterior.unavailableFor2x2')}
                </p>
              )}
              <p className="text-xs text-industrial-500 mb-2">{t('configurator.exterior.extraWindowPrice')}: €{pricing.extraWindowPriceBySize[size]} +TVA</p>
              <p className="text-xs text-industrial-500 mb-3">{t('configurator.exterior.addedModel')}: {t('configurator.exterior.defaultWindowModel')}</p>
              
              {store.windows.length === 0 ? (
                <p className="text-industrial-500 text-sm">{t('configurator.exterior.noWindows')}</p>
              ) : (
                <div className="space-y-2">
                  {store.windows.map((window: any) => (
                    <div
                      key={window.id}
                      className="flex items-center justify-between p-3 bg-industrial-100 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <SquareStack className="w-5 h-5 text-industrial-600" />
                        <div>
                          <p className="font-medium">{getWindowLabel(window.type)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          store.removeWindow(window.id);
                          trackConfiguratorAction('window_removed', { windowSize: window.size, windowId: window.id });
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">{t('configurator.interior.title')}</h3>
            
            <FeatureToggle
              icon={<Zap className="w-5 h-5" />}
              label={`${t('configurator.interior.electrical')} (€${pricing.electricalPriceBySize[size]} +TVA)`}
              description={t('configurator.interior.electricalDescription')}
              enabled={store.electrical}
              onToggle={store.toggleElectrical}
            />
            
            <FeatureToggle
              icon={<Wind className="w-5 h-5" />}
              label={`${t('configurator.interior.plumbing')} (€${pricing.plumbingPriceBySize[size]} +TVA)`}
              description={t('configurator.interior.plumbingDescription')}
              enabled={store.plumbing}
              onToggle={store.togglePlumbing}
            />

            <div className="pt-4">
              <label className="block text-sm font-medium mb-2">{t('configurator.interior.finish')}</label>
              <select
                value={store.interiorFinish}
                onChange={(e) => store.setInteriorFinish(e.target.value as any)}
                className="w-full px-4 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">{t('configurator.interior.none')}</option>
                <option value="partition_pvc_door">{`${t('configurator.interior.partition')} (€${pricing.interiorFinishPricesBySize[size].partition_pvc_door} +TVA)`}</option>
                <option value="sink">{`${t('configurator.interior.sink')} (€${pricing.interiorFinishPricesBySize[size].sink} +TVA)`}</option>
                <option value="wc">{`${t('configurator.interior.wc')} (€${pricing.interiorFinishPricesBySize[size].wc} +TVA)`}</option>
                <option value="shower_cabin">{`${t('configurator.interior.shower')} (€${pricing.interiorFinishPricesBySize[size].shower_cabin} +TVA)`}</option>
                {stairsSizes.has(store.size) && (
                  <option value="stairs_railing">{`${t('configurator.interior.stairs')} (€${pricing.interiorFinishPricesBySize[size].stairs_railing} +TVA)`}</option>
                )}
                <option value="terrace_railing">{`${t('configurator.interior.terrace')} (€${pricing.interiorFinishPricesBySize[size].terrace_railing} +TVA)`}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('configurator.interior.flooring')}</label>
              <select
                value={store.flooring}
                onChange={(e) => store.setFlooring(e.target.value as any)}
                className="w-full px-4 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">{t('configurator.interior.none')}</option>
                <option value="linoleum">{`${t('configurator.interior.linoleum')} (€${pricing.flooringPricesBySize[size].linoleum} +TVA)`}</option>
                <option value="parquet">{t('configurator.interior.parquet')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('configurator.interior.extraMessageLabel')}</label>
              <textarea
                value={store.extraMessage}
                onChange={(e) => store.setExtraMessage(e.target.value)}
                rows={3}
                placeholder={t('configurator.interior.extraMessagePlaceholder')}
                className="w-full px-4 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        )}
      </div>

      {/* Price Footer */}
      <div className="border-t border-industrial-200 p-6 bg-industrial-50">
        <div className="flex items-center justify-between mb-4">
          <span className="text-industrial-600">{t('configurator.panel.estimatedPrice')}</span>
          <span className="text-3xl font-display font-bold text-primary">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <button
          type="button"
          onClick={openQuoteModal}
          className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          {t('configurator.panel.requestQuote')}
        </button>
        <p className="mt-3 text-xs text-industrial-600">
          {t('configurator.panel.requestHint')}
        </p>
      </div>

      {quoteOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-industrial-200">
              <h3 className="text-lg font-semibold text-industrial-900">{t('configurator.quoteModal.title')}</h3>
              <button
                type="button"
                onClick={closeQuoteModal}
                className="p-2 rounded-lg hover:bg-industrial-100 text-industrial-600"
                aria-label={t('configurator.quoteModal.cancel')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={submitQuote} className="p-6 space-y-4">
              <p className="text-sm text-industrial-600">{t('configurator.quoteModal.subtitle')}</p>
              <div>
                <label className="block text-sm font-medium mb-1">{t('configurator.quoteModal.name')}</label>
                <input
                  required
                  type="text"
                  value={quoteContact.name}
                  onChange={(e) => setQuoteContact((c) => ({ ...c, name: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t('configurator.quoteModal.email')}</label>
                <input
                  required
                  type="email"
                  value={quoteContact.email}
                  onChange={(e) => setQuoteContact((c) => ({ ...c, email: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t('configurator.quoteModal.phone')}</label>
                <input
                  type="tel"
                  value={quoteContact.phone}
                  onChange={(e) => setQuoteContact((c) => ({ ...c, phone: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+40774957340"
                />
              </div>
              {quoteStatus === 'success' && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  {t('configurator.quoteModal.success')}
                </p>
              )}
              {quoteStatus === 'error' && (
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {t('configurator.quoteModal.error')}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="flex-1 py-3 border border-industrial-300 rounded-lg font-medium text-industrial-700 hover:bg-industrial-50"
                >
                  {t('configurator.quoteModal.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={quoteStatus === 'loading' || quoteStatus === 'success'}
                  className="flex-1 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {quoteStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t('configurator.quoteModal.sending')}
                    </>
                  ) : (
                    t('configurator.quoteModal.submit')
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 font-medium transition-colors ${
        active
          ? 'text-primary border-b-2 border-primary bg-primary/5'
          : 'text-industrial-600 hover:text-industrial-900 hover:bg-industrial-50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function SizeOption({ size, dimensions, description, selected, onSelect, visualScale = 1 }: any) {
  const widthPercent = Math.max(25, Math.min(100, Math.round(visualScale * 100)));
  return (
    <button
      onClick={onSelect}
      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
        selected
          ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
          : 'border-industrial-200 hover:border-industrial-400'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-lg">{size}</h4>
        <div className="flex items-center gap-2">
          <Box className="w-4 h-4 text-industrial-500" />
          <div className="w-16 h-2 bg-industrial-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${widthPercent}%` }} />
          </div>
        </div>
        {selected && (
          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        )}
      </div>
      <p className="text-sm text-industrial-600 mb-1">{dimensions}</p>
      <p className="text-xs text-industrial-500">{description}</p>
    </button>
  );
}

function FeatureToggle({ icon, label, description, enabled, onToggle }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-industrial-200 hover:border-industrial-300 transition-colors">
      <div className="p-2 bg-industrial-100 rounded-lg text-industrial-700">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium mb-1">{label}</h4>
        <p className="text-sm text-industrial-600">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-12 h-6 rounded-full transition-colors ${
          enabled ? 'bg-primary' : 'bg-industrial-300'
        }`}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

