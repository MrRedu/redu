import styles from './AboutMeCard.module.css'

import { Section } from '@/components/atoms/ui/section/Section'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

import { ProfileCard } from '../../molecules/profile-card/ProfileCard'
import { ProfileInformation } from '../../molecules/profile-information/ProfileInformation'

export const AboutMeCard = () => {
  return (
    <Section>
      <CategoryTitle>About Me</CategoryTitle>
      <div className={styles.container} id={'about-me'}>
        <ProfileCard />
        <ProfileInformation />
      </div>
    </Section>
  )
}
