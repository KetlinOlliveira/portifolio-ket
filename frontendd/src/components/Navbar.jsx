function Navbar({ lightMode, toggleTheme }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="logo">&lt;keth<span>.dev&gt;</span></div>

      <ul className="nav-links">
        {['hero', 'about', 'projetos', 'experiencia', 'skills', 'contato'].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id) }}
            >
              {id === 'hero' ? 'Home'
                : id === 'about' ? 'Sobre'
                : id === 'projetos' ? 'Projetos'
                : id === 'experiencia' ? 'Experiência'
                : id === 'skills' ? 'Skills'
                : 'Contato'}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button id="theme-toggle" onClick={toggleTheme} title="Alternar tema">
          <i className={`fas ${lightMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
        <a
          href="#contato"
          className="btn-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('contato') }}
        >
          Let's Work Together
        </a>
      </div>
    </nav>
  )
}

export default Navbar
