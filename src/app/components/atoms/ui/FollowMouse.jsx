'use client'

import { useState, useEffect } from 'react'

export const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = e => {
      const { pageX, pageY } = e
      setPosition({ x: pageX, y: pageY })
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          //   backgroundColor: '#111',
          borderRadius: '50%',
          border: '2px solid #fff',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -28,
          top: -28,
          width: 48,
          height: 48,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          left: -6,
          top: -6,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#fff',
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </>
  )
}
