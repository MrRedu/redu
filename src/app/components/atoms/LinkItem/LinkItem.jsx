import propTypes from 'prop-types'

import styles from './LinkItem.module.css'

export const LinkItem = ({ href, children, icon, className }) => {
  return (
    <li className={`${styles[className]}`}>
      <a href={href} className={styles.link}>
        {children}
        {icon && icon}
      </a>
    </li>
  )
}

LinkItem.propTypes = {
  href: propTypes.string,
  children: propTypes.node,
  icon: propTypes.node,
  className: propTypes.string,
}
