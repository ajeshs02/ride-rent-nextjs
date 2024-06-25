'use client'

import MobileProfileCard from '@/components/card/mobile-profile-card/MobileProfileCard'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import { useRef } from 'react'

const DetailsSectionClient = ({ children }: { children: React.ReactNode }) => {
  const detailsSectionRef = useRef(null)
  const isInViewPort = useIntersectionObserver(detailsSectionRef)

  return (
    <div ref={detailsSectionRef}>
      {children}
      {isInViewPort && <MobileProfileCard />}
    </div>
  )
}

export default DetailsSectionClient
