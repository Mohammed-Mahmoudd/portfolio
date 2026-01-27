'use client'

import { useTransition } from './TransitionCurtain'
import { useRouter } from 'next/navigation'

export default function TransitionLink({ href, children, className, ...props }) {
  const router = useRouter()
  // Check if context exists before destructuring to be safe
  const transition = useTransition()
  const navigate = transition?.navigate

  const handleClick = (e) => {
    e.preventDefault()
    
    // If context is missing, fallback to normal router
    if (!navigate) {
      router.push(href)
      return
    }

    if (window.location.pathname === href) return

    navigate(href)
  }

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
