import propTypes from 'prop-types'
import styles from './ItemContact.module.css'
const IsALink = ({ children }) => {
  return (
    <a href="mailto:x" className={styles.link}>
      {children}
    </a>
  )
}
export const ItemContact = ({ children }) => {
  return <span className={styles.item}>{children}</span>
}
ItemContact.IsALink = IsALink

ItemContact.propTypes = {
  children: propTypes.node,
}
