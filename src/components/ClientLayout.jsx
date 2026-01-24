'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import SmoothScroll from './SmoothScroll'

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="w-full min-h-screen bg-black">
      <SmoothScroll>
        <AnimatePresence initial={false}>
          <motion.div
            key={pathname}
            initial={{ 
              x: '-100%', 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100vh', 
              zIndex: 50,
              overflowY: 'auto',
              background: 'black'
            }}
            animate={{ 
              x: 0,
              transitionEnd: { 
                position: 'relative', 
                height: 'auto',
                width: '100%',
                zIndex: 0,
                x: 0,
                overflowY: 'visible',
                top: 'auto',
                left: 'auto'
              }
            }}
            exit={{ 
              opacity: 1,
              zIndex: -1,
              transition: { duration: 0.8 } // Keep old page visible while new one slides in
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-full min-h-screen bg-black"
            onAnimationComplete={(definition) => {
              // Only reset scroll if we finished entering (x: 0)
              if (definition.x === 0) {
                 window.scrollTo(0, 0)
              }
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </SmoothScroll>
    </div>
  )
}
