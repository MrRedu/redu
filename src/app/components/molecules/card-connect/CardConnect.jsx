import { Section } from '@/components/atoms/ui/section/Section'
import styles from './CardConnect.module.css'
export const CardConnect = () => {
  return (
    <Section>
      <div className={styles['card-connect']}>
        <p className={styles['helper-text']}>Have a project in mind?</p>
        <p className={styles.title}>Let’s Connect</p>
        <button>Learn More</button>
      </div>
    </Section>
  )
}
