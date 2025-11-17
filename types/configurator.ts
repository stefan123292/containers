export type ContainerSize = '20ft' | '40ft' | '40ft-hc';

export type DoorType = 'standard' | 'double' | 'roller' | 'glass';
export type WindowType = 'standard' | 'sliding' | 'fixed';

export interface Door {
  id: string;
  type: DoorType;
  position: { x: number; y: number; z: number };
  wall: 'front' | 'back' | 'left' | 'right';
}

export interface Window {
  id: string;
  type: WindowType;
  position: { x: number; y: number; z: number };
  wall: 'front' | 'back' | 'left' | 'right';
  size: 'small' | 'medium' | 'large';
}

export interface ContainerConfiguration {
  size: ContainerSize;
  exteriorColor: string;
  doors: Door[];
  windows: Window[];
  hasInsulation: boolean;
  interiorFinish: 'none' | 'basic' | 'premium';
  flooring: 'none' | 'plywood' | 'vinyl' | 'laminate';
  electrical: boolean;
  hvac: boolean;
}

export interface PricingRule {
  basePrice: number;
  sizeMultiplier: Record<ContainerSize, number>;
  doorPrices: Record<DoorType, number>;
  windowPrices: Record<WindowType, number>;
  insulationPrice: number;
  interiorFinishPrices: Record<string, number>;
  flooringPrices: Record<string, number>;
  electricalPrice: number;
  hvacPrice: number;
}

export const DEFAULT_PRICING: PricingRule = {
  basePrice: 3500,
  sizeMultiplier: {
    '20ft': 1.0,
    '40ft': 1.8,
    '40ft-hc': 2.0,
  },
  doorPrices: {
    standard: 350,
    double: 650,
    roller: 1200,
    glass: 850,
  },
  windowPrices: {
    standard: 280,
    sliding: 450,
    fixed: 220,
  },
  insulationPrice: 1200,
  interiorFinishPrices: {
    none: 0,
    basic: 800,
    premium: 2500,
  },
  flooringPrices: {
    none: 0,
    plywood: 400,
    vinyl: 650,
    laminate: 950,
  },
  electricalPrice: 1500,
  hvacPrice: 2800,
};

