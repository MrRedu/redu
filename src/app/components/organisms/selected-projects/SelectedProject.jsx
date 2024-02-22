import propTypes from 'prop-types'
import styles from './SelectedProject.module.css'
import Image from 'next/image'
export const SelectedProject = ({
  title,
  internUrl,
  image,
  roles,
  year,
  index,
}) => {
  return (
    <a
      href={internUrl}
      className={`${styles.container} ${styles[`index-${index}`]}`}
    >
      <div className={styles['container-image']}>
        <Image
          src={image}
          alt={`${title} image`}
          width={700}
          height={400}
          quality={100}
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
          <span role="listitem" className={`${styles.tag} ${styles.year}`}>
            {year}
          </span>
        </ul>
      </div>
    </a>
  )
}

SelectedProject.propTypes = {
  title: propTypes.string,
  index: propTypes.number,
  internUrl: propTypes.string,
  image: propTypes.string,
  roles: propTypes.array,
  year: propTypes.string,
}
