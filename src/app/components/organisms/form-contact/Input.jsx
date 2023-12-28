import propTypes from 'prop-types'
import styles from './Input.module.css'

export const Input = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.input} />
  )
}

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
}
