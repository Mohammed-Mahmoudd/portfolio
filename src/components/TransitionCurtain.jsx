'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, createContext, useContext, useRef, useCallback } from 'react'

const TransitionContext = createContext(null)

export function TransitionProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  const navigate = (href) => {
    if (href === pathname) return
    setIsTransitioning(true)
    setIsPageLoaded(false)
    // Wait for curtain to cover screen (1.2s), then push route
    setTimeout(() => {
      router.push(href)
    }, 1200) 
  }

  // When pathname changes, it means data is loaded/route is ready
  useEffect(() => {
    if (isTransitioning) {
       // Extended delay (2s) to allow heavy backgrounds/3D elements to initialize/render
       const t = setTimeout(() => setIsPageLoaded(true), 2000)
       return () => clearTimeout(t)
    }
  }, [pathname, isTransitioning]) 

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false)
    setIsPageLoaded(false)
    setIsFirstLoad(false)
  }, [])

  return (
    <TransitionContext.Provider value={{ navigate, isTransitioning }}>
      {children}
      <TransitionCurtain 
        isActive={isTransitioning} 
        isPageLoaded={isPageLoaded}
        onComplete={handleTransitionComplete}
        isFirstLoad={isFirstLoad}
      />
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  return useContext(TransitionContext)
}

function TransitionCurtain({ isActive, isPageLoaded, onComplete, isFirstLoad }) {
  // Removed scroll lock effect as per user request
  
  // Handle hold time before closing
  useEffect(() => {
      // Once we are active, and page is loaded, and counter finished...
      // Actually, LoadingCounter will call onComplete when it hits 100%
  }, [isPageLoaded])

  return (
    <AnimatePresence mode='wait'>
      {isActive && (
        <motion.div
          key="curtain"
          initial={{ y: isFirstLoad ? '0%' : '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center pointer-events-auto"
        >
           <LoadingCounter isPageLoaded={isPageLoaded} onComplete={onComplete} />
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

          currentProgress += 1
          
          if (currentProgress > 100) {
            clearInterval(interval)
            currentProgress = 100
            // Wait a tiny bit at 100 before closing
            setTimeout(() => {
                onComplete()
            }, 200)
          }
          
          setProgress(currentProgress)
      }, 10) // 10ms speed

      // Cleanup function for the interval
      return () => clearInterval(interval)
    }, 0)

    return () => clearTimeout(startTimer)
  }, [onComplete]) // Run once on mount (onComplete is stable via useCallback)

  return (
    <div className="fixed bottom-12 right-12 z-50 overflow-hidden mix-blend-difference">
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
