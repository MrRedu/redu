import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from '@/components/molecules/card-connect/CardConnect'
import { AboutMeCard } from '@/components/organisms/about-me-card/AboutMeCard'
import { HeroSection } from '@/components/molecules/ui/hero-section/HeroSection'
import { DoubleScrollBanner } from '@/components/molecules/ui/scroll-banners/DoubleScrollBanner'

export const metadata = {
  title: 'Portfolio',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeCard />
      <ServicesSection />
      <DoubleScrollBanner />
      <CardConnect />
    </>
  )
}
