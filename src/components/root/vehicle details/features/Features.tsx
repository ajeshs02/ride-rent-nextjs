import './Features.scss'
import { sampleVehicleFeatures } from '.'
import { FaFire } from 'react-icons/fa'
import FeaturesSidebar from './features-sidebar/FeaturesSidebar'
import MotionDiv from '@/components/general/framer-motion/MotionDiv'
import { MotionH2 } from '@/components/general/framer-motion/MotionElm'

const VehicleFeatures = () => {
  return (
    <div className="features-section">
      <MotionH2
        initial={{ opacity: 0.1, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'tween', duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="custom-heading"
      >
        Features
      </MotionH2>
      <MotionDiv className="features">
        {sampleVehicleFeatures.map((feature) => (
          <div key={feature.key} className="feature">
            <span className="entity">&raquo;</span>

            <div className="feature-details">
              <span className="feature-label">{feature.label}</span>
            </div>
          </div>
        ))}
      </MotionDiv>

      {/* features sidebar */}
      <div className="overlay">
        <FeaturesSidebar />
      </div>
    </div>
  )
}
export default VehicleFeatures
