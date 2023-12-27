'use client'

import styles from './FollowMousePointer.module.css'

import { useMousePosition } from '@/hooks/useMousePosition'

export const FollowMousePointer = () => {
  const { mousePosition, bodyWidth, bodyHeight } = useMousePosition()

  if (
    mousePosition.x < 10 ||
    mousePosition.y < 10 ||
    mousePosition.x > bodyWidth - 40 ||
    mousePosition.y > bodyHeight - 40
  ) {
    return null
  }

  return (
    <>
      <div
        className={styles.circle}
        style={{
          position: 'absolute',
          // backgroundColor: '#111',
          // backdropFilter: 'invert(100%)',
          borderRadius: '50%',
          border: '2px solid #fff',
          // opacity: 1,
          opacity: 0.8,
          pointerEvents: 'none',
          left: -28,
          top: -28,
          width: 48,
          height: 48,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
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
        }}
      />
    </>
  )
}
