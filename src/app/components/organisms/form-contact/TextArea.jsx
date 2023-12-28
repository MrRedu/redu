import propTypes from 'prop-types'
import styles from './TextArea.module.css'
export const TextArea = ({
  children,
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
}
