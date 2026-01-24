'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
]

export default function About() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center px-8 md:px-24">
      <motion.div 
        style={{ opacity, y }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: About Text */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)]">
              Building Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experiences
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            I'm a full-stack developer passionate about creating scalable, 
            performant web applications. I combine strategic thinking from chess 
            with the discipline from fitness to build solutions that matter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            Specialized in modern JavaScript frameworks, I focus on delivering 
            interactive experiences with clean, maintainable code.
          </motion.p>
        </div>

        {/* Right: Tech Stack */}
        <div className="grid grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  {tech.category}
                </p>
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  {tech.name}
                </h3>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
