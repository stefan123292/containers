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
  togglePlumbing: () => void;
  setExtraMessage: (message: string) => void;
  calculatePrice: () => number;
  resetConfiguration: () => void;
}

const initialConfiguration: ContainerConfiguration = {
  size: '6x3',
  exteriorColor: '#F3F4F6', // White
  doors: [
    {
      id: 'default-door-1',
      type: 'standard',
      position: { x: 0, y: 0, z: 0 },
      wall: 'front',
    },
  ],
  windows: [
    {
      id: 'default-window-1',
      type: 'standard',
      position: { x: 0, y: 0, z: 0 },
      wall: 'left',
      size: 'medium',
    },
  ],
  hasInsulation: false,
  interiorFinish: 'none',
  flooring: 'none',
  electrical: false,
  plumbing: false,
  extraMessage: '',
};

export const useConfiguratorStore = create<ConfiguratorState>((set: any, get: any) => ({
  ...initialConfiguration,

  setSize: (size: ContainerConfiguration['size']) => set({ size }),
  
  setExteriorColor: (color: string) => set({ exteriorColor: color }),
  
  addDoor: (door: Door) => set((state: ConfiguratorState) => ({ 
    doors: [...state.doors, door] 
  })),
  
  removeDoor: (doorId: string) => set((state: ConfiguratorState) => ({ 
    doors: state.doors.filter((d: Door) => d.id !== doorId) 
  })),
  
  updateDoor: (doorId: string, updates: Partial<Door>) => set((state: ConfiguratorState) => ({
    doors: state.doors.map((d: Door) => d.id === doorId ? { ...d, ...updates } : d)
  })),
  
  addWindow: (window: Window) => set((state: ConfiguratorState) => ({ 
    windows: [...state.windows, window] 
  })),
  
  removeWindow: (windowId: string) => set((state: ConfiguratorState) => ({ 
    windows: state.windows.filter((w: Window) => w.id !== windowId) 
  })),
  
  updateWindow: (windowId: string, updates: Partial<Window>) => set((state: ConfiguratorState) => ({
    windows: state.windows.map((w: Window) => w.id === windowId ? { ...w, ...updates } : w)
  })),
  
  toggleInsulation: () => set((state: ConfiguratorState) => ({ 
    hasInsulation: !state.hasInsulation 
  })),
  
  setInteriorFinish: (finish: ContainerConfiguration['interiorFinish']) => set({ interiorFinish: finish }),
  
  setFlooring: (flooring: ContainerConfiguration['flooring']) => set({ flooring }),
  
  toggleElectrical: () => set((state: ConfiguratorState) => ({ 
    electrical: !state.electrical 
  })),
  
  togglePlumbing: () => set((state: ConfiguratorState) => ({ 
    plumbing: !state.plumbing
  })),

  setExtraMessage: (message: string) => set({ extraMessage: message }),
  
  calculatePrice: () => {
    const state: ConfiguratorState = get();
    const pricing = DEFAULT_PRICING;

    const isWhite = state.exteriorColor.toLowerCase() === '#f3f4f6';
    let total = isWhite
      ? pricing.basePriceBySizeColor[state.size].white
      : pricing.basePriceBySizeColor[state.size].grey;

    // Base includes 1 door and 1 standard window
    const extraDoors = Math.max(0, state.doors.length - 1);
    const extraWindows = Math.max(0, state.windows.length - 1);

    total += extraDoors * pricing.extraDoorPriceBySize[state.size];
    total += extraWindows * pricing.extraWindowPriceBySize[state.size];

    // Optional features
    if (state.hasInsulation) total += pricing.insulationPrice;
    total += pricing.interiorFinishPricesBySize[state.size][state.interiorFinish] || 0;
    total += pricing.flooringPricesBySize[state.size][state.flooring] || 0;
    if (state.electrical) total += pricing.electricalPriceBySize[state.size];
    if (state.plumbing) total += pricing.plumbingPriceBySize[state.size];
    
    return Math.round(total);
  },
  
  resetConfiguration: () => set(initialConfiguration),
}));

