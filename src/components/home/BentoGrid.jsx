'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Code2, Building, Server , Users,Coffee } from 'lucide-react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// Dynamically import Map with no SSR to avoid window is not defined errors
const Map = dynamic(() => import('../home/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-900/50 animate-pulse" />
})

const TimeWidget = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col justify-between h-full p-6 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] group/card">
      <div className="flex justify-between items-start">
        <span className="text-zinc-400 text-xs font-mono tracking-[0.2em] group-hover/card:text-cyan-400 transition-colors">LOCAL TIME</span>
        <Clock className="w-5 h-5 text-zinc-500 group-hover/card:text-cyan-400 transition-colors" />
      </div>
      <div>
        <div className="text-3xl md:text-2xl lg:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)] tabular-nums tracking-tight">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-zinc-500 text-sm mt-1 mb-1">Cairo, Egypt (GMT+2)</div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500/50 w-[60%] animate-pulse" />
        </div>
      </div>
    </div>
  )
}

const LocationWidget = ({ dragging = true }) => (
  <div className="relative overflow-hidden h-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] group/card">
    {/* Real Interactive Map */}
    <div 
      className="absolute inset-0 z-0 opacity-80 group-hover/card:opacity-100 transition-all duration-700 cursor-grab active:cursor-grabbing"
      data-cursor="grab"
    >
      {/* 29°59'54.4"N 31°26'17.7"E -> 29.998444, 31.438250 */}
      <Map center={[29.998444, 31.438250]} zoom={15} dragging={dragging} />
    </div>
    
    {/* Minimal Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
    
    {/* Scanline Effect */}
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.1),transparent)] translate-y-[-100%] group-hover/card:translate-y-[100%] transition-transform duration-[1.5s] z-20 pointer-events-none" />

    <div className="relative z-20 h-full p-6 flex flex-col justify-between pointer-events-none">
      <div className="flex justify-end">
        <div className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 group-hover/card:scale-110 transition-transform shadow-lg shadow-cyan-500/10">
          <MapPin className="w-4 h-4 text-cyan-400" />
        </div>
      </div>
      <div>
        <div className="text-xl md:text-xl lg:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-md">Based in</div>
        <div className="text-zinc-300 text-sm font-medium">Cairo, Egypt</div>
      </div>
    </div>
  </div>
)

const StackWidget = () => (
  <div className="relative h-full p-6 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] flex flex-col justify-between group/card overflow-hidden">
     
     {/* Background decorative code */}
     <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden font-mono text-[10px] leading-tight text-purple-300 select-none p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap opacity-50">
            {`const stack = { id: ${i}, type: 'tech', visible: true }; // optimized`}
          </div>
        ))}
     </div>

     <div className="flex justify-between items-start relative z-10">
        <span className="text-zinc-400 text-xs font-mono tracking-[0.2em] group-hover/card:text-purple-400 transition-colors">CORE STACK</span>
        <Code2 className="w-5 h-5 text-zinc-500 group-hover/card:text-purple-400 transition-colors" />
      </div>
      <div className="flex flex-wrap gap-1.5 md:gap-0.5 lg:gap-2 content-end relative z-10 mt-auto pt-6">
        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Three.js', 'Laravel', 'PHP', 'JS', 'Bootstrap', 'Framer', 'MySQL', 'Figma', 'Git'].map((tech) => (
          <span key={tech} className="px-2 py-1 md:px-2 md:py-2 lg:px-3 lg:py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs md:text-[10px] lg:text-xs font-medium text-zinc-300 hover:bg-white/10 hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)] transition-all cursor-default relative overflow-hidden group/item">
            <span className="relative z-10">{tech}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover/item:opacity-100 transition-opacity" />
          </span>
        ))}
      </div>
  </div>
)

const StatusWidget = () => (
   <div className="h-full p-6 bg-gradient-to-br from-cyan-950/30 to-blue-950/30 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] flex flex-col justify-between relative overflow-hidden group/card">
      
      {/* Radar Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(transparent,rgba(6,182,212,0.1),transparent)] animate-[spin_4s_linear_infinite] opacity-0 group-hover/card:opacity-100 transition-opacity" />
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full group-hover/card:bg-cyan-500/20 transition-colors" />
      
      <div className="flex justify-between items-start relative z-10">
        <span className="text-zinc-400 text-xs font-mono tracking-[0.2em] group-hover/card:text-emerald-400 transition-colors">STATUS</span>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_2px_rgba(16,185,129,0.4)]"></span>
        </span>
      </div>
      <div className="relative z-10">
        <div className="text-xl md:text-xl lg:text-2xl font-bold text-white mb-1 tracking-tight">Open to work</div>
        <div className="text-zinc-400 text-sm">Full-time / Contract</div>
      </div>
   </div>
)

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-4 p-4 bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
    <div className="p-3 bg-white/5 rounded-xl text-zinc-500 group-hover:text-white group-hover:bg-white/10 transition-all">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-xl md:text-xl lg:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] group-hover:scale-105 transition-transform origin-left">{value}</div>
      <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{label}</div>
    </div>
  </div>
)

const BentoGrid = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="relative w-full min-h-screen py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3 md:mb-4">
            Digital <span className="text-cyan-400">Footprint</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">A glimpse into my current status, location, and the technologies powering my work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
          {/* Main Status - Large Square */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1 h-[250px] md:h-full"
          >
            <LocationWidget dragging={!isMobile} />
          </motion.div>


          {/* Time - Half Width on Tablet */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-1 h-[200px] md:h-full"
          >
            <TimeWidget />
          </motion.div>

          {/* Status - Half Width on Tablet */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-2 h-[200px] md:h-full"
          >
            <StatusWidget />
          </motion.div>

          {/* Stack - Full Width on Tablet */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1 min-h-[300px] md:h-full md:min-h-0"
          >
            <StackWidget />
          </motion.div>
        </div>

        
        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
             <StatCard label="Clients" value="5+" icon={Users} />
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
             <StatCard label="Companies" value="3+" icon={Building} />
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }}>
             <StatCard label="Projects" value="10+" icon={Server} />
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} viewport={{ once: true }}>
             <StatCard label="Milk Tea" value="∞" icon={Coffee} />
           </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BentoGrid
