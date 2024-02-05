import { Section } from '@/components/atoms/ui/section/Section'
import { ProfileTitle } from '@/components/molecules/profile-title/ProfileTitle'
import { AboutMeCard } from '@/components/organisms/about-me-card/AboutMeCard'
import { Summary } from '@/components/organisms/summary/Summary'

export const metadata = {
  title: 'About me',
}

export default function AboutPage() {
  return (
    <>
      <Section>
        <ProfileTitle />
      </Section>
      <Section>
        <AboutMeCard />
        <Summary />
      </Section>
    </>
  )
}
