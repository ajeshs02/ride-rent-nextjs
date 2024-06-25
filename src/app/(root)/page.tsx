import FAQ from '@/components/common/FAQ/FAQ'
import WhyOpt from '@/components/common/why-opt/WhyOpt'
import Affordable from '@/components/root/main/affordable/Affordable'
import DocumentsRequired from '@/components/root/main/documents-required/DocumentsRequired'
import Documents from '@/components/root/main/documents/Documents'
import Features from '@/components/root/main/features/Features'
import Landing from '@/components/root/main/landing/Landing'
import Latest from '@/components/root/main/latest/Latest'
import Location from '@/components/root/main/locations/Locations'
import MostPopular from '@/components/root/main/most-popular/MostPopular'
import NewlyArrived from '@/components/root/main/newly-arrived/NewlyArrived'
import Recommended from '@/components/root/main/recommended/Recommended'
import TopBrands from '@/components/root/main/top-brands/TopBrands'
import VehicleTypes from '@/components/root/main/vehicle-types/VehicleTypes'
import LazyLoad from '@/components/skelton/lazy-load/LazyLoad'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Landing />
      <VehicleTypes />

      <Suspense fallback={<LazyLoad />}>
        <MostPopular />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <TopBrands />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <Latest />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <NewlyArrived />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <Affordable />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <Location />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <Recommended />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <Features />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <Documents />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<LazyLoad />}>
        <WhyOpt />
      </Suspense>
    </>
  )
}
