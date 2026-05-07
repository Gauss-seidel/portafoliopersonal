import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useScrollDirection } from '../../hooks/useScrollDirection'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Proyectos', to: '/projects' },
  { label: 'Sobre mi', to: '/about' },
  { label: 'Habilidades', to: '/skills' },
  { label: 'Contacto', to: '/contact' },
]

export default function Navbar() {
  const direction = useScrollDirection()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className="navbar"
      animate={{ y: direction === 'down' ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="navbar-inner">
        <div className="navbar-container">
          <div className="navbar-row">
            <NavLink
              to="/"
              className="navbar-logo"
            >
              <span className="navbar-logo-accent">W</span>N
            </NavLink>

            <div className="navbar-links">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="navbar-hamburger"
              aria-label="Men&uacute;"
            >
              <motion.span
                className="hamburger-line"
                animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="hamburger-line"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="hamburger-line"
                animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-outer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-menu-inner">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
