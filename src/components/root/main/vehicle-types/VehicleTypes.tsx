'use client'

import React, { useState, useEffect } from 'react'
import { VEHICLE_TYPES } from './index'
import { useAppContext } from '@/context/AppContext'
import './VehicleTypes.scss'
import ViewAllButton from '@/components/general/button/ViewAllButton'
import Image from 'next/image'

const VehicleTypes = () => {
  const { selectedType } = useAppContext()

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const visibleVehicleTypes = isSmallScreen
    ? VEHICLE_TYPES.slice(0, 6)
    : VEHICLE_TYPES

  const singularizeType = (type: string) => {
    if (type.toLowerCase() === 'buses') {
      return 'Bus'
    }
    return type.endsWith('s') ? type.slice(0, -1) : type
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
                width={80}
                height={80}
                src={type.src}
                alt={`${type.name} Icon`}
              />
            </div>
            <p className="caption">{type.name}</p>
            <p className="options">{type.options}+ options</p>
          </aside>
        ))}
      </div>
      <ViewAllButton value={'types'} />
    </section>
  )
}

export default VehicleTypes
