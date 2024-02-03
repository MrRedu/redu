import propTypes from 'prop-types'
import styles from './SelectedWork.module.css'
import Image from 'next/image'
export const SelectedWork = ({ title, internUrl, image, roles, year }) => {
  return (
    <div>
      <a href={internUrl} className={styles.container}>
        <div className={styles['container-image']}>
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
          <ul className={styles.tags}>
            {roles.map((role, index) => (
              <li className={`${styles.tag} ${styles.role}`} key={index}>
                {role}
              </li>
            ))}
            <span className={`${styles.tag} ${styles.year}`}>{year}</span>
          </ul>
        </div>
      </a>
    </div>
  )
}

SelectedWork.propTypes = {
  title: propTypes.string,
  internUrl: propTypes.string,
  image: propTypes.string,
  roles: propTypes.array,
  year: propTypes.string,
}
