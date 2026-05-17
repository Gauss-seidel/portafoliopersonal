import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useLanguage } from '../../context/LanguageContext'

const linkConfig = [
  { key: 'home', to: '/' },
  { key: 'projects', to: '/projects' },
  { key: 'about', to: '/about' },
  { key: 'skills', to: '/skills' },
  { key: 'contact', to: '/contact' },
]

export default function Navbar() {
  const direction = useScrollDirection()
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, toggleLang } = useLanguage()

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
              {linkConfig.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </div>

            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
              title={lang === 'es' ? 'English' : 'Español'}
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="navbar-hamburger"
              aria-label={t('nav.menuLabel')}
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
              {linkConfig.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
