import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/ui/Loader'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaderFinish = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onFinish={handleLoaderFinish} />}

      <div className={`app-wrapper ${loading ? 'app-wrapper--hidden' : 'app-wrapper--visible'}`}
        style={{ transition: 'opacity 0.5s ease' }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
