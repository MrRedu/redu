import propTypes from 'prop-types'

import { MenuButton } from '@/components/atoms/MenuButton'
import styles from './Nav.module.css'

export const Nav = ({ handleClick, isOpened }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-mobile']}>
        <MenuButton handleClick={handleClick} isOpened={isOpened} />
      </div>

      <div className={styles['nav-desktop']}>
        <ul className={styles['nav-list']}>
          <li>Projects</li>
          <li>About</li>
          <li>Services</li>
          <li>Start project</li>
        </ul>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  handleClick: propTypes.func,
  isOpened: propTypes.bool,
}
