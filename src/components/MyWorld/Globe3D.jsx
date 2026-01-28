'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

import { useMediaQuery } from '@/hooks/useMediaQuery'

// Space particles component
function SpaceParticles() {
  const particlesRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05
    }
  })

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      // eslint-disable-next-line
      posArray[i] = (Math.random() - 0.5) * 15
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    return geometry
  }, [])

  return (
    <>
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          size={0.02}
          color="#92dbe0"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </>
  )
}

export function WorldBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Space Particles Background Layer */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <SpaceParticles />
        </Canvas>
      </div>

      {/* Film Grain Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
    </div>
  )
}

export default function Globe3D() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="w-full h-full relative">      
      {/* ShaderGradient Sphere Layer */}
      <div className="absolute inset-0">
        <ShaderGradientCanvas
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
          fov={isMobile ? 94 : 107}
          pixelDensity={isMobile ? 0.6 : 1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.25}
            uStrength={0.1}
            uDensity={0.8}
            uFrequency={1.5}
            uAmplitude={5}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#61969a"
            color2="#002146"
            color3="#3865cf"
            reflection={0.4}
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={isMobile ? 7 : 15.1}
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}

