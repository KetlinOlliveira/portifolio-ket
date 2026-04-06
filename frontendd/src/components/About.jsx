function About() {
  return (
    <section id="about" className="section">
      <p className="section-tag">Conheça a desenvolvedora</p>
      <h2 className="section-title">Sobre Mim</h2>

      <div className="about-card">
        <div className="about-content">
          <h3>Olá, me chamo Ketlin Oliveira!</h3>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas no IFBA e atuo como
            Desenvolvedora Full Stack. Minha paixão é construir soluções completas: desde APIs REST
            escaláveis e bem estruturadas no back-end, até interfaces responsivas e painéis
            interativos no front-end.
          </p>
          <p>
            Trabalho principalmente com o ecossistema{' '}
            <strong>Java e Spring Boot</strong>, aliado ao{' '}
            <strong>React e TypeScript</strong>. Adoro focar em uma arquitetura limpa e no uso de
            boas práticas para entregar sistemas que realmente resolvam problemas reais.
          </p>

          <div className="about-socials">
            <a href="https://www.linkedin.com/in/ketlin-oliveiradev" target="_blank" rel="noreferrer" className="social-btn">
              <i className="devicon-linkedin-plain"></i> LinkedIn
            </a>
            <a href="https://github.com/KetlinOlliveira" target="_blank" rel="noreferrer" className="social-btn">
              <i className="devicon-github-original"></i> GitHub
            </a>
            <a href="https://www.instagram.com/00h36m" target="_blank" rel="noreferrer" className="social-btn">
              <i>📷</i> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
