// https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/

import { useState, useEffect } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(null)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)

    const listener = event => {
      setPrefersReducedMotion(!event.matches)
    }

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener)
    } else {
      mediaQueryList.addListener(listener)
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener)
      } else {
        mediaQueryList.removeListener(listener)
      }
    }
  }, [])

  return prefersReducedMotion
}
