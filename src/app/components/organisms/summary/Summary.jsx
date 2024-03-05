'use client'
import styles from './Summary.module.css'
import { PersonalSummary } from '@/components/molecules/personal-summary/PersonalSummary'
import Image from 'next/image'
export const Summary = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/access-card.webp"
        width={600}
        height={800}
        alt="Developer Eduardo R."
        className={styles.image}
        loading="lazy"
      />

      <div className={styles['container-personal-summary']}>
        <PersonalSummary />
      </div>
    </div>
  )
}
