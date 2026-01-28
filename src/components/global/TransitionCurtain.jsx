'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, createContext, useContext, useCallback, useRef } from 'react'

const TransitionContext = createContext(null)

export function TransitionProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const isLoadedRef = useRef(false)

  // Navigate function
  const navigate = (href) => {
    if (href === pathname) return
    setIsTransitioning(true)
    setIsPageLoaded(false)
    isLoadedRef.current = false
    setProgress(0) // Reset progress for new navigation
    
    setTimeout(() => {
      router.push(href)
    }, 600) 
  }

  // Pathname change sync
  useEffect(() => {
    const t = setTimeout(() => {
      setIsPageLoaded(true)
      isLoadedRef.current = true
    }, 10)
    return () => clearTimeout(t)
  }, [pathname])

  // Progress Interval Management
  useEffect(() => {
    if (!isTransitioning) return

    const interval = setInterval(() => {
      const loaded = isLoadedRef.current

      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }

        // Stall logic
        if (!loaded && prev >= 90) return prev

        // Dynamic Speed
        let increment = 0.5 
        if (loaded) {
            if (prev > 95) increment = 0.5
            else if (prev > 80) increment = 2.0
            else increment = 4.0
        }
        
        const next = prev + increment
        return next >= 100 ? 100 : next
      })
    }, 16)

    return () => clearInterval(interval)
  }, [isTransitioning])

  // Completion trigger when progress hits 100
  useEffect(() => {
    if (progress === 100 && isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setIsFirstLoad(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [progress, isTransitioning])

  return (
    <TransitionContext.Provider value={{ navigate, isTransitioning }}>
      {children}
      <SlideCurtain 
        isActive={isTransitioning} 
        isFirstLoad={isFirstLoad}
        progress={progress}
      />
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}

function SlideCurtain({ isActive, isFirstLoad, progress }) {
  return (
    <AnimatePresence mode='wait'>
      {isActive && (
        <motion.div
          key="slide-curtain"
          initial={{ y: isFirstLoad ? '0%' : '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] pointer-events-auto flex items-center justify-center"
        >
             <LoadingCounter progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function LoadingCounter({ progress }) {
  return (
    <div className="fixed bottom-12 right-12 z-50 mix-blend-difference pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="text-white font-[family-name:var(--font-space-grotesk)] text-[12vw] leading-none font-black tracking-tighter flex items-end"
      >
        <span>{progress}</span>
        <span className="text-[4vw] mb-[2vw] ml-2 font-light opacity-50">%</span>
      </motion.div>
    </div>
  )
}
