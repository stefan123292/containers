import { create } from 'zustand';
import { ContainerConfiguration, Door, Window, DEFAULT_PRICING } from '@/types/configurator';

interface ConfiguratorState extends ContainerConfiguration {
  // Actions
  setSize: (size: ContainerConfiguration['size']) => void;
  setExteriorColor: (color: string) => void;
  addDoor: (door: Door) => void;
  removeDoor: (doorId: string) => void;
  updateDoor: (doorId: string, updates: Partial<Door>) => void;
  addWindow: (window: Window) => void;
  removeWindow: (windowId: string) => void;
  updateWindow: (windowId: string, updates: Partial<Window>) => void;
  toggleInsulation: () => void;
  setInteriorFinish: (finish: ContainerConfiguration['interiorFinish']) => void;
  setFlooring: (flooring: ContainerConfiguration['flooring']) => void;
  toggleElectrical: () => void;
  toggleHVAC: () => void;
  calculatePrice: () => number;
  resetConfiguration: () => void;
}

const initialConfiguration: ContainerConfiguration = {
  size: '20ft',
  exteriorColor: '#2D3039', // Anthracite gray
  doors: [],
  windows: [],
  hasInsulation: false,
  interiorFinish: 'none',
  flooring: 'none',
  electrical: false,
  hvac: false,
};

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  ...initialConfiguration,

  setSize: (size) => set({ size }),
  
  setExteriorColor: (color) => set({ exteriorColor: color }),
  
  addDoor: (door) => set((state) => ({ 
    doors: [...state.doors, door] 
  })),
  
  removeDoor: (doorId) => set((state) => ({ 
    doors: state.doors.filter(d => d.id !== doorId) 
  })),
  
  updateDoor: (doorId, updates) => set((state) => ({
    doors: state.doors.map(d => d.id === doorId ? { ...d, ...updates } : d)
  })),
  
  addWindow: (window) => set((state) => ({ 
    windows: [...state.windows, window] 
  })),
  
  removeWindow: (windowId) => set((state) => ({ 
    windows: state.windows.filter(w => w.id !== windowId) 
  })),
  
  updateWindow: (windowId, updates) => set((state) => ({
    windows: state.windows.map(w => w.id === windowId ? { ...w, ...updates } : w)
  })),
  
  toggleInsulation: () => set((state) => ({ 
    hasInsulation: !state.hasInsulation 
  })),
  
  setInteriorFinish: (finish) => set({ interiorFinish: finish }),
  
  setFlooring: (flooring) => set({ flooring }),
  
  toggleElectrical: () => set((state) => ({ 
    electrical: !state.electrical 
  })),
  
  toggleHVAC: () => set((state) => ({ 
    hvac: !state.hvac 
  })),
  
  calculatePrice: () => {
    const state = get();
    const pricing = DEFAULT_PRICING;
    
    let total = pricing.basePrice * pricing.sizeMultiplier[state.size];
    
    // Add door costs
    state.doors.forEach(door => {
      total += pricing.doorPrices[door.type];
    });
    
    // Add window costs
    state.windows.forEach(window => {
      total += pricing.windowPrices[window.type];
    });
    
    // Add optional features
    if (state.hasInsulation) total += pricing.insulationPrice;
    total += pricing.interiorFinishPrices[state.interiorFinish];
    total += pricing.flooringPrices[state.flooring];
    if (state.electrical) total += pricing.electricalPrice;
    if (state.hvac) total += pricing.hvacPrice;
    
    return Math.round(total);
  },
  
  resetConfiguration: () => set(initialConfiguration),
}));

