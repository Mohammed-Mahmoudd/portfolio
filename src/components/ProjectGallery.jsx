'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Tchaikovsky School",
    category: "Music Education Platform",
    id: 1,
    img: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2072&auto=format&fit=crop",
    url: "https://tchaikovskyschool.com"
  },
  {
    title: "Elmetr",
    category: "Legal Tech Ecosystem",
    id: 2,
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2542&auto=format&fit=crop",
    url: "https://elmetr.com"
  },
  {
    title: "Alserag",
    category: "Corporate Portal",
    id: 3,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    url: "https://el-serag.com"
  },
  {
    title: "Elmetr App",
    category: "Mobile Application",
    id: 5,
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "To Do App",
    category: "Productivity Tool",
    id: 6,
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop"
  }
]

const ProjectCard = ({ project }) => {
  const Component = project.url ? 'a' : 'div'
  const props = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Component 
      {...props}
      className="group relative h-[500px] w-[350px] md:h-[600px] md:w-[450px] bg-zinc-900 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 grayscale hover:grayscale-0 block flex-shrink-0"
    >
      
      {/* Background Image */}
      <Image 
        src={project.img} 
        alt={project.title} 
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Project Index */}
      <div className="absolute top-6 right-6 z-20">
         <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white font-mono text-sm group-hover:scale-110 transition-transform">
           0{project.id}
         </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-500/20 rounded-full backdrop-blur-sm">
            {project.category}
        </span>
        <h3 className="text-4xl md:text-5xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-none mb-4">
             {project.title}
        </h3>
        
        {/* View Project Button */}
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
           {project.url ? 'Visit Website' : 'View Concept'} <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Component>
  )
}

export default function ProjectGallery() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Map vertical scroll progress (0 to 1) to horizontal movement
  // Tuning: -85% for 6 cards to ensure full visibility
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Title pinned to left - Higher z-index to stay on top */}
        <div className="absolute top-12 left-8 md:top-24 md:left-24 z-20 mix-blend-difference pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-none">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WORKS</span>
          </h2>
        </div>

        {/* Moving Track */}
        <motion.div style={{ x }} className="flex gap-8 md:gap-16 pl-[40vw] pr-24">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-24 text-zinc-500 font-mono text-xs tracking-widest opacity-50 animate-pulse">
           SCROLL TO EXPLORE
        </div>
        
      </div>
    </section>
  )
}
