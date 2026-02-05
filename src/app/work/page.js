
import React from 'react'
import WorkContent from './WorkContent'

export const metadata = {
  title: "Work | Mohammed Mahmoud",
  description: "Explore my selected works as a Web & Full Stack Developer, featuring premium web experiences, mobile applications, and interactive 3D designs.",
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: "Work | Mohammed Mahmoud",
    description: "Explore my selected works as a Web & Full Stack Developer, featuring premium web experiences, mobile applications, and interactive 3D designs.",
    url: "https://mohammed-mahmoud.com/work",
  },
  twitter: {
    title: "Work | Mohammed Mahmoud",
    description: "Explore my selected works as a Web & Full Stack Developer, featuring premium web experiences, mobile applications, and interactive 3D designs.",
  },
}

export default function WorkPage() {
  return <WorkContent />
}
