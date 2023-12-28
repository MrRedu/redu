import propTypes from 'prop-types'
import styles from './Item.module.css'
export const Item = ({ children }) => {
  return <li className={styles.item}>{children}</li>
}
Item.propTypes = {
  children: propTypes.node,
}
