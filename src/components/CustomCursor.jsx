'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e
    mouse.x.set(clientX)
    mouse.y.set(clientY)
  }

  const manageMouseOver = (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
      setIsHovering(true)
    } else {
      setIsHovering(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    window.addEventListener('mouseover', manageMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
      window.removeEventListener('mouseover', manageMouseOver)
    }
  }, []) // Removed mouse dependency since it's a ref/motion value

  return (
    <motion.div 
      style={{
        left: smoothMouse.x, 
        top: smoothMouse.y,
      }}
      className="fixed z-[9999] pointer-events-none hidden md:block"
    >
      {/* Main Dot */}
      <motion.div 
        animate={{
          scale: isHovering ? 0 : 1
        }}
        className="w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Ring Follower */}
      <motion.div 
        animate={{
          scale: isHovering ? 4 : 1,
          opacity: isHovering ? 0.3 : 0.5,
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.5)' : 'rgba(255, 255, 255, 0.3)'
        }}
        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-white rounded-full transition-colors duration-300"
      />
      
      {/* Label on Hover */}
      <motion.div
        animate={{
          opacity: isHovering ? 1 : 0,
          y: isHovering ? 20 : 0
        }}
        className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] items-center tracking-widest uppercase text-cyan-400 font-bold whitespace-nowrap"
      >
        Click
      </motion.div>
    </motion.div>
  )
}
