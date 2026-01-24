'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ 
  children, 
  id, 
  className = '',
  background = 'bg-black',
  disableAnimations = false
}) {
  return (
    <section
      id={id}
      className={`
        relative w-full min-h-screen 
        flex items-center justify-center
        overflow-visible
        ${background}
        ${className}
      `}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </section>
  )
}
