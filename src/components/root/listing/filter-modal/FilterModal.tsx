import useFilters from '@/hooks/useFilters'
import Accordion from '../accordion/filter-accordion/FilterAccordion'
import './FilterModal.scss'
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
import { GrFormClose } from 'react-icons/gr'
import BrandAccordion from '../accordion/brand-accordion/BrandAccordion'
import { getBrandsByVehicleType } from '@/helpers/VehicleDetailsHelper'

type FilterModalProps = {
  setIsModal: (isOpen: boolean) => void
}

const FilterModal: React.FC<FilterModalProps> = ({ setIsModal }) => {
  const {
    selectedFilters,
    handleFilterChange,
    resetFilters,
    getVehicleSubTypes,
    getVehicleTypeLabel,
  } = useFilters()

  return (
    <div className="background">
      <div className="overlay" />
      <button
        onClick={() => setIsModal(false)}
        className="close-modal-btn"
        aria-label="filter close"
      >
        <GrFormClose className="icon" />
      </button>
      <div className="filter-modal">
        <div className="accordion-wrapper">
          {/* Model Year */}
          <Accordion
            title="Model Year"
            options={modelYears.map((year) => ({ label: year, value: year }))}
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
          {selectedFilters.vehicleTypes.length > 0 && (
            <Accordion
              title={`${getVehicleTypeLabel()} Type`}
              options={getVehicleSubTypes()}
              selected={selectedFilters.vehicleTypes}
              onChange={(value) => handleFilterChange('vehicleTypes', value)}
            />
          )}

          {/* Car Categories */}
          {selectedFilters.vehicleCategory === 'car' && (
            <Accordion
              title="Car Categories"
              options={carSubTypes}
              selected={selectedFilters.carSubTypes || []}
              onChange={(value) => handleFilterChange('carSubTypes', value)}
            />
          )}

          {/* No of Seats */}
          <Accordion
            title="No of Seats"
            options={seats.map((seat) => ({ label: seat, value: seat }))}
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
          <button className="apply">Apply Filters</button>
          <button className="reset" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
