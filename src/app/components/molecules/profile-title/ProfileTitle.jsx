import styles from './ProfileTitle.module.css'

import Image from 'next/image'

export const ProfileTitle = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.text} ${styles.title}`}>
        <span>Independent</span>
        <span>Web</span>
        <span>developer</span>
      </h2>
      <div className={styles['center-row']}>
        <span className={`${styles.text} `}>Based in Venezuela</span>
        <Image
          src={'/rj.svg'}
          width={72}
          height={72}
          alt="Redu Logo"
          className={styles.image}
        />
        <span className={`${styles.text} `}>Specialized</span>
      </div>
      <span className={`${styles.text} `}>in Front-End development</span>
    </div>
  )
}
