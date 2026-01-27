'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { ArrowUpRight, Smartphone, Monitor } from 'lucide-react'
import Image from 'next/image'

// --- COMPONENTS ---

// 1. Web View: Horizontal Scroll Gallery
const WebGallery = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <div ref={targetRef} className="relative h-[300vh] bg-transparent">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden pl-12 md:pl-32">
            <motion.div style={{ x }} className="flex gap-12 md:gap-24">
                {webProjects.map((project, i) => (
                    <div key={project.id} className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 group">
                        <div className="w-full h-full overflow-hidden rounded-[2rem] border border-white/10 relative bg-black/50">
                             <Image 
                               src={project.img} 
                               alt={project.title} 
                               fill
                               sizes="(max-width: 768px) 80vw, 60vw"
                               className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                             
                             {/* Overlay Content */}
                             <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                 <div className="flex items-center justify-between mb-4">
                                     <span className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-widest uppercase backdrop-blur-md">
                                         {project.category}
                                     </span>
                                     <span className="text-zinc-500 font-mono">{project.year}</span>
                                 </div>
                                 <h2 className="text-4xl md:text-7xl font-black text-white font-[family-name:var(--font-space-grotesk)] mb-4">
                                     {project.title}
                                 </h2>
                                 <a 
                                   href={project.url} 
                                   target="_blank"
                                   className="inline-flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-sm font-bold mt-4"
                                 >
                                     Visit Site <ArrowUpRight className="w-4 h-4" />
                                 </a>
                             </div>
                        </div>
                        {/* Reflection/Shadow Effect */}
                        <div className="absolute -bottom-8 left-0 w-full h-8 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

// 2. Mobile View: Vertical Stacked Cards (Phone Style)
const MobileStack = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-32 px-4 md:px-0 flex flex-col items-center gap-32">
            {mobileProjects.map((project, i) => (
                <motion.div 
                   key={project.id}
                   initial={{ opacity: 0, y: 100, scale: 0.9 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ duration: 0.8, viewport: { once: true, margin: "-10%" } }}
                   className="relative group w-full max-w-sm md:max-w-md aspect-[9/16]"
                >
                    <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-900 bg-black overflow-hidden shadow-2xl z-10">
                        <Image 
                            src={project.img} 
                            alt={project.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                        />
                        
                        {/* App UI Overlay */}
                        <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent">
                            <div className="flex justify-between items-center text-white/50 text-xs">
                                <span>9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-white/20"/>
                                    <div className="w-3 h-3 rounded-full bg-white/20"/>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Info Sheet */}
                        <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-xl border-t border-white/10 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                             <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                             <p className="text-xs text-white/60 mb-4">{project.category}</p>
                             <button className="w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-cyan-400 transition-colors">
                                 View Case Study
                             </button>
                        </div>
                    </div>
                    
                    {/* Glow behind phone */}
                    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-cyan-500 to-purple-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
                </motion.div>
            ))}
        </div>
    )
}

export default function WorkSplit() {
  const [activeTab, setActiveTab] = useState('web') // 'web' | 'mobile'

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      
      {/* BACKGROUND SHADER MANAGER */}
      <div className="fixed inset-0 z-0 transition-opacity duration-1000">
         <ShaderGradientCanvas
           style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
           pixelDensity={0.6}
         >
           <ShaderGradient
             animate="on"
             type="plane"
             cAzimuthAngle={180}
             cPolarAngle={90}
             cDistance={3}
             cameraZoom={1}
             lightType="env"
             color1={activeTab === 'web' ? "#000000" : "#ffffff"} 
             color2={activeTab === 'web' ? "#1a1a1a" : "#e0e0e0"}
             color3={activeTab === 'web' ? "#00bcd4" : "#8a2be2"} /* Cyan vs Purple */
             brightness={activeTab === 'web' ? 0.8 : 1.2}
             uSpeed={0.2}
             uStrength={activeTab === 'web' ? 1.5 : 0.5} /* Strong for web, soft for mobile */
             reflection={0.5}
           />
         </ShaderGradientCanvas>
         {/* Fallback/Overlay for readability */}
         <div className={`absolute inset-0 transition-colors duration-700 ${activeTab === 'web' ? 'bg-black/80' : 'bg-zinc-100/10'}`} />
      </div>

      {/* NAVIGATION TOGGLE */}
      <div className="fixed top-24 left-0 w-full flex justify-center z-50 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 flex pointer-events-auto">
              <button 
                onClick={() => setActiveTab('web')}
                className={`relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'web' 
                    ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                  <Monitor className="w-4 h-4" />
                  Web
              </button>
              <button 
                onClick={() => setActiveTab('mobile')}
                className={`relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'mobile' 
                    ? 'bg-purple-500/20 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                  <Smartphone className="w-4 h-4" />
                  Mobile
              </button>
          </div>
      </div>

      {/* CONTENT SWITCHER */}
      <div className="relative z-10 min-h-screen">
          <AnimatePresence mode="wait">
              {activeTab === 'web' ? (
                  <motion.div 
                    key="web"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                      <WebGallery />
                  </motion.div>
              ) : (
                  <motion.div 
                    key="mobile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                      <MobileStack />
                  </motion.div>
              )}
          </AnimatePresence>
      </div>

    </div>
  )
}
