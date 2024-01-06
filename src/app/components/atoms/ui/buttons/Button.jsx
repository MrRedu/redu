import propTypes from 'prop-types'
import styles from './Button.module.css'
import Link from 'next/link'

const LinkWrapper = ({ children, href, size, type }) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
    >
      {children}
    </Link>
  )
}

const ButtonWrapper = ({ children, onClick, size, type }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
    >
      {children}
    </button>
  )
}

const Icon = ({ children, leftIcon, rightIcon }) => {
  return (
    <span
      className={`${styles.icon} ${leftIcon && styles['left-icon']} ${
        rightIcon && styles['right-icon']
      }`}
    >
      {children}
    </span>
  )
}

const Text = ({ children }) => {
  return <span className={styles.text}>{children}</span>
}

export const Button = ({ children }) => {
  return <>{children}</>
}

Button.LinkWrapper = LinkWrapper
Button.ButtonWrapper = ButtonWrapper
Button.Icon = Icon
Button.Text = Text

Button.propTypes = {
  children: propTypes.node,
  leftIcon: propTypes.node,
  rightIcon: propTypes.node,
  href: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
}

ButtonWrapper.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  size: propTypes.string,
  type: propTypes.string,
}

LinkWrapper.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  size: propTypes.string,
  type: propTypes.string,
}

Icon.propTypes = {
  children: propTypes.node,
  leftIcon: propTypes.node,
  rightIcon: propTypes.node,
}

Text.propTypes = {
  children: propTypes.node,
}
