import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [lightMode, setLightMode] = useState(false)

  // Aplica tema salvo no localStorage ao carregar
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') setLightMode(true)
  }, [])

  // Sincroniza a classe no body sempre que lightMode mudar
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    }
  }, [lightMode])

  const toggleTheme = () => setLightMode(prev => !prev)

  return (
    <>
      <Navbar lightMode={lightMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
