import Hero from '@/components/home/Hero'
import Footer from '@/components/global/Footer'
import dynamic from 'next/dynamic'
const About = dynamic(() => import('@/components/home/About'))
const BentoGrid = dynamic(() => import('@/components/home/BentoGrid'))
const ProjectGallery = dynamic(() => import('@/components/home/ProjectGallery'))
const Philosophy = dynamic(() => import('@/components/home/Philosophy'))

export const metadata = {
  title: "Mohammed Mahmoud | Full Stack & Web Developer",
  description: "Expert Web & Full Stack Developer specializing in premium web experiences, high-performance mobile apps, and interactive 3D interfaces.",
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      
        <Hero />
      
      {/* About Section */}
      <div className="bg-[#09090B]/85">
        <About />
      </div>
      {/* Projects Section */}
        <ProjectGallery />
      {/* Bento Grid */}
      <div className="bg-[#09090B]/85">
          <BentoGrid />
      </div>
      {/* Philosophy Section */}
      
        <Philosophy />
      

      {/* Footer Section */}
      <div className="relative z-50 w-full bg-black">
        <Footer />
      </div>
    </main>
  );
}
