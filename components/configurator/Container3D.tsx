'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import type { Door, Window as ContainerWindow } from '@/types/configurator';

interface Container3DProps {
  autoRotate?: boolean;
}

export function Container3D({ autoRotate = false }: Container3DProps) {
  const meshRef = useRef<Mesh>(null);
  const { size, exteriorColor, doors, windows } = useConfiguratorStore();
  
  // Auto-rotation effect
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  
  // Container dimensions based on size
  const dimensions = {
    '20ft': { width: 6, height: 2.6, depth: 2.4 },
    '40ft': { width: 12, height: 2.6, depth: 2.4 },
    '40ft-hc': { width: 12, height: 2.9, depth: 2.4 },
  }[size];
  
  return (
    <group>
      {/* Main container body */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[dimensions.width, dimensions.height, dimensions.depth]} />
        <meshStandardMaterial 
          color={exteriorColor}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      
      {/* Container corrugations (visual detail) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={`corrugation-${i}`}
          position={[
            -dimensions.width / 2 + (dimensions.width / 8) * i + dimensions.width / 16,
            0,
            dimensions.depth / 2 + 0.01
          ]}
          castShadow
        >
          <boxGeometry args={[0.1, dimensions.height, 0.02]} />
          <meshStandardMaterial 
            color={exteriorColor}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}
      
      {/* Render doors */}
      {doors.map((door) => (
        <Door3D 
          key={door.id} 
          door={door} 
          containerDimensions={dimensions}
        />
      ))}
      
      {/* Render windows */}
      {windows.map((window) => (
        <Window3D 
          key={window.id} 
          window={window} 
          containerDimensions={dimensions}
        />
      ))}
      
      {/* Floor */}
      <mesh 
        position={[0, -dimensions.height / 2 - 0.01, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[dimensions.width, dimensions.depth]} />
        <meshStandardMaterial color="#1A1D23" metalness={0.2} roughness={0.8} />
      </mesh>
    </group>
  );
}

// Door component
interface Door3DProps {
  door: Door;
  containerDimensions: { width: number; height: number; depth: number };
}

function Door3D({ door, containerDimensions }: Door3DProps) {
  const doorDimensions = {
    standard: { width: 0.9, height: 2.0 },
    double: { width: 1.8, height: 2.0 },
    roller: { width: 2.4, height: 2.2 },
    glass: { width: 0.9, height: 2.0 },
  }[door.type] || { width: 0.9, height: 2.0 };
  
  const wallPosition = getWallPosition(door.wall, containerDimensions);
  
  return (
    <group position={[wallPosition.x + door.position.x, door.position.y, wallPosition.z + door.position.z]}>
      <mesh castShadow>
        <boxGeometry args={[doorDimensions.width, doorDimensions.height, 0.05]} />
        <meshStandardMaterial 
          color={door.type === 'glass' ? '#87CEEB' : '#4A5568'}
          metalness={door.type === 'glass' ? 0.9 : 0.5}
          roughness={door.type === 'glass' ? 0.1 : 0.5}
          transparent={door.type === 'glass'}
          opacity={door.type === 'glass' ? 0.6 : 1}
        />
      </mesh>
      
      {/* Door frame */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[doorDimensions.width + 0.1, doorDimensions.height + 0.1, 0.02]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>
    </group>
  );
}

// Window component
interface Window3DProps {
  window: ContainerWindow;
  containerDimensions: { width: number; height: number; depth: number };
}

function Window3D({ window, containerDimensions }: Window3DProps) {
  const windowDimensions = {
    small: { width: 0.6, height: 0.5 },
    medium: { width: 1.0, height: 0.8 },
    large: { width: 1.5, height: 1.2 },
  }[window.size] || { width: 1.0, height: 0.8 };
  
  const wallPosition = getWallPosition(window.wall, containerDimensions);
  
  return (
    <group position={[wallPosition.x + window.position.x, window.position.y, wallPosition.z + window.position.z]}>
      {/* Glass */}
      <mesh castShadow>
        <boxGeometry args={[windowDimensions.width, windowDimensions.height, 0.03]} />
        <meshStandardMaterial 
          color="#87CEEB"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Frame */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[windowDimensions.width + 0.1, windowDimensions.height + 0.1, 0.01]} />
        <meshStandardMaterial color="#2D3748" />
      </mesh>
    </group>
  );
}

// Helper function to get wall position
function getWallPosition(wall: string, dimensions: { width: number; height: number; depth: number }) {
  switch (wall) {
    case 'front':
      return { x: 0, z: dimensions.depth / 2 };
    case 'back':
      return { x: 0, z: -dimensions.depth / 2 };
    case 'left':
      return { x: -dimensions.width / 2, z: 0 };
    case 'right':
      return { x: dimensions.width / 2, z: 0 };
    default:
      return { x: 0, z: 0 };
  }
}

