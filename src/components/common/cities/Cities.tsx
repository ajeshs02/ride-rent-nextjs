'use client'
import './Cities.scss'
import { useState } from 'react'
import {
  dubai,
  abuDhabiCities,
  sharjahCities,
  ummAlQuwainCities,
  fujairahCities,
  ajmanCities,
  rasAlKhaimahCities,
} from './index.js'
import { useAppContext } from '@/context/AppContext'

const countries = [
  { name: 'Dubai', cities: dubai },
  { name: 'Abu Dhabi', cities: abuDhabiCities },
  { name: 'Sharjah', cities: sharjahCities },
  { name: 'Umm Al Quwain', cities: ummAlQuwainCities },
  { name: 'Fujairah', cities: fujairahCities },
  { name: 'Ajman', cities: ajmanCities },
  { name: 'Ras Al Khaimah', cities: rasAlKhaimahCities },
]

type City = {
  key: number
  name: string
  value: string
}

type CountryProps = {
  name: string
  cities: City[]
}

const Cities = () => {
  const [selectedCountry, setSelectedCountry] = useState('Dubai')
  const [cities, setCities] = useState(dubai)

  const { selectedType } = useAppContext()

  const handleCountryChange = (country: CountryProps) => {
    setSelectedCountry(country.name)
    setCities(country.cities)
  }

  return (
    <div className="wrapper cities-section">
      <h3>Available Locations</h3>
      <p>Choose your location/city to rent {selectedType.name} </p>
      <div className="countries">
        {countries.map((country) => (
          <button
            key={country.name}
            onClick={() => handleCountryChange(country)}
            className={`${selectedCountry === country.name && 'selected'}`}
          >
            {country.name}
          </button>
        ))}
      </div>
      <div className="cities">
        {cities.map((city) => (
          <div className="city" key={city.key}>
            {city.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cities
