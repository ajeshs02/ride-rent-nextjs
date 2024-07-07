'use client'

import './VehicleGrid.scss'
import { useState, useEffect, useRef } from 'react'
import HorizontalCard from '../vehicle-card/horizontal-card/HorizontalCard'
import VerticalCard from '../vehicle-card/vertical-card/VerticalCard'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import Pagination from '@/components/general/pagination/Pagination'
import FiltersSidebar from '../filter-sidebar/FiltersSidebar'

type VehicleGridProps = {
  data: number[]
  isGridView: boolean
}

const VehicleGrid: React.FC<VehicleGridProps> = ({ data, isGridView }) => {
  const [page, setPage] = useState(1)

  const isSmallScreen = useIsSmallScreen(850)
  const isFiltersButtonVisible = useIsSmallScreen(1200)
  const vehicleGridRef = useRef<HTMLDivElement | null>(null)
  const isVehicleGridVisible = useIntersectionObserver(vehicleGridRef)

  return (
    <div
      ref={vehicleGridRef}
      className={`grid ${isGridView ? 'multi-grid' : ''} ${
        isSmallScreen ? 'two-column-vertical' : ''
      }`}
    >
      {data.map((item, index) =>
        isSmallScreen || isGridView ? (
          <VerticalCard key={index} />
        ) : (
          <HorizontalCard key={index} />
        )
      )}

      <Pagination page={page} setPage={setPage} totalPages={8} />

      {/* Filter modal toggle button */}
      {isFiltersButtonVisible && isVehicleGridVisible && <FiltersSidebar />}
    </div>
  )
}

export default VehicleGrid
