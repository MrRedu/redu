import styles from './AboutMeCard.module.css'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { ProfileCard } from '@/components/molecules/profile-card/ProfileCard'
import { ProfileInformation } from '@/components/molecules/profile-information/ProfileInformation'
import { SocialMedia } from '@/components/molecules/social-media/SocialMedia'

export const AboutMeCard = () => {
  return (
    <>
      <CategoryTitle>About me</CategoryTitle>
      <div className={styles.container} id={'about-me'}>
        <ProfileCard />
        <ProfileInformation />
        <SocialMedia />
      </div>
    </>
  )
}
