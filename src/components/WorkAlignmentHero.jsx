'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Monitor, Smartphone, Grid3x3 } from 'lucide-react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Link from 'next/link'
import TransitionLink from './TransitionLink'
import { projects } from '@/data/projectsData'

export default function WorkAlignmentHero() {
  const [activeFilter, setActiveFilter] = useState('all') // 'all', 'web', 'mobile'
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter)

  return (
    <div className="relative w-full min-h-screen bg-[#09090B] flex items-center justify-center p-6 md:p-8">
      {/* Inner Frame */}
      <div className="relative w-full h-full min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/40" style={{ isolation: 'isolate' }}>
        
        {/* Shader Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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
                color1="#2f5153"
                color2="#053964"
                color3="#384154"
                reflection={0.4}
                cAzimuthAngle={212}
                cPolarAngle={180}
                cDistance={0.5}
                cameraZoom={15.1}
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

        {/* Content Container - Scrollable */}
        <div className="relative z-10 w-full h-full overflow-y-auto">
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] mb-6">
                MY WORK
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl">
                  Selected projects showcasing web and mobile development expertise
                </p>
                
                {/* Filter Tabs */}
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full p-1.5">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-6 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                      activeFilter === 'all' 
                        ? 'bg-white text-black' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => setActiveFilter('web')}
                    className={`px-6 py-2 rounded-full text-sm font-mono transition-all duration-300 flex items-center gap-2 ${
                      activeFilter === 'web' 
                        ? 'bg-cyan-400 text-black' 
                        : 'text-zinc-400 hover:text-cyan-400'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    WEB
                  </button>
                  <button
                    onClick={() => setActiveFilter('mobile')}
                    className={`px-6 py-2 rounded-full text-sm font-mono transition-all duration-300 flex items-center gap-2 ${
                      activeFilter === 'mobile' 
                        ? 'bg-white text-black' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    MOBILE
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Footer Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-16 md:mt-24 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)]">10</div>
                  <div className="text-sm text-zinc-500 font-mono mt-2">TOTAL PROJECTS</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-cyan-400 font-[family-name:var(--font-space-grotesk)]">06</div>
                  <div className="text-sm text-zinc-500 font-mono mt-2">WEB APPS</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)]">04</div>
                  <div className="text-sm text-zinc-500 font-mono mt-2">MOBILE APPS</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)]">1+</div>
                  <div className="text-sm text-zinc-500 font-mono mt-2">YEARS EXPERIENCE</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }) {
  const isWeb = project.type === 'web'
  const accentColor = isWeb ? 'cyan-400' : 'white'
  const borderColor = isWeb ? 'border-cyan-400/20' : 'border-white/20'
  
  return (
    <TransitionLink href={`/work/${project.id}`} className="block h-full">
      <div className={`relative bg-black/60 backdrop-blur-md border ${borderColor} rounded-2xl p-6 group hover:bg-black/80 hover:border-${accentColor}/40 transition-all duration-500 h-full flex flex-col cursor-pointer`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <span className={`text-xs font-mono tracking-widest text-${accentColor} uppercase`}>
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 font-[family-name:var(--font-space-grotesk)] leading-tight group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-sm font-mono text-zinc-500">{project.year}</span>
          {isWeb ? (
            <Monitor className="w-5 h-5 text-cyan-400" />
          ) : (
            <Smartphone className="w-5 h-5 text-white" />
          )}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-zinc-400 mb-4 leading-relaxed flex-1">
        {project.description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-zinc-400">
            {tech}
          </span>
        ))}
      </div>
      
      {/* View Project Link */}
      <div className={`inline-flex items-center gap-2 text-sm font-mono text-${accentColor} group-hover:gap-4 transition-all duration-300 mt-auto`}>
        VIEW PROJECT
        <ArrowUpRight className="w-4 h-4" />
      </div>
      
      {/* Decorative Corner */}
      <div className={`absolute bottom-0 right-0 w-16 h-16 border-r border-b ${borderColor} rounded-br-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
      </div>
    </TransitionLink>
  )
}
