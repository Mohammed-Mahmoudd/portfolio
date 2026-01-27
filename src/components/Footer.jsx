'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { useTransition } from '@/components/TransitionCurtain'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { navigate } = useTransition()

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    navigate(href)
  }

  return (
    <footer className="relative z-10 w-full bg-black border-t border-white/10 pt-20 pb-10 px-4 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          {/* CTA */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-8xl font-black text-white font-[family-name:var(--font-space-grotesk)] tracking-tight mb-8">
              LET&apos;S WORK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                TOGETHER
              </span>
            </h2>
            <Link 
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="inline-flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-400 transition-colors duration-300"
            >
              Start a Project
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            </Link>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-24 text-zinc-400">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2">Socials</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2">Sitemap</span>
              <Link href="/" onClick={(e) => handleLinkClick(e, '/')} className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/work" onClick={(e) => handleLinkClick(e, '/work')} className="hover:text-cyan-400 transition-colors">Work</Link>
              <Link href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600 border-t border-white/5 pt-8">
          <p>© {currentYear} Mohammed Mahmoud. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>All Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
