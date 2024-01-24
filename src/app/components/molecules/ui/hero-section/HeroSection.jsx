import styles from './HeroSection.module.css'
import Image from 'next/image'
export const HeroSection = () => {
  return (
    <>
      <section className={styles.container}>
        <div
          className={`${styles['image-container-1']} ${styles['image-container']}`}
        >
          <Image
            src={'/projects/gyphi.webp'}
            alt=""
            width={800}
            height={100}
            className={`${styles.image} ${styles['image-1']}`}
          />
        </div>
        <h2 className={`${styles.text} ${styles['text-1']}`}>Where Vision</h2>
        <div
          className={`${styles['image-container-2']} ${styles['image-container']}`}
        >
          <Image
            src={'/projects/gyphi.webp'}
            alt=""
            width={800}
            height={100}
            className={`${styles.image} ${styles['image-2']}`}
          />
        </div>

        <span className={`${styles.text} ${styles['text-2']}`}>Meets</span>

        <div
          className={`${styles['image-container-3']} ${styles['image-container']}`}
        >
          <Image
            src={'/projects/gyphi.webp'}
            alt=""
            width={800}
            height={100}
            className={`${styles.image} ${styles['image-3']}`}
          />
        </div>

        <span className={`${styles.text} ${styles['text-3']}`}>
          Digital Reality
        </span>
      </section>
    </>
  )
}
