'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

const Globe3D = dynamic(() => import('./Globe3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-950/20 animate-pulse rounded-full" />
})

const WorldBackground = dynamic(() => import('./Globe3D').then(mod => mod.WorldBackground), { 
  ssr: false 
})

import { ArrowDown } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function WorldHero() {
  const containerRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(min-width: 579px) and (max-width: 1024px)')
  const [load3D, setLoad3D] = useState(false)

  // Defer heavy 3D loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad3D(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Dramatic sphere transforms
  // Refined for all breakpoints
  const sphereScale = useTransform(scrollYProgress,
    [0, 0.2, 0.8, 1],
    isMobile 
      ? [1.2, 0.4, 0.4, 0.6] 
      : isTablet
        ? [2.2, 0.9, 0.9, 1.2] // Larger base and side-view for tablets (0.6 -> 0.9)
        : [2.5, 0.65, 0.65, 1] // Desktop remains dramatic
  )

  const sphereX = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    isMobile 
      ? [0, 0, 0, 0, 0, 0] // Keep centered on mobile
      : isTablet
        ? [0, -25, 25, -25, 0, 0] // Slightly tighter movement for tablets to keep it clear
        : [0, -35, 35, -35, 0, 0] // Full dramatic movement for desktop
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
      <div className="sticky top-0 h-screen w-full overflow-hidden p-4 md:p-7 flex items-center justify-center">
        {/* Inner Frame Content */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black/40">
          
          {load3D && <WorldBackground />}

          {/* 3D Globe - Animated */}
          <motion.div 
            style={{ 
              x: sphereX,
              y: sphereY,
              scale: sphereScale 
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-full h-full">
              {load3D && <Globe3D />}
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 px-4 md:px-8 pointer-events-none"
          >
            <div className="text-center relative z-20 mix-blend-difference">
              <h1 className="text-[15vw] md:text-[10vw] lg:text-[11vw] xl:text-[12vw] leading-[0.8] font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)]">
                MY WORLD
              </h1>
              <div className="mt-8 flex justify-between items-end w-full px-2">
                <span className="text-[10px] md:text-sm font-mono tracking-widest text-zinc-400">EST. 2024</span>
                <p className="text-sm md:text-lg lg:text-xl text-zinc-300 font-light tracking-[0.2em] uppercase">Beyond Code</p>
                <span className="text-[10px] md:text-sm font-mono tracking-widest text-zinc-400">SCROLL</span>
              </div>
            </div>
          </motion.div>

          {/* Stage 2: Philosophy - Sharp & Clear */}
          <motion.div 
            style={{ opacity: philosophyOpacity }}
            className="absolute inset-0 flex items-center justify-center md:justify-end z-10 px-4 md:px-12 lg:px-24 pointer-events-none"
          >
            <div className="max-w-xl pl-6 md:pl-12 border-l-2 border-white/20 text-left">
              <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white/5 absolute -left-10 -top-16 md:-left-12 md:-top-16 lg:-left-20 lg:-top-20 select-none">01</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4 lg:mb-8 leading-[0.9]">
                ORDER<br/><span className="text-zinc-500">IN CHAOS</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed font-light">
                Stripping away the unnecessary. Finding the absolute cleanest path to the solution. Simplicity is the ultimate sophistication.
              </p>
            </div>
          </motion.div>

          {/* Stage 3: Gym - High Contrast */}
          <motion.div 
            style={{ opacity: gymOpacity }}
            className="absolute inset-0 flex items-center justify-center md:justify-start z-10 px-4 md:px-12 lg:px-24 pointer-events-none"
          >
            <div className="max-w-xl pr-6 md:pr-12 md:border-r-2 border-l-2 md:border-l-0 border-white/20 text-left md:text-right pl-6 md:pl-0">
              <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white/5 absolute -right-10 -top-16 md:-right-12 md:-top-16 lg:-right-20 lg:-top-20 select-none hidden md:block">02</span>
              <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white/5 absolute -left-10 -top-16 select-none md:hidden">02</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4 lg:mb-8 leading-[0.9]">
                FORGED<br/><span className="text-zinc-500">IN IRON</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed font-light">
                Consistency beats intensity. The discipline of the gym translates directly to code structure and reliability.
              </p>
            </div>
          </motion.div>

          {/* Stage 4: Chess - Strategic */}
          <motion.div 
            style={{ opacity: chessOpacity }}
            className="absolute inset-0 flex items-center justify-center md:justify-end z-10 px-4 md:px-12 lg:px-24 pointer-events-none"
          >
            <div className="max-w-xl pl-6 md:pl-12 border-l-2 border-white/20 text-left">
              <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white/5 absolute -left-10 -top-16 md:-left-12 md:-top-16 lg:-left-20 lg:-top-20 select-none">03</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4 lg:mb-8 leading-[0.9]">
                GRAND<br/><span className="text-zinc-500">MASTER</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed font-light">
                Every move has consequences. Foresight, strategy, and sacrifice are essential for long-term scalability.
              </p>
            </div>
          </motion.div>

          {/* Stage 5: Approach - Modern Grid */}
          <motion.div 
            style={{ opacity: approachOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
              <div className="border-b md:border-r border-white/10 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                <span className="text-xs md:text-sm font-mono text-zinc-500">01</span>
                <div>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">STRUCTURE</h3>
                  <p className="text-[13px] md:text-sm lg:text-base text-zinc-400">Solid foundations require no maintenance.</p>
                </div>
              </div>
              <div className="border-b border-white/10 p-6 md:p-8 lg:p-12 flex flex-col justify-between items-end text-right">
                <span className="text-xs md:text-sm font-mono text-zinc-500">02</span>
                <div>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">SPEED</h3>
                  <p className="text-[13px] md:text-sm lg:text-base text-zinc-400">Performance is a feature, not an afterthought.</p>
                </div>
              </div>
              <div className="border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">DETAIL</h3>
                  <p className="text-[13px] md:text-sm lg:text-base text-zinc-400">Chess is in the details — so is great code.</p>
                </div>
                <span className="text-xs md:text-sm font-mono text-zinc-500">03</span>
              </div>
              <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-between items-end text-right">
                <div>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">SCALE</h3>
                  <p className="text-[13px] md:text-sm lg:text-base text-zinc-400">Built for tomorrow, today.</p>
                </div>
                <span className="text-xs md:text-sm font-mono text-zinc-500">04</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
