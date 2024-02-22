import styles from './CardConnect.module.css'
import { Button } from '@/components/atoms/ui/buttons/Button'
import { ArrowRight } from 'lucide-react'
import { LetsConnect } from '@/components/atoms/lets-connect/LetsConnect'
export const CardConnect = () => {
  return (
    <div className={styles.container}>
      <span className={styles['helper-text']}>Have a project in mind?</span>
      <LetsConnect
        margin={'10px 0 24px 0'}
        lineHeight={'1.2'}
        textAlign={'center'}
      />
      <Button>
        <Button.LinkWrapper href="/contact" size="large" type="primary">
          <Button.Text>Contact me</Button.Text>
          <Button.Icon rightIcon>
            <ArrowRight size={18} strokeWidth={2.4} />
          </Button.Icon>
        </Button.LinkWrapper>
      </Button>

      <div className={styles['cta-deco-wrapper']}>
        <div className={styles['background-circle']} />
        <div className={styles['circle-echo-wrapper']}>
          <div
            className={`${styles['background-circle']} ${styles['is-outer']}`}
          />
          <div
            className={`${styles['background-circle']} ${styles['is-inner-2']}`}
          />
          <div
            className={`${styles['background-circle']} ${styles['is-inner1']}`}
          />
        </div>
      </div>
    </div>
  )
}
