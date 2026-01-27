'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'My World', href: '/world' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

import { useTransition } from '@/components/TransitionCurtain'

// ... existing imports

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const { navigate } = useTransition()

  const handleNavClick = (e, href) => {
     e.preventDefault()
     setIsOpen(false)
     navigate(href)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className={`fixed top-4 left-4 right-4 md:top-6 md:left-0 md:w-full z-50 px-6 py-4 md:px-24 md:py-6 flex items-center justify-between transition-all duration-300 text-white rounded-2xl md:rounded-none ${
        isOpen ? 'bg-black' : 'bg-transparent'
      } md:bg-transparent md:mix-blend-difference`}
    >
        {/* Logo / Brand */}
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="relative z-50 text-2xl font-[family-name:var(--font-space-grotesk)] tracking-tighter select-none">
            MM
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center  gap-8 md:gap-12">
            {navItems.map((item, index) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative text-sm uppercase tracking-widest font-medium group select-none"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <span className="relative z-10 text-zinc-300 group-hover:text-white transition-colors duration-300">
                        {item.name}
                    </span>
                    {/* Hover Line */}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
            ))}
            
            {/* Open to Work Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 ml-4">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-cyan-300 font-medium">Open to Work</span>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="relative z-50  md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <X /> : <Menu />}
        </button>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-screen h-screen z-40 bg-[#09090B] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-6xl font-black font-[family-name:var(--font-space-grotesk)] tracking-tighter text-white hover:text-zinc-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
    </motion.nav>
  )
}

