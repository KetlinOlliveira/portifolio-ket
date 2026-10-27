import { heroStats } from '../data/data'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="badge-tag">✦ Java · React · IA aplicada</div>

        <h1 className="hero-title">
          Oi, eu sou <span className="highlight">Ketlin</span>
        </h1>
        <p className="hero-role">Desenvolvedora Full-Stack</p>
        <p className="hero-desc">
          Construo software de ponta a ponta: APIs em Spring Boot, interfaces em React e Next.js
          e pipelines com LLMs. Hoje sou líder técnica e QA de um sistema público da Prefeitura
          de Irecê, da arquitetura e dos requisitos com o cliente até o code review e a entrega.
        </p>

        <div className="hero-btns">
          <a href="#projetos" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('projetos') }}>
            Ver projetos
          </a>
          <a href="#experiencia" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('experiencia') }}>
            Minha experiência
          </a>
        </div>

        <dl className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-right">
        <div className="photo-wrap">
          <div className="photo-ring">
            <img src="/assets/image/eu.webp" alt="Foto de Ketlin Oliveira" width="340" height="340" fetchpriority="high" />
          </div>
          <div className="available-badge">Aberta a oportunidades</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
