'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function MyApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const principles = [
    {
      number: "01",
      title: "Strong Structure",
      description: "Like a solid foundation in training, code needs a robust architecture that can handle growth and change.",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "02",
      title: "Prioritize Performance",
      description: "Optimization isn't optional. Every millisecond matters, every interaction should feel instant.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "03",
      title: "Polish Details",
      description: "The difference between good and great is in the refinement—animations, transitions, micro-interactions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "04",
      title: "Continuous Growth",
      description: "Never settle. Always learning, always improving, always pushing the boundaries of what's possible.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-zinc-950 py-24 md:py-32 px-8 md:px-24 flex items-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono mb-4 block">Methodology</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] mb-6">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">APPROACH</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            How discipline and strategy translate into development principles
          </p>
        </motion.div>

        {/* Principles Flow */}
        <div className="space-y-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="flex items-start gap-6 md:gap-8">
                
                {/* Number Badge */}
                <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-black text-xl md:text-2xl font-mono">{principle.number}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all duration-500">
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4">
                    {principle.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    {principle.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-mono uppercase tracking-wider">Core Principle</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`} />
                </div>

              </div>

              {/* Connecting Line (except for last item) */}
              {index < principles.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="ml-8 md:ml-10 w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-transparent origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center"
        >
          <p className="text-2xl md:text-3xl text-white font-semibold font-[family-name:var(--font-space-grotesk)] leading-relaxed">
            My world is about <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">continuous growth</span>, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> clean execution</span>, and building digital experiences that don&apos;t just work—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> they feel right</span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
