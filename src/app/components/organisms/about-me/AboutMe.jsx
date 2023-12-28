import styles from './AboutMe.module.css'

import { Section } from '@/components/atoms/ui/section/Section'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'

import { ProfileCard } from '../../molecules/profile-card/ProfileCard'
import { ProfileInformation } from '../../molecules/profile-information/ProfileInformation'

export const AboutMe = () => {
  return (
    <Section>
      <CategoryTitle>About Me</CategoryTitle>
      {/* <h2>{`Hi, I'm Eduardo lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, similique. Doloribus, eligendi. Alias quam distinctio officia possimus, accusantium dignissimos voluptate.`}</h2>
      <p>
        {`Welcome to my digital space! I'm John Smith, a UI/UX Designer with a
        deep passion for UI/UX design Industry. As a Ul/UX designer, I have
        cultivated a diverse skill set and a keen eye for UI/UX Design, Product
        design and development. I'm always open to new opportunities,
        collaborations, and conversations. Whether you have a project in mind or
        just want to connect over a shared interest, feel free to reach out.
        Let's create something extraordinary together!`}
      </p> */}

      <div className={styles.container}>
        <ProfileCard />
        <ProfileInformation />
      </div>
    </Section>
  )
}
