'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from '@/components/global/NavLink.jsx'
import projects from '../../data/projectGallary.js'

const ProjectCard = ({ project, index }) => {
  return (
    <NavLink 
      href={`/work/${project.id}`}
      className="group relative h-[60vh] min-h-[400px] w-[85vw] sm:w-[300px] md:w-[350px] lg:w-[420px] xl:w-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-zinc-900 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 grayscale hover:grayscale-0 block flex-shrink-0"
    >
      
      {/* Background Image */}
      <Image 
        src={project.img} 
        alt={project.title} 
        fill
        sizes="(max-width: 768px) 85vw, 450px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Project Index */}
      <div className="absolute top-6 right-6 z-20">
         <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white font-mono text-sm group-hover:scale-110 transition-transform">
           0{index + 1}
         </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-500/20 rounded-full backdrop-blur-sm">
            {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-none mb-3 md:mb-4">
             {project.title}
        </h3>
        
        {/* View Project Button */}
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
           View Story <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </NavLink>
  )
}

export default function ProjectGallery() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Map vertical scroll progress (0 to 1) to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Title pinned to left - Higher z-index to stay on top */}
        <div className="absolute top-8 left-4 md:top-16 lg:top-20 md:left-12 lg:left-20 z-20 mix-blend-difference pointer-events-none">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-none">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PROJECTS</span>
          </h2>
        </div>

        {/* Moving Track */}
        <motion.div style={{ x }} className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 pl-4 md:pl-[40vw] pr-16 md:pr-20 lg:pr-24">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.id} index={index} />
          ))}
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 md:left-24 text-zinc-500 font-mono text-xs tracking-widest opacity-50 animate-pulse">
           SCROLL TO EXPLORE
        </div>
        
      </div>
    </section>
  )
}
