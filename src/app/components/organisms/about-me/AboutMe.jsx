import styles from './AboutMe.module.css'

import { Section } from '@/components/atoms/ui/section/Section'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

import { ProfileCard } from '../../molecules/profile-card/ProfileCard'
import { ProfileInformation } from '../../molecules/profile-information/ProfileInformation'

export const AboutMe = () => {
  return (
    <Section>
      <CategoryTitle>About Me</CategoryTitle>
      <div className={styles.container}>
        <ProfileCard />
        <ProfileInformation />
      </div>
    </Section>
  )
}
