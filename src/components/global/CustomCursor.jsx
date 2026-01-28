'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState(null) // null | 'pointer' | 'grab'
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = useCallback((e) => {
    const { clientX, clientY } = e
    mouse.x.set(clientX)
    mouse.y.set(clientY)
  }, [mouse.x, mouse.y])

  const manageMouseOver = useCallback((e) => {
    // Check for grab targets first
    if (e.target.closest('[data-cursor="grab"]')) {
      setHoverType('grab')
    } 
    // Then check for standard pointers
    else if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
      setHoverType('pointer')
    } else {
      setHoverType(null)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    window.addEventListener('mouseover', manageMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
      window.removeEventListener('mouseover', manageMouseOver)
    }
  }, [manageMouseMove, manageMouseOver])

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
          scale: hoverType ? 0 : 1
        }}
        className="w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Ring Follower */}
      <motion.div 
        animate={{
          scale: hoverType === 'grab' ? 5 : (hoverType === 'pointer' ? 4 : 1),
          opacity: hoverType ? 0.3 : 0.5,
          borderColor: hoverType ? 'rgba(34, 211, 238, 0.5)' : 'rgba(255, 255, 255, 0.3)',
          backgroundColor: hoverType === 'grab' ? 'rgba(34, 211, 238, 0.1)' : 'transparent'
        }}
        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-white rounded-full transition-colors duration-300"
      />
      
      {/* Label on Hover */}
      <motion.div
        animate={{
          opacity: hoverType ? 1 : 0,
          y: hoverType ? 20 : 0
        }}
        className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] items-center tracking-widest uppercase text-cyan-400 font-bold whitespace-nowrap"
      >
        {hoverType === 'grab' ? 'DRAG' : 'CLICK'}
      </motion.div>
    </motion.div>
  )
}
