'use client'

import { useEffect, useState } from 'react'
import styles from './FollowMousePointer.module.css'

import { useMousePosition } from '@/hooks/useMousePosition'

export const FollowMousePointer = () => {
  const { mousePosition, bodyWidth, bodyHeight } = useMousePosition()

  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (
      mousePosition.x < 10 ||
      mousePosition.y < 10 ||
      mousePosition.x > bodyWidth - 40 ||
      mousePosition.y > bodyHeight - 40
    ) {
      setOpacity(0)
    } else {
      setOpacity(1)
    }
  }, [mousePosition, bodyWidth, bodyHeight])

  return (
    <>
      <div className={styles.cursor}>
        <div
          className={styles.circle}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '2px solid #fff',
            pointerEvents: 'none',
            left: -28,
            top: -28,
            width: 52,
            height: 52,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            opacity: `${opacity}`,
            transition: `opacity 1s ease`,
            willChange: 'transform',
            transformStyle: 'preserve-3d',
          }}
        />
        <div
          className={styles['center-point']}
          style={{
            position: 'absolute',
            left: -6,
            top: -6,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#fff',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            opacity: `${opacity}`,
            transition: `opacity 1s ease`,
          }}
        />
      </div>
    </>
  )
}
