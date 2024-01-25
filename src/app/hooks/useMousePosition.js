import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [bodyWidth, setBodyWidth] = useState(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const screen = document.querySelector('body')

    setBodyWidth(screen.offsetWidth)
  }, [])

  useEffect(() => {
    if (
      mousePosition.x < 10 ||
      mousePosition.y < 10 ||
      mousePosition.x > bodyWidth - 40
    ) {
      setOpacity(0)
    } else {
      setOpacity(1)
    }
  }, [mousePosition, bodyWidth])

  return {
    mousePosition,
    opacity,
  }
}
