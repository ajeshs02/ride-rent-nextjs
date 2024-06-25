'use client'
import './CarouselHeading.scss'
import { useAppContext } from '@/context/AppContext'

export default function CarouselHeading({ heading }: { heading: string }) {
  const { selectedType, selectedLocation } = useAppContext()
  return (
    <h2 className="common-heading">
      {heading} {selectedType.name} for rent in {selectedLocation.name}
    </h2>
  )
}
