import propTypes from 'prop-types'
import styles from './MultipleSelect.module.css'

export const MultipleSelect = ({ services, handleServiceChange }) => {
  return (
    <div className={styles.container}>
      {services.map(({ id, name, value, checked }) => (
        <label key={id} htmlFor={name} className={styles.item}>
          <input
            type="checkbox"
            name={name}
            id={name}
            checked={checked}
            onChange={() => handleServiceChange(id)}
            className={styles.input}
          />
          <div className={styles.div} />
          <span className={styles.text}>{name}</span>
        </label>
      ))}
    </div>
  )
}

MultipleSelect.propTypes = {
  services: propTypes.array,
  handleServiceChange: propTypes.func,
}
