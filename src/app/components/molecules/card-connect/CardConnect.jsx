import styles from './CardConnect.module.css'
import { Section } from '@/components/atoms/ui/section/Section'
import { Button } from '@/components/atoms/ui/buttons/Button'
import { ArrowRight } from 'lucide-react'
export const CardConnect = () => {
  return (
    <Section>
      <div className={styles.container}>
        <p className={styles['helper-text']}>Have a project in mind?</p>
        <p className={styles.title}>Let’s Connect</p>
        <Button
          href="/contact"
          type="primary"
          size="large"
          rightIcon={<ArrowRight size={18} strokeWidth={2.4} />}
        >
          Learn More
        </Button>

        <div className={`${styles['bg-circle']} ${styles['bg-circle-1']}`} />
        <div className={`${styles['bg-circle']} ${styles['bg-circle-2']}`} />
      </div>
    </Section>
  )
}
