import styles from './ProfileCard.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <h2 className={styles.title}>
        <span className={styles.hi}>Hello</span>
        <span className={styles.name}> {`I'm Redu.`}</span>
      </h2>
    </header>
  )
}

export const ProfileCard = () => {
  return (
    <article className={styles.container}>
      <Header />
      <figure className={styles['image-container']}>
        <Image
          src={'https://avatars.githubusercontent.com/u/73679190?v=4'}
          width={160}
          height={160}
          alt=""
          className={styles.image}
        />
        <figcaption className={styles['image-caption']}>
          Image: Name L.
        </figcaption>
      </figure>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>{`Here's how I came here...`}</h3>
        <p className={styles.description}>
          {`I've always been interested in doing things that I don't understand,
          so... I'm still here...`}
        </p>
      </div>
    </article>
  )
}
