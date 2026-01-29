'use client'

import React from 'react'
import WorkAlignmentHero from '@/components/projects/WorkAlignmentHero'
import Experience from '@/components/projects/Experience'
import Footer from '@/components/global/Footer'

export default function WorkPage() {
  return (
    <main className="w-full bg-black">
       <WorkAlignmentHero />
       
       {/* Experience Section */}
       <div className="relative z-10">
         <Experience />
       </div>
       
       <div className="relative z-50 w-full bg-black">
        <Footer />
       </div>
    </main>
  )
}
