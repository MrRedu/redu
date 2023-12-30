import propTypes from 'prop-types'
import styles from './Item.module.css'
export const Item = ({ icon, title }) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </li>
  )
}
Item.propTypes = {
  icon: propTypes.node,
  title: propTypes.string,
}
