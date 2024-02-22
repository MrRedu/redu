'use client'
import Image from 'next/image'
import styles from './HeroSection.module.css'

import { ArrowDownRight } from 'lucide-react'

import { smoothScroll } from '@/utils/utils'
import { useScrolled } from '@/hooks/useScrolled'

import { ScrollDown } from '@/components/atoms/ui/scroll-down/ScrollDown'
import { CobeAutorotate } from '@/components/atoms/ui/cobe-autorotate/CobeAutorotate'
import { StatusTag } from './StatusTag'

export const HeroSection = () => {
  const isScrolled = useScrolled()

  return (
    <section className={styles.container}>
      {/* Located (left side) */}
      <div className={styles['located-container']}>
        <div className={styles.located}>
          <span className={styles.text}>Located in</span>
          <span className={styles.text}>Venezuela</span>
        </div>
        <div className={styles['cobe-container']}>
          <CobeAutorotate />
        </div>
      </div>

      {/* Content (right side) */}
      <div className={styles['content-container']}>
        <div className={styles.content}>
          <span className={styles.arrow}>
            <ArrowDownRight size={32} />
          </span>
          <span className={`${styles.text} ${styles.title}`}>
            Web developer
          </span>
          <StatusTag />
        </div>
      </div>

      {/* ScrollDown */}
      <div
        className={styles['scroll-down-container']}
        style={{
          opacity: isScrolled ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
        onClick={() => smoothScroll('about-me')}
      >
        <ScrollDown />
      </div>

      {/* Image */}
      <div className={styles['image-container']}>
        <Image
          src={'/avatar.webp'}
          width={1200}
          height={800}
          alt="Developer Eduardo R."
          loading="eager"
          className={styles.image}
        />
      </div>
    </section>
  )
}
