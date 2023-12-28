import propTypes from 'prop-types'
import styles from './GroupForm.module.css'

export const GroupForm = ({ children }) => {
  return <div className={styles['group-form']}>{children}</div>
}

GroupForm.propTypes = {
  children: propTypes.node,
}
