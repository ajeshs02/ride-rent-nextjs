'use client'

import {
  AppContextType,
  FiltersType,
  LocationType,
  VehicleType,
} from '@/types/contextTypes'
import { createContext, useContext, useState, ReactNode } from 'react'

const AppContext = createContext<AppContextType | null>(null)

const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  // vehicle type
  const [selectedType, setSelectedType] = useState<VehicleType>({
    name: 'Cars',
    value: 'car',
  })

  // selected location
  const [selectedLocation, setSelectedLocation] = useState<LocationType>({
    name: 'Dubai',
    value: 'dubai',
  })

  // global state for listing page filter
  const [selectedFilters, setSelectedFilters] = useState<FiltersType>({
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

  return (
    <AppContext.Provider
      value={{
        selectedType,
        setSelectedType,
        selectedLocation,
        setSelectedLocation,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { useAppContext, AppProvider }
