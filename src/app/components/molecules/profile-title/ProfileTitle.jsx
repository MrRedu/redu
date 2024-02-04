import styles from './ProfileTitle.module.css'

import Image from 'next/image'

import { Section } from '@/components/atoms/ui/section/Section'

export const ProfileTitle = () => {
  return (
    <Section>
      <div className={styles.container}>
        <h2 className={`${styles.text} ${styles.title}`}>
          <div>Independent</div>
          <div>Web</div>
          <div>developer</div>
        </h2>
        <div className={styles['center-row']}>
          <span className={`${styles.text} `}>Based in Venezuela</span>
          <Image
            src={'/rj.svg'}
            width={72}
            height={72}
            alt=""
            className={styles.image}
          />
          <span className={`${styles.text} `}>Specialized</span>
        </div>
        <span className={`${styles.text} `}>in Front-End development</span>
      </div>
    </Section>
  )
}
