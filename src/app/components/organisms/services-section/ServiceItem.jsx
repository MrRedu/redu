import propTypes from 'prop-types'
import styles from './ServiceItem.module.css'
export const ServiceItem = ({ id, title, description }) => {
  return (
    <li key={id} className={styles['item-list']}>
      <span className={styles['count-mobile']}>{id}</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.content}>
        <span className={styles.description}>{description}</span>
        <span className={styles['count-desktop']}>{id}</span>
      </div>
    </li>
  )
}

ServiceItem.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
}
