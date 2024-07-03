'use client'

import './ListingPage.scss'

import GridSwitch from '@/components/root/listing/grid-switch/GridSwitch'
import VehicleGrid from '@/components/root/listing/vehicle-grids/VehicleGrid'
import Filter from '@/components/root/listing/filter/Filter'
import { FC, useState } from 'react'

const ListingPage: FC = () => {
  const results = { start: 1, end: 5, total: 10 }
  const sampleArray1 = Array.from({ length: 8 }, (_, index) => index + 1)

  const [isGridView, setIsGridView] = useState(false)

  return (
    <div className="listing-section wrapper">
      <div className="listing-navbar">
        <div>
          <p>
            Showing {results.start}-{results.end} of {results.total} results
          </p>
        </div>
        <div className="list-navbar-right">
          <div className="dropdown">
            Show :&nbsp;
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
          {/* grid vs list switch button */}
          <GridSwitch isGridView={isGridView} setIsGridView={setIsGridView} />
        </div>
      </div>

      <div className="listing-container">
        {/* filter */}
        <Filter />

        {/* vehicle grid */}
        <VehicleGrid isGridView={isGridView} data={sampleArray1} />
      </div>
    </div>
  )
}

export default ListingPage
