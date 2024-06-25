export type ValueType = {
  name: string
  value: string
}
export type VehicleType = ValueType

export type LocationType = ValueType

export type FiltersType = {
  modelYear: string[]
  vehicleType: string[]
  vehicleSubType: string[]
  carCategories: string[]
  seats: string[]
  paymentMode: string[]
  transmission: string[]
  fuelType: string[]
  brand: string[]
  color: string[]
}

export type AppContextType = {
  selectedType: VehicleType
  setSelectedType: React.Dispatch<React.SetStateAction<VehicleType>>
  selectedLocation: LocationType
  setSelectedLocation: React.Dispatch<React.SetStateAction<LocationType>>
  selectedFilters: FiltersType
  setSelectedFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}
