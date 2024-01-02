import propTypes from 'prop-types'
import styles from './TextArea.module.css'
export const TextArea = ({
  children,
  value,
  handleChange,
  cols,
  rows,
  placeholder,
  id,
  name,
  isRequired,
  maxLength = '5000',
}) => {
  return (
    <textarea
      className={styles['text-area']}
      name={name}
      id={id}
      onChange={handleChange}
      value={value}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      maxLength={maxLength}
      required={isRequired}
    >
      {children}
    </textarea>
  )
}

TextArea.propTypes = {
  children: propTypes.node,
  placeholder: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  isRequired: propTypes.bool,
  maxLength: propTypes.string,
  cols: propTypes.string,
  rows: propTypes.string,
  value: propTypes.string,
  handleChange: propTypes.func,
}
