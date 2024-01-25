import styles from './HeroSection.module.css'
import { Github, Linkedin, Briefcase } from 'lucide-react'
export const HeroSection = () => {
  return (
    <>
      <section className={styles.container}>
        <span className={styles.name}>Eduardo R.</span>
        <h2 className={styles.title}>Frontend Developer</h2>
        <ul className={styles['social-list']}>
          <li className={styles['social-item']}>
            <Github size={36} />
          </li>
          <li className={styles['social-item']}>
            <Linkedin size={36} />
          </li>
          <li className={styles['social-item']}>
            <Briefcase size={36} />
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  )
}
