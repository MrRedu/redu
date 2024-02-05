'use client'
import styles from './Summary.module.css'
import Spline from '@splinetool/react-spline'
import { PersonalSummary } from '@/components/molecules/personal-summary/PersonalSummary'
export const Summary = () => {
  return (
    <div className={styles.container}>
      <Spline
        style={{
          cursor: 'pointer',
          // outline: '2px solid lime',
          minWidth: '250px',
          height: '450px',
        }}
        scene="https://prod.spline.design/1X2EOkB9MivSjz23/scene.splinecode"
      />
      <div className={styles['personal-summary-container']}>
        <PersonalSummary />
      </div>
    </div>
  )
}
