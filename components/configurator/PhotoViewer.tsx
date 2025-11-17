'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

type ViewType = 'exterior' | 'interior' | 'details';

export function PhotoViewer() {
  const { size, exteriorColor, windows, doors, hasInsulation } = useConfiguratorStore();
  const [currentView, setCurrentView] = useState<ViewType>('exterior');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Map configuration to image paths
  const getImages = (): string[] => {
    const colorName = getColorName(exteriorColor);
    const windowCount = windows.length;
    const doorCount = doors.length;

    // Define image paths based on configuration
    // These are placeholder paths - you'll replace with actual images
    const imageMap: Record<ViewType, string[]> = {
      exterior: [
        `/images/containers/${size}-${colorName}-front.jpg`,
        `/images/containers/${size}-${colorName}-side.jpg`,
        `/images/containers/${size}-${colorName}-back.jpg`,
        `/images/containers/${size}-${colorName}-angle.jpg`,
      ],
      interior: [
        `/images/containers/interior-${hasInsulation ? 'insulated' : 'standard'}-1.jpg`,
        `/images/containers/interior-${hasInsulation ? 'insulated' : 'standard'}-2.jpg`,
        `/images/containers/interior-${hasInsulation ? 'insulated' : 'standard'}-3.jpg`,
      ],
      details: [
        `/images/containers/door-detail.jpg`,
        `/images/containers/window-detail.jpg`,
        `/images/containers/corner-detail.jpg`,
      ],
    };

    return imageMap[currentView];
  };

  const getColorName = (hex: string): string => {
    const colorMap: Record<string, string> = {
      '#2D3039': 'anthracite',
      '#1A1D23': 'black',
      '#F3F4F6': 'white',
      '#FF6B35': 'orange',
      '#1E3A8A': 'blue',
      '#166534': 'green',
    };
    return colorMap[hex] || 'anthracite';
  };

  const images = getImages();
  const currentImage = images[currentImageIndex] || '/images/container.jpg'; // Fallback

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const tabs = [
    { id: 'exterior' as ViewType, label: 'Exterior View' },
    { id: 'interior' as ViewType, label: 'Interior View' },
    { id: 'details' as ViewType, label: 'Details' },
  ];

  return (
    <div className="h-full flex flex-col bg-industrial-900">
      {/* View Tabs */}
      <div className="flex border-b border-industrial-700 bg-industrial-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setCurrentView(tab.id);
              setCurrentImageIndex(0);
            }}
            className={`flex-1 px-4 py-4 font-medium transition-colors ${
              currentView === tab.id
                ? 'text-primary border-b-2 border-primary bg-industrial-900'
                : 'text-industrial-400 hover:text-white hover:bg-industrial-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Image Display */}
      <div className="flex-1 relative bg-industrial-900">
        {/* Main Image */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt={`Container ${currentView} view`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                // Fallback to main container image if specific image not found
                (e.target as HTMLImageElement).src = '/images/container.jpg';
              }}
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-industrial-800/90 hover:bg-industrial-700 text-white rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-industrial-800/90 hover:bg-industrial-700 text-white rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-industrial-800/90 text-white rounded-full text-sm z-10">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Fullscreen Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-industrial-800/90 hover:bg-industrial-700 text-white rounded-lg transition-colors z-10"
          aria-label="Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        {/* Configuration Info Overlay */}
        <div className="absolute top-4 left-4 bg-industrial-800/90 backdrop-blur-sm text-white rounded-lg p-4 z-10 max-w-xs">
          <h3 className="font-semibold mb-2">Current Configuration</h3>
          <div className="space-y-1 text-sm text-industrial-300">
            <div className="flex justify-between">
              <span>Size:</span>
              <span className="font-medium text-white">{size}</span>
            </div>
            <div className="flex justify-between">
              <span>Color:</span>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded border border-white/30"
                  style={{ backgroundColor: exteriorColor }}
                />
                <span className="font-medium text-white capitalize">
                  {getColorName(exteriorColor)}
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Windows:</span>
              <span className="font-medium text-white">{windows.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Doors:</span>
              <span className="font-medium text-white">{doors.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Insulation:</span>
              <span className="font-medium text-white">
                {hasInsulation ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="border-t border-industrial-700 bg-industrial-800 p-4">
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-primary ring-2 ring-primary/30'
                  : 'border-industrial-600 hover:border-industrial-400'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/container.jpg';
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

