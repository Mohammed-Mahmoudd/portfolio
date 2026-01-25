'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Brain } from 'lucide-react'

export default function BeyondCode() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const leftY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rightY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-24 md:py-32 px-8 md:px-24">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono mb-4 block">Disciplines</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] mb-6">
          BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CODE</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          My habits outside of development shape how I build products
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* GYM SECTION */}
        <motion.div
          style={{ y: leftY }}
          className="group relative"
        >
          <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500">
            
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
              
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-10 h-10 text-white" />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)] mb-6">
                  GYM
                </h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Training builds <span className="text-orange-400 font-semibold">discipline</span>, <span className="text-orange-400 font-semibold">focus</span>, and <span className="text-orange-400 font-semibold">strength</span>. 
                    Every rep is a commitment to improvement.
                  </p>
                </div>

                {/* Connection to Code */}
                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs uppercase tracking-widest text-orange-400 font-mono mb-3 block">Translates to Code</span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span className="text-zinc-400">Strong structure & foundation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span className="text-zinc-400">Performance optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span className="text-zinc-400">Consistent execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* CHESS SECTION */}
        <motion.div
          style={{ y: rightY }}
          className="group relative"
        >
          <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500">
            
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
              
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)] mb-6">
                  CHESS
                </h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Chess teaches <span className="text-blue-400 font-semibold">strategic thinking</span>, <span className="text-blue-400 font-semibold">patience</span>, and <span className="text-blue-400 font-semibold">planning ahead</span>. 
                    Every move has consequences.
                  </p>
                </div>

                {/* Connection to Code */}
                <div className="pt-6 border-t border-white/10">
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-3 block">Translates to Code</span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-zinc-400">System architecture & design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-zinc-400">Problem-solving approach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-zinc-400">Long-term scalability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500 pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* Bottom Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <p className="text-2xl md:text-3xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          These disciplines aren&apos;t separate from my work—
          <span className="text-white font-semibold"> they are the foundation</span> of how I approach every project.
        </p>
      </motion.div>

    </section>
  )
}
