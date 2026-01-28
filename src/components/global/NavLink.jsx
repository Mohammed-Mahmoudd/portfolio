'use client'

import { useTransition } from '@/components/global/TransitionCurtain'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children, className, onClick, ...props }) {
  const { navigate } = useTransition()
  const pathname = usePathname()

  const handleClick = (e) => {
    // Call custom onClick if provided
    if (onClick) onClick(e)

    // Only intercept if it's an internal link and not already on the same page
    const isExternal = href.startsWith('http') || props.target === '_blank'
    const isSamePage = href === pathname

    if (!isExternal && !isSamePage && !e.defaultPrevented) {
      e.preventDefault()
      navigate(href)
    }
  }

  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
