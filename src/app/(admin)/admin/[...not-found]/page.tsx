import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="error-section">
      <div className="error-top">
        <img src={'/assets/img/general/404.webp'} alt="404 Not Found" />
      </div>

      {/* logo */}
      <div className="logo-container">
        <Link href={'/'} className="header-logo">
          <figure>
            <img
              src={'/assets/img/logo/header_logo.webp'}
              className="header-img"
              alt="Ride Rent Logo"
            />
            <figcaption>
              Quick way to get a <span>Ride On Rent</span>
            </figcaption>
          </figure>
        </Link>
      </div>
    </section>
  )
}
