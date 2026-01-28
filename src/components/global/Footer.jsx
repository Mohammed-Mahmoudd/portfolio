import NavLink from '@/components/global/NavLink'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full bg-black border-t border-white/10 pt-16 md:pt-20 pb-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-12 md:gap-10">
          {/* CTA */}
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl md:text-6xl lg:text-8xl font-black text-white font-[family-name:var(--font-space-grotesk)] tracking-tight mb-8">
              LET&apos;S WORK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                TOGETHER
              </span>
            </h2>
            <NavLink 
              href="/contact"
              className="inline-flex items-center justify-center md:justify-start gap-4 px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white text-black font-bold text-base md:text-lg hover:bg-cyan-400 transition-all duration-300 w-full md:w-auto"
            >
              JUST A
              <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            </NavLink>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:flex gap-x-8 gap-y-12 md:gap-16 lg:gap-24 text-zinc-400 w-full md:w-auto">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2">Socials</span>
              <NavLink href="https://www.linkedin.com/in/mohammed123m/" target='_blank' className="hover:text-cyan-400 transition-colors text-sm md:text-base">LinkedIn</NavLink>
              <NavLink href="https://github.com/Mohammed-Mahmoudd" target='_blank' className="hover:text-cyan-400 transition-colors text-sm md:text-base">GitHub</NavLink>
              <NavLink href="http://wa.me/201126633680" target='_blank' className="hover:text-cyan-400 transition-colors text-sm md:text-base">WhatsApp</NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2">Sitemap</span>
              <NavLink href="/" className="hover:text-cyan-400 transition-colors text-sm md:text-base">Home</NavLink>
              <NavLink href="/world" className="hover:text-cyan-400 transition-colors text-sm md:text-base">My World</NavLink>
              <NavLink href="/work" className="hover:text-cyan-400 transition-colors text-sm md:text-base">Work</NavLink>
              <NavLink href="/contact" className="hover:text-cyan-400 transition-colors text-sm md:text-base">Contact</NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs md:text-sm text-zinc-600 border-t border-white/5 pt-8">
          <p>© {currentYear} Mohammed Mahmoud. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Live & Active</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
