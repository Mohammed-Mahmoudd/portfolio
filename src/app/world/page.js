import WorldHero from '@/components/MyWorld/WorldHero'
import Footer from '@/components/global/Footer'

export const metadata = {
  title: "My World | Mohammed Mahmoud",
  description: "Experience an interactive 3D journey through my creative world. Featuring advanced Three.js and Framer Motion experiments.",
  alternates: {
    canonical: '/world',
  },
  openGraph: {
    title: "My World | Mohammed Mahmoud",
    description: "Experience an interactive 3D journey through my creative world.",
    url: "https://mohammed-mahmoud.com/world",
  },
}

export default function World() {
  return (
    <main className="w-full bg-black">
      {/* Scroll-Driven Hero Experience */}
      <WorldHero />

      {/* Footer */}
      <div className="relative z-50 w-full bg-black">
        <Footer />
      </div>
    </main>
  )
}
