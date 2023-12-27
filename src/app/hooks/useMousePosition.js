import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [bodyWidth, setBodyWidth] = useState(null)
  const [bodyHeight, setBodyHeight] = useState(null)

  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const screen = document.querySelector('body')

    setBodyWidth(screen.offsetWidth)
    setBodyHeight(screen.offsetHeight)
  }, [])

  return {
    mousePosition,
    bodyWidth,
    bodyHeight,
  }
}
