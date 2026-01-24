import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import BentoGrid from '@/components/BentoGrid'
import ProjectGallery from '@/components/ProjectGallery'
import Philosophy from '@/components/Philosophy'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function Home() {
  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      <div className="h-screen w-full">
        <Hero />
      </div>

      {/* About Section */}
      <Section id="about" background="bg-zinc-950">
        <About />
      </Section>
{/* Project Gallery (Horizontal Scroll) */}
      <ProjectGallery />
      {/* Services Section */}
      <Section id="services" background="bg-black">
        <Services />
      </Section>
      
      {/* Bento Grid */}
      <div className="min-h-screen flex items-center bg-black">
        <BentoGrid />
      </div>

      

      {/* Philosophy Section */}
      <div>
        <Philosophy />
      </div>

      {/* Footer Section */}
      <div className="relative z-50 w-full bg-black">
        <Footer />
      </div>
    </main>
  );
}
