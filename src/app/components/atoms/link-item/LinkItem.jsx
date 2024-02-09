import propTypes from 'prop-types'

import styles from './LinkItem.module.css'
import Link from 'next/link'

export const LinkItem = ({
  href,
  children,
  icon,
  className,
  type,
  target,
  handleClick,
}) => {
  return (
    <li className={`${styles[className]}`}>
      <Link
        href={href}
        target={target}
        onClick={handleClick}
        className={`${styles.link} ${type && styles[type]}`}
      >
        {type === 'primary' && <span className={styles.wave} />}
        <span>{children}</span>
        {icon && <span>{icon}</span>}
      </Link>
    </li>
  )
}

LinkItem.propTypes = {
  href: propTypes.string,
  children: propTypes.node,
  icon: propTypes.node,
  className: propTypes.string,
  type: propTypes.string,
  target: propTypes.string,
  handleClick: propTypes.func,
}
