import { getProjectById, getAdjacentProjects } from '@/data/projectsData'
import ProjectDetail from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'

export default async function ProjectPage({ params }) {
  const { id } = await params
  const project = getProjectById(id)
  
  // If project not found, show 404
  if (!project) {
    notFound()
  }
  
  const adjacentProjects = getAdjacentProjects(id)
  
  return (
    <main className="w-full bg-black">
      <ProjectDetail project={project} adjacentProjects={adjacentProjects} />
      
      <div className="relative z-50 w-full bg-black">
        <Footer />
      </div>
    </main>
  )
}

// Generate static params for all projects (optional, for optimization)
export async function generateStaticParams() {
  const { projects } = await import('@/data/projectsData')
  
  return projects.map((project) => ({
    id: project.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  return {
    title: `${project.title} - Mohammed Mahmoud`,
    description: project.description,
  }
}
