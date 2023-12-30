import propTypes from 'prop-types'
import styles from './Button.module.css'
import Link from 'next/link'
export const Button = ({
  children,
  leftIcon,
  rightIcon,
  href,
  size = 'medium',
  type,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
    >
      <span className={`${styles.icon} ${styles['left-icon']}`}>
        {leftIcon}
      </span>
      <span className={styles.text}>{children}</span>
      <span className={`${styles.icon} ${styles['right-icon']}`}>
        {rightIcon}
      </span>
    </Link>
  )
}
Button.propTypes = {
  children: propTypes.node,
  leftIcon: propTypes.node,
  rightIcon: propTypes.node,
  href: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
}
