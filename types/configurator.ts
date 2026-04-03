export type ContainerSize = '6x3' | '6x2_5' | '2x2' | '4x2' | '9x3';

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
  interiorFinish: 'none' | 'partition_pvc_door' | 'sink' | 'wc' | 'shower_cabin' | 'stairs_railing' | 'terrace_railing';
  flooring: 'none' | 'linoleum' | 'parquet';
  electrical: boolean;
  plumbing: boolean;
  extraMessage: string;
}

export interface PricingRule {
  basePriceBySizeColor: Record<ContainerSize, { white: number; grey: number }>;
  doorPrices: Record<DoorType, number>;
  windowPrices: Record<WindowType, number>;
  insulationPrice: number;
  interiorFinishPricesBySize: Record<ContainerSize, Record<string, number>>;
  flooringPricesBySize: Record<ContainerSize, Record<string, number>>;
  electricalPriceBySize: Record<ContainerSize, number>;
  plumbingPriceBySize: Record<ContainerSize, number>;
  extraDoorPriceBySize: Record<ContainerSize, number>;
  extraWindowPriceBySize: Record<ContainerSize, number>;
  bathroomWindowPriceBySize: Record<ContainerSize, number>;
}

export const DEFAULT_PRICING: PricingRule = {
  basePriceBySizeColor: {
    '2x2': { white: 1400, grey: 1400 },
    '4x2': { white: 1750, grey: 1800 },
    '6x2_5': { white: 2300, grey: 2400 },
    '6x3': { white: 2700, grey: 2800 },
    '9x3': { white: 3500, grey: 3650 },
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
  interiorFinishPricesBySize: {
    '2x2': { none: 0, partition_pvc_door: 0, sink: 80, wc: 100, shower_cabin: 350, stairs_railing: 0, terrace_railing: 0 },
    '4x2': { none: 0, partition_pvc_door: 350, sink: 80, wc: 100, shower_cabin: 350, stairs_railing: 0, terrace_railing: 0 },
    '6x2_5': { none: 0, partition_pvc_door: 400, sink: 80, wc: 100, shower_cabin: 350, stairs_railing: 800, terrace_railing: 1200 },
    '6x3': { none: 0, partition_pvc_door: 450, sink: 80, wc: 100, shower_cabin: 350, stairs_railing: 800, terrace_railing: 1200 },
    '9x3': { none: 0, partition_pvc_door: 450, sink: 80, wc: 100, shower_cabin: 350, stairs_railing: 800, terrace_railing: 1200 },
  },
  flooringPricesBySize: {
    '2x2': { none: 0, linoleum: 30, parquet: 0 },
    '4x2': { none: 0, linoleum: 60, parquet: 0 },
    '6x2_5': { none: 0, linoleum: 100, parquet: 0 },
    '6x3': { none: 0, linoleum: 150, parquet: 0 },
    '9x3': { none: 0, linoleum: 200, parquet: 0 },
  },
  electricalPriceBySize: {
    '2x2': 50,
    '4x2': 70,
    '6x2_5': 100,
    '6x3': 130,
    '9x3': 160,
  },
  plumbingPriceBySize: {
    '2x2': 80,
    '4x2': 80,
    '6x2_5': 80,
    '6x3': 80,
    '9x3': 80,
  },
  extraDoorPriceBySize: {
    '2x2': 0,
    '4x2': 200,
    '6x2_5': 200,
    '6x3': 200,
    '9x3': 200,
  },
  extraWindowPriceBySize: {
    '2x2': 0,
    '4x2': 80,
    '6x2_5': 80,
    '6x3': 80,
    '9x3': 80,
  },
  bathroomWindowPriceBySize: {
    '2x2': 0,
    '4x2': 50,
    '6x2_5': 50,
    '6x3': 50,
    '9x3': 50,
  },
};

