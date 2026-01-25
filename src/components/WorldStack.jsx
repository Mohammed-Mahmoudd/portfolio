'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Code2, Palette, Database, Zap, Coffee, Headphones } from 'lucide-react'

const tools = [
  {
    category: "Development",
    icon: Code2,
    items: ["VS Code", "Git", "Terminal", "Postman"],
    color: "from-cyan-500 to-blue-500",
    size: "large"
  },
  {
    category: "Design",
    icon: Palette,
    items: ["Figma", "Photoshop", "Framer"],
    color: "from-purple-500 to-pink-500",
    size: "medium"
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Redis"],
    color: "from-green-500 to-emerald-500",
    size: "medium"
  },
  {
    category: "Workflow",
    icon: Zap,
    items: ["Early mornings", "Deep focus blocks", "Continuous learning"],
    color: "from-orange-500 to-red-500",
    size: "large"
  },
  {
    category: "Fuel",
    icon: Coffee,
    items: ["Coffee ☕", "Gym 💪", "Chess ♟️"],
    color: "from-yellow-500 to-orange-500",
    size: "small"
  },
  {
    category: "Focus",
    icon: Headphones,
    items: ["Lo-fi beats", "Ambient sounds", "Deep work mode"],
    color: "from-blue-500 to-indigo-500",
    size: "small"
  }
]

export default function WorldStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative w-full min-h-screen bg-black py-24 md:py-32 px-8 md:px-24 flex items-center">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono mb-4 block">My Setup</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] mb-6">
            DAILY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ARSENAL</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            The tools, habits, and environment that fuel my work
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            const gridClass = tool.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                             tool.size === 'medium' ? 'md:col-span-2' : 
                             'md:col-span-1'
            
            return (
              <motion.div
                key={tool.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative ${gridClass}`}
              >
                <div className="relative w-full h-full p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Background gradient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Category */}
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3">
                    {tool.category}
                  </h3>

                  {/* Items */}
                  <div className="relative z-10 space-y-2">
                    {tool.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.color}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
