import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from './components/molecules/card-connect/CardConnect'
import { ScrollingBanner } from './components/molecules/ui/scrolling-banner/ScrollingBanner'
import { AboutMeCard } from './components/organisms/about-me-card/AboutMeCard'

export const metadata = {
  title: 'Portfolio',
}

export default function HomePage() {
  return (
    <>
      <AboutMeCard />
      <CardConnect />
      <ScrollingBanner />
      <ServicesSection />
    </>
  )
}
