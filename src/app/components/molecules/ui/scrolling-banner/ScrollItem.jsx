import styles from './ScrollItem.module.css'

export const ScrollItem = ({ title, dividerIcon }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.icon}>{dividerIcon}</span>
    </div>
  )
}
