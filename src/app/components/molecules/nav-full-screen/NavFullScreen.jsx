import propTypes from 'prop-types'
import styles from './NavFullScreen.module.css'

import { NAV } from '@/utils/constants'
import { LinkItem } from '@/components/atoms/link-item/LinkItem'

export const NavFullScreen = ({ handleClick }) => {
  return (
    <div className={styles['nav-full-screen']}>
      <ul className={styles['nav-list']}>
        {NAV.map(({ name, href }) => (
          <LinkItem
            handleClick={handleClick}
            key={name}
            href={href}
            className={'nav-item-mobile'}
          >
            {name}
          </LinkItem>
        ))}
      </ul>
    </div>
  )
}

NavFullScreen.propTypes = {
  handleClick: propTypes.func,
}
