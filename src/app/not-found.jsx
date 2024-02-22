import styles from './NotFound.module.css'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/atoms/ui/section/Section'
import { Button } from './components/atoms/ui/buttons/Button'
export default function NotFound() {
  return (
    <>
      <Section isTheFirstSection>
        <div className={styles.container}>
          <h2 className={styles.title}>#404</h2>
          <p className={styles.description}>
            {`We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologize on it's behalf.`}
          </p>
          <Button>
            <Button.LinkWrapper href="/" size="large" type="primary">
              <Button.Text>Go Home</Button.Text>
              <Button.Icon rightIcon>
                <ArrowRight size={18} strokeWidth={2.4} />
              </Button.Icon>
            </Button.LinkWrapper>
          </Button>
        </div>
      </Section>
    </>
  )
}
