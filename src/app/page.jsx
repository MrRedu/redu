import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from '@/components/molecules/card-connect/CardConnect'
import { AboutMeCard } from '@/components/organisms/about-me-card/AboutMeCard'
import { HeroSection } from '#/src/app/components/organisms/ui/hero-section/HeroSection'
import {
  SimpleScrollBanner,
  DoubleScrollBanner,
} from '@/components/molecules/ui/scroll-banners'

export const metadata = {
  title: 'Portfolio | Redu',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SimpleScrollBanner direction={'left'} speed={'slow'} />
      <AboutMeCard />
      <ServicesSection />
      <DoubleScrollBanner />
      <CardConnect />
    </>
  )
}
