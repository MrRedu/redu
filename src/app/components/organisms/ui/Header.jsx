import styles from './Header.module.css'

import { Nav } from '@/components/molecules/nav/Nav'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link href="/" className={styles.link}>
            REDU
          </Link>
        </h1>

        <Nav />
      </header>
    </>
  )
}
