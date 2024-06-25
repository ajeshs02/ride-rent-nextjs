import React from 'react'
import './FooterGrid.scss'
import { locations, company, vehicles, quick_links } from '.'

const FooterGrid = () => {
  return (
    <div className="footer-grid wrapper ">
      <div className="footer-section">
        {/* locations  link */}
        <h3 className="heading">Locations</h3>
        <div className="footer-links">
          {locations.map((location) => (
            <span className="link-wrapper" key={location.id}>
              &sdot; <span className="link">{location.location}</span>
            </span>
          ))}
        </div>
      </div>

      {/* links for the company */}
      <div className="footer-section">
        <h3 className="heading">Company</h3>
        <div className="footer-links">
          {company.map((item) => (
            <span className="link-wrapper" key={item.id}>
              &sdot; <span className="link">{item.title}</span>
            </span>
          ))}
        </div>
      </div>

      {/* links related to vehicles */}
      <div className="footer-section">
        <h3 className="heading">Vehicles</h3>
        <div className="footer-links">
          {vehicles.map((vehicle) => (
            <span className="link-wrapper" key={vehicle.id}>
              &sdot; <span className="link">{vehicle.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* quick links */}
      <div className="footer-section">
        <h3 className="heading">Quick Links</h3>
        <div className="footer-links">
          {quick_links.map((link) => (
            <span className="link-wrapper" key={link.id}>
              &sdot; <span className="link">{link.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterGrid
