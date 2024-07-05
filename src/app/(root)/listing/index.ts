// data.ts
export const locations = [
  { label: 'Abu Dhabi', value: 'abu_dhabi' },
  { label: 'Dubai', value: 'dubai' },
  { label: 'Sharjah', value: 'sharjah' },
  { label: 'Ras Al Khaimah', value: 'ras_al_khaimah' },
  { label: 'Ajman', value: 'ajman' },
  { label: 'Umm Al Quwain', value: 'umm_al_quwain' },
  { label: 'Fujairah', value: 'fujairah' },
  { label: 'Al Ain', value: 'al_ain' },
]

export const modelYears = Array.from(
  { length: 20 },
  (_, i) => `${2024 - 5 * i}-${2020 - 5 * i}`
)

export const vehicleCategories = [
  { label: 'Cars', value: 'car' },
  { label: 'Sports Cars', value: 'sports_car' },
  { label: 'Cycles', value: 'cycle' },
  { label: 'Motorcycles', value: 'motorcycle' },
  { label: 'Sports Bikes', value: 'sports_bike' },
  { label: 'Leisure Boats', value: 'leisure_boat' },
  { label: 'Yachts', value: 'yacht' },
  { label: 'Charters', value: 'charter' },
  { label: 'Buggy', value: 'buggy' },
  { label: 'Van', value: 'van' },
  { label: 'Buses', value: 'bus' },
]

// carCategories
export const carSubTypes = [
  { label: 'Family MPV', value: 'family_mpv' },
  { label: 'Crossover', value: 'crossover' },
  { label: 'Sports Coupe', value: 'sports_coupe' },
  { label: 'Sedan', value: 'sedan' },
  { label: 'Pickup', value: 'pickup' },
]

// General seat count ranges
export const seats = ['1-2', '1-6', '4-6', '4-8', '8-20', '20-60']

// features
export const features = [
  { label: 'Digital HUD', value: 'digital_hud' },
  { label: 'Cruise Control', value: 'cruise_control' },
  { label: 'Adaptive Cruise Control', value: 'adaptive_cruise_control' },
  { label: 'Parking Assist', value: 'parking_assist' },
  { label: 'Reverse Camera', value: 'reverse_camera' },
  { label: 'Parking Sensors', value: 'parking_sensors' },
  { label: 'Tinted Windows', value: 'tinted_windows' },
  { label: 'Power Seats', value: 'power_seats' },
  { label: 'Leather Seats', value: 'leather_seats' },
  { label: '3D Surround Camera', value: '3d_surround_camera' },
  { label: 'Rear AC', value: 'rear_ac' },
  { label: 'Sunroof/Moonroof', value: 'sunroof_moonroof' },
  { label: 'Premium Audio', value: 'premium_audio' },
  { label: 'Apple CarPlay', value: 'apple_carplay' },
  { label: 'Android Auto', value: 'android_auto' },
  { label: 'Front & Rear Airbags', value: 'front_rear_airbags' },
  { label: 'Bluetooth', value: 'bluetooth' },
  { label: 'USB', value: 'usb' },
  { label: 'Chiller / Freezer', value: 'chiller_freezer' },
]

// payment methods
export const paymentModes = [
  { label: 'Credit Card', value: 'credit_card' },
  { label: 'Debit Card', value: 'debit_card' },
  { label: 'Cash', value: 'cash' },
  { label: 'Cheque', value: 'cheque' },
  { label: 'Bitcoin / Crypto', value: 'bitcoin_crypto' },
]

// transmissions
export const transmissions = [
  { label: 'Automatic', value: 'automatic' },
  { label: 'Manual', value: 'manual' },
]

// fuel types
export const fuelTypes = [
  { label: 'Petrol', value: 'petrol' },
  { label: 'Electric', value: 'electric' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'Diesel', value: 'diesel' },
]

// colors
export const colors = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Black', value: 'black' },
  { label: 'Brown', value: 'brown' },
  { label: 'White', value: 'white' },
  { label: 'Silver', value: 'silver' },
  { label: 'Off White', value: 'off_white' },
  { label: 'Orange', value: 'orange' },
  { label: 'Gray', value: 'gray' },
  { label: 'Dark Gray', value: 'dark_gray' },
  { label: 'Green', value: 'green' },
  { label: 'Champagne Gold', value: 'champagne_gold' },
  { label: 'Light Green', value: 'light_green' },
  { label: 'Maroon', value: 'maroon' },
  { label: 'Bronze', value: 'bronze' },
  { label: 'Burgundy', value: 'burgundy' },
  { label: 'Purple', value: 'purple' },
  { label: 'Pink', value: 'pink' },
  { label: 'Matte Gray', value: 'matte_gray' },
  { label: 'Matte Black', value: 'matte_black' },
  { label: 'Matte Red', value: 'matte_red' },
  { label: 'Lemon Yellow', value: 'lemon_yellow' },
  { label: 'Turquoise', value: 'turquoise' },
  { label: 'Matte Blue', value: 'matte_blue' },
  { label: 'Sapphire Blue', value: 'sapphire_blue' },
  { label: 'Metallic Silver', value: 'metallic_silver' },
  { label: 'Metallic Red', value: 'metallic_red' },
  { label: 'Metallic Gray', value: 'metallic_gray' },
  { label: 'Beige', value: 'beige' },
  { label: 'Golden', value: 'golden' },
]

export type VehicleSubTypes = Record<string, { label: string; value: string }[]>

// Vehicle Sub Types
export const vehicleSubTypes: VehicleSubTypes = {
  car: [
    { label: 'AIRPORT PICKUP', value: 'airport_pickup' },
    { label: 'BUGGY', value: 'buggy' },
    { label: 'BUSES', value: 'buses' },
    { label: 'CAR WITH DRIVER', value: 'car_with_driver' },
    { label: 'CONVERTIBLE', value: 'convertible' },
    { label: 'DESERT SAFARI', value: 'desert_safari' },
    { label: 'ELECTRIC CARS', value: 'electric_cars' },
    { label: 'LUXURY', value: 'luxury' },
    { label: 'MONTHLY RENTALS', value: 'monthly_rentals' },
    { label: 'MUSCLE CARS', value: 'muscle_cars' },
    { label: 'PICKUP TRUCKS', value: 'pickup_trucks' },
    { label: 'SPECIAL EDITION', value: 'special_edition' },
    { label: 'SUVs', value: 'suvs' },
    { label: 'VANS', value: 'vans' },
    { label: 'VINTAGE CARS', value: 'vintage_cars' },
  ],
  sports_car: [
    { label: 'HYPER SPORTS CARS', value: 'hyper_sports_cars' },
    { label: 'RACE TRACK CARS', value: 'race_track_cars' },
  ],
  cycle: [
    { label: 'TOURING BICYCLES', value: 'touring_bicycles' },
    { label: 'BMX BICYCLES', value: 'bmx_bicycles' },
    { label: 'CRUISER BICYCLES', value: 'cruiser_bicycles' },
    { label: 'CYCLOCROSS BICYCLES', value: 'cyclocross_bicycles' },
    { label: 'ELECTRIC BICYCLES', value: 'electric_bicycles' },
    { label: 'FAT BICYCLES', value: 'fat_bicycles' },
    { label: 'FOLDING BICYCLES', value: 'folding_bicycles' },
    { label: 'HYBRID BICYCLES', value: 'hybrid_bicycles' },
    { label: 'KICK SCOOTER', value: 'kick_scooter' },
    { label: 'ROAD BICYCLES', value: 'road_bicycles' },
  ],
  motorcycle: [
    { label: 'ADVENTURE', value: 'adventure' },
    { label: 'CRUISER', value: 'cruiser' },
    { label: 'DIRT BIKES', value: 'dirt_bikes' },
    { label: 'ELECTRIC', value: 'electric' },
    { label: 'STANDARD', value: 'standard' },
    { label: 'TOURING', value: 'touring' },
  ],
  sports_bike: [
    { label: 'GENERAL', value: 'general' },
    { label: 'HYPER BIKES', value: 'hyper_bikes' },
    { label: 'SUPER BIKES', value: 'super_bikes' },
    { label: 'TRACK BIKES', value: 'track_bikes' },
  ],
  leisure_boat: [
    { label: 'Catamarans', value: 'catamarans' },
    { label: 'Center Console', value: 'center_console' },
    { label: 'Deck Boats', value: 'deck_boats' },
    { label: 'Fishing Boats', value: 'fishing_boats' },
    { label: 'Jet', value: 'jet' },
    { label: 'Pontoon Boats', value: 'pontoon_boats' },
    { label: 'Sail', value: 'sail' },
  ],
  charter: [
    { label: 'Charters', value: 'charters' },
    { label: 'Helicopters', value: 'helicopters' },
  ],
}

export const brands = {}
