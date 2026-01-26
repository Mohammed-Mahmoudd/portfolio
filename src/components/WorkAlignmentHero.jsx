'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Monitor, Smartphone } from 'lucide-react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

// --- DATA ---
const webProjects = [
  { id: 1, title: "Tchaikovsky Ops", year: "2024", category: "Education" },
  { id: 2, title: "Elmetr Ecosystem", year: "2023", category: "Legal Tech" },
  { id: 3, title: "Alserag Portal", year: "2023", category: "Enterprise" },
]

const mobileProjects = [
  { id: 4, title: "Tchaikovsky App", year: "2024", category: "iOS/Android" },
  { id: 5, title: "Elmetr Connect", year: "2023", category: "Mobile App" },
  { id: 6, title: "Focus Flow", year: "2022", category: "Productivity" },
]

export default function WorkAlignmentHero() {
  const [activeSide, setActiveSide] = useState(null) // 'web', 'mobile', or null (equal)

  const getImageScale = (side) => activeSide === side ? 1.1 : 1
  const getOverlayOpacity = (side) => activeSide === side ? 0.4 : 0.7

  return (
    <div className="relative w-full h-screen bg-[#09090B] flex items-center justify-center p-6 md:p-8">
      
       {/* Global Frame Container */}
       <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl flex relative font-[family-name:var(--font-space-grotesk)]" style={{ isolation: 'isolate' }}>
         
         {/* USER SHADER BACKGROUND (Global) */}
         <div className="absolute inset-0 z-0 pointer-events-none">
             {/* Using a div to hold the canvas outside of R3F context issues if any */}
             <div className="absolute inset-0">
                <ShaderGradientCanvas
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  pixelDensity={1}
                  pointerEvents="none"
                >
                  <ShaderGradient
                    animate="on"
                    type="sphere"
                    wireframe={false}
                    shader="defaults"
                    uTime={0}
                    uSpeed={0.3}
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
                    color1="#73bfc4"
                    color2="#0a91ff"
                    color3="#8da0ce"
                    reflection={0.4}
                    cAzimuthAngle={212}
                    cPolarAngle={180}
                    cDistance={0.5}
                    cameraZoom={15.1}
                    lightType="env"
                    brightness={0.8}
                    envPreset="city"
                    grain="off"
                    toggleAxis={false}
                    zoomOut={false}
                    hoverState=""
                    enableTransition={false}
                  />
                </ShaderGradientCanvas>
             </div>
             {/* Global Darkener to ensure text pop */}
             <div className="absolute inset-0 bg-black/40" />
         </div>


         {/* --- WEB SIDE (Left) --- */}
         <motion.div 
           className="relative h-1/2 md:h-full w-full md:w-1/2 border-white/5 group overflow-hidden cursor-pointer z-10"
           initial={false}
           animate={{
             flexGrow: activeSide === 'web' ? 2.5 : activeSide === 'mobile' ? 0.5 : 1
           }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           onMouseEnter={() => setActiveSide('web')}
           onMouseLeave={() => setActiveSide(null)}
           onClick={() => setActiveSide('web')}
         >
            {/* Background: Transparent to show Shader, but darkens when inactive */}
            <motion.div 
               className="absolute inset-0 bg-black/60 backdrop-blur-sm md:backdrop-blur-0"
               animate={{ 
                  opacity: activeSide === 'web' ? 0 : activeSide === 'mobile' ? 0.7 : 0.2,
                  backdropFilter: activeSide === 'web' ? "blur(0px)" : "blur(10px)"
               }}
               transition={{ duration: 0.5 }}
            />
            
            {/* Border Divider */}
            <div className="absolute right-0 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 md:hidden" />


            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
               <div className="flex justify-between items-start">
                  <span className="text-xs font-mono tracking-[0.2em] text-cyan-400">01</span>
                  <Monitor className={`w-6 h-6 text-zinc-500 transition-colors ${activeSide === 'web' ? 'text-cyan-400' : ''}`} />
               </div>

               <div className="relative">
                  <motion.h2 
                    className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter text-white mix-blend-overlay"
                    animate={{ opacity: activeSide === 'mobile' ? 0.3 : 1 }}
                  >
                    WEB
                    <br />
                    <span>DEV</span>
                  </motion.h2>
                  
                  <AnimatePresence>
                    {activeSide === 'web' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-8 md:mt-12 space-y-6"
                      >
                         <div className="w-full h-[1px] bg-cyan-500/50 mb-6" />
                         {webProjects.map((project) => (
                           <a key={project.id} href="#" className="flex items-center justify-between border-b border-white/10 pb-4 group/item">
                              <div>
                                 <h3 className="text-2xl font-bold text-white group-hover/item:text-cyan-400 transition-colors">{project.title}</h3>
                                 <span className="text-xs text-zinc-400 font-mono">{project.category}</span>
                              </div>
                              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover/item:text-cyan-400 transition-colors" />
                           </a>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>

               <motion.div 
                 className="flex items-center gap-4"
                 animate={{ opacity: activeSide === 'web' ? 0 : 1 }}
               >
                  <div className="h-[1px] w-12 bg-white/20" />
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Scalable & Fast</span>
               </motion.div>
            </div>
         </motion.div>


         {/* --- MOBILE SIDE (Right) --- */}
         <motion.div 
           className="relative h-1/2 md:h-full w-full md:w-1/2 border-white/5 group overflow-hidden cursor-pointer z-10"
           initial={false}
           animate={{
               flexGrow: activeSide === 'mobile' ? 2.5 : activeSide === 'web' ? 0.5 : 1
           }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           onMouseEnter={() => setActiveSide('mobile')}
           onMouseLeave={() => setActiveSide(null)}
           onClick={() => setActiveSide('mobile')}
         >
            {/* Background: Heavier Blur/Glass for Mobile feel */}
            <motion.div 
               className="absolute inset-0 bg-black/60 backdrop-blur-md"
               animate={{ 
                  opacity: activeSide === 'mobile' ? 0.3 : activeSide === 'web' ? 0.8 : 0.4,
                  backdropFilter: activeSide === 'mobile' ? "blur(5px)" : "blur(20px)"
               }}
               transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
               <div className="flex justify-between items-start">
                  <span className="text-xs font-mono tracking-[0.2em] text-white">02</span>
                  <Smartphone className={`w-6 h-6 text-zinc-500 transition-colors ${activeSide === 'mobile' ? 'text-white' : ''}`} />
               </div>

               <div className="relative md:text-right">
                  <motion.h2 
                    className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter text-white mix-blend-overlay"
                    animate={{ opacity: activeSide === 'web' ? 0.3 : 1 }}
                  >
                    MOBILE
                    <br />
                    <span>APPS</span>
                  </motion.h2>

                  <AnimatePresence>
                    {activeSide === 'mobile' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-8 md:mt-12 space-y-6 text-left md:text-right"
                      >
                         <div className="w-full h-[1px] bg-white/30 mb-6" />
                         {mobileProjects.map((project) => (
                           <a key={project.id} href="#" className="flex flex-row-reverse md:flex-row items-center justify-between border-b border-white/10 pb-4 group/item">
                              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover/item:text-white transition-colors" />
                              <div>
                                 <h3 className="text-2xl font-bold text-white group-hover/item:text-white/80 transition-colors">{project.title}</h3>
                                 <span className="text-xs text-zinc-400 font-mono">{project.category}</span>
                              </div>
                           </a>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>

               <motion.div 
                 className="flex flex-row-reverse items-center gap-4"
                 animate={{ opacity: activeSide === 'mobile' ? 0 : 1 }}
               >
                  <div className="h-[1px] w-12 bg-white/20" />
                  <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Native & Cross-Platform</span>
               </motion.div>
            </div>
         </motion.div>

       </div>
    </div>
  )
}
