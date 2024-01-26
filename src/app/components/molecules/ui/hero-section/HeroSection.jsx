'use client'
import Image from 'next/image'
import styles from './HeroSection.module.css'
import { ArrowDownRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <>
      <section className={styles.container} style={{ position: 'relative' }}>
        <div className={styles['content-container']}>
          <div className={styles.content}>
            <span className={styles.arrow}>
              <ArrowDownRight size={32} />
            </span>
            <span className={`${styles.text} ${styles.status}`}>
              #opentowork
            </span>
            <span className={`${styles.text} ${styles.title}`}>
              Web developer
            </span>
          </div>
        </div>

        <div className={styles['image-container']}>
          <Image
            src={'/avatar.png'}
            width={1200}
            height={800}
            alt="Redu"
            className={styles.image}
          />
        </div>
      </section>
    </>
  )
}
