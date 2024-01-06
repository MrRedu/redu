import { LinkItem } from '@/components/atoms/LinkItem/LinkItem'
import styles from './Footer.module.css'
import { CONTACT, SECTIONS } from '@/utils/constants'
import Link from 'next/link'
import { DevInfo } from './DevInfo'
import { Divider } from '@/components/atoms/ui/divider/Divider'
import { LetsConnect } from '@/components/atoms/lets-connect/LetsConnect'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.principal}>
          <span className={styles.logo}>
            <Link href="/" className={styles.link}>
              REDU
            </Link>
          </span>

          <div className={styles.description}>
            <span>Have a great idea in mind?</span>
            {/* <span>Let’s Connect</span> */}
            <LetsConnect fontSize="--f-s-lg" />
          </div>
        </div>

        <div className={styles.lists}>
          <ul>
            {SECTIONS.map(section => (
              <LinkItem key={section.name} href={section.href}>
                {section.name}
              </LinkItem>
            ))}
          </ul>

          <ul className={styles['contact-list']}>
            {CONTACT.map(contact => (
              <LinkItem
                key={contact.name}
                href={contact.href}
                icon={contact.icon}
                target="_blank"
              >
                {contact.name}
              </LinkItem>
            ))}
          </ul>
        </div>

        <Divider />

        <DevInfo />
      </footer>
    </>
  )
}
