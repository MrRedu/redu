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
          src={'/asset-5.png'}
          width={500}
          height={700}
          alt="Developer Eduardo R."
          className={styles.image}
        />
        <figcaption className={styles['image-caption']}>
          Image:{' '}
          <strong>
            <a href="behance.net/melicolors">@melicolors</a>
          </strong>
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
