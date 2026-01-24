'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, createContext, useContext } from 'react'

const TransitionContext = createContext(null)

export function TransitionProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigate = (href) => {
    if (href === pathname) return
    setIsTransitioning(true)
    // Wait for curtain to cover screen (0.8s), then push route
    setTimeout(() => {
      router.push(href)
    }, 800) 
  }

  // Reset transition state when pathname changes (new page loaded)
  useEffect(() => {
    // Small delay to ensure route is fully mounted before sliding reveal?
    // Actually, just set false immediately, framer motion handles exit.
    setIsTransitioning(false)
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ navigate, isTransitioning }}>
      {children}
      <TransitionCurtain isActive={isTransitioning} />
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}

function TransitionCurtain({ isActive }) {
  // Lock Body Scroll/Overflow during transition to prevent scrollbars/sticky issues
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = 'var(--removed-body-scroll-bar-size, 0px)' // Prevent layout shift?
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = '' 
    }
  }, [isActive])

  return (
    <AnimatePresence mode='wait'>
      {isActive && (
        <motion.div
          key="curtain"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center pointer-events-auto"
        >
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ delay: 0.2 }}
             className="text-white font-[family-name:var(--font-space-grotesk)] text-6xl font-black tracking-tighter"
           >
             LOADING
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
