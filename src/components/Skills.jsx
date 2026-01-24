'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'Next.js', icon: '⚡', color: 'from-white to-zinc-400' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
  { name: 'Framer Motion', icon: '✨', color: 'from-purple-400 to-pink-500' },
  { name: 'Three.js', icon: '🎲', color: 'from-yellow-400 to-orange-500' },
]

export default function Skills() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transform scroll progress to carousel position
  const carouselX = useTransform(scrollYProgress, [0, 1], [0, -(technologies.length - 3) * 320])

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Wireframe Sphere Background */}
        <div className="absolute inset-0 z-0">
          <ShaderGradientCanvas
            style={{
              width: '100%',
              height: '100%',
            }}
            fov={74}
            pixelDensity={1}
            pointerEvents="none"
          >
            <ShaderGradient
              animate="on"
              type="sphere"
              wireframe={true}
              shader="defaults"
              uTime={12}
              uSpeed={0.37}
              uStrength={0.2}
              uDensity={2}
              uFrequency={0}
              uAmplitude={0}
              positionX={0}
              positionY={0}
              positionZ={0}
              rotationX={60}
              rotationY={0}
              rotationZ={30}
              color1="#121db6"
              color2="#333399"
              color3="#00ffff"
              reflection={0.4}
              cAzimuthAngle={180}
              cPolarAngle={70}
              cDistance={3.2}
              cameraZoom={8.5}
              lightType="3d"
              brightness={1.3}
              envPreset="city"
              grain="on"
              toggleAxis={false}
              zoomOut={false}
              hoverState=""
              enableTransition={false}
            />
          </ShaderGradientCanvas>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-8 md:px-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-24 relative z-20"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] mb-6">
              ARSENAL
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* 3D Carousel Container */}
          <div className="w-full max-w-7xl relative z-20 perspective-1000">
            <motion.div 
              style={{ x: carouselX }}
              className="flex gap-12 items-center pl-24"
            >
              {technologies.map((tech, index) => (
                <SkillCard key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mt-24 w-full max-w-md h-1 bg-white/10 rounded-full overflow-hidden relative z-20">
            <motion.div 
                className="h-full bg-cyan-500"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ tech, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{ scale: 1.1, cursor: "grabbing" }}
      className="flex-shrink-0 w-[300px] h-[450px] relative group perspective-1000"
    >
      <div className="w-full h-full relative preserve-3d transition-all duration-200 ease-out">
          {/* Card Background - Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl group-hover:border-cyan-500/50 transition-colors duration-500" />
          
          {/* Floating Depth Elements */}
          <div className="absolute inset-4 rounded-2xl border border-white/5 bg-black/20 translate-z-20" />
          
          {/* Content Layer (Floating) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 translate-z-50">
            {/* Tech Icon Halo */}
            <div className="w-32 h-32 mb-10 relative flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 blur-2xl rounded-full group-hover:opacity-60 animate-pulse-slow`} />
                <span className="text-7xl relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{tech.icon}</span>
            </div>

            {/* Tech Name */}
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 font-[family-name:var(--font-space-grotesk)] tracking-wide mb-4 text-center">
              {tech.name}
            </h3>
            
            {/* Status Indicators */}
            <div className="flex gap-2 translate-z-30">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
                <div className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full" />
                <div className="w-1.5 h-1.5 bg-cyan-400/20 rounded-full" />
            </div>
          </div>
          
          {/* Holographic Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-z-40" />
      </div>
    </motion.div>
  )
}
