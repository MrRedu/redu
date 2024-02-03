'use client'
import propTypes from 'prop-types'
import { useState } from 'react'

import styles from './Nav.module.css'

import { LinkItem } from '#/src/app/components/atoms/link-item/LinkItem'
import { NAV } from '@/utils/constants'

import { MenuButton } from '@/components/atoms/menu-button/MenuButton'
import { NavFullScreen } from '../nav-full-screen/NavFullScreen'

export const Nav = () => {
  const [isOpened, setIsOpened] = useState()

  const handleClick = () => {
    setIsOpened(!isOpened)
  }
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-mobile']}>
        <MenuButton handleClick={handleClick} isOpened={isOpened} />
      </div>

      <div className={styles['nav-desktop']}>
        <ul className={styles['nav-list']}>
          {NAV.map(({ name, href, type }) => (
            <LinkItem
              key={name}
              href={href}
              className={'nav-item-desktop'}
              type={type}
            >
              {name}
            </LinkItem>
          ))}
        </ul>
      </div>

      {isOpened && <NavFullScreen handleClick={handleClick} />}
    </nav>
  )
}

Nav.propTypes = {
  handleClick: propTypes.func,
  isOpened: propTypes.bool,
}
