import propTypes from 'prop-types'
import styles from './Sector.module.css'
export const Sector = ({ title, children, layout = 'grid' }) => {
  return (
    <div className={`${styles.sector} `}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={`${styles.list} ${styles[layout]}`}>{children}</ul>
    </div>
  )
}
Sector.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
  layout: propTypes.string,
}
