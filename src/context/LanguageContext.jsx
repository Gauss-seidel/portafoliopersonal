import { createContext, useContext, useState, useCallback } from 'react'
import { es } from '../translations/es'
import { en } from '../translations/en'

const translations = { es, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  const toggleLang = useCallback(() => {
    setLang((l) => (l === 'es' ? 'en' : 'es'))
  }, [])

  const t = useCallback(
    (path) => {
      const keys = path.split('.')
      let value = translations[lang]
      for (const key of keys) {
        if (value == null) return path
        value = value[key]
      }
      return value ?? path
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
