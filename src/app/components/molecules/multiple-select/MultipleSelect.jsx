import propTypes from 'prop-types'
import styles from './MultipleSelect.module.css'

// TODO: add a REAL list
const EXAMPLE_LIST = [
  {
    id: '1',
    value: 'landing-page',
    name: 'Landing page',
  },
  {
    id: '2',
    value: 'website-development',
    name: 'Website development',
  },
  {
    id: '3',
    value: 'e-commerce',
    name: 'E-commerce',
  },
  {
    id: '4',
    value: 'consulting',
    name: 'Consulting',
  },
]

export const MultipleSelect = ({ list = EXAMPLE_LIST }) => {
  return (
    <div className={styles.container}>
      {list.map(({ id, name }) => (
        <label key={id} htmlFor={name} className={styles.item}>
          <input
            type="checkbox"
            name={name}
            id={name}
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
  list: propTypes.array,
}
