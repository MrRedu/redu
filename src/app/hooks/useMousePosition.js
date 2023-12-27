import { useEffect, useState } from 'react'

const screen = document.querySelector('body')

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const bodyWidth = screen.offsetWidth
  const bodyHeight = screen.offsetHeight

  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return {
    mousePosition,
    bodyWidth,
    bodyHeight,
  }
}
