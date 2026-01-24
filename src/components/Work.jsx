'use client'

import { motion } from 'framer-motion'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A modern web application built with Next.js and TypeScript',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#'
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Full-stack e-commerce platform with real-time features',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Interactive 3D visualization dashboard',
    tech: ['Three.js', 'React', 'WebGL'],
    link: '#'
  }
]

export default function Work() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      {/* Work Section Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderGradientCanvas
          style={{
            width: '100%',
            height: '100%',
          }}
          pixelDensity={1}
          fov={45}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={-30}
            rotationZ={70}
            color1="#73bfc4"
            color2="#ff810a"
            color3="#8da0ce"
            reflection={0.4}
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            enableTransition={false}
          />
        </ShaderGradientCanvas>
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-8 md:px-24 py-20">
        <div className="w-full max-w-7xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] mb-6">
              LATEST WORK
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end z-10">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-3xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* View Project Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
