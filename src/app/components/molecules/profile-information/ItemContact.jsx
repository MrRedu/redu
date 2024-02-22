import propTypes from 'prop-types'
import styles from './ItemContact.module.css'
import Link from 'next/link'
const IsALink = ({ children, href }) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className={styles.link}>
      {children}
    </Link>
  )
}
export const ItemContact = ({ children }) => {
  return <li className={styles.item}>{children}</li>
}
ItemContact.IsALink = IsALink

ItemContact.propTypes = {
  children: propTypes.node,
}

IsALink.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
}
