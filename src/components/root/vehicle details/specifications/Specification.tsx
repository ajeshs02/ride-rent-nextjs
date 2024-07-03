'use client'

import { FC, useEffect } from 'react'
import {
  Category,
  getHoverData,
  getSpecificationIcon,
} from '@/helpers/VehicleDetailsHelper'
import './Specification.scss'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Define the type for specification data
interface SpecificationData {
  specificationKey: string
  label: string
  value: string | number
}

// Define the type for vehicle data
interface VehicleData {
  id: number
  name: string
  specifications: SpecificationData[]
}

// Define the type for hover data
interface HoverData {
  [key: string]: {
    hover: string
  }
}

// Define the type for icon data
type IconData = {
  [key: string]: {
    [prop: string]: { icon: { src: string } }
  }
}

// Define the possible categories for vehicles

interface SpecificationProps {
  category?: Category
}

const sampleVehicleData: VehicleData = {
  id: 1,
  name: 'Tesla Model S',
  specifications: [
    { specificationKey: 'brand', label: 'Brand', value: 'Tesla' },
    {
      specificationKey: 'yearOfManufacture',
      label: 'Year of Manufacture',
      value: 2022,
    },
    { specificationKey: 'engineType', label: 'Engine Type', value: 'Electric' },
    {
      specificationKey: 'transmission',
      label: 'Transmission',
      value: 'Automatic',
    },
    {
      specificationKey: 'seatingCapacity',
      label: 'Seating Capacity',
      value: '4',
    },
    { specificationKey: 'bodyType', label: 'Body Type', value: 'Sedan' },
    {
      specificationKey: 'fuelTankCapacity',
      label: 'Fuel Tank Capacity',
      value: '396 miles',
    },
    { specificationKey: 'color', label: 'Color', value: 'Unknown' },
    {
      specificationKey: 'infotainmentSystem',
      label: 'Infotainment System',
      value: 'Unknown',
    },
    {
      specificationKey: 'climateControl',
      label: 'Climate Control',
      value: 'Unknown',
    },
    { specificationKey: 'abs', label: 'ABS', value: 'Yes' },
    {
      specificationKey: 'tractionControl',
      label: 'Traction Control',
      value: 'Unknown',
    },
    { specificationKey: 'wifi', label: 'WiFi', value: 'Unknown' },
    {
      specificationKey: 'luggageCapacity',
      label: 'Luggage Capacity',
      value: 'Unknown',
    },
    {
      specificationKey: 'batteryCapacity',
      label: 'Battery Capacity',
      value: 'Unknown',
    },
    {
      specificationKey: 'chargingTime',
      label: 'Charging Time',
      value: 'Unknown',
    },
    {
      specificationKey: 'singleChargeRange',
      label: 'Single Charge Range',
      value: 'Unknown',
    },
  ],
}

const Specification: FC<SpecificationProps> = ({ category = 'car' }) => {
  const hoverData: HoverData | null = getHoverData(category) // Ensure category is of type Category
  const specificationIcons = getSpecificationIcon(category)

  useEffect(() => console.log(specificationIcons), [specificationIcons])

  return (
    <div className="specification-container">
      <h2 className="custom-heading">Specifications</h2>
      <div className="specifications">
        {sampleVehicleData.specifications.map((spec) => {
          return (
            <div className="specification" key={spec.specificationKey}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex gap-1">
                    <div className="spec-icon-box">
                      {specificationIcons &&
                        specificationIcons[spec.specificationKey] && (
                          <img
                            src={specificationIcons[spec.specificationKey].icon}
                            alt={`${spec.label} icon`}
                            className="spec-icon"
                          />
                        )}
                    </div>

                    <div className="spec-details">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 text-white rounded-xl shadow-md">
                    <p>
                      {hoverData
                        ? hoverData[spec.specificationKey]?.hover
                        : 'No data available'}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Specification
