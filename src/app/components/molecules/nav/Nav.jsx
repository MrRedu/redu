import propTypes from 'prop-types'

import { LinkItem } from '@/components/atoms/LinkItem/LinkItem'
import { NAV } from '@/libs/constants'

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
          {NAV.map(nav => (
            <LinkItem
              key={nav.name}
              href={nav.href}
              className={'nav-item-desktop'}
            >
              {nav.name}
            </LinkItem>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  handleClick: propTypes.func,
  isOpened: propTypes.bool,
}
