import { LinkItem } from '@/components/atoms/LinkItem/LinkItem'
import styles from './Footer.module.css'
import { CONTACT, SECTIONS } from '#/src/app/libs/constants'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.principal}>
          <span className={styles.logo}>
            <a href="/" className={styles.link}>
              REDU
            </a>
          </span>

          <div className={styles.description}>
            <span>Have a great idea in mind?</span>
            <span>Let’s Connect</span>
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
              >
                {contact.name}
              </LinkItem>
            ))}
          </ul>
        </div>

        <hr />

        <div className={styles.legal}>
          <span>Licenses</span>
        </div>
      </footer>
    </>
  )
}
