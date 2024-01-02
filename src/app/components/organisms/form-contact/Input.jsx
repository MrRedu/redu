import propTypes from 'prop-types'
import styles from './Input.module.css'

export const Input = ({
  handleChange,
  type,
  placeholder,
  isRequired,
  name,
  id,
  value,
}) => {
  return (
    <input
      value={value}
      onChange={handleChange}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={styles.input}
      required={isRequired}
    />
  )
}

Input.propTypes = {
  handleChange: propTypes.func,
  type: propTypes.string,
  placeholder: propTypes.string,
  isRequired: propTypes.bool,
  name: propTypes.string,
  id: propTypes.string,
  value: propTypes.string,
}
