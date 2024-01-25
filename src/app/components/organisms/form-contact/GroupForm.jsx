import propTypes from 'prop-types'
import styles from './GroupForm.module.css'

export const GroupForm = ({ children, ...props }) => {
  return (
    <div className={styles['group-form']} {...props}>
      {children}
    </div>
  )
}

GroupForm.propTypes = {
  children: propTypes.node,
}
