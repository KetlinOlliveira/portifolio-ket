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
  // Lê o tema salvo já na inicialização para evitar piscar o tema errado
  const [lightMode, setLightMode] = useState(() => {
    try { return localStorage.getItem('theme') === 'light' } catch { return false }
  })

  // Sincroniza a classe no body sempre que lightMode mudar
  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode)
    try { localStorage.setItem('theme', lightMode ? 'light' : 'dark') } catch { /* storage bloqueado */ }
  }, [lightMode])

  const toggleTheme = () => setLightMode(prev => !prev)

  return (
    <>
      <Navbar lightMode={lightMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
