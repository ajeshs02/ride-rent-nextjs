export type VehicleCategoriesType =
  | 'car'
  | 'sports_car'
  | 'cycle'
  | 'motorcycle'
  | 'sports_bike'
  | 'leisure_boat'
  | 'charter'
  | 'bus'
  | 'van'
  | 'buggy'
  | 'yacht'

export type ValueType = {
  name: string
  value: VehicleCategoriesType
}
export type VehicleType = ValueType

export type LocationType = {
  name: string
  value: string
}

export type FiltersType = {
  modelYear: string[]
  vehicleCategory: VehicleCategoriesType
  vehicleTypes: string[]
  carSubTypes: string[]
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
