'use client'
import styles from './PresentationProjects.module.css'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { smoothScroll } from '@/utils/utils'
import { Button } from '@/components/atoms/ui/buttons/Button'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
export const PresentationProjects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <CategoryTitle role="heading" aria-level="2">
            Projects
          </CategoryTitle>
          <h3 className={styles.title}>Where Vision Meets Digital Reality</h3>
          <p className={styles.description}>
            Creating innovative and customized solutions.
          </p>
          <Button>
            <Button.ButtonWrapper
              onClick={() => smoothScroll('projects')}
              size="large"
              type="primary"
            >
              <Button.Text>Projects</Button.Text>
              <Button.Icon rightIcon>
                <ArrowDown size={18} strokeWidth={2.4} />
              </Button.Icon>
            </Button.ButtonWrapper>
          </Button>
        </div>
        <div className={styles['image-container']}>
          <Image
            src="/projects/gyphi.webp"
            alt="Gyphi"
            width={1200}
            height={768}
            loading="eager"
            priority={true}
          />
        </div>
      </div>
    </>
  )
}
