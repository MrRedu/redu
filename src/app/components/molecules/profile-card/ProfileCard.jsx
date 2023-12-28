import Image from 'next/image'
import styles from './ProfileCard.module.css'
export const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.hi}>Hello</span>
        <span className={styles.name}> {`I'm Redu.`}</span>
      </h2>
      <figure className={styles['image-container']}>
        <Image
          src={'https://avatars.githubusercontent.com/u/73679190?v=4'}
          width={160}
          height={160}
          alt=""
          className={styles.image}
        />
        <figcaption className={styles['image-caption']}>
          Photo/Image: XXXXX X.
        </figcaption>
      </figure>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>{`Here's how I came here...`}</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          similique. Doloribus, eligendi. Alias quam distinctio officia
          possimus, accusantium dignissimos voluptate.
        </p>
      </div>
    </div>
  )
}
