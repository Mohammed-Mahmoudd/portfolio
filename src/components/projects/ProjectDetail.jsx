'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Monitor, Smartphone, X, Layers, Clock, TrendingUp, Award, CheckCircle2 } from 'lucide-react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from '../global/NavLink'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function ProjectDetail({ project, adjacentProjects }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  const isWeb = project.type === 'web'
  
  const theme = {
    color: isWeb ? 'cyan-400' : 'purple-400',
    bg: isWeb ? 'bg-cyan-500/10' : 'bg-purple-500/10',
    border: isWeb ? 'border-cyan-500/20' : 'border-purple-500/20',
    gradient: isWeb ? 'from-cyan-500/20' : 'from-purple-500/20',
    shadow: isWeb ? 'shadow-cyan-500/10' : 'shadow-purple-500/10',
    icon: isWeb ? Monitor : Smartphone
  }

  const hasMetrics = project.results?.metrics && project.results.metrics.length > 0
  const Icon = theme.icon

  return (
    <div className="relative w-full min-h-screen bg-[#09090B] flex items-center justify-center p-4 md:p-5 lg:p-8">
      
      {/* Main Frame Container - Exact match to WorkAlignmentHero */}
      <div className="relative w-full h-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/40" style={{ isolation: 'isolate' }}>
          <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0">
            <ShaderGradientCanvas
              style={{
                width: '100%',
                height: '100%',
              }}
              pixelDensity={isMobile ? 0.6 : 1}
              pointerEvents="none"
            >
              <ShaderGradient
                animate="on"
                type="sphere"
                wireframe={false}
                shader="defaults"
                uTime={0}
                uSpeed={0.1}
                uStrength={0.3}
                uDensity={isMobile ? 0.4 : 0.8}
                uFrequency={5.5}
                uAmplitude={3.2}
                positionX={-0.1}
                positionY={0}
                positionZ={0}
                rotationX={0}
                rotationY={130}
                rotationZ={70}
                color1="#2f5153"
                color2="#053964"
                color3="#384154"
                reflection={0.4}
                cAzimuthAngle={212}
                cPolarAngle={180}
                cDistance={0.5}
                cameraZoom={isMobile ? 12 : 15.1}
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
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Scrollable Content Area */}
        <div className="relative z-10 w-full h-full overflow-y-auto scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
            
            {/* Top Navigation */}
            <nav className="flex items-center justify-between gap-4 mb-12 mt-4">
              <NavLink 
                href="/work"
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-white uppercase tracking-wider">Back to Review</span>
              </NavLink>
              
              <div className={`px-4 py-1.5 rounded-full ${theme.bg} ${theme.border} border flex items-center gap-2`}>
                <Icon className={`w-3.5 h-3.5 text-${theme.color}`} />
                <span className={`text-xs font-mono font-bold text-${theme.color} uppercase tracking-widest`}>
                  {project.type === 'web' ? 'Web Application' : 'Mobile Application'}
                </span>
              </div>
            </nav>

            {/* Header Hero */}
            <motion.header 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 lg:gap-12 mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-[0.9] tracking-tight">
                  {project.title}
                </h1>
                <span className="text-xl md:text-2xl font-mono text-zinc-500 mb-2 md:mb-4 lg:mb-5">{project.year}</span>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-8">
                <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                       className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-${theme.color} transition-colors`}>
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.header>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-300">
              
              {/* 1. Overview Card (Full width on Tablet, Adaptive on Desktop) */}
              <div className={`col-span-1 md:col-span-12 ${hasMetrics ? 'lg:col-span-8' : 'lg:col-span-12'} bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 hover:border-white/20 transition-colors group`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${theme.bg}`}>
                    <Layers className={`w-5 h-5 text-${theme.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">Project Overview</h3>
                </div>
                <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-8">
                  {project.overview.solution}
                </p>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                   <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 block">My Role</span>
                   <p className="text-white font-medium">{project.overview.role}</p>
                </div>
              </div>

              {/* 2. Stats Grid (Full width on Tablet, 4 on Desktop) - Conditional */}
              {hasMetrics && (
                <div className={`col-span-1 md:col-span-12 lg:col-span-4 bg-gradient-to-br ${theme.gradient} to-black/60 border ${theme.border} rounded-3xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${theme.color} blur-[80px] opacity-20 pointer-events-none`} />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-black/20">
                      <TrendingUp className={`w-5 h-5 text-${theme.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">Impact</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-8">
                    {project.results.metrics.slice(0, 3).map((metric, i) => (
                      <div key={i} className="border-b sm:border-b-0 md:border-r last:border-0 border-white/10 pb-4 sm:pb-0 md:pr-8 last:pr-0 lg:border-b lg:border-r-0 lg:pb-6 lg:pr-0">
                        <div className="text-3xl md:text-2xl lg:text-3xl font-black text-white font-[family-name:var(--font-space-grotesk)] mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[10px] md:text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Main Gallery (Web Grid or Carousel) */}
              <div className="col-span-1 md:col-span-12 space-y-6 mt-8">
                <div className="flex items-center gap-4 mb-2">
                   <div className="h-px bg-white/10 flex-1" />
                   <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Visual Gallery</span>
                   <div className="h-px bg-white/10 flex-1" />
                </div>
                
                {isWeb || project.images.length === 1 ? (
                   // Single Large Image for Web
                   <div 
                     onClick={() => setSelectedImage(project.images[0])}
                     className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
                   >
                      <Image
                        src={project.images[0]}
                        alt="Project Screenshot"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white font-mono text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Fullscreen
                        </div>
                      </div>
                   </div>
                ) : (
                   // Grid for Mobile Apps
                   <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                      {project.images.slice(0, 3).map((img, i) => (
                        <div 
                          key={i} 
                          onClick={() => setSelectedImage(img)}
                          className="relative aspect-[9/16] min-w-[85%] md:min-w-auto snap-center rounded-3xl overflow-hidden border border-white/10 group cursor-pointer bg-black/40 flex-shrink-0"
                        >
                           <Image
                             src={img}
                             alt={`Screen ${i+1}`}
                             fill
                             className="object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white font-mono text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              View Screen
                            </div>
                           </div>
                        </div>
                      ))}
                   </div>
                )}
              </div>

              {/* 4. Tech Stack (Span 6) */}
              <div className="col-span-1 md:col-span-12 lg:col-span-6 mt-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-zinc-900">
                      <Clock className="w-5 h-5 text-zinc-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">Tech Stack</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {[...project.techStack.frontend, ...project.techStack.backend, ...project.techStack.tools].map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm text-zinc-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
              </div>

              {/* 5. Challenges/Features (Span 6) */}
              <div className="col-span-1 md:col-span-12 lg:col-span-6 mt-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${theme.bg}`}>
                      <CheckCircle2 className={`w-5 h-5 text-${theme.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">Key Challenges</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {project.challenges.map((challenge, i) => (
                      <div key={i} className="flex gap-4">
                        <div className={`w-1.5 h-full min-h-[40px] rounded-full bg-gradient-to-b ${theme.gradient} to-transparent`} />
                        <div>
                          <h4 className="text-white font-bold mb-1 text-sm md:text-base">{challenge.problem}</h4>
                          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{challenge.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>

            </div>

            {/* Footer Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t border-white/10">
               {adjacentProjects.prev ? (
                 <NavLink href={`/work/${adjacentProjects.prev.id}`} className="group flex items-center gap-4 w-full md:w-auto p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all">
                    <div className="p-3 rounded-full bg-black border border-white/10">
                      <ArrowLeft className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Previous Project</div>
                      <div className="text-white font-bold">{adjacentProjects.prev.title}</div>
                    </div>
                 </NavLink>
               ) : <div />}
               
               {adjacentProjects.next && (
                 <NavLink href={`/work/${adjacentProjects.next.id}`} className="group flex items-center justify-end gap-4 w-full md:w-auto p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-right">
                    <div>
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">Next Project</div>
                      <div className="text-white font-bold">{adjacentProjects.next.title}</div>
                    </div>
                    <div className="p-3 rounded-full bg-black border border-white/10">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                 </NavLink>
               )}
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[210] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95 group"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full shadow-2xl border border-white/10 rounded-2xl overflow-hidden bg-black
                ${isWeb 
                  ? 'max-w-7xl aspect-video' 
                  : 'max-w-[min(90vw,450px)] aspect-[9/16]'
                }
              `}
              onClick={e => e.stopPropagation()}
            >
              <Image 
                src={selectedImage}
                alt="Full View"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
