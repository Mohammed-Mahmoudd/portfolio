'use client'

import React from 'react'

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
    title: "Tchaikovsky App",
    category: "Mobile Application",
    id: 4,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop"
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

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-black pt-32 px-8 md:px-24 pb-24">
       <div className="mb-24">
         <h1 className="text-6xl md:text-9xl font-black text-white font-[family-name:var(--font-space-grotesk)] tracking-tighter mb-8">
           SELECTED <br/> <span className="text-cyan-400">WORKS</span>
         </h1>
         <p className="text-zinc-400 text-xl max-w-2xl">
           A collection of digital products, websites, and experiences crafted with precision and passion.
         </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
         {projects.map((project, index) => (
           <a 
             href={project.url || '#'} 
             target={project.url ? "_blank" : "_self"}
             key={project.id} 
             className={`group block ${index % 2 === 1 ? 'md:mt-32' : ''}`}
           >
             <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-zinc-900 mb-8 relative">
               <img 
                 src={project.img} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
             </div>
             
             <div className="flex justify-between items-start border-t border-white/20 pt-6">
                <div>
                   <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 block">0{project.id} — {project.category}</span>
                   <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-400 transition-colors">
                     {project.title}
                   </h2>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  ↗
                </div>
             </div>
           </a>
         ))}
       </div>
    </main>
  )
}
