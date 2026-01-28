import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import BentoGrid from '@/components/home/BentoGrid'
import ProjectGallery from '@/components/home/ProjectGallery'
import Philosophy from '@/components/home/Philosophy'
import Footer from '@/components/global/Footer'

export default function Home() {
  return (
    <main className="w-full bg-black">
      {/* Hero Section */}
      
        <Hero />
      
      {/* About Section */}
      <div background="bg-[#09090B]/85">
        <About />
      </div>
      {/* Projects Section */}
      <ProjectGallery />
      {/* Bento Grid */}
      <div background="bg-[#09090B]/85">
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
