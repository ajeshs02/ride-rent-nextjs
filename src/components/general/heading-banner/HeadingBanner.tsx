import './HeadingBanner.scss'
import BreadCrumb from '../breadcrump/BreadCrump'

export default function HeadingBanner({ heading }: { heading: string }) {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/img/bg/texture.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="heading-banner "
    >
      <h1>{heading}</h1>

      <BreadCrumb />
    </div>
  )
}
