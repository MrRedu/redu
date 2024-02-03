import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from '@/components/molecules/card-connect/CardConnect'
import { AboutMeCard } from '@/components/organisms/about-me-card/AboutMeCard'
import { HeroSection } from '@/components/organisms/ui/hero-section/HeroSection'
import { SelectedWorks } from '#/src/app/components/organisms/selected-works/SelectedWorks'
import {
  SimpleScrollBanner,
  DoubleScrollBanner,
} from '@/components/molecules/ui/scroll-banners'

export const metadata = {
  title: 'Redu',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SimpleScrollBanner direction={'left'} speed={'slow'} />
      <AboutMeCard />
      <SelectedWorks />
      <ServicesSection />
      <DoubleScrollBanner />
      <CardConnect />
    </>
  )
}
