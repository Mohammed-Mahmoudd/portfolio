'use client'

import { useState, useEffect } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    // Outercontainer with black background (the "TV frame")
    <div className="w-full h-screen bg-[#09090B] flex items-center justify-center p-4 md:p-8">
      
      {/* Inner container */}
      <div className="relative w-full h-full rounded-3xl flex items-center justify-center">
        
        {/* 3D Background - Fixed positioning */}
        <div className="fixed inset-0 z-0" style={{ 
          clipPath: isMobile ? 'inset(16px 16px 16px 16px round 24px)' : 'inset(24px 24px 24px 24px round 24px)',
          WebkitClipPath: isMobile ? 'inset(16px 16px 16px 16px round 24px)' : 'inset(24px 24px 24px 24px round 24px)'
        }}>
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
          <div className="absolute inset-0 bg-black/65 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center md:justify-between justify-center px-4 md:px-12 lg:px-20 pointer-events-none select-none gap-6 md:gap-4 lg:gap-8">
           
           {/* LEFT: Name */}
           <div  
              className="md:flex-1 text-center md:text-left"
           >
              <h1 className="text-5xl md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] leading-[0.9] md:leading-[0.85] lg:leading-[0.8] font-black tracking-tighter text-white/90 font-[family-name:var(--font-space-grotesk)]">
                MOHAMMED
                <br />
                <span className="text-zinc-500">MAHMOUD</span>
              </h1>
              
              {/* Social Links & Status */}
              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-5 lg:gap-6 mt-4 md:mt-6 lg:mt-8">
                
                {/* Social Links */}
                <div className="flex items-center gap-3 md:gap-3.5 lg:gap-4">
                  <a 
                    href="https://github.com/Mohammed-Mahmoudd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 pointer-events-auto"
                  >
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-zinc-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/mohammed123m" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 pointer-events-auto"
                  >
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-zinc-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="mailto:gamermada2@gmail.com" 
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 pointer-events-auto"
                  >
                    <svg className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 text-zinc-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
           </div>

           {/* RIGHT: Animated Titles (Cycling) */}
           <div className={`md:flex-1 w-full md:w-auto flex ${isMobile ? 'justify-center' : 'justify-end'} mt-6 md:mt-0 h-[50px] md:h-[60px] lg:h-[70px] overflow-hidden`}>
              <CyclingTitle 
                titles={["FULL-STACK DEV", "SCALABLE APPS", "PERFORMANCE FIRST", "INTERACTIVE WEB"]} 
              />
           </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 right-0 left-0 md:left-auto md:right-24 z-20 flex justify-center md:justify-end items-center md:mb-20 lg:mb-0   gap-4"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-[family-name:var(--font-space-grotesk)]">Scroll to explore</span>
          <div
          >
            <ArrowDown className="w-5 h-5 text-zinc-400" />
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

function CyclingTitle({ titles }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [titles.length])

  return (
    <div className="relative font-[family-name:var(--font-space-grotesk)] text-center md:text-right w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400"
        >
          {titles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
