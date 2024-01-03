import { Button } from '@/components/atoms/ui/buttons/Button'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import styles from './PresentationProjects.module.css'
import Image from 'next/image'
export const PresentationProjects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <CategoryTitle>Projects</CategoryTitle>
          <h2 className={styles.title}>Where Vision Meets Digital Reality</h2>
          <p className={styles.description}>
            Unleashing Digital Brilliance: Discover a Portfolio Fueled by
            Passion, Craftsmanship, and Creative Ingenuity.
          </p>
          <Button
            href="#projects"
            type="primary"
            size="large"
          >
            Projects
          </Button>
        </div>
        <div className={styles['image-container']}>
          <Image
            src="/cosmic-gradients.jpg"
            alt="Cosmic gradients"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  )
}
