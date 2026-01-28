'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import NavLink from '@/components/global/NavLink'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'My World', href: '/world' },
  { name: 'Projects', href: '/work' },
  { name: 'Contact', href: '/contact' },
]




export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null) 
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className={`fixed top-4 left-4 right-4 lg:top-6 lg:left-0 lg:w-full z-[100] px-6 py-4 lg:px-24 lg:py-6 flex items-center justify-end transition-all duration-300 text-white rounded-2xl lg:rounded-none ${
        isOpen ? 'bg-black' : 'bg-transparent'
      } lg:bg-transparent lg:mix-blend-difference`}
    >
        {/* Logo Removed */}

        {/* Links */}
        <div className="hidden lg:flex items-center  gap-8 md:gap-12">
            {navItems.map((item, index) => (
                <NavLink 
                    key={item.name} 
                    href={item.href}
                    className="relative text-sm uppercase tracking-widest font-medium group select-none"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <span className="relative z-10 text-zinc-300 group-hover:text-white transition-colors duration-300">
                        {item.name}
                    </span>
                    {/* Hover Line */}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </NavLink>
            ))}
            
            {/* Open to Work Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 ml-4">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-cyan-300 font-medium">Open to Work</span>
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="relative z-50  lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <X /> : <Menu />}
        </button>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { opacity: 0, transition: { staggerChildren: 0.02, staggerDirection: -1, delay: 0.2} }
              }}
              className="fixed top-0 left-0 w-screen h-screen z-40 bg-[#09090B] flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    closed: { opacity: 0, y: 20, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <NavLink
                    href={item.href}
                    onClick={closeMenu}
                    className="text-6xl font-black font-[family-name:var(--font-space-grotesk)] tracking-tighter text-white hover:text-zinc-500 transition-colors"
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
    </motion.nav>
  )
}

