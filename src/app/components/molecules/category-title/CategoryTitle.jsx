import propTypes from 'prop-types'
import styles from './CategoryTitle.module.css'
export const CategoryTitle = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>
}

CategoryTitle.propTypes = {
  children: propTypes.node,
}
