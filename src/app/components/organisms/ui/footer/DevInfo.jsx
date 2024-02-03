import styles from './DevInfo.module.css'
import { Github, Code } from 'lucide-react'

const list = [
  {
    title: 'Dev',
    href: 'https://github.com/MrRedu',
    icon: <Github size={20} />,
  },
  {
    title: 'Code',
    href: 'https://github.com/MrRedu/redu',
    icon: <Code size={20} />,
  },
]

export const DevInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {list.map(({ title, href, icon }) => (
            <li key={title} className={styles['list-item']}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles['list-item-link']}
              >
                {icon}
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles['dev-information']}>
          <p>
            Made by{' '}
            <a
              href="https://github.com/MrRedu"
              target="_blank"
              rel="noreferrer"
            >
              MrRedu 🤺
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
