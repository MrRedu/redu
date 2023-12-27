import { NAV } from '#/src/app/libs/constants'
import { LinkItem } from '@/components/atoms/LinkItem/LinkItem'

import styles from './NavFullScreen.module.css'

export const NavFullScreen = () => {
  return (
    <nav className={styles['nav-full-screen']}>
      <ul className={styles['nav-list']}>
        {NAV.map(nav => (
          <LinkItem
            key={nav.name}
            href={nav.href}
            className={'nav-item-mobile'}
          >
            {nav.name}
          </LinkItem>
        ))}
      </ul>
    </nav>
  )
}
