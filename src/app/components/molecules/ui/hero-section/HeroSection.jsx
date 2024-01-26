'use client'
import Image from 'next/image'
import styles from './HeroSection.module.css'

import { ArrowDownRight } from 'lucide-react'

import { smoothScroll } from '@/utils/utils'
import { useScrolled } from '@/hooks/useScrolled'

import { ScrollDown } from '@/components/atoms/ui/scroll-down/ScrollDown'

export const HeroSection = () => {
  const isScrolled = useScrolled()

  return (
    <>
      <section className={styles.container}>
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

        <div
          className={styles['scroll-down-container']}
          style={{
            opacity: isScrolled ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
          onClick={() => smoothScroll('about-me')}
        >
          <ScrollDown />
          <span className={styles['helper-text']}>Scroll Down</span>
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
