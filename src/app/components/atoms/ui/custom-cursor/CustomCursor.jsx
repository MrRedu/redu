'use client'
import { useMousePosition } from '@/hooks/useMousePosition'
import styles from './CustomCursor.module.css'
export const CustomCursor = () => {
  const { mousePosition, opacity } = useMousePosition()

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.circle}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            opacity: `${opacity}`,
          }}
        />
        <div
          className={styles.point}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            opacity: `${opacity}`,
          }}
        />
      </div>
    </>
  )
}
