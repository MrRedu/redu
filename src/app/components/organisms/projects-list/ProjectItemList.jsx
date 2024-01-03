import propTypes from 'prop-types'

import styles from './ProjectItemList.module.css'

import Image from 'next/image'
import Link from 'next/link'

export const ProjectItemList = ({ href = '#', title, description, image }) => {
  return (
    <li className={styles.item}>
      <Link href={href} target="_blank" className={styles.link}>
        <div className={styles['image-container']}>
          <Image
            src={image}
            alt={`${title} image`}
            width={1200}
            height={736}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </Link>
    </li>
  )
}

ProjectItemList.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
}
