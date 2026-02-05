'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function HeroBackground({ isMobile }) {
  return (
    <ShaderGradientCanvas
      pixelDensity={isMobile ? 0.5 : 0.75}
      fov={isMobile ? 30 : 50}
      style={{position: 'absolute'}}
      pointerEvents='none'
    >
      <ShaderGradient
        animate="on"
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={0.1}
        uStrength={0.3}
        uDensity={0.8}
        uFrequency={5.5}
        uAmplitude={3.2}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        color1="#d4b584"
        color2="#516b89"
        color3="#622828"
        reflection={0.4}
        cAzimuthAngle={270}
        cPolarAngle={180}
        cDistance={0.5}
        cameraZoom={isMobile ? 8 : 15.1}
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
  )
}
