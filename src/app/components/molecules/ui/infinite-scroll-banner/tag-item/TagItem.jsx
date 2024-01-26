import propTypes from 'prop-types'
import styles from './TagItem.module.css'

export const TagItem = ({ title, dividerIcon, ariaHidden = false }) => {
  return (
    <li className={styles['tag-item']} aria-hidden={ariaHidden}>
      <span className={styles.title}>{title}</span>
      {dividerIcon && <span className={styles.icon}>{dividerIcon}</span>}
    </li>
  )
}

TagItem.propTypes = {
  title: propTypes.string,
  dividerIcon: propTypes.node,
  ariaHidden: propTypes.bool,
}
