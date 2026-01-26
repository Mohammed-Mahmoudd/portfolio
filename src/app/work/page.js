'use client'

import React from 'react'
import WorkAlignmentHero from '@/components/WorkAlignmentHero'
import Footer from '@/components/Footer'

export default function WorkPage() {
  return (
    <main className="w-full bg-black">
       <WorkAlignmentHero />
       
       <div className="relative z-50 w-full bg-black">
        <Footer />
       </div>
    </main>
  )
}
