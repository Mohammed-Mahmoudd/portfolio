'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Monitor, Smartphone, Code, Layers } from 'lucide-react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

// --- DATA ---
const projects = [
  { 
    id: 1, 
    title: "Tchaikovsky Ops", 
    year: "2024", 
    category: "Education Platform",
    type: "web",
    description: "Comprehensive learning management system with real-time analytics",
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  { 
    id: 2, 
    title: "Elmetr Ecosystem", 
    year: "2023", 
    category: "Legal Tech",
    type: "web",
    description: "End-to-end legal document management and workflow automation",
    tech: ["Next.js", "TypeScript", "MongoDB"]
  },
  { 
    id: 3, 
    title: "Alserag Portal", 
    year: "2023", 
    category: "Enterprise",
    type: "web",
    description: "Scalable enterprise resource planning solution",
    tech: ["React", "Express", "MySQL"]
  },
  { 
    id: 4, 
    title: "Tchaikovsky App", 
    year: "2024", 
    category: "Education",
    type: "mobile",
    description: "Native mobile learning experience for iOS and Android",
    tech: ["React Native", "Firebase", "Redux"]
  },
  { 
    id: 5, 
    title: "Elmetr Connect", 
    year: "2023", 
    category: "Legal Tech",
    type: "mobile",
    description: "Mobile-first legal consultation and case tracking",
    tech: ["Flutter", "Node.js", "MongoDB"]
  },
  { 
    id: 6, 
    title: "Focus Flow", 
    year: "2022", 
    category: "Productivity",
    type: "mobile",
    description: "Pomodoro-based productivity tracker with analytics",
    tech: ["React Native", "SQLite", "Context API"]
  },
]

export default function WorkAlignmentHero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Opacity transforms for different sections
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const webIntroOpacity = useTransform(scrollYProgress, [0.08, 0.15, 0.25, 0.32], [0, 1, 1, 0])
  const webProject1Opacity = useTransform(scrollYProgress, [0.28, 0.35, 0.42, 0.48], [0, 1, 1, 0])
  const webProject2Opacity = useTransform(scrollYProgress, [0.44, 0.50, 0.57, 0.63], [0, 1, 1, 0])
  const mobileIntroOpacity = useTransform(scrollYProgress, [0.60, 0.67, 0.74, 0.80], [0, 1, 1, 0])
  const mobileProjectsOpacity = useTransform(scrollYProgress, [0.77, 0.83, 0.92, 0.98], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative w-full h-[600vh] bg-[#09090B]">
      {/* Sticky container with frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden p-6 md:p-8 flex items-center justify-center">
        {/* Inner Frame */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/40" style={{ isolation: 'isolate' }}>
          
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

          {/* Stage 1: Hero Title */}
          <motion.div 
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8 pointer-events-none"
          >
            <div className="text-center relative z-20">
              <h1 className="text-[14vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)]">
                MY WORK
              </h1>
              <div className="mt-8 flex justify-between items-end w-full px-2 gap-8">
                <span className="text-sm font-mono tracking-widest text-zinc-400">SELECTED PROJECTS</span>
                <p className="text-xl text-zinc-300 font-light tracking-[0.2em] uppercase">2022-2024</p>
                <span className="text-sm font-mono tracking-widest text-zinc-400">SCROLL</span>
              </div>
            </div>
          </motion.div>

          {/* Stage 2: Web Development Intro */}
          <motion.div 
            style={{ opacity: webIntroOpacity }}
            className="absolute inset-0 flex items-center justify-start z-10 px-8 md:px-24 pointer-events-none"
          >
            <div className="max-w-2xl pr-12 border-r-2 border-cyan-400/30 text-right">
              <Monitor className="w-16 h-16 text-cyan-400 mb-6 ml-auto" />
              <h2 className="text-7xl md:text-8xl font-black text-white font-[family-name:var(--font-space-grotesk)] mb-6 leading-[0.85]">
                WEB<br/><span className="text-cyan-400">DEV</span>
              </h2>
              <p className="text-2xl text-zinc-300 leading-relaxed font-light">
                Building scalable, performant web applications with modern frameworks and best practices.
              </p>
              <div className="mt-8 flex items-center gap-4 justify-end">
                <div className="h-[1px] w-24 bg-cyan-400/50" />
                <span className="text-sm font-mono text-cyan-400">03 PROJECTS</span>
              </div>
            </div>
          </motion.div>

          {/* Stage 3: Web Project 1 */}
          <motion.div 
            style={{ opacity: webProject1Opacity }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8 md:px-16 pointer-events-none"
          >
            <ProjectCard project={projects[0]} accent="cyan" />
          </motion.div>

          {/* Stage 4: Web Project 2 & 3 */}
          <motion.div 
            style={{ opacity: webProject2Opacity }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8 md:px-12 pointer-events-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
              <ProjectCard project={projects[1]} accent="cyan" compact />
              <ProjectCard project={projects[2]} accent="cyan" compact />
            </div>
          </motion.div>

          {/* Stage 5: Mobile Development Intro */}
          <motion.div 
            style={{ opacity: mobileIntroOpacity }}
            className="absolute inset-0 flex items-center justify-end z-10 px-8 md:px-24 pointer-events-none"
          >
            <div className="max-w-2xl pl-12 border-l-2 border-white/30">
              <Smartphone className="w-16 h-16 text-white mb-6" />
              <h2 className="text-7xl md:text-8xl font-black text-white font-[family-name:var(--font-space-grotesk)] mb-6 leading-[0.85]">
                MOBILE<br/><span className="text-zinc-500">APPS</span>
              </h2>
              <p className="text-2xl text-zinc-300 leading-relaxed font-light">
                Native and cross-platform mobile experiences that users love.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm font-mono text-white">03 PROJECTS</span>
                <div className="h-[1px] w-24 bg-white/50" />
              </div>
            </div>
          </motion.div>

          {/* Stage 6: Mobile Projects Grid */}
          <motion.div 
            style={{ opacity: mobileProjectsOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8 md:px-12 pointer-events-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
              {projects.slice(3).map((project) => (
                <ProjectCard key={project.id} project={project} accent="white" compact />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, accent = "cyan", compact = false }) {
  const accentColor = accent === "cyan" ? "cyan-400" : "white"
  const borderColor = accent === "cyan" ? "border-cyan-400/20" : "border-white/20"
  
  return (
    <div className={`relative bg-black/60 backdrop-blur-md border ${borderColor} rounded-2xl p-8 ${compact ? 'md:p-6' : 'md:p-12'} group hover:bg-black/80 transition-all duration-500`}>
      {/* Number Badge */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center">
        <span className={`text-sm font-mono font-bold text-${accentColor}`}>{String(project.id).padStart(2, '0')}</span>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`text-xs font-mono tracking-widest text-${accentColor} uppercase`}>{project.category}</span>
            <h3 className={`${compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'} font-bold text-white mt-2 font-[family-name:var(--font-space-grotesk)] leading-tight`}>
              {project.title}
            </h3>
          </div>
          <span className="text-sm font-mono text-zinc-500">{project.year}</span>
        </div>
        
        {!compact && (
          <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
            {project.description}
          </p>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-zinc-400">
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Project Link */}
        <a 
          href="#" 
          className={`inline-flex items-center gap-2 text-sm font-mono text-${accentColor} group-hover:gap-4 transition-all duration-300 pointer-events-auto`}
        >
          VIEW PROJECT
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      
      {/* Decorative Corner */}
      <div className={`absolute bottom-0 right-0 w-24 h-24 border-r border-b ${borderColor} rounded-br-2xl opacity-20`} />
    </div>
  )
}
