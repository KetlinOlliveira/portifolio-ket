import { useState, useEffect, useRef } from 'react'
import { projectsData } from '../data/data'

// Capa para projetos sem screenshot (ex.: código institucional privado)
function PlaceholderThumb({ project }) {
  const initials = project.name.split('|')[0].trim().split(' ')
    .filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join('')
  return (
    <div className="thumb-placeholder" aria-hidden="true">
      <span className="thumb-initials">{initials}</span>
      {project.private && <span className="thumb-caption">🔒 Código privado</span>}
    </div>
  )
}

function Modal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const [fading, setFading] = useState(false)
  const closeRef = useRef(null)
  const images = project.images ?? []

  // Fecha com ESC e foca o botão de fechar ao abrir
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    closeRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Bloqueia scroll do body enquanto modal aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const switchImage = (index) => {
    if (index === activeImg) return
    setFading(true)
    setTimeout(() => {
      setActiveImg(index)
      setFading(false)
    }, 200)
  }

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        {images.length > 0 && (
          <div className="modal-main-image">
            <img
              src={images[activeImg]}
              alt={`${project.name}: imagem ${activeImg + 1}`}
              className={fading ? 'img-fade' : ''}
            />
          </div>
        )}

        {images.length > 1 && (
          <div className="modal-thumbnails">
            {images.map((img, i) => (
              <button
                key={img}
                className={`modal-thumb${i === activeImg ? ' active' : ''}`}
                onClick={() => switchImage(i)}
                aria-label={`Ver imagem ${i + 1}`}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <div className="modal-text-content">
          <span className="project-kind">{project.kind}</span>
          <h3 id="modal-title">{project.name}</h3>
          <p>{project.desc}</p>
          <ul className="modal-highlights">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="project-stack">
            {project.stack.map((tag) => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          {project.private && (
            <span className="private-note">🔒 Código privado · projeto institucional</span>
          )}
          {project.demo && (
            <a href={project.demo} className="btn-outline modal-action-btn" target="_blank" rel="noreferrer">
              Ver online ↗
            </a>
          )}
          {project.github && (
            <a href={project.github} className="btn-primary modal-action-btn" target="_blank" rel="noreferrer">
              Repositório ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projetos" className="section">
      <p className="section-tag">Meu trabalho</p>
      <h2 className="section-title">Projetos</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <button
            key={project.id}
            className={`project-card${project.featured ? ' featured' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-thumb">
              {project.thumb
                ? <img src={project.thumb} alt="" loading="lazy" decoding="async" />
                : <PlaceholderThumb project={project} />}
              <div className="project-overlay">Ver detalhes →</div>
            </div>
            <div className="project-info">
              <span className="project-kind">
                {project.featured && <span className="featured-dot">Destaque · </span>}
                {project.kind}
              </span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects
