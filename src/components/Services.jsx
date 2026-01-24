'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Building scalable, performant web applications with modern technologies like Next.js and React.',
    id: '01'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning user interfaces that drive engagement and retention.',
    id: '02'
  },
  {
    title: 'Technical Strategy',
    description: 'Architecting robust digital solutions and selecting the right stack for long-term success.',
    id: '03'
  }
]

export default function Services() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 md:px-24">
      <div className="w-full max-w-7xl">
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white font-[family-name:var(--font-space-grotesk)]">
            WHAT I DO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-light text-zinc-600 font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-500/50 transition-colors duration-300">
                    {service.id}
                  </span>
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
