'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import Footer from './Footer'

const projects = [
  {
    title: "Tchaikovsky School",
    category: "Music Education Platform",
    id: 1,
    img: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2072&auto=format&fit=crop",
    url: "https://tchaikovskyschool.com",
    description: "A comprehensive platform for music education, connecting students with world-class instructors."
  },
  {
    title: "Elmetr",
    category: "Legal Tech Ecosystem",
    id: 2,
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2542&auto=format&fit=crop",
    url: "https://elmetr.com",
    description: "Revolutionizing legal services with an integrated ecosystem for lawyers and clients."
  },
  {
    title: "Alserag",
    category: "Corporate Portal",
    id: 3,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    url: "https://el-serag.com",
    description: "A modern corporate portal enhancing internal communication and workflow management."
  },
  {
    title: "Tchaikovsky App",
    category: "Mobile Application",
    id: 4,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop",
    description: "Extending the music education experience to mobile with practice tools and scheduling."
  },
  {
    title: "Elmetr App",
    category: "Mobile Application",
    id: 5,
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    description: "Mobile access to legal resources and case management for professionals on the go."
  },
  {
    title: "To Do App",
    category: "Productivity Tool",
    id: 6,
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    description: "A minimalist productivity tool focused on focus and efficient task management."
  }
]

// Project Card Component controlled by scroll
const ProjectSlide = ({ project, scrollYProgress, index, total, range }) => {
  // map range [start, end] from scrollYProgress to animation
  const [start, end] = range
  const mid = (start + end) / 2
  
  // Opacity: fade in at start, stay visible, fade out at end
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  )

  // Scale/Y movement for effect
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [50, -50]
  )
  
  const scale = useTransform(
    scrollYProgress,
    [start, mid, end],
    [0.9, 1, 0.9]
  )

  return (
    <motion.div 
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none"
    >
      <div className="w-full max-w-6xl h-full max-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pointer-events-auto">
        
        {/* Left: Image */}
        <div className={`relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 order-2 md:order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
           <img 
             src={project.img} 
             alt={project.title} 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right: Content */}
        <div className={`flex flex-col justify-center order-1 md:order-2 ${index % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : ''}`}>
           <div className="flex items-center gap-4 mb-6 md:mb-8 text-zinc-500 font-mono tracking-widest text-sm uppercase">
              <span>0{project.id}</span>
              <div className="w-12 h-[1px] bg-zinc-700" />
              <span>{project.category}</span>
           </div>
           
           <h2 className="text-4xl md:text-6xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-[0.9] mb-6">
             {project.title}
           </h2>
           
           <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-md">
             {project.description}
           </p>

           <a 
             href={project.url || '#'}
             target={project.url ? "_blank" : "_self"} 
             className={`flex items-center gap-3 text-cyan-400 font-bold tracking-widest uppercase hover:text-white transition-colors group ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
           >
             {project.url ? 'Visit Website' : 'View Concept'}
             <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
             </div>
           </a>
        </div>

      </div>
    </motion.div>
  )
}

export default function WorkHero() {
  const containerRef = useRef(null)
  
  // Total scroll distance: Intro + (projects.length * drag)
  // Let's allocate roughly 100vh per project + 100vh for intro
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Intro Opacity: Fades out quickly
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const introScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, -50])

  return (
    <div ref={containerRef} className="relative w-full bg-[#09090B]" style={{ height: `${(projects.length + 1) * 100}vh`}}>
      
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-6 overflow-hidden">
        
        {/* The "Screen" Frame */}
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black border border-white/5 shadow-2xl flex items-center justify-center bg-[#050505]">
           
           {/* Global Background (Shader) - Persists across all slides */}
           <div className="absolute inset-0 z-0">
              <ShaderGradientCanvas
                style={{ width: '100%', height: '100%' }}
                pixelDensity={0.8} // Performance optimization
                pointerEvents="none"
              >
                <ShaderGradient
                  animate="on"
                  type="plane"
                  shader="defaults"
                  uTime={0}
                  uSpeed={0.15}
                  uStrength={1.2}
                  uDensity={1.2}
                  uFrequency={5.5}
                  uAmplitude={4}
                  positionX={0}
                  positionY={-4}
                  positionZ={0}
                  rotationX={40}
                  rotationY={0}
                  rotationZ={0}
                  color1="#101010"
                  color2="#181818"
                  color3="#00bcd4"
                  reflection={0.2}
                  lightType="env"
                  brightness={0.8}
                  grain="on"
                  enableTransition={false}
                />
              </ShaderGradientCanvas>
              <div className="absolute inset-0 bg-black/60 z-[1]" />
           </div>

           {/* Content Layers */}
           <div className="relative z-10 w-full h-full">
              
              {/* Intro Section */}
              <motion.div 
                style={{ opacity: introOpacity, scale: introScale, y: introY }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 pointer-events-none"
              >
                  <h1 className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-white leading-[0.8] font-[family-name:var(--font-space-grotesk)] mix-blend-difference">
                    SELECTED
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">WORKS</span>
                  </h1>
                  
                  <div className="mt-12 flex items-center gap-4">
                    <span className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase">Scroll to explore</span>
                    <ArrowDown className="w-4 h-4 text-zinc-500 animate-bounce" />
                  </div>
              </motion.div>

              {/* Projects */}
              {projects.map((project, index) => {
                 // Calculate range for this project
                 // Intro takes 0-0.15
                 // Remaining 0.85 spread across projects
                 const step = 0.85 / projects.length
                 const start = 0.15 + (index * step)
                 const end = start + step
                 
                 // Overlap slightly for smooth transition
                 const range = [start - 0.05, end]

                 return (
                   <ProjectSlide 
                     key={project.id}
                     project={project}
                     index={index}
                     total={projects.length}
                     range={range}
                     scrollYProgress={scrollYProgress}
                   />
                 )
              })}

           </div>

           {/* Footer Copyright inside the frame */}
           <div className="absolute bottom-6 left-0 w-full text-center z-50 pointer-events-none">
             <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-mono">
                © {new Date().getFullYear()} Mohammed Mahmoud
             </p>
           </div>

        </div>
      </div>
      
    </div>
  )
}
