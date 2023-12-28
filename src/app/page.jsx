import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from './components/molecules/card-connect/CardConnect'
import { ScrollingBanner } from './components/molecules/ui/scrolling-banner/ScrollingBanner'
import { AboutMe } from './components/organisms/about-me/AboutMe'

export const metadata = {
  title: 'Portfolio',
}

export default function HomePage() {
  return (
    <>
      <AboutMe />
      <CardConnect />
      <ScrollingBanner />
      <ServicesSection />
    </>
  )
}
