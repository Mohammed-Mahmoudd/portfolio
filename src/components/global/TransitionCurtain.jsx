'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
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

        // Dynamic Speed - Slower & More Deliberate now
        let increment = 0.4 // Base crawl
        if (loaded) {
            if (isFirstLoad) {
                // First load: Premium slow approach
                if (prev > 95) increment = 0.2
                else if (prev > 80) increment = 0.8
                else increment = 1.2
            } else {
                // Internal Nav: High speed to clear curtain fast
                increment = 10 
            }
        }
        
        const next = prev + increment
        return next >= 100 ? 100 : next
      })
    }, 16)

    return () => clearInterval(interval)
  }, [isTransitioning, isFirstLoad])

  // Completion trigger when progress hits 100
  useEffect(() => {
    if (progress === 100 && isTransitioning) {
      // Faster exit for internal navigation, longer linger for first load
      const linger = isFirstLoad ? 600 : 200
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setIsFirstLoad(false)
      }, linger)
      return () => clearTimeout(timer)
    }
  }, [progress, isTransitioning, isFirstLoad])

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
             {/* Only show progress on first load/refresh */}
             {isFirstLoad ? (
               <LoadingCounter progress={progress} />
             ) : (
               /* Branding Badge for internal navigation */
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ 
                   opacity: [0, 1, 1],
                   scale: [0.8, 1, 1],
                   y: [0, -10, 0] 
                 }}
                 transition={{ 
                   duration: 2,
                   repeat: Infinity,
                   ease: "easeInOut",
                   times: [0, 0.5, 1]
                 }}
                 className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
               >
                 <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                 <Image 
                   src="/mm.png" 
                   alt="M" 
                   width={128}
                   height={128}
                   className="w-full rounded-full h-full object-contain relative z-10 opacity-40 grayscale brightness-200"
                 />
               </motion.div>
             )}
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
        <span>{Math.floor(progress)}</span>
        <span className="text-[4vw] mb-[2vw] ml-2 font-light opacity-50">%</span>
      </motion.div>
    </div>
  )
}
