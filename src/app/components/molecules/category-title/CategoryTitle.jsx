import propTypes from 'prop-types'
import styles from './CategoryTitle.module.css'
export const CategoryTitle = ({ children, ...props }) => {
  return <h3 className={styles.title} {...props}>{children}</h3>
}

CategoryTitle.propTypes = {
  children: propTypes.node,
}
