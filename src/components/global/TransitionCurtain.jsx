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

  const navigate = (href) => {
    if (href === pathname) return
    setIsTransitioning(true)
    setIsPageLoaded(false)
    
    // Wait for curtain to slide up (0.6s), then push route
    setTimeout(() => {
      router.push(href)
    }, 600) 
  }

  // When pathname changes, mark page as loaded
  useEffect(() => {
     const t = setTimeout(() => setIsPageLoaded(true), 10)
     return () => clearTimeout(t)
  }, [pathname])

  const handleLoadingComplete = useCallback(() => {
    setIsTransitioning(false)
    setIsFirstLoad(false)
  }, []) 

  return (
    <TransitionContext.Provider value={{ navigate, isTransitioning }}>
      {children}
      <SlideCurtain 
        isActive={isTransitioning} 
        isFirstLoad={isFirstLoad}
        isPageLoaded={isPageLoaded}
        onComplete={handleLoadingComplete}
      />
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}

function SlideCurtain({ isActive, isFirstLoad, isPageLoaded, onComplete }) {
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
             <LoadingCounter 
                isPageLoaded={isPageLoaded} 
                onComplete={onComplete} 
             />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function LoadingCounter({ isPageLoaded, onComplete }) {
  const [progress, setProgress] = useState(0)
  const isLoadedRef = useRef(isPageLoaded)

  // Keep ref in sync with prop without re-running the main interval effect
  useEffect(() => {
    isLoadedRef.current = isPageLoaded
  }, [isPageLoaded])

  useEffect(() => {
    // Initial delay to avoid synchronous state update warning
    const startTimer = setTimeout(() => {
      let currentProgress = 0
      const interval = setInterval(() => {
          const loaded = isLoadedRef.current

          // If not loaded yet, stall at 90%
          if (!loaded && currentProgress >= 90) {
              return 
          }

          // Smooth non-linear increment for a more premium feel
          let increment = 0.3 // base crawl
          if (loaded) {
              // Decelerate as we approach 100% for an organic finish
              if (currentProgress > 95) increment = 0.1
              else if (currentProgress > 85) increment = 0.5
              else increment = 1.5 // catch up phase
          }
          
          currentProgress += increment
          
          if (currentProgress >= 100) {
            clearInterval(interval)
            currentProgress = 100
            // Linger at 100% for a moment before clearing the curtain
            setTimeout(() => {
                onComplete()
            }, 600)
          }
          
          setProgress(Math.floor(currentProgress))
      }, 16) // ~60fps logic for smoother counting

      // Cleanup function for the interval
      return () => clearInterval(interval)
    }, 0)

    return () => clearTimeout(startTimer)
  }, [onComplete]) // Run once on mount (onComplete is stable via useCallback)

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
