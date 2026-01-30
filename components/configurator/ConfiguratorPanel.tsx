'use client';

import { useState } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { formatPrice, generateId } from '@/lib/utils';
import { trackConfiguratorAction } from '@/lib/analytics';
import { 
  Ruler, 
  Palette, 
  DoorOpen, 
  SquareStack, 
  Snowflake, 
  Zap, 
  Wind,
  Plus,
  Trash2
} from 'lucide-react';

export function ConfiguratorPanel() {
  const [activeTab, setActiveTab] = useState<'size' | 'exterior' | 'features'>('size');
  const store = useConfiguratorStore();
  const totalPrice = store.calculatePrice();

  const colorOptions = [
    { name: 'Anthracite Gray', value: '#2D3039' },
    { name: 'Deep Black', value: '#1A1D23' },
    { name: 'Industrial White', value: '#F3F4F6' },
    { name: 'Safety Orange', value: '#FF6B35' },
    { name: 'Navy Blue', value: '#1E3A8A' },
    { name: 'Forest Green', value: '#166534' },
  ];

  return (
    <div className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="bg-industrial-900 text-white p-6">
        <h2 className="text-2xl font-display font-bold mb-2">Configure Your Container</h2>
        <p className="text-industrial-400 text-sm">Customize every detail in real-time</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-industrial-200">
        <TabButton
          active={activeTab === 'size'}
          onClick={() => setActiveTab('size')}
          icon={<Ruler className="w-4 h-4" />}
          label="Size"
        />
        <TabButton
          active={activeTab === 'exterior'}
          onClick={() => setActiveTab('exterior')}
          icon={<Palette className="w-4 h-4" />}
          label="Exterior"
        />
        <TabButton
          active={activeTab === 'features'}
          onClick={() => setActiveTab('features')}
          icon={<SquareStack className="w-4 h-4" />}
          label="Features"
        />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'size' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Container Size</h3>
            
            <SizeOption
              size="20ft"
              dimensions="20' × 8' × 8'6''"
              description="Standard container, ideal for small projects"
              selected={store.size === '20ft'}
              onSelect={() => {
                store.setSize('20ft');
                trackConfiguratorAction('size_change', { size: '20ft' });
              }}
            />
            
            <SizeOption
              size="40ft"
              dimensions="40' × 8' × 8'6''"
              description="Double the space for larger applications"
              selected={store.size === '40ft'}
              onSelect={() => {
                store.setSize('40ft');
                trackConfiguratorAction('size_change', { size: '40ft' });
              }}
            />
            
            <SizeOption
              size="40ft-hc"
              dimensions="40' × 8' × 9'6''"
              description="High cube - extra vertical space"
              selected={store.size === '40ft-hc'}
              onSelect={() => {
                store.setSize('40ft-hc');
                trackConfiguratorAction('size_change', { size: '40ft-hc' });
              }}
            />
          </div>
        )}

        {activeTab === 'exterior' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Exterior Color</h3>
              <div className="grid grid-cols-3 gap-3">
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
                <h3 className="font-semibold text-lg">Doors</h3>
                <button
                  onClick={() => {
                    const door = {
                      id: generateId(),
                      type: 'standard',
                      position: { x: 0, y: -0.3, z: 0 },
                      wall: 'front',
                    };
                    store.addDoor(door);
                    trackConfiguratorAction('door_added', { doorType: door.type, wall: door.wall });
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Door
                </button>
              </div>
              
              {store.doors.length === 0 ? (
                <p className="text-industrial-500 text-sm">No doors added yet</p>
              ) : (
                <div className="space-y-2">
                  {store.doors.map((door) => (
                    <div
                      key={door.id}
                      className="flex items-center justify-between p-3 bg-industrial-100 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <DoorOpen className="w-5 h-5 text-industrial-600" />
                        <div>
                          <p className="font-medium capitalize">{door.type} Door</p>
                          <p className="text-xs text-industrial-600">
                            {door.wall.charAt(0).toUpperCase() + door.wall.slice(1)} wall
                          </p>
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
                <h3 className="font-semibold text-lg">Windows</h3>
                <button
                  onClick={() => {
                    const window = {
                      id: generateId(),
                      type: 'standard',
                      position: { x: 2, y: 0.5, z: 0 },
                      wall: 'front',
                      size: 'medium',
                    };
                    store.addWindow(window);
                    trackConfiguratorAction('window_added', { windowSize: window.size, wall: window.wall });
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Window
                </button>
              </div>
              
              {store.windows.length === 0 ? (
                <p className="text-industrial-500 text-sm">No windows added yet</p>
              ) : (
                <div className="space-y-2">
                  {store.windows.map((window) => (
                    <div
                      key={window.id}
                      className="flex items-center justify-between p-3 bg-industrial-100 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <SquareStack className="w-5 h-5 text-industrial-600" />
                        <div>
                          <p className="font-medium capitalize">{window.size} Window</p>
                          <p className="text-xs text-industrial-600">
                            {window.wall.charAt(0).toUpperCase() + window.wall.slice(1)} wall
                          </p>
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
            <h3 className="font-semibold text-lg mb-4">Interior & Features</h3>
            
            <FeatureToggle
              icon={<Snowflake className="w-5 h-5" />}
              label="Insulation"
              description="Thermal insulation for climate control"
              enabled={store.hasInsulation}
              onToggle={store.toggleInsulation}
            />
            
            <FeatureToggle
              icon={<Zap className="w-5 h-5" />}
              label="Electrical System"
              description="Complete wiring with outlets & lighting"
              enabled={store.electrical}
              onToggle={store.toggleElectrical}
            />
            
            <FeatureToggle
              icon={<Wind className="w-5 h-5" />}
              label="HVAC System"
              description="Heating, ventilation & air conditioning"
              enabled={store.hvac}
              onToggle={store.toggleHVAC}
            />

            <div className="pt-4">
              <label className="block text-sm font-medium mb-2">Interior Finish</label>
              <select
                value={store.interiorFinish}
                onChange={(e) => store.setInteriorFinish(e.target.value as any)}
                className="w-full px-4 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">None</option>
                <option value="basic">Basic (Painted walls)</option>
                <option value="premium">Premium (Drywall finish)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Flooring</label>
              <select
                value={store.flooring}
                onChange={(e) => store.setFlooring(e.target.value as any)}
                className="w-full px-4 py-2 border border-industrial-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="none">None</option>
                <option value="plywood">Plywood</option>
                <option value="vinyl">Vinyl</option>
                <option value="laminate">Laminate</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Price Footer */}
      <div className="border-t border-industrial-200 p-6 bg-industrial-50">
        <div className="flex items-center justify-between mb-4">
          <span className="text-industrial-600">Estimated Price:</span>
          <span className="text-3xl font-display font-bold text-primary">
            {formatPrice(totalPrice)}
          </span>
        </div>
        <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
          Request Quote
        </button>
      </div>
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

function SizeOption({ size, dimensions, description, selected, onSelect }: any) {
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

