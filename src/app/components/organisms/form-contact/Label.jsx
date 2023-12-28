import propTypes from 'prop-types'
import styles from './Label.module.css'

export const Label = ({ htmlFor, isRequired, children }) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      <span>{children}</span>
      {isRequired && <span className={styles['label-required']}>*</span>}
    </label>
  )
}

Label.propTypes = {
  htmlFor: propTypes.string,
  isRequired: propTypes.bool,
  children: propTypes.node,
}
