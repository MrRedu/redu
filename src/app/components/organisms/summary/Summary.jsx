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
            // outline: '2px solid lime',
            minWidth: '350px',
            height: '450px',
          }}
          onStart={() => {
            console.log('onStart')
          }}
        />
      </div>
      <div className={styles['container-personal-summary']}>
        <PersonalSummary />
      </div>
    </div>
  )
}
