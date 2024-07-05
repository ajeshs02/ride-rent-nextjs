'use client'

import React, { useState, useEffect } from 'react'
import { VEHICLE_TYPES } from '.'
import { useAppContext } from '@/context/AppContext'
import './VehicleTypes.scss'
import Image from 'next/image'
import { MdExpandMore } from 'react-icons/md' // Import MdExpandMore icon

const VehicleTypes = () => {
  const { selectedType } = useAppContext()

  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [showAllTypes, setShowAllTypes] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (['bus', 'van', 'yacht'].includes(selectedType.value)) {
    return null
  }

  const selectedVehicleCategory =
    VEHICLE_TYPES[selectedType.value as keyof typeof VEHICLE_TYPES] || []

  const visibleVehicleTypes = isSmallScreen
    ? showAllTypes
      ? selectedVehicleCategory
      : selectedVehicleCategory.slice(0, 6)
    : selectedVehicleCategory

  const singularizeType = (type: string) => {
    if (type.toLowerCase() === 'buses') {
      return 'Bus'
    }
    return type.endsWith('s') ? type.slice(0, -1) : type
  }

  const handleToggleShowTypes = () => {
    setShowAllTypes(!showAllTypes)
  }

  return (
    <section className="vehicle-types-section wrapper">
      <h1>
        Choose the
        <span className="yellow-gradient selected-type">
          {singularizeType(selectedType.name)}
        </span>
        type that is convenient for you
      </h1>
      <div className="vehicle-types-container">
        {visibleVehicleTypes.map((type) => (
          <aside key={type.key} className="vehicle-types-card">
            <div className="top">
              <Image
                width={100}
                height={100}
                src={type.src}
                alt={`${type.name} Icon`}
              />
            </div>
            <p className="caption">{type.name}</p>
            <p className="options">{type.options}+ options</p>
          </aside>
        ))}
      </div>
      {selectedVehicleCategory.length > 6 && isSmallScreen && (
        <button
          className={`show-more-button ${showAllTypes ? 'expanded' : ''}`}
          onClick={handleToggleShowTypes}
        >
          {showAllTypes ? 'Show less' : 'Show more'}{' '}
          <MdExpandMore className="icon" />
        </button>
      )}
    </section>
  )
}

export default VehicleTypes
