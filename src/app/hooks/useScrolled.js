import { useState, useEffect } from 'react'

export function useScrolled(params) {
  const [isScrolled, setIsScrolled] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScrolled
}
