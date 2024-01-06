import propTypes from 'prop-types'
import styles from './Button.module.css'
import Link from 'next/link'

const LinkWrapper = ({ href, size, type, children }) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
    >
      {children}
    </Link>
  )
}

const ButtonWrapper = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

const Icon = ({ children }) => {
  return <span className={styles.icon}>{children}</span>
}

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
