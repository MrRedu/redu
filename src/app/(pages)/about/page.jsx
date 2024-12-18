import { Section } from '@/components/atoms/ui/section/Section'
import { ProfileTitle } from '@/components/molecules/profile-title/ProfileTitle'
import { AboutMeCard } from '@/components/organisms/about-me-card/AboutMeCard'
import { Summary } from '@/components/organisms/summary/Summary'
import { CardConnect } from '@/components/molecules/card-connect/CardConnect'
import { SimpleScrollBanner } from '@/components/molecules/ui/scroll-banners'

export const metadata = {
  title: 'About me',
}

export default function AboutPage() {
  return (
    <>
      <Section isTheFirstSection>
        <ProfileTitle />
      </Section>
      <Section>
        <AboutMeCard />
        <Summary />
      </Section>
      <SimpleScrollBanner direction={'left'} speed={'slow'} />
      <Section>
        <CardConnect />
      </Section>
    </>
  )
}
