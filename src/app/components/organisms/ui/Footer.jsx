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

          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            provident alias nulla repudiandae ad esse dolor.
          </span>
        </div>

        <div className={styles.lists}>
          <ul>
            {SECTIONS.map(section => (
              <LinkItem key={section.name} href={section.href}>
                {section.name}
              </LinkItem>
            ))}
          </ul>

          <ul>
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
