import './Features.scss'
import { sampleVehicleFeatures } from '.'
import { FaCheckDouble, FaFire } from 'react-icons/fa'

const VehicleFeatures = () => {
  return (
    <div className="features-section">
      <h2 className="custom-heading">Features</h2>
      <div className="features">
        {sampleVehicleFeatures.map((feature) => (
          <div key={feature.key} className="feature">
            <div className="icon-box">
              <FaFire className="icon" />
            </div>
            <div className="feature-details">
              <span className="feature-label">{feature.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default VehicleFeatures
