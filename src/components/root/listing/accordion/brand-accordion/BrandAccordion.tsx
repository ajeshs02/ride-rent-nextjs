'use client'

import { useEffect, useRef, useState, ChangeEvent } from 'react'
import './BrandAccordion.scss'
import { RiArrowDropDownLine } from 'react-icons/ri'

type Option = {
  label: string
  value: string
}

type BrandAccordionProps = {
  title: string
  options: Option[]
  selected: string[]
  onChange: (value: string) => void
}

const BrandAccordion: React.FC<BrandAccordionProps> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options)

  const contentRef = useRef<HTMLDivElement | null>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    let debounceTimeout: ReturnType<typeof setTimeout>

    const debounce = (func: () => void, delay: number) => {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(func, delay)
    }

    debounce(() => {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().startsWith(search.toLowerCase())
        )
      )
    }, 500)

    return () => clearTimeout(debounceTimeout)
  }, [search, options])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className={`brand ${isOpen ? 'open' : ''}`}>
      <button className="brand-header" onClick={toggleAccordion}>
        {title}
        {/* down icon */}
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>

      <div
        className="brand-content"
        style={{
          maxHeight: isOpen ? '15rem' : '0',
          overflowY:
            isOpen && contentRef.current?.scrollHeight! > 160
              ? 'auto'
              : 'hidden',
        }}
        ref={contentRef}
      >
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search brands"
            className="search-field"
          />
        </div>

        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <label key={index} className="custom_check ">
              <input
                type="checkbox"
                value={option.value}
                checked={selected.includes(option.value)}
                onChange={() => onChange(option.value)}
              />
              {option.label}
            </label>
          ))
        ) : (
          <p className="no-results">No results found!</p>
        )}
      </div>
    </div>
  )
}

export default BrandAccordion
