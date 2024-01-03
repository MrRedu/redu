import propTypes from 'prop-types'

import styles from './ProjectItemList.module.css'

import Image from 'next/image'
import Link from 'next/link'

export const ProjectItemList = ({ href = '#', title, tags, image }) => {
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
          <ul className={styles.tags}>
            {tags.map(tag => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <span className={styles.title}>{title}</span>
        </div>
      </Link>
    </li>
  )
}

ProjectItemList.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
  tags: propTypes.array,
  image: propTypes.string,
}
