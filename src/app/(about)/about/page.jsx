import { Section } from '@/components/atoms/ui/section/Section'
import { ProfileTitle } from '@/components/molecules/profile-title/ProfileTitle'
import { AboutMeCard } from '@/components/organisms/about-me-card/AboutMeCard'
import { PersonalSummary } from '@/components/molecules/personal-summary/PersonalSummary'

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
        <PersonalSummary />
      </Section>
    </>
  )
}
