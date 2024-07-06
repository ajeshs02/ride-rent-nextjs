import './Features.scss'
import { sampleVehicleFeatures } from '.'
import { FaFire } from 'react-icons/fa'
import FeaturesSidebar from './features-sidebar/FeaturesSidebar'

const VehicleFeatures = () => {
  return (
    <div className="features-section">
      <h2 className="custom-heading">Features</h2>
      <div className="features">
        {sampleVehicleFeatures.map((feature) => (
          <div key={feature.key} className="feature">
            <span className="entity">&raquo;</span>

            <div className="feature-details">
              <span className="feature-label">{feature.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* features sidebar */}
      <div className="overlay">
        <FeaturesSidebar />
      </div>
    </div>
  )
}
export default VehicleFeatures
