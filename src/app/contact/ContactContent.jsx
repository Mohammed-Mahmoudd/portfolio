'use client'

import { motion } from 'framer-motion'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'
import { Send, ArrowRight, Loader2 } from 'lucide-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import NavLink from '@/components/global/NavLink'

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed123m/' },
  { name: 'WhatsApp', href: 'https://wa.me/201126633680?text=Hello%20Mohammed!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.' },
]

export default function ContactContent() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('IDLE') // IDLE, SENDING, SENT, ERROR
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('SENDING')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4a24eac5-7518-46e5-b9e6-88367d47ed59',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact from ${formState.name}`,
          from_name: 'Portfolio Bot'
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus('SENT')
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('IDLE'), 4000)
      } else {
        setStatus('ERROR')
        setTimeout(() => setStatus('IDLE'), 4000)
      }
    } catch (error) {
      console.error('Email error:', error)
      setStatus('ERROR')
      setTimeout(() => setStatus('IDLE'), 4000)
    }
  }

  return (
    <div className="relative w-full min-h-screen lg:h-screen bg-[#09090B] flex items-center justify-center p-4 md:p-8">
      {/* Frame Container */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl flex items-center justify-center" style={{ isolation: 'isolate' }}>
        
        {/* BACKGROUND: User Provided ShaderGradient */}
        <div className="absolute inset-0 z-0">
          <ShaderGradientCanvas
            style={{
              width: '100%',
              height: '100%',
            }}
            pixelDensity={isMobile ? 0.6 : 1}
            pointerEvents="none"
            
          >
            <ShaderGradient
              animate="on"
              type="plane"
              wireframe={true}
              shader="defaults"
              uTime={12}
              uSpeed={0.5}
              uStrength={1}
              uDensity={isMobile ? 1.2 : 2}
              uFrequency={0}
              uAmplitude={0}
              positionX={0}
              positionY={0}
              positionZ={0}
              rotationX={60}
              rotationY={0}
              rotationZ={30}
              color1="#242775"
              color2="#101035"
              color3="#4b1373 "
              reflection={0.4}
              cAzimuthAngle={180}
              cPolarAngle={70}
              cDistance={2.6}
              cameraZoom={isMobile ? 6 : 8.5}
              lightType="3d"
              brightness={1.3}
              envPreset="city"
              grain="on"
              toggleAxis={false}
              zoomOut={false}
              hoverState=""
              enableTransition={false}
            />
          </ShaderGradientCanvas>
        </div>

        {/* OVERLAY: Scanlines & Vignette */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,black_120%)] pointer-events-none" />

        {/* CONTENT GRID */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* LEFT: Typography & Status */}
          <div className="flex flex-col justify-center h-full pt-10 mt-5 md:pt-20 pb-10 md:pb-0">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             >
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-[0.85] tracking-tighter mb-8 mix-blend-difference">
                 LET&apos;S<br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">TALK</span>
               </h1>

               <div className="space-y-8 mt-12">
                  {/* Phone */}
                  <div className="group">
                    <p className="text-xs font-mono text-zinc-500 tracking-widest mb-2">VOICE UPLINK</p>
                    <a href="tel:+20112663680" className="text-2xl md:text-3xl text-white font-[family-name:var(--font-space-grotesk)] hover:text-cyan-400 transition-colors flex items-center gap-3">
                      <span>+20 112 663 680</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <p className="text-xs font-mono text-zinc-500 tracking-widest mb-2">DIGITAL MAIL</p>
                    <a href="mailto:gamermada2@gmail.com" className="text-2xl md:text-3xl text-white font-[family-name:var(--font-space-grotesk)] hover:text-cyan-400 transition-colors flex items-center gap-3">
                      <span>gamermada2@gmail.com</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>

                  {/* Socials */}
                  <div>
                    <p className="text-xs font-mono text-zinc-500 tracking-widest mb-4">NETWORK NODES</p>
                    <div className="flex flex-wrap gap-4">
                      {socials.map((social) => (
                        <NavLink 
                          key={social.name} 
                          href={social.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all text-sm font-mono text-zinc-400 hover:text-white"
                        >
                          {social.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
               </div>
             </motion.div>
          </div>

          {/* RIGHT: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto relative group"
          >
            {/* Glass Panel */}
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl overflow-hidden">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-bold ml-1">Name</label>
                  <input 
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900/80 transition-all font-[family-name:var(--font-space-grotesk)] placeholder:text-zinc-600"
                    placeholder="JOHN DOE"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-bold ml-1">Email</label>
                  <input 
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900/80 transition-all font-[family-name:var(--font-space-grotesk)] placeholder:text-zinc-600"
                    placeholder="JOHN@EXAMPLE.COM"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-bold ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900/80 transition-all font-[family-name:var(--font-space-grotesk)] placeholder:text-zinc-600 resize-none"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'SENDING' || status === 'SENT'}
                  className={`mt-4 w-full border py-4 font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-3 group relative overflow-hidden disabled:cursor-not-allowed
                    ${status === 'ERROR' 
                      ? 'bg-red-500/10 border-red-500/50 text-red-500' 
                      : 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                    }
                  `}
                >
                  {status === 'IDLE' && (
                    <>
                      <span>Transmit Data</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {status === 'SENDING' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Uplinking...</span>
                    </>
                  )}
                  {status === 'SENT' && (
                    <>
                      <span>Transmission Complete</span>
                    </>
                  )}
                  {status === 'ERROR' && (
                    <>
                      <span>Transmission Failed</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

        {/* FOOTER: Absolute Copyright */}
        <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-mono">
            © {new Date().getFullYear()} Mohammed Mahmoud. All Systems Operational.
          </p>
        </div>
      </div>
    </div>
  )
}
