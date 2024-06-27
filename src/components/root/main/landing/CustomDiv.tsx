'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'

export default function CustomDiv({ children }: { children: React.ReactNode }) {
  const { selectedType } = useAppContext()

  return (
    <div className={`landing-bg `}>
      <div className="imageWrapper">
        <Image
          src={`/assets/img/bg/${selectedType.value}.webp`}
          className="image"
          alt="background image"
          quality={100}
          priority
          fill
        />
      </div>
      {children}
    </div>
  )
}
