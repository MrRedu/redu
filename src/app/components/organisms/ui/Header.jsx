'use client'

import { useState } from 'react'
import styles from './Header.module.css'

import { Nav } from '@/components/molecules/nav/Nav'
import { NavFullScreen } from '@/components/molecules/nav-full-screen/NavFullScreen'

export const Header = () => {
  const [isOpened, setIsOpened] = useState()

  const handleClick = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="/" className={styles.link}>
            REDU
          </a>
        </h1>

        <Nav handleClick={handleClick} isOpened={isOpened} />
      </header>

      {isOpened && <NavFullScreen />}
    </>
  )
}
