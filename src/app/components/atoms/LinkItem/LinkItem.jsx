import propTypes from 'prop-types'

import styles from './LinkItem.module.css'

export const LinkItem = ({ href, children, icon }) => {
  return (
    <li className={styles['link-item']}>
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
}
