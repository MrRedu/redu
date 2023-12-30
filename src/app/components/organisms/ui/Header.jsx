'use client'

import { useState } from 'react'
import styles from './Header.module.css'

import { Nav } from '@/components/molecules/nav/Nav'
import { NavFullScreen } from '@/components/molecules/nav-full-screen/NavFullScreen'
import Link from 'next/link'

export const Header = () => {
  const [isOpened, setIsOpened] = useState()

  const handleClick = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link href="/" className={styles.link}>
            REDU
          </Link>
        </h1>

        <Nav handleClick={handleClick} isOpened={isOpened} />
      </header>

      {isOpened && <NavFullScreen />}
    </>
  )
}
