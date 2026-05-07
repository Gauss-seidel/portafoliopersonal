import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
  const [direction, setDirection] = useState('up')
  const last = useRef(0)

  useEffect(() => {
    const handler = () => {
      const current = window.scrollY
      setDirection(current > last.current && current > 80 ? 'down' : 'up')
      last.current = current
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return direction
}
