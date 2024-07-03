import HeadingBanner from '@/components/general/heading-banner/HeadingBanner'
import './FAQ.scss'
import { FAQ_Data } from '@/components/common/FAQ'
import FAQ from '@/components/common/FAQ/FAQ'

export default function FAQPage() {
  return (
    <section>
      <HeadingBanner heading="Frequently Asked Questions" />

      <FAQ data={FAQ_Data} />
    </section>
  )
}
