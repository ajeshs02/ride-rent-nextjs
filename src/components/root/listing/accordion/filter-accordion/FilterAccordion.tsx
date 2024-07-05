'use client'

import './FilterAccordion.scss'
import { useRef, useState, ChangeEvent } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

type Option = {
  label: string
  value: string
}

type FilterAccordionProps = {
  title: string
  options: Option[]
  selected: string[] | string
  onChange: (value: string) => void
  isSingleSelection?: boolean
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  options,
  selected,
  onChange,
  isSingleSelection = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={`filter ${isOpen ? 'open' : ''}`}>
      <button className="filter-header" onClick={toggleAccordion}>
        {title}
        {/* down icon */}
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>
      <div
        className="filter-content"
        style={{
          maxHeight: isOpen ? '12rem' : '0',
          overflowY:
            isOpen && contentRef.current?.scrollHeight! > 160
              ? 'auto'
              : 'hidden',
        }}
        ref={contentRef}
      >
        {options.map((option, index) => (
          <label key={index} className="custom_check">
            <input
              type="checkbox"
              value={option.value}
              checked={
                isSingleSelection
                  ? selected === option.value
                  : selected.includes(option.value)
              }
              onChange={handleCheckboxChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterAccordion
