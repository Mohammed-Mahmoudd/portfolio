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
  { name: 'MySQL', category: 'Database' },
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
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#09090B]/85 flex items-center justify-center overflow-visible flex items-center justify-center px-4 md:px-12 lg:px-20 py-12 md:py-0">
      <motion.div 
        style={{ opacity, y }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        {/* Left: About Text */}
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)]">
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
            className="text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed"
          >
            I&apos;m a full-stack developer currently building at <span className="text-white font-bold">Tchaikovsky School</span>, backed by a 3-year specialized technical foundation from <span className="text-white font-bold">WE School for Applied Technology</span>. I approach coding the way I play chess — strategically — and bring the discipline I&apos;ve learned from fitness into every project.
          </motion.p>


          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm md:text-base lg:text-lg text-zinc-400 leading-relaxed"
          >
           I mostly work with modern JavaScript frameworks, crafting interactive experiences that are both clean and maintainable.
          </motion.p>
        </div>

        {/* Right: Tech Stack */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
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
              className="group relative p-4 md:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
            >
              <div className="space-y-2">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  {tech.category}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
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

