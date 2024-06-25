import { brandsByVehicleType } from '../constants/Brands'
import {
  specificationsHoverData,
  specificationsIconData,
} from '../constants/Specifications'

// to get the brands by vehicle type
export const getBrandsByVehicleType = (vehicleType) => {
  // console.log('vehicleType', vehicleType)
  switch (vehicleType) {
    case 'cars':
    case 'sports_cars':
      return brandsByVehicleType.car
    case 'cycles':
    case 'electric_cycles':
      return brandsByVehicleType.cycle
    case 'motorcycles':
    case 'sports_bikes':
      return brandsByVehicleType.bike
    case 'leisure_boats':
    case 'yachts':
      return brandsByVehicleType.boat
    case 'charters':
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

// to get the hover data for specifications
export const getHoverData = (category) => {
  switch (category) {
    case 'car':
    case 'sports_car':
      return specificationsHoverData.cars
    case 'bicycle':
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

// to get the icons for specifications
export const getSpecificationIcon = (category) => {
  switch (category) {
    case 'car':
    case 'sports_car':
      return specificationsIconData.cars
    case 'bicycle':
    case 'electric_cycle':
      return specificationsIconData.cycles
    case 'motorcycle':
    case 'sports_bike':
      return specificationsIconData.bikes
    case 'leisure_boat':
    case 'yacht':
      return specificationsIconData.boats
    case 'charter':
      return specificationsIconData.charter
    case 'van':
      return specificationsIconData.van
    case 'buggy':
      return specificationsIconData.buggy
    case 'bus':
      return specificationsIconData.bus
    default:
      return null
  }
}
