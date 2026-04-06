function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="badge-tag">✦ Desenvolvimento com qualidade</div>

        <h1 className="hero-title">
          Oi, eu sou <span className="highlight">Ketlin</span>
        </h1>
        <p className="hero-role">Desenvolvedora Full-Stack</p>
        <p className="hero-desc">
          Criando experiências digitais cativantes, escaláveis e de alta qualidade
          — com código limpo e atenção ao detalhe.
        </p>

        <div className="hero-tags">
          {['Java', 'TypeScript', 'React', 'FullStack'].map((tag) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>

        <div className="hero-btns">
          <a href="#projetos" className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Ver Projetos
          </a>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Vamos trabalhar juntos
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-wrap">
          <div className="photo-ring">
            <img src="/assets/image/eu.jpg" alt="Ketlin" />
          </div>
          <div className="available-badge">Disponível para projetos</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
