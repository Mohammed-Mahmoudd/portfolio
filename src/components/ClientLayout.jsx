'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import SmoothScroll from './SmoothScroll'

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="w-full min-h-screen bg-black">
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </div>
  )
}
