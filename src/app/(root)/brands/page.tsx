'use client'

import { FormEvent, useState } from 'react'
import './Brands.scss'
import { sampleBrands } from '@/components/root/main/top-brands'
import Pagination from '@/components/general/pagination/Pagination'
import { VEHICLE_CATEGORIES } from '@/components/root/main/vehicle-categories'
import { useAppContext } from '@/context/AppContext'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaSearch } from 'react-icons/fa'
import MotionDiv from '@/components/general/framer-motion/MotionDiv'

export default function Brands() {
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)

  const { selectedType, setSelectedType } = useAppContext()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleClick = () => {}

  return (
    <section className="brands-section wrapper">
      <MotionDiv className="top">
        <form onSubmit={handleSearch} className="input-box">
          <Input
            type="search"
            placeholder="Search brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-grey-50 h-[44px] focus-visible:ring-offset-0 focus:border-yellow placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-slate-300 focus-visible:ring-transparent max-w-96"
          />
          <Button
            aria-label="Search Brands"
            type="submit"
            className="bg-yellow w-10 p-1 overflow-hidden rounded-2xl text-white hover:bg-yellow group active:scale-[0.97] transition-transform"
          >
            <FaSearch className="text-sm h-5 w-5 group-hover:scale-[1.1] transition-transform" />
          </Button>
        </form>

        <div className="type">
          {VEHICLE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`cursor-pointer p-1 px-2 !rounded-xl `}
              onClick={() => {
                setSelectedType({
                  name: category.name,
                  value: category.value,
                })
              }}
            >
              <span
                className={`!text-sm whitespace-nowrap p-1 rounded-[0.6rem] px-2 hover:bg-yellow hover:text-white border shadow-md ${
                  selectedType.value === category.value &&
                  'text-white bg-yellow  '
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </MotionDiv>
      <MotionDiv className="brands-container">
        {sampleBrands.map((brand) => (
          <div
            onClick={handleClick}
            key={brand.id}
            className={`brand-card slide-visible `}
          >
            <div className="image_box">
              <img
                width={90}
                height={90}
                src={brand.icon}
                alt={brand.brandName}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <div className="brand-info">
              <p>{brand.brandName}</p>
              <p>{brand.count} Cars</p>
            </div>
          </div>
        ))}
      </MotionDiv>
      <Pagination page={page} setPage={setPage} totalPages={10} />
    </section>
  )
}
