import styles from './NavFullScreen.module.css'

export const NavFullScreen = () => {
  return (
    <nav className={styles['nav-full-screen']}>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>Projects</li>
        <li className={styles['nav-item']}>About</li>
        <li className={styles['nav-item']}>Services</li>
        <li className={styles['nav-item']}>Start project</li>
      </ul>
    </nav>
  )
}
