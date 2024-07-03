'use client'

import useIsSmallScreen from '@/hooks/useIsSmallScreen'
import React from 'react'

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const isSmallScreen = useIsSmallScreen(1100)

  return (
    <main
      style={{
        marginTop: '4.84rem',
        marginLeft: isSmallScreen ? '' : '16rem',
        padding: '0.2rem',
      }}
    >
      {children}
    </main>
  )
}
