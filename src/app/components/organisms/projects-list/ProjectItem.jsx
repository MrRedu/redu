import styles from './ProjectItem.module.css'
import Image from 'next/image'
import Link from 'next/link'
import propTypes from 'prop-types'
export const ProjectItem = ({ href = '#', title, image, isGrid }) => {
  return (
    <li
      className={`${styles.container} ${
        isGrid ? styles['is-grid'] : styles['is-list']
      }`}
    >
      <Link href={href} className={styles.link}>
        <span className={styles.title}>{title}</span>
        <div className={styles['image-container']}>
          <Image
            className={styles.image}
            src={image}
            width={660}
            height={420}
            loading="lazy"
            alt={`${title} image`}
          />
        </div>
      </Link>
    </li>
  )
}
ProjectItem.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
  image: propTypes.string,
  isGrid: propTypes.bool,
}
