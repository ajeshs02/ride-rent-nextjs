'use client'
import { useState } from 'react'
import { vehicleTypes, vehicleSubTypes } from '../pages/Listing Page'
import { useAppContext } from '../context/AppContext'

const useFilters = () => {
  const { selectedFilters, setSelectedFilters } = useAppContext()

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prevFilters) => {
      if (filterName === 'vehicleType') {
        if (prevFilters[filterName][0] === value) {
          return prevFilters
        } else {
          return { ...prevFilters, [filterName]: [value], vehicleSubType: [] }
        }
      } else {
        const newSelection = prevFilters[filterName].includes(value)
          ? prevFilters[filterName].filter((item) => item !== value)
          : [...prevFilters[filterName], value]
        return { ...prevFilters, [filterName]: newSelection }
      }
    })
  }

  const resetFilters = () => {
    setSelectedFilters((prevFilters) => ({
      modelYear: [],
      vehicleType: prevFilters.vehicleType,
      vehicleSubType: [],
      carCategories: [],
      seats: [],
      paymentMode: [],
      transmission: [],
      fuelType: [],
      brand: [],
      color: [],
    }))
  }

  const getVehicleSubTypes = () => {
    const { vehicleType } = selectedFilters
    return vehicleSubTypes[vehicleType[0]] || []
  }

  const getVehicleTypeLabel = () => {
    const { vehicleType } = selectedFilters
    const selectedType = vehicleTypes.find(
      (type) => type.value === vehicleType[0]
    )
    return selectedType ? selectedType.label : ''
  }

  return {
    selectedFilters,
    handleFilterChange,
    resetFilters,
    getVehicleSubTypes,
    getVehicleTypeLabel,
  }
}

export default useFilters
