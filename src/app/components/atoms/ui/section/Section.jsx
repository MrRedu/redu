import propTypes from 'prop-types'
import styles from './Section.module.css'

export const Section = ({ children, isTheFirstSection = false }) => {
  return (
    <section
      className={`${styles.container} ${
        isTheFirstSection ? styles['the-first-section'] : ''
      }`}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  children: propTypes.node,
  isTheFirstSection: propTypes.bool,
}
