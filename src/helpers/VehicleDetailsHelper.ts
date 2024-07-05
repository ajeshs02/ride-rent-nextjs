import { brandsByVehicleType } from '../constants/Brands'
import {
  SpecificationsIconData,
  specificationsHoverData,
  specificationsIconData,
} from '../constants/Specifications'

interface VehicleBrand {
  label: string
  value: string
}

type BrandType = VehicleBrand[]

type HoverData = {
  [key: string]: any
}

type IconData = {
  [key in Category]?: {
    [prop: string]: string
  }
}

export type Category =
  | 'car'
  | 'sports_car'
  | 'cycle'
  | 'electric_cycle'
  | 'motorcycle'
  | 'sports_bike'
  | 'leisure_boat'
  | 'yacht'
  | 'charter'
  | 'van'
  | 'buggy'
  | 'bus'

// Function to get brands by vehicle type
export const getBrandsByVehicleType = (vehicleType: Category): BrandType => {
  switch (vehicleType) {
    case 'car':
    case 'sports_car':
      return brandsByVehicleType.car
    case 'cycle':
    case 'electric_cycle':
      return brandsByVehicleType.cycle
    case 'motorcycle':
    case 'sports_bike':
      return brandsByVehicleType.bike
    case 'leisure_boat':
    case 'yacht':
      return brandsByVehicleType.boat
    case 'charter':
      return brandsByVehicleType.charter
    case 'buggy':
      return brandsByVehicleType.buggy
    case 'van':
      return brandsByVehicleType.van
    case 'bus':
      return brandsByVehicleType.bus
    default:
      return []
  }
}

// Function to get hover data for specifications
export const getHoverData = (category: Category): HoverData | null => {
  switch (category) {
    case 'car':
    case 'sports_car':
      return specificationsHoverData.cars
    case 'cycle':
    case 'electric_cycle':
      return specificationsHoverData.cycles
    case 'motorcycle':
    case 'sports_bike':
      return specificationsHoverData.bikes
    case 'leisure_boat':
    case 'yacht':
      return specificationsHoverData.boats
    case 'charter':
      return specificationsHoverData.charter
    case 'van':
      return specificationsHoverData.van
    case 'buggy':
      return specificationsHoverData.buggy
    case 'bus':
      return specificationsHoverData.bus
    default:
      return null
  }
}

// Function to get icons for specifications
export const getSpecificationIcon = (
  category: Category
): SpecificationsIconData[Category] => {
  return specificationsIconData[category]
}
