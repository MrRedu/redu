import { Section } from '@/components/atoms/ui/section/Section'
import styles from './CardConnect.module.css'
import { Button } from '@/components/atoms/ui/buttons/Button'
export const CardConnect = () => {
  return (
    <Section>
      <div className={styles['card-connect']}>
        <p className={styles['helper-text']}>Have a project in mind?</p>
        <p className={styles.title}>Let’s Connect</p>
        <Button href={'/contact'} type={'primary'}>
          Learn More
        </Button>
      </div>
    </Section>
  )
}
