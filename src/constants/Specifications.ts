import { carIcons } from './Icons'

// hover data for specifications
export const specificationsHoverData = {
  // cycles and electric cycles
  cycles: {
    brand: {
      hover: 'The company that made the bicycle.',
    },
    materialOfFrame: {
      hover: 'Indicates what material the bicycle’s frame is made of.',
    },
    noOfGears: {
      hover: 'Shows the number of gears available for shifting.',
    },
    yearOfManufacture: {
      hover: 'The year the bicycle was produced.',
    },
    brakes: {
      hover: 'Specifies the type of braking system used.',
    },
    suspension: {
      hover: 'Indicates if the bicycle has a system to absorb shocks.',
    },
    singleChargeRange: {
      hover:
        'Maximum distance the electric bike can travel on one battery charge.',
    },
    chargingTime: {
      hover: "Time needed to fully recharge the electric bike's battery.",
    },
    batteryCapacity: {
      hover:
        'Amount of charge the battery can store, impacting range and power.',
    },
  },
  // cycles end

  // motorcycles and sports bikes
  bikes: {
    brand: {
      hover: 'Manufacturer of the bike.',
    },
    helmet: {
      hover: 'Availability of helmet with the rental.',
    },
    engineType: {
      hover: 'Classification of the motorcycle’s engine.',
    },
    yearOfManufacture: {
      hover: 'The production year of the bike.',
    },
    topSpeed: {
      hover: 'Maximum speed the bike can reach.',
    },
    singleChargeRange: {
      hover: 'Distance the bike can travel on one full charge.',
    },
    chargingTime: {
      hover: "Time needed to fully recharge the bike's battery.",
    },
    batteryCapacity: {
      hover: 'Total energy storage of the bike’s battery.',
    },
    abs: {
      hover: 'Presence of Anti-lock Braking System for safety.',
    },
  },
  // bikes end

  // boats start
  boats: {
    brand: {
      hover: 'Manufacturer of the boat or yacht.',
    },
    length: {
      hover: 'Total length of the vessel.',
    },
    freshwaterCapacity: {
      hover: 'Amount of fresh water the vessel can store.',
    },
    kitchen: {
      hover: 'Availability of a cooking area onboard.',
    },
    captainIncluded: {
      hover: 'Availability of a captain for navigating the vessel.',
    },
    safetyEquipments: {
      hover: 'Presence of safety gear on board.',
    },
    petFriendliness: {
      hover: 'Whether pets are allowed on the vessel.',
    },
    luggageCapacity: {
      hover: 'Storage space for luggage on board.',
    },
    autoPilot: {
      hover: 'Availability of automated navigation control.',
    },
    engineType: {
      hover: 'Classification of the vessel’s engine.',
    },
    topCruisingSpeed: {
      hover: 'Maximum cruising speed of the vessel.',
    },
    seatingCapacity: {
      hover: 'Number of passengers that can be seated.',
    },
    navigation: {
      hover: 'Systems available for guiding the vessel.',
    },
    transmission: {
      hover: 'Type of gear system used by the vessel.',
    },
    bodyType: {
      hover: 'Design and build category of the vessel.',
    },
    yearOfManufacture: {
      hover: 'Production year of the boat or yacht.',
    },
    wifi: {
      hover: 'Availability of wireless internet on board.',
    },
    kettle: {
      hover: 'Availability of a kettle for boiling water.',
    },
    fishingEquipment: {
      hover: 'Presence of gear for fishing activities.',
    },
    fridge: {
      hover: 'Availability of a refrigerator onboard.',
    },
    anchoringSystem: {
      hover: 'Equipment for securing the vessel in place.',
    },
    infotainmentSystem: {
      hover: 'Entertainment and information system available on board.',
    },
    crew: {
      hover: 'Availability of additional staff to assist during the trip.',
    },
    bathroom: {
      hover: 'Availability of bathroom facilities onboard.',
    },
  },
  // boats end

  // cars start
  cars: {
    brand: {
      hover: 'Manufacturer of the car.',
    },
    yearOfManufacture: {
      hover: 'Production year of the vehicle.',
    },
    engineType: {
      hover: 'Classification of the vehicle’s engine.',
    },
    cruiseControl: {
      hover: 'Availability of automatic speed control for relaxed driving.',
    },
    transmission: {
      hover: 'Type of gear system used by the vehicle.',
    },
    wifi: {
      hover: 'Availability of wireless internet in the car.',
    },
    seatingCapacity: {
      hover: 'Number of passengers that can be seated.',
    },
    bodyType: {
      hover: 'Design and build category of the vehicle.',
    },
    luggageCapacity: {
      hover: 'Storage space available for luggage.',
    },
    fuelTankCapacity: {
      hover: 'Total volume the fuel tank can hold.',
    },
    batteryCapacity: {
      hover: 'Total energy storage of the vehicle’s battery.',
    },
    chargingTime: {
      hover: 'Duration needed to fully charge the battery.',
    },
    color: {
      hover: 'Exterior color of the vehicle.',
    },
    singleChargeRange: {
      hover: 'Distance the vehicle can travel on one full charge.',
    },
    infotainmentSystem: {
      hover: 'Entertainment and information system available in the car.',
    },
    climateControl: {
      hover: 'System to manage the interior temperature.',
    },
    abs: {
      hover: 'Presence of Anti-lock Braking System for enhanced safety.',
    },
    tractionControl: {
      hover: 'System that helps maintain stability on slippery surfaces.',
    },
  },
  // cars end

  // charters start
  charter: {
    brand: {
      hover: 'Manufacturer of the aircraft.',
    },
    yearOfManufacture: {
      hover: 'Production year of the aircraft.',
    },
    engineType: {
      hover: 'Classification of the aircraft’s engine.',
    },
    safetyEquipments: {
      hover: 'Presence of safety gear on board.',
    },
    navigation: {
      hover: 'Systems available for guiding the aircraft.',
    },
    topCruisingSpeed: {
      hover: 'Maximum speed during optimal flight.',
    },
    topSpeed: {
      hover: 'Maximum speed the aircraft can achieve.',
    },
    wifi: {
      hover: 'Availability of wireless internet on board.',
    },
    range: {
      hover: 'Maximum distance the aircraft can travel on a full tank.',
    },
    seatingCapacity: {
      hover: 'Number of passengers that can be seated.',
    },
    basicRefreshments: {
      hover: 'Availability of snacks and drinks on board.',
    },
    luggageCapacity: {
      hover: 'Storage space for passenger luggage.',
    },
    bathroom: {
      hover: 'Availability of restroom facilities on board.',
    },
    fridge: {
      hover: 'Availability of a refrigerator on board.',
    },
    infotainmentSystem: {
      hover: 'Entertainment and information system available for passengers.',
    },
    crew: {
      hover: 'Availability of staff to assist during the flight.',
    },
  },

  // charters end

  // vans start
  van: {
    brand: {
      hover: 'The manufacturer of the vehicle.',
    },
    engineType: {
      hover: 'Classification of the vehicle’s engine.',
    },
    yearOfManufacture: {
      hover: 'Production year of the vehicle.',
    },
    wifi: {
      hover: 'Availability of wireless internet on board.',
    },
    airCondition: {
      hover: 'Availability of air conditioning on board.',
    },
    seatingCapacity: {
      hover: 'Number of passengers that can be seated.',
    },
    basicRefreshments: {
      hover: 'Availability of snacks and drinks on board.',
    },
    luggageCapacity: {
      hover: 'Storage space for passenger luggage.',
    },
    bathroom: {
      hover: 'Availability of restroom facilities on board.',
    },
    fridge: {
      hover: 'Availability of a refrigerator on board.',
    },
    singleChargeRange: {
      hover: 'Distance the vehicle can travel on one full charge.',
    },
    chargingTime: {
      hover: 'Time needed to fully charge the vehicle’s battery.',
    },
    batteryCapacity: {
      hover: 'Total energy storage of the vehicle’s battery.',
    },
    infotainmentSystem: {
      hover: 'Entertainment and information system available for passengers.',
    },
    crew: {
      hover: 'Availability of staff to assist during the journey.',
    },
  },
  // vans end

  // buggy start
  buggy: {
    brand: {
      hover: 'Manufacturer of the buggy.',
    },
    materialOfTheFrame: {
      hover: 'Indicates what material the buggy’s frame is made of.',
    },
    noGears: {
      hover: 'Shows the number of gears available for shifting.',
    },
    yearOfManufacture: {
      hover: 'The year the buggy was produced.',
    },
    breaks: {
      hover: 'Specifies the type of braking system used.',
    },
    suspension: {
      hover: 'Indicates if the buggy has a system to absorb shocks.',
    },
    singleChargeRange: {
      hover:
        'Maximum distance the electric buggy can travel on one battery charge.',
    },
    chargingTime: {
      hover: "Time needed to fully recharge the electric buggy's battery.",
    },
    batteryCapacity: {
      hover:
        'Amount of charge the battery can store, impacting range and power.',
    },
    seatingCapacity: {
      hover: 'Number of passengers that can be seated.',
    },
    fuelTankCapacity: {
      hover: 'Total volume the fuel tank can hold.',
    },
    colour: {
      hover: 'Exterior color of the vehicle.',
    },
    tractionControl: {
      hover: 'System that helps maintain stability on slippery surfaces.',
    },
    helmet: {
      hover: 'Availability of a helmet for safety.',
    },
  },
  // buggy end

  // buses start
  bus: {
    brand: {
      hover: 'Manufacturer of the bus.',
    },
    yearOfManufacture: {
      hover: 'Production year of the vehicle.',
    },
    engineType: {
      hover: 'Classification of the vehicle’s engine.',
    },
    cruiseControl: {
      hover: 'Availability of automatic speed control for relaxed driving.',
    },
    transmission: {
      hover: 'Type of gear system used by the vehicle.',
    },
    wifi: {
      hover: 'Availability of wireless internet in the bus.',
    },
    seatingCapacity: {
      hover: 'Number of passengers that can be seated.',
    },
    bodyType: {
      hover: 'Design and build category of the vehicle.',
    },
    luggageCapacity: {
      hover: 'Storage space available for luggage.',
    },
    fuelTankCapacity: {
      hover: 'Total volume the fuel tank can hold.',
    },
    batteryCapacity: {
      hover: 'Total energy storage of the vehicle’s battery.',
    },
    chargingTime: {
      hover: 'Duration needed to fully charge the battery.',
    },
    colour: {
      hover: 'Exterior color of the vehicle.',
    },
    singleChargeRange: {
      hover: 'Distance the vehicle can travel on one full charge.',
    },
    infotainmentSystem: {
      hover: 'Entertainment and information system available in the bus.',
    },
    airCondition: {
      hover: 'System to manage the interior temperature.',
    },
    abs: {
      hover: 'Presence of Anti-lock Braking System for enhanced safety.',
    },
    tractionControl: {
      hover: 'System that helps maintain stability on slippery surfaces.',
    },
    captainIncluded: {
      hover: 'Availability of a captain to drive the bus.',
    },
    crew: {
      hover: 'Availability of additional staff to assist during the journey.',
    },
  },
  // buses end
}

// icon for specifications
export const specificationsIconData = {
  // cars icons
  cars: {
    brand: {
      icon: carIcons.brandIcon,
    },
    yearOfManufacture: {
      icon: carIcons.yearOfManufactureIcon,
    },
    engineType: {
      icon: carIcons.engineTypeIcon,
    },
    cruiseControl: {
      icon: carIcons.cruiseControlIcon,
    },
    transmission: {
      icon: carIcons.transmissionIcon,
    },
    wifi: {
      icon: carIcons.wifiIcon,
    },
    seatingCapacity: {
      icon: carIcons.seatingCapacityIcon,
    },
    bodyType: {
      icon: carIcons.bodyTypeIcon,
    },
    luggageCapacity: {
      icon: carIcons.luggageCapacityIcon,
    },
    fuelTankCapacity: {
      icon: carIcons.fuelTankCapacityIcon,
    },
    batteryCapacity: {
      icon: carIcons.batteryCapacityIcon,
    },
    chargingTime: {
      icon: carIcons.chargingTimeIcon,
    },
    color: {
      icon: carIcons.colorIcon,
    },
    singleChargeRange: {
      icon: carIcons.singleChargeRangeIcon,
    },
    infotainmentSystem: {
      icon: carIcons.infotainmentSystemIcon,
    },
    climateControl: {
      icon: carIcons.climateControlIcon,
    },
    abs: {
      icon: carIcons.absIcon,
    },
    tractionControl: {
      icon: carIcons.tractionControlIcon,
    },
  },
}

// specification data
export const specificationsData = {
  // cycles and electric cycles
  cycles: [
    {
      label: 'Brand',
      value: 'brand',
      hover: 'The company that made the bicycle.',
    },
    {
      label: 'Material of the frame',
      value: 'materialOfFrame',
      hover: 'Indicates what material the bicycle’s frame is made of.',
    },
    {
      label: 'No. of Gears',
      value: 'noOfGears',
      hover: 'Shows the number of gears available for shifting.',
    },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'The year the bicycle was produced.',
    },
    {
      label: 'Brakes',
      value: 'brakes',
      hover: 'Specifies the type of braking system used.',
    },
    {
      label: 'Suspension',
      value: 'suspension',
      hover: 'Indicates if the bicycle has a system to absorb shocks.',
    },
    {
      label: 'Single Charge Range',
      value: 'singleChargeRange',
      hover:
        'Maximum distance the electric bike can travel on one battery charge.',
    },
    {
      label: 'Charging Time',
      value: 'chargingTime',
      hover: "Time needed to fully recharge the electric bike's battery.",
    },
    {
      label: 'Battery Capacity',
      value: 'batteryCapacity',
      hover:
        'Amount of charge the battery can store, impacting range and power.',
    },
    // ...more specifications for bicycles if needed
  ],
  // cycles end

  // motorcycles and sports bikes
  bikes: [
    { label: 'Brand', value: 'brand', hover: 'Manufacturer of the bike.' },
    {
      label: 'Helmet',
      value: 'helmet',
      hover: 'Availability of helmet with the rental.',
    },
    {
      label: 'Engine Type',
      value: 'engineType',
      hover: 'Classification of the motorcycle’s engine.',
    },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'The production year of the bike.',
    },
    {
      label: 'Top Speed',
      value: 'topSpeed',
      hover: 'Maximum speed the bike can reach.',
    },
    {
      label: 'Single Charge Range',
      value: 'singleChargeRange',
      hover: 'Distance the bike can travel on one full charge.',
    },
    {
      label: 'Charging Time',
      value: 'chargingTime',
      hover: "Time needed to fully recharge the bike's battery.",
    },
    {
      label: 'Battery Capacity',
      value: 'batteryCapacity',
      hover: 'Total energy storage of the bike’s battery.',
    },
    {
      label: 'ABS',
      value: 'abs',
      hover: 'Presence of Anti-lock Braking System for safety.',
    },
  ],
  // bikes end

  // boats start
  boats: [
    {
      label: 'Brand',
      value: 'brand',
      hover: 'Manufacturer of the boat or yacht.',
    },
    { label: 'Length', value: 'length', hover: 'Total length of the vessel.' },
    {
      label: 'Freshwater Capacity',
      value: 'freshwaterCapacity',
      hover: 'Amount of fresh water the vessel can store.',
    },
    {
      label: 'Kitchen',
      value: 'kitchen',
      hover: 'Availability of a cooking area onboard.',
    },
    {
      label: 'Captain Included',
      value: 'captainIncluded',
      hover: 'Availability of a captain for navigating the vessel.',
    },
    {
      label: 'Safety Equipments',
      value: 'safetyEquipments',
      hover: 'Presence of safety gear on board.',
    },
    {
      label: 'Pet-friendliness',
      value: 'petFriendliness',
      hover: 'Whether pets are allowed on the vessel.',
    },
    {
      label: 'Luggage Capacity',
      value: 'luggageCapacity',
      hover: 'Storage space for luggage on board.',
    },
    {
      label: 'Auto Pilot',
      value: 'autoPilot',
      hover: 'Availability of automated navigation control.',
    },
    {
      label: 'Engine Type',
      value: 'engineType',
      hover: 'Classification of the vessel’s engine.',
    },
    {
      label: 'Top Cruising Speed',
      value: 'topCruisingSpeed',
      hover: 'Maximum cruising speed of the vessel.',
    },
    {
      label: 'Seating Capacity',
      value: 'seatingCapacity',
      hover: 'Number of passengers that can be seated.',
    },
    {
      label: 'Navigation',
      value: 'navigation',
      hover: 'Systems available for guiding the vessel.',
    },
    {
      label: 'Transmission',
      value: 'transmission',
      hover: 'Type of gear system used by the vessel.',
    },
    {
      label: 'Body Type',
      value: 'bodyType',
      hover: 'Design and build category of the vessel.',
    },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'Production year of the boat or yacht.',
    },
    {
      label: 'WiFi',
      value: 'wifi',
      hover: 'Availability of wireless internet on board.',
    },
    {
      label: 'Kettle',
      value: 'kettle',
      hover: 'Availability of a kettle for boiling water.',
    },
    {
      label: 'Fishing Equipment',
      value: 'fishingEquipment',
      hover: 'Presence of gear for fishing activities.',
    },
    {
      label: 'Fridge',
      value: 'fridge',
      hover: 'Availability of a refrigerator onboard.',
    },
    {
      label: 'Anchoring System',
      value: 'anchoringSystem',
      hover: 'Equipment for securing the vessel in place.',
    },
    {
      label: 'Infotainment System',
      value: 'infotainmentSystem',
      hover: 'Entertainment and information system available on board.',
    },
    {
      label: 'Crew',
      value: 'crew',
      hover: 'Availability of additional staff to assist during the trip.',
    },
    {
      label: 'Bathroom',
      value: 'bathroom',
      hover: 'Availability of bathroom facilities onboard.',
    },
  ],
  // boats end

  // cars start
  cars: [
    { label: 'Brand', value: 'brand', hover: 'Manufacturer of the car.' },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'Production year of the vehicle.',
    },
    {
      label: 'Engine Type',
      value: 'engineType',
      hover: 'Classification of the vehicle’s engine.',
    },
    {
      label: 'Cruise Control',
      value: 'cruiseControl',
      hover: 'Availability of automatic speed control for relaxed driving.',
    },
    {
      label: 'Transmission',
      value: 'transmission',
      hover: 'Type of gear system used by the vehicle.',
    },
    {
      label: 'WiFi',
      value: 'wifi',
      hover: 'Availability of wireless internet in the car.',
    },
    {
      label: 'Seating Capacity',
      value: 'seatingCapacity',
      hover: 'Number of passengers that can be seated.',
    },
    {
      label: 'Body Type',
      value: 'bodyType',
      hover: 'Design and build category of the vehicle.',
    },
    {
      label: 'Luggage Capacity',
      value: 'luggageCapacity',
      hover: 'Storage space available for luggage.',
    },
    {
      label: 'Fuel Tank Capacity',
      value: 'fuelTankCapacity',
      hover: 'Total volume the fuel tank can hold.',
    },
    {
      label: 'Battery Capacity',
      value: 'batteryCapacity',
      hover: 'Total energy storage of the vehicle’s battery.',
    },
    {
      label: 'Charging Time',
      value: 'chargingTime',
      hover: 'Duration needed to fully charge the battery.',
    },
    {
      label: 'Colour',
      value: 'colour',
      hover: 'Exterior color of the vehicle.',
    },
    {
      label: 'Single Charge Range',
      value: 'singleChargeRange',
      hover: 'Distance the vehicle can travel on one full charge.',
    },
    {
      label: 'Infotainment System',
      value: 'infotainmentSystem',
      hover: 'Entertainment and information system available in the car.',
    },
    {
      label: 'Climate Control',
      value: 'climateControl',
      hover: 'System to manage the interior temperature.',
    },
    {
      label: 'ABS',
      value: 'abs',
      hover: 'Presence of Anti-lock Braking System for enhanced safety.',
    },
    {
      label: 'Traction Control',
      value: 'tractionControl',
      hover: 'System that helps maintain stability on slippery surfaces.',
    },
  ],
  // cars end

  // charters start
  charters: [
    { label: 'Brand', value: 'brand', hover: 'Manufacturer of the aircraft.' },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'Production year of the aircraft.',
    },
    {
      label: 'Engine Type',
      value: 'engineType',
      hover: 'Classification of the aircraft’s engine.',
    },
    {
      label: 'Safety Equipments',
      value: 'safetyEquipments',
      hover: 'Presence of safety gear on board.',
    },
    {
      label: 'Navigation',
      value: 'navigation',
      hover: 'Systems available for guiding the aircraft.',
    },
    {
      label: 'Top Cruising Speed',
      value: 'topCruisingSpeed',
      hover: 'Maximum speed during optimal flight.',
    },
    {
      label: 'Top Speed',
      value: 'topSpeed',
      hover: 'Maximum speed the aircraft can achieve.',
    },
    {
      label: 'WiFi',
      value: 'wifi',
      hover: 'Availability of wireless internet on board.',
    },
    {
      label: 'Range',
      value: 'range',
      hover: 'Maximum distance the aircraft can travel on a full tank.',
    },
    {
      label: 'Seating Capacity',
      value: 'seatingCapacity',
      hover: 'Number of passengers that can be seated.',
    },
    {
      label: 'Basic Refreshments',
      value: 'basicRefreshments',
      hover: 'Availability of snacks and drinks on board.',
    },
    {
      label: 'Luggage Capacity',
      value: 'luggageCapacity',
      hover: 'Storage space for passenger luggage.',
    },
    {
      label: 'Bathroom',
      value: 'bathroom',
      hover: 'Availability of restroom facilities on board.',
    },
    {
      label: 'Fridge',
      value: 'fridge',
      hover: 'Availability of a refrigerator on board.',
    },
    {
      label: 'Infotainment System',
      value: 'infotainmentSystem',
      hover: 'Entertainment and information system available for passengers.',
    },
    {
      label: 'Crew',
      value: 'crew',
      hover: 'Availability of staff to assist during the flight.',
    },
  ],
  // charters end

  // vans start
  vans: [
    {
      label: 'Brand',
      value: 'brand',
      hover: 'The manufacturer of the vehicle.',
    },
    {
      label: 'Engine Type',
      value: 'engineType',
      hover: 'Classification of the vehicle’s engine.',
    },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'Production year of the vehicle.',
    },
    {
      label: 'WiFi',
      value: 'wifi',
      hover: 'Availability of wireless internet on board.',
    },
    {
      label: 'Air Condition',
      value: 'airCondition',
      hover: 'Availability of Air Condition on board.',
    },
    {
      label: 'Seating Capacity',
      value: 'seatingCapacity',
      hover: 'Number of passengers that can be seated.',
    },
    {
      label: 'Basic Refreshments',
      value: 'basicRefreshments',
      hover: 'Availability of snacks and drinks on board.',
    },
    {
      label: 'Luggage Capacity',
      value: 'luggageCapacity',
      hover: 'Storage space for passenger luggage.',
    },
    {
      label: 'Bathroom',
      value: 'bathroom',
      hover: 'Availability of restroom facilities on board.',
    },
    {
      label: 'Fridge',
      value: 'fridge',
      hover: 'Availability of a refrigerator on board.',
    },
    {
      label: 'Single Charge Range',
      value: 'singleChargeRange',
      hover: 'Distance the vehicle can travel on one full charge.',
    },
    {
      label: 'Charging Time',
      value: 'chargingTime',
      hover: 'Time needed to fully charge the vehicle’s battery.',
    },
    {
      label: 'Battery Capacity',
      value: 'batteryCapacity',
      hover: 'Total energy storage of the vehicle’s battery.',
    },
    {
      label: 'Infotainment System',
      value: 'infotainmentSystem',
      hover: 'Entertainment and information system available for passengers.',
    },
    {
      label: 'Crew',
      value: 'crew',
      hover: 'Availability of staff to assist during the journey.',
    },
  ],
  // vans end

  // buggy start
  buggy: [
    { label: 'Brand', value: 'brand', hover: 'Manufacturer of the buggy.' },
    {
      label: 'Material of the Frame',
      value: 'materialOfTheFrame',
      hover: 'Indicates what material the buggy’s frame is made of.',
    },
    {
      label: 'No. Gears',
      value: 'noGears',
      hover: 'Shows the number of gears available for shifting.',
    },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'The year the buggy was produced.',
    },
    {
      label: 'Breaks',
      value: 'breaks',
      hover: 'Specifies the type of braking system used.',
    },
    {
      label: 'Suspension',
      value: 'suspension',
      hover: 'Indicates if the buggy has a system to absorb shocks.',
    },
    {
      label: 'Single Charge Range',
      value: 'singleChargeRange',
      hover:
        'Maximum distance the electric buggy can travel on one battery charge.',
    },
    {
      label: 'Charging Time',
      value: 'chargingTime',
      hover: "Time needed to fully recharge the electric buggy's battery.",
    },
    {
      label: 'Battery Capacity',
      value: 'batteryCapacity',
      hover:
        'Amount of charge the battery can store, impacting range and power.',
    },
    {
      label: 'Seating Capacity',
      value: 'seatingCapacity',
      hover: 'Number of passengers that can be seated.',
    },
    {
      label: 'Fuel Tank Capacity',
      value: 'fuelTankCapacity',
      hover: 'Total volume the fuel tank can hold.',
    },
    {
      label: 'Colour',
      value: 'colour',
      hover: 'Exterior color of the vehicle.',
    },
    {
      label: 'Traction Control',
      value: 'tractionControl',
      hover: 'System that helps maintain stability on slippery surfaces.',
    },
    {
      label: 'Helmet',
      value: 'helmet',
      hover: 'Availability of a helmet for safety.',
    }, // Generated hover message
  ],
  // buggy end

  // buses start
  buses: [
    { label: 'Brand', value: 'brand', hover: 'Manufacturer of the bus.' },
    {
      label: 'Year of Manufacture',
      value: 'yearOfManufacture',
      hover: 'Production year of the vehicle.',
    },
    {
      label: 'Engine Type',
      value: 'engineType',
      hover: 'Classification of the vehicle’s engine.',
    },
    {
      label: 'Cruise Control',
      value: 'cruiseControl',
      hover: 'Availability of automatic speed control for relaxed driving.',
    },
    {
      label: 'Transmission',
      value: 'transmission',
      hover: 'Type of gear system used by the vehicle.',
    },
    {
      label: 'WiFi',
      value: 'wifi',
      hover: 'Availability of wireless internet in the bus.',
    },
    {
      label: 'Seating Capacity',
      value: 'seatingCapacity',
      hover: 'Number of passengers that can be seated.',
    },
    {
      label: 'Body Type',
      value: 'bodyType',
      hover: 'Design and build category of the vehicle.',
    },
    {
      label: 'Luggage Capacity',
      value: 'luggageCapacity',
      hover: 'Storage space available for luggage.',
    },
    {
      label: 'Fuel Tank Capacity',
      value: 'fuelTankCapacity',
      hover: 'Total volume the fuel tank can hold.',
    },
    {
      label: 'Battery Capacity',
      value: 'batteryCapacity',
      hover: 'Total energy storage of the vehicle’s battery.',
    },
    {
      label: 'Charging Time',
      value: 'chargingTime',
      hover: 'Duration needed to fully charge the battery.',
    },
    {
      label: 'Colour',
      value: 'colour',
      hover: 'Exterior color of the vehicle.',
    },
    {
      label: 'Single Charge Range',
      value: 'singleChargeRange',
      hover: 'Distance the vehicle can travel on one full charge.',
    },
    {
      label: 'Infotainment System',
      value: 'infotainmentSystem',
      hover: 'Entertainment and information system available in the bus.',
    },
    {
      label: 'Air Condition',
      value: 'airCondition',
      hover: 'System to manage the interior temperature.',
    },
    {
      label: 'ABS',
      value: 'abs',
      hover: 'Presence of Anti-lock Braking System for enhanced safety.',
    },
    {
      label: 'Traction Control',
      value: 'tractionControl',
      hover: 'System that helps maintain stability on slippery surfaces.',
    },
    {
      label: 'Captain Included',
      value: 'captainIncluded',
      hover: 'Availability of a captain to drive the bus.',
    },
    {
      label: 'Crew',
      value: 'crew',
      hover: 'Availability of additional staff to assist during the journey.',
    },
  ],
  // buses end
}
