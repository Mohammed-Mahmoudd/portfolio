'use client'

import WorldHero from '@/components/MyWorld/WorldHero'
import Footer from '@/components/global/Footer'

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
