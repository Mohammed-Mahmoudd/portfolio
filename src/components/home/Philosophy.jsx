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
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
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
      <motion.div className="font-black uppercase text-[4rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] leading-[0.85] tracking-tighter whitespace-nowrap flex flex-nowrap" style={{ x }}>
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
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 bg-black overflow-hidden flex flex-col justify-center gap-6 md:gap-8 lg:gap-10">
      <ParallaxText baseVelocity={-1.5}>SCALABLE WEB APPS</ParallaxText>
      <ParallaxText baseVelocity={1.5}>MODERN JS FRAMEWORKS</ParallaxText>
      
      {/* Central Statement */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20 text-center relative z-10">
        {/* Visual Depth Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none blur-3xl" />
        
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-[family-name:var(--font-space-grotesk)] leading-tight font-medium">
          {`Crafting digital experiences where `.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cyan-400 inline-block mr-2 font-bold"
          >
            logic meets emotion
          </motion.span>
          {`. I build for the future, today.`.split(' ').map((word, i) => (
             <motion.span
              key={`end-${i}`}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + (i * 0.05) }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}

