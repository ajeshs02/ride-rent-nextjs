'use client'

import { useAppContext } from '@/context/AppContext'

export default function ClientHeading() {
  const { selectedType, selectedLocation } = useAppContext()
  return (
    <h2 className="heading">
      Explore the most popular {selectedType.name} for rent in{' '}
      {selectedLocation.name}
    </h2>
  )
}
