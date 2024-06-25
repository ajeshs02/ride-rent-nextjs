'use client'

import { useAppContext } from '@/context/AppContext'

export default function BrandHeading() {
  const { selectedLocation, selectedType } = useAppContext()
  return (
    <h2>
      Rent {selectedType.name} from top brands for {selectedLocation.name}
    </h2>
  )
}
