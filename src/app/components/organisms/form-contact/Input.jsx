import propTypes from 'prop-types'
import styles from './Input.module.css'

export const Input = ({ type, placeholder, isRequired, name, id, value }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      className={styles.input}
      required={isRequired}
    />
  )
}

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  isRequired: propTypes.bool,
  name: propTypes.string,
  id: propTypes.string,
  value: propTypes.string,
}
