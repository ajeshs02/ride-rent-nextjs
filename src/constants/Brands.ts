import { bikeData } from './Brand Data/BikeData'
import { boatsData } from './Brand Data/BoatData'
import { buggyData } from './Brand Data/BuggyData'
import { busesData } from './Brand Data/BusData'
import { carsData } from './Brand Data/CarData'
import { chartersData } from './Brand Data/ChartersData'
import { cyclesData } from './Brand Data/CycleData'
import { vanData } from './Brand Data/VanData'

export const brandsByVehicleType = {
  // for "cars" and "sports cars"
  car: carsData,
  // cars end

  // for motorcycles and sports bikes
  bike: bikeData,
  // bikes end

  //for bicycles and electric cycles
  cycle: cyclesData,
  // cycles end

  // for leisure boats and yachts
  boat: boatsData,
  // boats end

  // for charters
  charter: chartersData,
  // charters end

  // buggy start
  buggy: buggyData,
  // buggy end

  // van start
  van: vanData,
  //van end

  // bus start
  bus: busesData,
  // bus end
}
