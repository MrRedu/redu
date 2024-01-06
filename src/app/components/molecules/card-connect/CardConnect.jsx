import styles from './CardConnect.module.css'
import { Section } from '@/components/atoms/ui/section/Section'
import { Button } from '@/components/atoms/ui/buttons/Button'
import { ArrowRight } from 'lucide-react'
import { LetsConnect } from '@/components/atoms/lets-connect/LetsConnect'
export const CardConnect = () => {
  return (
    <Section>
      <div className={styles.container}>
        <span className={styles['helper-text']}>Have a project in mind?</span>
        <LetsConnect margin={'10px 0 24px 0'} lineHeight={'1.2'} />
        <Button>
          <Button.LinkWrapper href="/contact" size="large" type="primary">
            <Button.Text>Learn More</Button.Text>
            <Button.Icon rightIcon>
              <ArrowRight size={18} strokeWidth={2.4} />
            </Button.Icon>
          </Button.LinkWrapper>
        </Button>

        <div className={`${styles['bg-circle']} ${styles['bg-circle-1']}`} />
        <div className={`${styles['bg-circle']} ${styles['bg-circle-2']}`} />
      </div>
    </Section>
  )
}
