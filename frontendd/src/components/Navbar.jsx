import { useState } from 'react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'skills', label: 'Skills' },
  { id: 'contato', label: 'Contato' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function Navbar({ lightMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="logo">&lt;keth<span>.dev&gt;</span></div>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          aria-label={lightMode ? 'Ativar tema escuro' : 'Ativar tema claro'}
          title="Alternar tema"
        >
          {lightMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <a
          href="#contato"
          className="btn-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('contato') }}
        >
          Fale comigo
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
