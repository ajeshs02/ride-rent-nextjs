'use client'

import './GridSwitch.scss'
import { IoGridOutline, IoList } from 'react-icons/io5'
import useIsSmallScreen from '@/hooks/useIsSmallScreen'

type GridSwitchProps = {
  isGridView: boolean
  setIsGridView: (val: boolean) => void
}

const GridSwitch = ({ isGridView, setIsGridView }: GridSwitchProps) => {
  const isSmallScreen = useIsSmallScreen(850)

  if (isSmallScreen) return null

  return (
    <div className="grid-style">
      <button
        className={`icon-container ${isGridView && 'selected'}`}
        aria-label="Switch to grid view"
        onClick={() => setIsGridView(true)}
      >
        <IoGridOutline className="icon" />
      </button>
      <button
        className={`icon-container ${!isGridView && 'selected'}`}
        aria-label="Switch to list view"
        onClick={() => setIsGridView(false)}
      >
        <IoList className="icon" />
      </button>
    </div>
  )
}

export default GridSwitch
