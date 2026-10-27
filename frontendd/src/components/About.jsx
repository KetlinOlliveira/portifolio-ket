import { contactInfo, pillars } from '../data/data'

// Ícones dos pilares (traço herda a cor do texto)
const pillarIcons = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 20V9" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </>
  ),
}

function PillarIcon({ name }) {
  return (
    <span className="pillar-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {pillarIcons[name]}
      </svg>
    </span>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <p className="section-tag">Conheça a desenvolvedora</p>
      <h2 className="section-title">Sobre Mim</h2>

      <div className="about-card">
        <div className="about-content">
          <h3>Olá, me chamo Ketlin Oliveira!</h3>
          <p>
            Sou desenvolvedora full-stack em Irecê, na Bahia. No projeto Cidades Inteligentes do
            IFBA, sou <strong>líder técnica e QA do Observatório da Mulher</strong>, sistema que apoia a
            rede de proteção à mulher do município. Arquitetei o projeto, levanto requisitos em visitas
            técnicas aos clientes, escrevi a especificação de requisitos, o diagrama de classes e os
            protótipos no Figma, e conduzo o time com issues e code review. Também sou responsável pelo
            módulo de adoção de animais do <strong>Conecta Município</strong>.
          </p>
          <p>
            Meu dia a dia é <strong>Java e Spring Boot</strong> no back-end e{' '}
            <strong>React, Next.js e TypeScript</strong> no front-end. Também trabalho com{' '}
            <strong>IA aplicada</strong>: do RAG com pgvector a agentes que revisam o próprio
            trabalho, sempre com atenção à privacidade dos dados. Agora estou me aprofundando em
            mensageria com <strong>Kafka e RabbitMQ</strong>.
          </p>
          <p>
            Curso Análise e Desenvolvimento de Sistemas no IFBA, mas boa parte do que sei veio de
            projeto real: code review, ADRs, migrações versionadas e bug de produção.
          </p>

          <div className="about-socials">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn">
              <i className="devicon-linkedin-plain"></i> LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="social-btn">
              <i className="devicon-github-original"></i> GitHub
            </a>
            <a href={`mailto:${contactInfo.email}`} className="social-btn">
              <span aria-hidden="true">✉</span> E-mail
            </a>
          </div>
        </div>
      </div>

      <div className="pillars">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="pillar-card">
            <PillarIcon name={pillar.icon} />
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
