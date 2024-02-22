'use client'
import styles from './Summary.module.css'
import { PersonalSummary } from '@/components/molecules/personal-summary/PersonalSummary'
import { SplineComponent } from '@/components/atoms/SplineComponent'
export const Summary = () => {
  return (
    <div className={styles.container}>
      <div className={styles['container-spline-component']}>
        <SplineComponent
          scene="https://prod.spline.design/1X2EOkB9MivSjz23/scene.splinecode"
          style={{
            cursor: 'pointer',
            minWidth: '350px',
            height: '450px',
          }}
        />
      </div>
      <div className={styles['container-personal-summary']}>
        <PersonalSummary />
      </div>
    </div>
  )
}
