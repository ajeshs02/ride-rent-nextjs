// useFilters.tsx
import { FiltersType, VehicleCategoriesType } from '@/types/contextTypes'
import { useAppContext } from '../context/AppContext'
import { vehicleSubTypes, vehicleCategories } from '@/app/(root)/listing'
import { useEffect } from 'react'

const useFilters = () => {
  const { selectedFilters, selectedType, setSelectedFilters } = useAppContext()

  useEffect(() => {
    setSelectedFilters((prevFilters: FiltersType) => ({
      ...prevFilters,
      vehicleCategory: selectedType.value,
    }))
  }, [selectedType, setSelectedFilters])

  const handleFilterChange = (filterName: keyof FiltersType, value: string) => {
    setSelectedFilters((prevFilters: FiltersType): FiltersType => {
      if (filterName === 'vehicleCategory') {
        const newVehicleType = value as VehicleCategoriesType

        if (prevFilters.vehicleCategory === newVehicleType) {
          return prevFilters
        } else {
          return {
            ...prevFilters,
            vehicleCategory: newVehicleType,
            vehicleTypes: [],
            carSubTypes: [],
          }
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
    setSelectedFilters({
      modelYear: [],
      vehicleCategory: selectedType.value,
      vehicleTypes: [],
      carSubTypes: [],
      seats: [],
      paymentMode: [],
      transmission: [],
      fuelType: [],
      brand: [],
      color: [],
    })
  }

  const getVehicleSubTypes = () => {
    const { vehicleCategory } = selectedFilters
    return vehicleSubTypes[vehicleCategory] || []
  }

  const getVehicleTypeLabel = () => {
    const { vehicleCategory } = selectedFilters
    const selectedType = vehicleCategories.find(
      (type) => type.value === vehicleCategory
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
