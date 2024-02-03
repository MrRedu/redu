import styles from './ScrollDown.module.css'
export const ScrollDown = () => {
  return (
    <div className={styles.scrolldown}>
      <div className={styles.chevrons}>
        <div className={styles.chevrondown}></div>
        <div className={styles.chevrondown}></div>
      </div>
    </div>
  )
}
