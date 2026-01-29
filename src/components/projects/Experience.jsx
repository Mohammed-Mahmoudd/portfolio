'use client'

import { motion } from 'framer-motion'
import { Calendar, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    company: "Tchaikovsky School",
    role: "Full Stack Developer",
    period: "2025 - Present",
    type: "work",
    description: "Architecting and scaling educational ecosystems. Developed seamless CMS integrations and high-performance mobile applications for school management.",
    skills: ["Next.js", "React Native", "Sanity CMS", "Node.js", "Express"],
    link: "https://www.linkedin.com/company/tchaikovsky-school",
    details: [
      "Built a unified management system for 500+ students",
      "Optimized site performance achieving 95+ Lighthouse scores",
      "Implemented real-time synchronization between web and mobile"
    ]
  },
  {
    company: "WE School for Applied Technology",
    role: "Information Technology Specialist",
    period: "3 Years",
    type: "education",
    description: "Intensive specialized program for applied technology in Egypt. Focused on professional software development, networking, and engineering principles.",
    skills: ["Software Development", "Frontend", "Backend", "Networking", "Problem Solving"],
    link: "https://www.linkedin.com/company/weappliedtechnologyschools/",
    details: [
      "Graduated with distinction in Software Engineering track",
      "Developed full-stack applications as capstone projects",
      "Mastered fundamental networking and systems architecture"
    ]
  }
]

export default function Experience() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-cyan-500/50" />
              <span className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">The Evolution</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-[family-name:var(--font-space-grotesk)] leading-[0.8] mb-8">
              THE <span className="text-cyan-400">JOURNEY</span>
            </h2>
          </motion.div>

          {/* Stats Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12"
          >
            <div>
              <div className="text-4xl font-bold text-white font-mono">03+</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Years Coding</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 font-mono">01+</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Professional</div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              
              return (
                <div key={exp.company} className="relative">
                  
                  {/* Journey Node */}
                  <div className="absolute left-[16px] md:left-1/2 top-10 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-black border-2 border-cyan-400 box-content shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  </div>

                  {/* Card Container */}
                  <div className={`flex flex-col md:flex-row items-start justify-between w-full pl-10 md:pl-0`}>
                    
                    {/* Date/Period Side (Desktop Only) */}
                    <div className={`hidden md:flex w-[45%] mt-8 ${isEven ? 'justify-end text-right' : 'order-1 justify-start text-left'}`}>
                       <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase opacity-70">
                         {exp.period}
                       </span>
                    </div>

                    {/* Content Card Side */}
                    <div className={`w-full md:w-[45%] ${isEven ? 'order-1' : ''}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-8 rounded-3xl border border-white/10 bg-black hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-6">
                           <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-cyan-400">
                              {exp.type === 'work' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                           </div>
                           <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{exp.type}</span>
                        </div>

                        <div className="mb-6">
                           <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-400 transition-colors">
                             {exp.company}
                           </h3>
                           <p className="text-zinc-400 mt-1 font-medium italic">
                             {exp.role}
                           </p>
                           <span className="md:hidden text-cyan-400/60 font-mono text-[10px] tracking-widest uppercase mt-2 block">
                             {exp.period}
                           </span>
                        </div>

                        {/* Detail Bullets */}
                        <div className="space-y-3 mb-8">
                           {exp.details.map((detail, dIdx) => (
                             <div key={dIdx} className="flex items-start gap-2.5">
                               <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                               <span className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                 {detail}
                               </span>
                             </div>
                           ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {exp.skills.map(skill => (
                            <span key={skill} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded-lg text-zinc-500">
                              {skill}
                            </span>
                          ))}
                        </div>

                        {exp.link && (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] font-mono text-cyan-400 hover:gap-3 transition-all duration-300 uppercase tracking-widest"
                          >
                            Visit Link
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </motion.div>
                    </div>

                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
