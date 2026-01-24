'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import { wrap } from '@motionone/utils'

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="font-black uppercase text-[12rem] md:text-[16rem] leading-[0.85] tracking-tighter whitespace-nowrap flex flex-nowrap" style={{ x }}>
        <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">{children} </span>
        <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">{children} </span>
        <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">{children} </span>
        <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">{children} </span>
      </motion.div>
    </div>
  )
}

export default function Philosophy() {
  return (
    <section className="w-full py-40 bg-black overflow-hidden flex flex-col justify-center gap-10">
      <ParallaxText baseVelocity={-2}>INNOVATION STRATEGY</ParallaxText>
      <ParallaxText baseVelocity={2}>DESIGN & DEVELOPMENT</ParallaxText>
      
      {/* Central Statement */}
      <div className="w-full max-w-4xl mx-auto px-8 mt-20 text-center relative z-10">
        <p 
          className="text-2xl md:text-4xl text-white font-[family-name:var(--font-space-grotesk)] leading-tight"
        >
          Crafting digital experiences where <span className="text-cyan-400">logic meets emotion</span>. 
          I build for the future, today.
        </p>
      </div>
    </section>
  )
}
