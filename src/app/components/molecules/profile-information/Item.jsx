import propTypes from 'prop-types'
import styles from './Item.module.css'
export const Item = ({ icon, title }) => {
  return (
    <li className={styles.item}>
      {icon}
      <span className={styles.title}>{title}</span>
    </li>
  )
}
Item.propTypes = {
  icon: propTypes.node,
  title: propTypes.string,
}
