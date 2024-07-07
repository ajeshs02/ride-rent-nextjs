import { BsEyeFill } from 'react-icons/bs'
import './FeaturesSidebar.scss'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { featuresData } from '.'

export default function FeaturesSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="bg-orange p-1 rounded-2xl  text-white mb-2 px-4 shadow-sm hover:shadow-lg transition-transform ease-in-out hover:scale-[1.01] active:scale-[0.99] flex items-center gap-x-2">
        Show All <BsEyeFill />
      </SheetTrigger>
      <SheetContent className="bg-white overflow-auto">
        <SheetHeader>
          <SheetTitle className="custom-heading feature-sidebar-heading text-2xl ">
            Features
          </SheetTitle>
          <div>
            {featuresData.map((feature) => (
              <div key={feature.id} className="feature-sub-section">
                <div className="sub-heading-container">
                  <div className="sub-heading-icon">
                    <img
                      src={feature.icon}
                      alt={feature.label}
                      className="icon"
                    />
                  </div>
                  <h3 className="sub-heading">{feature.label}</h3>
                </div>
                <div className="sub-feature-container">
                  {feature.data.map((data) => (
                    <div className="feature" key={data.id}>
                      <span className="entity">&raquo;</span>
                      {data.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
