import Link from 'next/link'
import styles from './Footer.module.css'
import { CONTACT, SECTIONS } from '@/utils/constants'
import { LinkItem } from '@/components/atoms/link-item/LinkItem'
import { Divider } from '@/components/atoms/ui/divider/Divider'
import { LetsConnect } from '@/components/atoms/lets-connect/LetsConnect'
import { DevInfo } from './DevInfo'

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
