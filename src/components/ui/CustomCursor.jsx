import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    const interactive = document.querySelectorAll('a, button, input, textarea, [data-cursor]')
    const addHover = () => setHovered(true)
    const removeHover = () => setHovered(false)
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [cursorX, cursorY, visible])

  return (
    <>
      <motion.div
        className="cursor-element"
        style={{
          x: springX,
          y: springY,
          width: hovered ? 40 : 20,
          height: hovered ? 40 : 20,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="cursor-ring"
          animate={{ scale: hovered ? 1.3 : 1, borderColor: hovered ? 'rgba(66,153,225,0.6)' : 'rgba(66,153,225,0.3)' }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="cursor-element"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 4,
          height: 4,
        }}
      >
        <div className="cursor-dot" />
      </motion.div>
    </>
  )
}
