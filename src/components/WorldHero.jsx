'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Globe3D, { WorldBackground } from './Globe3D'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'

export default function WorldHero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Dramatic sphere transforms
  // Start HUGE (2.5), then shrink to side (0.6), then center (0.8)
  const sphereScale = useTransform(scrollYProgress,
    [0, 0.2, 0.8, 1],
    [2.5, 0.6, 0.6, 1]
  )

  const sphereX = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -35, 35, -35, 0, 0] // Move to sides
  )

  const sphereY = useTransform(scrollYProgress,
    [0, 0.2],
    [10, 0] // Start slightly lower
  )

  // Opacity transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const philosophyOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0])
  const gymOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0])
  const chessOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0])
  const approachOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#09090B]">
      {/* Sticky container with Hero Frame Style */}
      <div className="sticky top-0 h-screen w-full overflow-hidden p-5 md:p-7 flex items-center justify-center">
        {/* Inner Frame Content */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/40">
          
          <WorldBackground />

          {/* 3D Globe - Animated */}
          <motion.div 
            style={{ 
              x: sphereX,
              y: sphereY,
              scale: sphereScale 
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-screen h-screen">
              <Globe3D />
            </div>
          </motion.div>

          {/* Stage 1: Hero - Clean & Bold */}
          <motion.div 
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 px-8 pointer-events-none"
          >
            <div className="text-center relative z-20 mix-blend-difference">
              <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)]">
                MY WORLD
              </h1>
              <div className="mt-8 flex justify-between items-end w-full px-2">
                <span className="text-sm font-mono tracking-widest text-zinc-400">EST. 2024</span>
                <p className="text-xl text-zinc-300 font-light tracking-[0.2em] uppercase">Beyond Code</p>
                <span className="text-sm font-mono tracking-widest text-zinc-400">SCROLL</span>
              </div>
            </div>
          </motion.div>

          {/* Stage 2: Philosophy - Sharp & Clear */}
          <motion.div 
            style={{ opacity: philosophyOpacity }}
            className="absolute inset-0 flex items-center justify-end z-10 px-8 md:px-24 pointer-events-none"
          >
            <div className="max-w-xl pl-12 border-l-2 border-white/20">
              <span className="text-8xl font-black text-white/5 absolute -left-20 -top-20 select-none">01</span>
              <h2 className="text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-8 leading-[0.9]">
                ORDER<br/><span className="text-zinc-500">IN CHAOS</span>
              </h2>
              <p className="text-2xl text-zinc-200 leading-relaxed font-light">
                Stripping away the unnecessary. Finding the absolute cleanest path to the solution. Simplicity is the ultimate sophistication.
              </p>
            </div>
          </motion.div>

          {/* Stage 3: Gym - High Contrast */}
          <motion.div 
            style={{ opacity: gymOpacity }}
            className="absolute inset-0 flex items-center justify-start z-10 px-8 md:px-24 pointer-events-none"
          >
            <div className="max-w-xl pr-12 border-r-2 border-white/20 text-right">
              <span className="text-8xl font-black text-white/5 absolute -right-20 -top-20 select-none">02</span>
              <h2 className="text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-8 leading-[0.9]">
                FORGED<br/><span className="text-zinc-500">IN IRON</span>
              </h2>
              <p className="text-2xl text-zinc-200 leading-relaxed font-light">
                Consistency beats intensity. The discipline of the gym translates directly to code structure and reliability.
              </p>
            </div>
          </motion.div>

          {/* Stage 4: Chess - Strategic */}
          <motion.div 
            style={{ opacity: chessOpacity }}
            className="absolute inset-0 flex items-center justify-end z-10 px-8 md:px-24 pointer-events-none"
          >
            <div className="max-w-xl pl-12 border-l-2 border-white/20">
              <span className="text-8xl font-black text-white/5 absolute -left-20 -top-20 select-none">03</span>
              <h2 className="text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-8 leading-[0.9]">
                GRAND<br/><span className="text-zinc-500">MASTER</span>
              </h2>
              <p className="text-2xl text-zinc-200 leading-relaxed font-light">
                Every move has consequences. Foresight, strategy, and sacrifice are essential for long-term scalability.
              </p>
            </div>
          </motion.div>

          {/* Stage 5: Approach - Modern Grid */}
          <motion.div 
            style={{ opacity: approachOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="w-full h-full grid grid-cols-2 grid-rows-2">
              <div className="border-r border-white/10 border-b p-12 flex flex-col justify-between">
                <span className="text-sm font-mono text-zinc-500">01</span>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">STRUCTURE</h3>
                  <p className="text-zinc-400">Solid foundations require no maintenance.</p>
                </div>
              </div>
              <div className="border-b border-white/10 p-12 flex flex-col justify-between items-end text-right">
                <span className="text-sm font-mono text-zinc-500">02</span>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">SPEED</h3>
                  <p className="text-zinc-400">Performance is a feature, not an afterthought.</p>
                </div>
              </div>
              <div className="border-r border-white/10 p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">DETAIL</h3>
                  <p className="text-zinc-400">Chess is in the details.</p>
                </div>
                <span className="text-sm font-mono text-zinc-500">03</span>
              </div>
              <div className="p-12 flex flex-col justify-between items-end text-right">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">SCALE</h3>
                  <p className="text-zinc-400">Built for tomorrow, today.</p>
                </div>
                <span className="text-sm font-mono text-zinc-500">04</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
