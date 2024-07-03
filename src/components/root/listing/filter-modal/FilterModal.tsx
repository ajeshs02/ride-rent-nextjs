import useFilters from '@/hooks/useFilters'
import Accordion from '../accordion/filter-accordion/FilterAccordion'
import './FilterModal.scss'
import {
  modelYears,
  vehicleTypes,
  carCategories,
  seats,
  paymentModes,
  transmissions,
  fuelTypes,
  colors,
} from '../../../../app/(root)/listing/index'
import { GrFormClose } from 'react-icons/gr'

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

          {/* Vehicle Type */}
          <Accordion
            title="Vehicle Type"
            isSingleSelection={true}
            options={vehicleTypes}
            selected={selectedFilters.vehicleType}
            onChange={(value) => handleFilterChange('vehicleType', value)}
          />

          {/* Vehicle Sub Types */}
          {selectedFilters.vehicleType.length > 0 && (
            <Accordion
              title={`${getVehicleTypeLabel()} Type`}
              options={getVehicleSubTypes()}
              selected={selectedFilters.vehicleSubType}
              onChange={(value) => handleFilterChange('vehicleSubType', value)}
            />
          )}

          {/* Car Categories */}
          {selectedFilters.vehicleType[0] === 'cars' && (
            <Accordion
              title="Car Categories"
              options={carCategories}
              selected={selectedFilters.carCategories || []}
              onChange={(value) => handleFilterChange('carCategories', value)}
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
