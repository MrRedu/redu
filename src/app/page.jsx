import { ServicesSection } from '@/components/organisms/services-section/ServicesSection'
import { CardConnect } from './components/molecules/card-connect/CardConnect'
// import { AboutMe } from './components/molecules/about-me/AboutMe'

export const metadata = {
  title: 'Portfolio',
}

export default function HomePage() {
  return (
    <>
      {/* <AboutMe /> */}
      <CardConnect />
      <ServicesSection />
    </>
  )
}
