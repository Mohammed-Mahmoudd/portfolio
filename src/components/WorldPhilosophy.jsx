'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function WorldPhilosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    { 
      title: "Quality First", 
      description: "Every line of code, every interaction, every pixel matters. I don&apos;t ship until it feels right.",
      icon: "✦"
    },
    { 
      title: "Performance Driven", 
      description: "Speed isn't a feature—it's a foundation. Optimized, efficient, and built to scale.",
      icon: "⚡"
    },
    { 
      title: "Thoughtful Design", 
      description: "Design isn't decoration. It's intentional decisions that create seamless experiences.",
      icon: "◆"
    }
  ]

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-zinc-950 py-24 md:py-32 px-8 md:px-24 flex items-center">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono">Philosophy</span>
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-space-grotesk)] leading-tight mb-8 max-w-5xl">
            I&apos;m driven by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">quality</span>,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">performance</span>, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">thoughtful design</span>.
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">
            I&apos;m deeply passionate about <span className="text-white font-medium">animations</span> and <span className="text-white font-medium">interactive experiences</span>, 
            always aiming to create work that feels <span className="text-cyan-400">smooth</span>, <span className="text-cyan-400">intentional</span>, and <span className="text-cyan-400">refined</span>.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500">
                
                {/* Icon */}
                <div className="text-5xl mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
