import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedText from '../animations/AnimatedText'
import Button from '../ui/Button'

const roles = ['Desarrollador Full Stack', 'Creador de Interfaces', 'Ingeniero Frontend']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero-badge">
            Full Stack Web Developer
          </span>
        </motion.div>

        <h1 className="hero-title">
          <span className="hero-title-block">Hola, soy</span>
          <span className="hero-title-block--accent">
            <AnimatedText text="Willian N&uacute;&ntilde;ez" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-role"
        >
          <span className="hero-role-text">
            {roles[roleIndex]}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="hero-actions"
        >
          <Button
            variant="accent"
            className="btn--full"
            onClick={() => navigate('/projects')}
          >
            Ver Proyectos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Button>
          <Button variant="outline" className="btn--full" onClick={() => navigate('/contact')}>
            Contactar
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="scroll-dot"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
