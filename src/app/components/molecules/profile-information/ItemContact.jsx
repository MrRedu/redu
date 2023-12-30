import propTypes from 'prop-types'
import styles from './ItemContact.module.css'
import Link from 'next/link'
const IsALink = ({ children }) => {
  return (
    <Link href="mailto:x" className={styles.link}>
      {children}
    </Link>
  )
}
export const ItemContact = ({ children }) => {
  return <span className={styles.item}>{children}</span>
}
ItemContact.IsALink = IsALink

ItemContact.propTypes = {
  children: propTypes.node,
}

IsALink.propTypes = {
  children: propTypes.node,
}
