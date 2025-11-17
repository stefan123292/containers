'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Grid } from '@react-three/drei';
import { Container3D } from './Container3D';
import { Suspense } from 'react';

export function Scene3D() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-industrial-900 to-industrial-800">
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[10, 5, 10]} fov={50} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, 5, -5]} intensity={0.5} />
          
          {/* Environment for reflections */}
          <Environment preset="warehouse" />
          
          {/* Grid floor */}
          <Grid
            args={[30, 30]}
            cellSize={1}
            cellThickness={0.5}
            cellColor="#6b7280"
            sectionSize={5}
            sectionThickness={1}
            sectionColor="#FF6B35"
            fadeDistance={25}
            fadeStrength={1}
            followCamera={false}
            infiniteGrid
          />
          
          {/* The container */}
          <Container3D autoRotate={false} />
          
          {/* Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={30}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

