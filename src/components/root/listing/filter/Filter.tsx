'use client'

import './Filter.scss'

// Accordion component import
import Accordion from '../accordion/filter-accordion/FilterAccordion'

// Importing data set
import {
  modelYears,
  vehicleCategories,
  carSubTypes,
  seats,
  paymentModes,
  transmissions,
  fuelTypes,
  colors,
} from '../../../../app/(root)/listing/index'
import useFilters from '@/hooks/useFilters'
import { RiListSettingsFill } from 'react-icons/ri'
import BrandAccordion from '../accordion/brand-accordion/BrandAccordion'
import { getBrandsByVehicleType } from '@/helpers/VehicleDetailsHelper'
import { FC } from 'react'

const Filter: FC = () => {
  const {
    selectedFilters,
    handleFilterChange,
    resetFilters,
    getVehicleSubTypes,
    getVehicleTypeLabel,
  } = useFilters()

  const shouldRenderVehicleSubTypes = ![
    'bus',
    'van',
    'yacht',
    'buggy',
  ].includes(selectedFilters.vehicleCategory)

  return (
    <div className="filter-container">
      <div>
        {/* Model Year */}
        <Accordion
          title="Model Year"
          options={modelYears.map((year) => ({
            label: year.toString(),
            value: year.toString(),
          }))}
          selected={selectedFilters.modelYear}
          onChange={(value) => handleFilterChange('modelYear', value)}
        />

        {/* Vehicle Category */}
        <Accordion
          title="Vehicle Category"
          isSingleSelection={true}
          options={vehicleCategories}
          selected={selectedFilters.vehicleCategory}
          onChange={(value) => handleFilterChange('vehicleCategory', value)}
        />

        {/* Vehicle Sub Types */}
        {shouldRenderVehicleSubTypes && (
          <Accordion
            title={`${getVehicleTypeLabel()} Types`}
            options={getVehicleSubTypes()}
            selected={selectedFilters.vehicleTypes}
            onChange={(value) => handleFilterChange('vehicleTypes', value)}
          />
        )}

        {/* Car Categories */}
        {selectedFilters.vehicleCategory === 'car' && (
          <Accordion
            title="Car Sub Types"
            options={carSubTypes}
            selected={selectedFilters.carSubTypes || []}
            onChange={(value) => handleFilterChange('carSubTypes', value)}
          />
        )}

        {/* No of Seats */}
        <Accordion
          title="No of Seats"
          options={seats.map((seat) => ({
            label: seat.toString(),
            value: seat.toString(),
          }))}
          selected={selectedFilters.seats}
          onChange={(value) => handleFilterChange('seats', value)}
        />
        {/* Payment Mode */}
        <Accordion
          title="Payment Mode"
          options={paymentModes}
          selected={selectedFilters.paymentMode}
          onChange={(value) => handleFilterChange('paymentMode', value)}
        />

        {/* Transmission */}
        <Accordion
          title="Transmission"
          options={transmissions}
          selected={selectedFilters.transmission}
          onChange={(value) => handleFilterChange('transmission', value)}
        />

        {/* Fuel Type */}
        <Accordion
          title="Fuel Type"
          options={fuelTypes}
          selected={selectedFilters.fuelType}
          onChange={(value) => handleFilterChange('fuelType', value)}
        />

        {/* Color */}
        <Accordion
          title="Color"
          options={colors}
          selected={selectedFilters.color}
          onChange={(value) => handleFilterChange('color', value)}
        />

        {/* Brand */}
        <BrandAccordion
          title="Brand"
          options={getBrandsByVehicleType(selectedFilters.vehicleCategory)}
          selected={selectedFilters.brand}
          onChange={(value) => handleFilterChange('brand', value)}
        />
      </div>
      <div className="filter-buttons">
        <button className="apply">
          Apply Filters <RiListSettingsFill />
        </button>
        <button className="reset" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
