'use client'

import React from 'react'
import WorkSplit from '@/components/WorkSplit'
import Footer from '@/components/Footer'

export default function WorkPage() {
  return (
    <main className="w-full bg-black">
       <WorkSplit />
       
       <div className="relative z-50 w-full bg-black">
        <Footer />
       </div>
    </main>
  )
}
