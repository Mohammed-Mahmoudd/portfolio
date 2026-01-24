'use client'

import { motion } from 'framer-motion'
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
      className="fixed top-0 left-0 w-full z-50 px-8 md:px-24 py-6 flex items-center justify-between mix-blend-difference text-white"
    >
        {/* Logo / Brand */}
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tighter">
            MM
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 md:gap-12">
            {navItems.map((item, index) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative text-sm uppercase tracking-widest font-medium group"
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
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <X /> : <Menu />}
        </button>
    </motion.nav>
  )
}

