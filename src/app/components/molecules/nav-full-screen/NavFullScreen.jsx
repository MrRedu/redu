import { NAV } from '@/utils/constants'
import { LinkItem } from '@/components/atoms/LinkItem/LinkItem'

import styles from './NavFullScreen.module.css'

export const NavFullScreen = () => {
  return (
    <div className={styles['nav-full-screen']}>
      <ul className={styles['nav-list']}>
        {NAV.map(({ name, href }) => (
          <LinkItem key={name} href={href} className={'nav-item-mobile'}>
            {name}
          </LinkItem>
        ))}
      </ul>
    </div>
  )
}
